import xCrawl, { type CrawlPageDetailTargetConfig, type XCrawlInstance, type Page as CrawlPage } from 'x-crawl'
import { load } from 'cheerio'
import { random } from 'lodash-es'

import type { Site, Page } from '@prisma/client'

import { getPrisma } from '../database'
import { getHost, checkIsHost } from './utils'

import { sleep } from '~/utils/sleep'

const cleanHTML = (html: string) => {
  const $ = load(html)

  ;['script', 'link', 'style'].forEach((tagName) => $(tagName).remove())
  ;['style', 'class', 'target', 'width', 'id'].forEach((attrName) => {
    $('*').removeAttr(attrName)
  })

  return $.html()
}

const getIcon = async (crawlPage: CrawlPage) => {
  const url = crawlPage.url()
  const host = getHost(url)
  const [protocol] = url.split('://')

  let icon = ''
  try {
    icon = (await crawlPage.$eval('link[rel="shortcut icon"]', (el) => (el ? el.getAttribute('href') : null))) || ''
  } catch (error) {}
  if (!icon) {
    try {
      icon = (await crawlPage.$eval('link[rel="icon"]', (el) => (el ? el.getAttribute('href') : null))) || ''
    } catch (error) {}
  }

  if (icon && icon.indexOf('/') === 0) {
    icon = `${protocol}://${host}${icon}`
  }

  console.log('icon', icon)
  return icon
}

const getKeywords = async (crawlPage: CrawlPage) => {
  let keywords = ''
  try {
    keywords = (await crawlPage.$eval('meta[name="keywords"]', (el) => (el ? el.getAttribute('content') : null))) || ''
  } catch (error) {}
  console.log('keywords', keywords)
  return keywords
}

const getDescription = async (crawlPage: CrawlPage) => {
  let description = ''
  try {
    description =
      (await crawlPage.$eval('meta[name="description"]', (el) => (el ? el.getAttribute('content') : null))) || ''
  } catch (error) {}
  console.log('description', description)
  return description
}

const saveSite = async (crawlPage: CrawlPage): Promise<Site> => {
  const url = crawlPage.url()
  const host = getHost(url)

  console.log('url', url)
  console.log('host', host)

  const title = await crawlPage.title()
  console.log('page.title', title)

  const keywords = await getKeywords(crawlPage)
  const description = await getDescription(crawlPage)

  const icon = await getIcon(crawlPage)

  // 保存图片
  // await crawlPage.screenshot({ path: `imgs/${host}.png`, fullPage: true })

  return await getPrisma().site.upsert({
    where: { host },
    update: {
      title,
      keywords,
      description,
      icon,
    },
    create: {
      title,
      keywords,
      description,
      icon,
      host,
    },
  })
}

const savePage = async ({
  crawlPage,
  parentId,
  siteId,
  isHost,
}: {
  crawlPage: CrawlPage
  siteId: string
  isHost: boolean
  parentId?: string
}): Promise<Page> => {
  const url = crawlPage.url()

  const content = await crawlPage.content()
  // console.log('page.content', content)
  console.log('content.length', content.length)

  const fixHtml = cleanHTML(content)
  console.log('fixHtml.length', fixHtml.length)
  // console.log('fixHtml', fixHtml)

  return await getPrisma().page.upsert({
    where: { url },
    update: {
      status: 'IS_200',
      content,
      contentSize: content.length,
      cleanHtml: fixHtml,
      cleanHtmlSize: fixHtml.length,
    },
    create: {
      url,
      siteId,
      parentId,
      status: 'IS_200',
      content,
      isHost,
      contentSize: content.length,
      cleanHtml: fixHtml,
      cleanHtmlSize: fixHtml.length,
    },
  })
}

const getLinks = async ({ crawlPage, protocol, host }: { crawlPage: CrawlPage; protocol: string; host: string }) => {
  const links = await crawlPage.evaluate(() => {
    const elements = document.querySelectorAll('a')
    const urls = Array.from(elements).map((element) => element.href)
    return urls
  })

  return links
    .map((v) => {
      if (v.indexOf('/') === 0) {
        return `${protocol}://${v}`
      }
      return v
    })
    .filter((v, i, arr) => v && arr.indexOf(v) === i && getHost(v) === host)
}

let xCrawlClient: XCrawlInstance
const getCrawlClient = () => {
  if (!xCrawlClient) {
    xCrawlClient = xCrawl({ maxRetry: 3, intervalTime: { max: 5000, min: 2000 } })
  }
  return xCrawlClient
}

export const crawlPage = async (configArr: Partial<CrawlPageDetailTargetConfig>[]) => {
  const pageResults = await getCrawlClient().crawlPage(
    configArr.map((props) => ({ viewport: { width: 1920, height: 1080 }, ...props }) as CrawlPageDetailTargetConfig)
  )

  pageResults.forEach(async (pageResult) => {
    const { page: thisPage, response } = pageResult.data

    const crawlPage: CrawlPage = thisPage
    const url = crawlPage.url()

    if (!response) {
      throw new Error(`url: ${url}，无法访问`)
    }

    const host = getHost(url)
    const isHost = checkIsHost(host, url)
    const [protocol] = url.split('://')

    let site = await getPrisma().site.findUnique({
      where: {
        host,
      },
    })
    console.log('isHost', isHost)
    if (!site && isHost) {
      site = await saveSite(crawlPage)
    }

    if (!site) {
      throw new Error(`请先记录 ${host}，才可以爬取 ${url}`)
    }

    const siteId = site.id

    // console.log('siteId', siteId)

    const page = await savePage({
      crawlPage,
      siteId,
      isHost,
    })

    const links = await getLinks({
      crawlPage,
      protocol,
      host,
    })

    // console.log('links', links.length)

    const hasLinks = await getPrisma().page.findMany({
      where: {
        siteId,
      },
      select: {
        url: true,
      },
    })

    const urlMap = hasLinks.reduce(
      (obj, item) => {
        const { url } = item
        obj[url] = true
        return obj
      },
      {} as Record<string, boolean>
    )

    console.log('hasLinks', hasLinks.length)

    const needInitLinks: Pick<Page, 'siteId' | 'url' | 'parentId'>[] = links
      .filter((link) => !urlMap[link])
      .map((link) => ({
        siteId,
        url: link,
        parentId: page.id,
      }))

    console.log('needInitLinks', needInitLinks.length)
    if (needInitLinks.length) {
      await getPrisma().page.createMany({
        data: needInitLinks,
      })
    }

    runCrawlTask()

    crawlPage.close()
  })
}

let running = false

export const runCrawlTask = async () => {
  console.log('runCrawlTask')
  if (running) return

  running = true
  await sleep(random(2000, 5000))

  const nextPage = await getPrisma().page.findFirst({
    where: {
      status: 'IS_WATING',
    },
    orderBy: {
      createdAt: 'asc',
    },
    select: {
      url: true,
    },
  })
  if (nextPage) {
    await crawlPage([
      {
        url: nextPage.url,
      },
    ])
  } else {
    runCrawlTask()
  }
}
