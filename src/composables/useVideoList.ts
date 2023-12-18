import type { VideoType, VideoOrderStatus } from '@prisma/client'

import { useMessage, useDialog } from 'naive-ui'

import { useUrlSearchParams, useToggle } from '@vueuse/core'

type VideoTypeItem = VideoType & {
  children: VideoTypeItem[]
  _count: {
    videos: number
  }
}

export const useVideoList = () => {
  const getI18nConfig = () => ({
    ...getDataTableI18nConfig(),
    useVideoListAll: '全部',
    useVideoListVideoTagTitle: '标签',

    useVideoListVideoEdit: '修改',
    useVideoListVideoRemove: '删除',
    useVideoListVideoRemoveConfirm: '确定删除？',

    useVideoListVideoOrderAdd: '一键同款',
    useVideoListVideoOrderWaitHandel: '派单中',
    useVideoListVideoOrderProcessing: '精心制作中',
    useVideoListVideoOrderWaitConfirm: '已经做好了，快去看看吧',

    useVideoListVideoOrderAddTitle: '确定下单？',
    useVideoListVideoOrderAddContent: '本视频需要支付${price}元',
    useVideoListVideoOrderAddConfirmBtn: '确认',
  })

  const { i18nRef } = useI18n(getI18nConfig())

  const currentUserIdRef = useCurrentUserId()

  const checkVideoTagsRef = ref<string[]>([])

  const checkVideoTypeChildrenRef = ref<VideoTypeItem[]>([])
  const checkVideoTypeParentIdRef = ref<string>('')
  const checkVideoTypeIdRef = ref<string>('')

  const whereRef = computed(() => {
    const checkVideoTypeId = checkVideoTypeIdRef.value
    const checkVideoTypeParentId = checkVideoTypeParentIdRef.value

    const checkVideoTags = checkVideoTagsRef.value

    const where: {
      videoTypeId?:
        | string
        | {
            in: string[]
          }
      videoTags?: {
        some: {
          id: {
            in: string[]
          }
        }
      }
    } = {}

    if (checkVideoTypeId) {
      where.videoTypeId = checkVideoTypeId
    } else if (checkVideoTypeParentId) {
      where.videoTypeId = {
        in: checkVideoTypeChildrenRef.value.map((item) => item.id),
      }
    }

    if (checkVideoTags.length) {
      where.videoTags = {
        some: {
          id: {
            in: checkVideoTags,
          },
        },
      }
    }

    return {
      where,
      select: {
        id: true,
        summary: true,
        title: true,
        coverUrl: true,
        mulQualityVideos: true,
        price: true,
        videoTags: {
          select: {
            label: true,
          },
        },
        videoOrders: {
          select: {
            id: true,
            status: true,
          },
          where: {
            creatorId: currentUserIdRef.value,
          },
          orderBy: {
            createdAt: 'desc',
          },
          take: 1,
        },
      },
    }
  })

  const {
    data: videoListRef,
    refresh: videoListRefresh,
    pending: videoListPendingRef,
  } = getTrpc().db.video.findMany.useQuery(whereRef, {
    immediate: true,
  })

  const {
    data: videoTypeListRef,
    refresh: videoTypeListRefresh,
    pending: videoTypeListPendingRef,
  } = getTrpc().db.videoType.findMany.useQuery(
    {
      where: {
        parentId: null,
      },
      select: {
        id: true,
        label: true,
        children: {
          select: {
            id: true,
            label: true,
            parentId: true,
            _count: {
              select: {
                videos: true,
              },
            },
          },
        },
        _count: {
          select: {
            videos: true,
          },
        },
      },
    },
    {
      immediate: true,
    }
  )

  const {
    data: videoTagListRef,
    refresh: videoTagListRefresh,
    pending: videoTagListPendingRef,
  } = getTrpc().db.videoTag.findMany.useQuery(
    {
      select: {
        id: true,
        label: true,
        _count: {
          select: {
            videos: true,
          },
        },
      },
    },
    {
      immediate: true,
    }
  )
  const checkVideo = (videoTagId: string) => {
    const checkVideoTags = checkVideoTagsRef.value

    if (checkVideoTags.includes(videoTagId)) {
      checkVideoTagsRef.value = checkVideoTags.filter((id) => id !== videoTagId)
    } else {
      checkVideoTagsRef.value = [...checkVideoTags, videoTagId]
    }
  }

  const showVideoTagListRef = computed(() => {
    const videoTagList = videoTagListRef.value || []
    const checkVideoTags = checkVideoTagsRef.value || []

    return videoTagList.map((videoTag) => {
      return {
        ...videoTag,
        checked: checkVideoTags.includes(videoTag.id),
      }
    })
  })

  const checkVideoTypeParent = (videoType: VideoTypeItem) => {
    checkVideoTypeChildrenRef.value = videoType.children
    checkVideoTypeParentIdRef.value = videoType.id
  }

  const checkVideoType = (videoTypeId: string) => {
    checkVideoTypeIdRef.value = videoTypeId
  }

  const checkVideoTypeAll = () => {
    checkVideoTypeIdRef.value = ''
  }

  const isAllVideoTypeRef = computed(() => {
    return checkVideoTypeIdRef.value === ''
  })

  const showVideoTypeParentListRef = computed(() => {
    const videoTypeList = videoTypeListRef.value || []
    const checkVideoTypeParentId = checkVideoTypeParentIdRef.value
    return videoTypeList
      .map((videoType) => {
        const { children } = videoType

        const count = (children || []).reduce((acc, cur) => {
          return acc + cur._count.videos
        }, 0)

        return {
          ...videoType,
          checked: checkVideoTypeParentId === videoType.id,
          count,
        }
      })
      .filter(({ count }) => count)
  })

  const showVideoTypeListRef = computed(() => {
    const videoTypeList = checkVideoTypeChildrenRef.value || []
    const checkVideoTypeId = checkVideoTypeIdRef.value
    return videoTypeList
      .map((videoType) => {
        return {
          ...videoType,
          checked: checkVideoTypeId === videoType.id,
        }
      })
      .filter(({ _count: { videos } }) => videos)
  })

  const query = useUrlSearchParams('history')

  const queryVideoIdRef = computed(() => {
    const { id } = query
    return id as string
  })

  const showVideoPlayerRef = computed(() => {
    return !!queryVideoIdRef.value
  })

  const selectedVideoRef = computed(() => {
    const videoList = videoListRef.value || []
    return videoList.find(({ id }) => id === queryVideoIdRef.value)
  })

  const selectVideo = (videoId: string) => {
    console.log('selectVideo videoId', videoId)
    query.id = videoId
  }

  const closeVideoPlayer = () => {
    query.id = ''
  }

  const mulQualityVideoOptionsRef = computed(() => {
    const { mulQualityVideos: quality = [] } = selectedVideoRef.value || {}

    console.log('mulQualityVideoOptionsRef quality', quality)

    if (quality.length) {
      return {
        video: {
          quality,
          defaultQuality: 0,
        },
        autoplay: true,
        loop: true,
      }
    }

    return null
  })

  const showVideoInfoRef = computed(() => {
    const videoList = videoListRef.value || []
    const index = videoList.findIndex(({ id }) => id === queryVideoIdRef.value)
    return index
  })

  const showNextVideoBtnRef = computed(() => {
    const videoList = videoListRef.value || []
    const index = showVideoInfoRef.value

    return index < videoList.length - 1
  })

  const showPrevVideoBtnRef = computed(() => {
    const index = showVideoInfoRef.value
    return index > 0
  })

  const [summaryMoreRef, summaryMoreToggle] = useToggle()

  const playNextVideo = () => {
    const videoList = videoListRef.value || []
    const index = showVideoInfoRef.value
    if (index < videoList.length - 1) {
      selectVideo(videoList[index + 1].id)
      summaryMoreToggle(false)
      return true
    }

    return false
  }

  const playPrevVideo = () => {
    const index = showVideoInfoRef.value
    if (index > 0) {
      selectVideo(videoListRef.value[index - 1].id)
      summaryMoreToggle(false)
      return true
    }

    return false
  }

  const next = () => {
    let isOk = playNextVideo()
    if (!isOk) {
      isOk = playPrevVideo()
    }
    if (!isOk) {
      closeVideoPlayer()
    }
  }

  const refresh = () => {
    videoListRefresh()
    videoTypeListRefresh()
    videoTagListRefresh()
    next()
  }

  const message = useMessage()

  const removeVideo = async (videoId: string) => {
    if (videoId) {
      try {
        await getTrpc().db.video.delete.mutate({
          where: {
            id: videoId,
          },
        })

        refresh()
        message.success(i18nRef.dataTableDelSuccessTips)
      } catch (error) {
        console.error('error', error)
        message.error(i18nRef.dataTableDelErrorTips)
      }
    }
  }

  const router = useRouter()
  const editVideo = (videoId: string) => {
    if (videoId) {
      router.push({
        path: '/creator/content/edit',
        query: {
          id: videoId,
        },
      })
    }
  }

  const orderStatusRef = computed(() => {
    const video = selectedVideoRef.value
    const { videoOrders } = video || {}
    const [first] = videoOrders || []
    const { status } = first || {}
    return status || 'CANCEL'
  })

  const orderStatusBtnTextRef = computed(() => {
    const map: Record<VideoOrderStatus, string> = {
      WAIT_HANDEL: i18nRef.useVideoListVideoOrderWaitHandel, // 等接单
      PROCESSING: i18nRef.useVideoListVideoOrderProcessing, // 已接单，处理中
      WAIT_CONFIRM: i18nRef.useVideoListVideoOrderWaitConfirm, // 已处理，等确认
      DONE: i18nRef.useVideoListVideoOrderWaitConfirm, // 已确认
      CANCEL: i18nRef.useVideoListVideoOrderAdd,
    }

    return map[orderStatusRef.value]
  })

  const pay = async () => {
    const price = Number(selectedVideoRef.value?.price)

    try {
      const { balanceLog } = await getTrpc().balance.pay.mutate({
        price,
        remark: `购买视频《${selectedVideoRef.value?.title}》`,
        log: JSON.stringify(selectedVideoRef.value),
      })

      await getTrpc().db.videoOrder.create.mutate({
        data: {
          videoId: selectedVideoRef.value?.id,
          price,
          status: 'WAIT_HANDEL',
          creatorId: currentUserIdRef.value,
          balanceLogId: balanceLog.id,
        },
      })

      await videoListRefresh()
    } catch (error) {
      console.error('error', error)
      message.error(error)
    }
  }

  const dialog = useDialog()
  const addOrder = () => {
    const d = dialog.warning({
      title: i18nRef.useVideoListVideoOrderAddTitle,
      content: evaluate(i18nRef.useVideoListVideoOrderAddContent, {
        price: selectedVideoRef.value?.price,
      }),
      positiveText: i18nRef.useVideoListVideoOrderAddConfirmBtn,
      onPositiveClick: () => {
        d.loading = true
        return new Promise((resolve) => {
          pay().then(resolve)
        })
      },
    })
  }

  const isListEmptyRef = computed(() => {
    return !videoListRef.value?.length && !videoListPendingRef.value
  })

  const gotoOrderPage = () => {
    router.push({
      path: '/my/videoOrders',
    })
  }

  return {
    i18nRef,

    videoListRef,
    isListEmptyRef,
    videoListRefresh,
    videoListPendingRef,

    videoTypeListRef,
    videoTypeListPendingRef,
    checkVideoTypeChildrenRef,
    showVideoTypeParentListRef,
    showVideoTypeListRef,
    isAllVideoTypeRef,
    checkVideoTypeParent,
    checkVideoType,
    checkVideoTypeAll,

    videoTagListRef,
    videoTagListPendingRef,

    checkVideoTagsRef,
    checkVideo,
    showVideoTagListRef,

    queryVideoIdRef,
    showVideoPlayerRef,
    selectedVideoRef,
    mulQualityVideoOptionsRef,
    showNextVideoBtnRef,
    showPrevVideoBtnRef,
    summaryMoreRef,
    orderStatusRef,
    orderStatusBtnTextRef,
    summaryMoreToggle,
    selectVideo,
    closeVideoPlayer,
    playNextVideo,
    playPrevVideo,
    removeVideo,
    editVideo,
    addOrder,
    gotoOrderPage,
  }
}
