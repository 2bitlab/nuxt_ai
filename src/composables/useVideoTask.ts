import type { VideoTaskStatus } from '@prisma/client'

export const useVideoTaskStatusI18n = () => {
  const getI18nConfig = () => ({
    videoTaskStatusWaitHandel: '等接单',
    videoTaskStatusProcessing: '已接单，处理中',
    videoTaskStatusWaitConfirm: '已处理，等确认',
    videoTaskStatusDone: '已确认',
  })
  return useI18n(getI18nConfig())
}

export const useVideoTaskStatusMap = () => {
  const { i18nRef } = useVideoTaskStatusI18n()
  const mapRef = computed<Record<VideoTaskStatus, string>>(() => {
    return {
      WAIT_HANDEL: i18nRef.videoTaskStatusWaitHandel, // 等接单
      PROCESSING: i18nRef.videoTaskStatusProcessing, // 已接单，处理中
      WAIT_CONFIRM: i18nRef.videoTaskStatusWaitConfirm, // 已处理，等确认
      DONE: i18nRef.videoTaskStatusDone, // 已确认
    }
  })

  return {
    mapRef,
    i18nRef,
  }
}
