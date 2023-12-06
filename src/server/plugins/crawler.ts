import { runCrawlTask } from '../crawler'

export default defineNitroPlugin((nitroApp) => {
  const func = () => {
    runCrawlTask()
  }

  nitroApp.hooks.hookOnce('request', func as unknown as never)
})
