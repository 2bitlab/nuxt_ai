import type { VideoOrderStatus } from '@prisma/client'
import type { SelectOption } from 'naive-ui'

export const useVideoOrderStatusI18n = () => {
  const getI18nConfig = () => ({
    videoOrderStatusWaitHandel: '等接单',
    videoOrderStatusProcessing: '已接单，处理中',
    videoOrderStatusWaitConfirm: '已处理，等确认',
    videoOrderStatusDone: '已确认',
    videoOrderStatusCancel: '已取消',
  })
  return useI18n(getI18nConfig())
}

export const useVideoOrderStatusMap = () => {
  const { i18nRef } = useVideoOrderStatusI18n()
  const mapRef = computed<Record<VideoOrderStatus, string>>(() => {
    return {
      WAIT_HANDEL: i18nRef.videoOrderStatusWaitHandel, // 等接单
      PROCESSING: i18nRef.videoOrderStatusProcessing, // 已接单，处理中
      WAIT_CONFIRM: i18nRef.videoOrderStatusWaitConfirm, // 已处理，等确认
      DONE: i18nRef.videoOrderStatusDone, // 已确认
      CANCEL: i18nRef.videoOrderStatusCancel, // 已取消
    }
  })

  return {
    mapRef,
    i18nRef,
  }
}

export const useVideoOrderStatusOptions = () => {
  const { i18nRef, mapRef } = useVideoOrderStatusMap()

  const optionsRef = computed<SelectOption[]>(() => {
    const map = mapRef.value

    return Object.keys(map).map((key) => {
      return {
        label: map[key],
        value: key,
      }
    })
  })

  return {
    optionsRef,
    i18nRef,
    mapRef,
  }
}
