<template>
  <div class="flex flex-col gap-4 p-4">
    <div class="flex gap-2">
      <NInput v-model:value="urlRef" :placeholder="i18nRef.crawlerPageUrlPlaceholder" />

      <NButton :loading="crawlLoadingRef" @click="crawl">{{ i18nRef.crawlerPageCrawl }}</NButton>
    </div>
    <NSpin :show="siteListPendingRef">
      <div v-if="siteListRef?.length" class="grid grid-cols-4 gap-4">
        <NCard
          v-for="item in siteListRef"
          :key="item.id"
          :title="item.host"
          hoverable
          class="cursor-pointer"
          @click="() => selectSite(item)"
        >
          <div class="flex flex-col gap-2">
            <div>{{ item.title }}</div>
            <div class="text-xs">{{ item.description }}</div>

            <div>
              <NTag round :bordered="false" type="success"
                >{{ item._count.pages }}
                <template #icon>
                  <Icon name="mdi:tag-outline" />
                </template>
              </NTag>
            </div>
          </div>
        </NCard>
      </div>
      <div v-else-if="!siteListPendingRef" class="py-10 text-center">{{ i18nRef.crawlerPageNotSite }} {{ urlRef }}</div>
    </NSpin>
    <NDrawer v-model:show="drawerShowRef" :mask-closable="false" resizable width="90%">
      <NDrawerContent closable>
        <NDataTable
          remote
          :row-key="(row) => row.id"
          :columns="columnsRef"
          :data="pageListRef"
          :loading="pageListPendingRef"
          :pagination="paginationReactive"
          :on-update:sorter="handleSorterChange"
          :on-update:filters="handleFiltersChange"
        />

        <template #footer>
          <div class="flex justify-end">
            <NButton round type="primary" :loading="downloadingRef" @click="handleDownloadButtonClick">
              {{ i18nRef.crawlerPageDownload }}
            </NButton>
          </div>
        </template>
      </NDrawerContent>
    </NDrawer>
  </div>
</template>

<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import { NInput, NButton, NCard, NTag, NSpin, NDataTable, NDrawerContent, NDrawer, useMessage } from 'naive-ui'

import type { DataTableColumn } from 'naive-ui'

import type { Site, Page } from '@prisma/client'

const getI18nConfig = () => ({
  crawlerPageCrawl: '申请爬取',
  crawlerPageUrlPlaceholder: '输入域名链接',
  crawlerPageUrlErrorTips: '请输入有效的链接，如http://a.com',
  crawlerPageNotSite: '还没收录',

  crawlerPageDownload: '下载数据',
})

const { i18nRef } = useI18n(getI18nConfig())

const urlRef = useStorage('crawlerDemoUrl', '')

const resRef = ref()

const hostWhereRef = computed(() => {
  const url = urlRef.value
  let host = ''
  try {
    ;({ host } = new URL(url))
  } catch (error) {}

  return {
    where: {
      host: {
        contains: host,
      },
    },
    select: {
      id: true,
      host: true,
      title: true,
      description: true,
      _count: {
        select: { pages: true },
      },
    },
    take: 25,
  }
})

const {
  data: siteListRef,
  refresh: siteListRefresh,
  pending: siteListPendingRef,
} = getTrpc().db.site.findMany.useQuery(hostWhereRef, {
  immediate: true,
})

// const { data: pageListRef } = getTrpc().db.page.findMany.useQuery(hostWhereRef)
const message = useMessage()
const crawlLoadingRef = ref(false)
const crawl = async () => {
  const url = urlRef.value

  try {
    const uri = new URL(url)
    console.log('uri', uri)
  } catch (error) {
    message.error(i18nRef.crawlerPageUrlPlaceholder)
    return
  }

  crawlLoadingRef.value = true
  const res = await getTrpc().crawler.crawl.mutate({
    url,
  })

  resRef.value = res
  crawlLoadingRef.value = false
  siteListRefresh()
}

const drawerShowRef = ref(false)

const siteRef = ref<Site | null>()

const getPageI18nConfig = () => ({
  crawlerPagePageTableUrl: '地址',
})

type I18nType = ReturnType<typeof getPageI18nConfig>

const {
  paginationReactive,
  columnsRef,
  listRef: pageListRef,
  loadingRef: pageListPendingRef,
  whereRef,
  handleSorterChange,
  handleFiltersChange,
} = useDataTable<Page, I18nType>({
  model: 'page',
  getI18nConfig: getPageI18nConfig,
  getColumns: (_, i18nTableRef) => {
    const columns: DataTableColumn<Page>[] = [
      {
        title: i18nTableRef.crawlerPagePageTableUrl,
        key: 'url',
      },
    ]
    return columns
  },
  getSelectForList: () => ({
    select: {
      id: true,
      url: true,
      contentSize: true,
      status: true,
      createdAt: true,
      updatedAt: true,
    },
  }),
  initOrderBy: () => [
    {
      updatedAt: 'desc',
    },
  ],
})

watch(
  () => drawerShowRef.value,
  (newValue) => {
    if (!newValue) {
      pageListRef.value = []
    }
  }
)

const selectSite = (site: Site) => {
  siteRef.value = site
  drawerShowRef.value = true
  whereRef.value = {
    where: {
      ...whereRef.value.where,
      siteId: site.id,
    },
  }
}

const downloadingRef = ref(false)
const handleDownloadButtonClick = async () => {}
</script>
