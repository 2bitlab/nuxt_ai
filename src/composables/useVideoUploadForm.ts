import { useThemeVars, useMessage, useDialog } from 'naive-ui'

import { debounce, merge } from 'lodash-es'
import type { UploadCustomRequestOptions, FormRules, FormInst, CascaderOption, SelectOption } from 'naive-ui'
import type { Video, VideoType } from '@prisma/client'
import { useStorage, useUrlSearchParams } from '@vueuse/core'

type FormDataType = Partial<Video & { videoTags?: string[] }>
type PostFormDataType = Partial<
  Video & {
    videoTags: {
      connectOrCreate: {
        where: {
          label: string
        }
        create: {
          label: string
        }
      }[]
      disconnect?: {
        id: string
      }[]
    }
  }
>

const getBaseI18nConfig = () => {
  return {
    creatorContentUploadFormTitle: '作品标题',
    creatorContentUploadFormTitlePlaceholder: '填写清晰的标题，会有更多人浏览...',
    creatorContentUploadFormSummary: '作品简介',
    creatorContentUploadFormSummaryPlaceholder: '填写更详细的作品描述信息吧！',
    creatorContentUploadFormCoverUrl: '设置封面',
    creatorContentUploadFormCoverUrlRequiredTips: '请设置封面',
    creatorContentUploadFormPublishedAt: '发布时间',
    creatorContentUploadFormPublishedAtNow: '立即发布',
    creatorContentUploadFormPublishedAtSetTime: '定时发布',
    creatorContentUploadFormVideoTypeId: '视频分类',
    creatorContentUploadFormVideoTypeIdPlaceholder: '请选择视频分类分类',
    creatorContentUploadFormVideoTags: '视频标签',
    creatorContentUploadFormVideoTagsPlaceholder: '输入后按 Enter 键可添加自定义标签',
    creatorContentUploadFormVideoSetId: '添加到',
    creatorContentUploadFormVideoSetIdPlaceholder: '请选择合集',
    creatorContentUploadFormVideoPublished: '设置谁可以看',
    creatorContentUploadFormVideoPublishedAll: '公开',
    creatorContentUploadFormVideoPublishedMyself: '及自己可见',

    creatorContentUploadFormPublishSetting: '发布设置',
    creatorContentUploadFormPublishBtn: '发布',
  }
}

const formatVideoTags = (
  videoTags: string[],
  oldVideoTags?: {
    id: string
    label: string
  }[]
) => {
  const data: PostFormDataType['videoTags'] = {
    connectOrCreate: videoTags.map((label) => ({
      where: {
        label,
      },
      create: {
        label,
      },
    })),
  }

  if (oldVideoTags) {
    data.disconnect = oldVideoTags
      .filter(({ label }) => !videoTags.includes(label))
      .map(({ id }) => ({
        id,
      }))
  }

  return data
}

const useVideoSet = () => {
  const { data: videoSetListRef, pending: videoSetsOptionsLoadingRef } = getTrpc().db.videoSet.findMany.useQuery(
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
          },
        },
      },
    },
    {
      immediate: true,
    }
  )
  const videoSetsOptionsRef = computed(() => {
    const options: SelectOption[] = (videoSetListRef.value || []).map(({ id, label }) => ({
      label,
      value: id,
    }))

    return options
  })

  return {
    videoSetsOptionsRef,
    videoSetsOptionsLoadingRef,
  }
}

const useVideoType = () => {
  const { data: videoTypeListRef, pending: videoTypeCascaderOptionsLoadingRef } =
    getTrpc().db.videoType.findMany.useQuery(
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
            },
          },
        },
      },
      {
        immediate: true,
      }
    )

  type VideoTypeOption = VideoType & { children: VideoType[] }

  const videoType2CascaderOption = (item: VideoTypeOption) => {
    const { children, id, label } = item

    const option: CascaderOption = {
      value: id,
      label,
    }

    const { length } = children || []
    if (length) {
      option.children = children.map(videoType2CascaderOption)
    }

    return option
  }

  const videoTypeCascaderOptionsRef = computed(() => {
    const options: CascaderOption[] = (videoTypeListRef.value || []).map(videoType2CascaderOption)

    return options
  })

  return {
    videoTypeCascaderOptionsRef,
    videoTypeCascaderOptionsLoadingRef,
  }
}

const useVideoTags = () => {
  const videoTagsOptionsRef = ref<SelectOption[]>([])

  const videoTagsOptionsLoadingRef = ref(false)

  const handleSearchVideoTags = debounce(async (query: string) => {
    let where = {}

    if (query) {
      where = {
        label: {
          contains: query,
        },
      }
    }

    videoTagsOptionsLoadingRef.value = true
    const list = await getTrpc().db.videoTag.findMany.query({
      where,
      take: 10,
    })

    let options: SelectOption[] = []

    const listOptions = list.map(({ label }) => ({
      label,
      value: label,
    }))

    if (query) {
      options = [
        {
          label: query,
          value: query,
        },
        ...listOptions.filter(({ value }) => value !== query),
      ]
    } else {
      options = listOptions
    }

    videoTagsOptionsRef.value = options
    videoTagsOptionsLoadingRef.value = false

    return options
  }, 300)

  return {
    videoTagsOptionsRef,
    videoTagsOptionsLoadingRef,
    handleSearchVideoTags,
  }
}

export const useVideoEditForm = () => {
  const getI18nConfig = () => ({
    ...getDataTableI18nConfig(),
    ...getBaseI18nConfig(),
    creatorContentUploadFormNotFind: '你所修改的数据不存在或无权访问',
    creatorContentUploadFormBack: '返回列表',
  })

  const { i18nRef } = useI18n(getI18nConfig())
  const formRef = ref<FormInst | null>()
  const loadingRef = ref(false)

  const query = useUrlSearchParams('history')

  const queryVideoIdRef = computed(() => {
    const { id } = query
    return id as string
  })

  const getDefForm = () => ({
    title: '',
    summary: '',
    // coverUrl: 'https://shop-1300204402.cos.ap-guangzhou.myqcloud.com/data/89b7ddb6-3b76-44d9-9dac-7bcf17d7e247__cropImage.png',
    coverUrl: '',
    videoTypeId: '',
    videoTags: [],
    videoSetId: '',
    published: true,
  })

  const formValue = reactive<FormDataType>(getDefForm())

  const rulesRef = computed(() => {
    const rules: FormRules = {
      coverUrl: [
        {
          required: true,
          message: i18nRef.creatorContentUploadFormCoverUrlRequiredTips,
          trigger: ['blur'],
        },
      ],
      title: [
        {
          required: true,
          message: evaluate(i18nRef.dataTableSaveRequiredTips, { text: i18nRef.creatorContentUploadFormTitle }),
          trigger: ['blur'],
        },
      ],
      summary: [
        {
          required: true,
          message: evaluate(i18nRef.dataTableSaveRequiredTips, { text: i18nRef.creatorContentUploadFormSummary }),
          trigger: ['blur'],
        },
      ],
      videoTypeId: [
        {
          required: true,
          message: i18nRef.creatorContentUploadFormVideoTypeIdPlaceholder,
          trigger: ['blur'],
        },
      ],
    }

    return rules
  })

  const { videoTagsOptionsRef, videoTagsOptionsLoadingRef, handleSearchVideoTags } = useVideoTags()
  const { videoSetsOptionsRef, videoSetsOptionsLoadingRef } = useVideoSet()
  const { videoTypeCascaderOptionsRef, videoTypeCascaderOptionsLoadingRef } = useVideoType()

  const message = useMessage()

  const whereRef = computed(() => {
    const queryVideoId = queryVideoIdRef.value

    if (!queryVideoId) {
      return null
    }

    return {
      where: {
        id: queryVideoId,
      },
      select: {
        videoTags: {
          select: {
            label: true,
            id: true,
          },
        },
        title: true,
        summary: true,
        // coverUrl: 'https://shop-1300204402.cos.ap-guangzhou.myqcloud.com/data/89b7ddb6-3b76-44d9-9dac-7bcf17d7e247__cropImage.png',
        coverUrl: true,
        videoTypeId: true,
        videoSetId: true,
      },
    }
  })

  const { data: videoRef, pending: videoPendingRef } = getTrpc().db.video.findUnique.useQuery(whereRef, {
    immediate: true,
  })

  const dialog = useDialog()
  const router = useRouter()

  const back = () => {
    router.replace({
      path: '/',
      query: {
        id: queryVideoIdRef.value,
      },
    })
  }

  const showNotFoundRef = computed(() => {
    if (!whereRef.value) {
      return true
    }

    if (!videoPendingRef.value && !videoRef.value) {
      return true
    }
    return false
  })

  watch(
    () => videoRef.value,
    (newValue) => {
      if (newValue) {
        setResValue2Form(formValue, newValue)
        formValue.videoTags = (newValue.videoTags || []).map(({ label }) => label)
      }
    },
    {
      immediate: true,
    }
  )

  watch(
    () => showNotFoundRef.value,
    (newValue) => {
      if (newValue) {
        dialog.error({
          content: i18nRef.creatorContentUploadFormNotFind,
          positiveText: i18nRef.creatorContentUploadFormBack,
          maskClosable: false,
          closable: false,
          onPositiveClick: () => {
            router.replace({
              path: '/',
            })
          },
        })
      }
    },
    {
      immediate: true,
    }
  )

  const handleSaveButtonClick = async (e: MouseEvent) => {
    e.preventDefault()

    await formRef.value?.validate()

    loadingRef.value = true

    try {
      const { videoTags, ...other } = formValue
      const data: PostFormDataType = {
        ...other,
      }

      if (videoTags.length) {
        data.videoTags = formatVideoTags(videoTags, videoRef.value?.videoTags || [])
      }

      await getTrpc().db.video.update.mutate({
        data,
        where: {
          id: queryVideoIdRef.value,
        },
      })

      message.success(i18nRef.dataTableSaveSuccessTips)
    } catch (error) {
      console.error('error', error)

      message.error(i18nRef.dataTableSaveErrorTips)
    }
    loadingRef.value = false
  }

  return {
    formRef,
    loadingRef,
    formValue,
    i18nRef,
    rulesRef,
    videoTagsOptionsRef,
    videoTagsOptionsLoadingRef,
    handleSearchVideoTags,
    videoSetsOptionsRef,
    videoSetsOptionsLoadingRef,
    videoTypeCascaderOptionsRef,
    videoTypeCascaderOptionsLoadingRef,
    videoPendingRef,
    handleSaveButtonClick,
    back,
  }
}

export const useVideoUploadForm = () => {
  const getI18nConfig = () => ({
    ...getDataTableI18nConfig(),
    ...getBaseI18nConfig(),
    creatorContentUploadDraggerTipsTitle: '点击上传 或直接将视频文件拖入此区域',
    creatorContentUploadDraggerTipsContent:
      '为了更好的观看体验和平台安全，平台将对上传的视频预审。超过40秒的视频建议上传横版视频',

    creatorContentUploadDraggerStep2TipsTitle1: '点击上传',
    creatorContentUploadDraggerStep2TipsTitle2: '或直接将视频文件拖入此区域',
    creatorContentUploadDraggerStep2TipsContent: '为了更好的观看体验，推荐上传 9:16 的竖版视频',
    creatorContentUploadDraggerVideoTypeTipsTitle: '视频格式',
    creatorContentUploadDraggerVideoTypeTipsContent: '支持常用格式，推荐使用mp4、webm',
    creatorContentUploadDraggerVideoSizeTipsTitle: '视频大小',
    creatorContentUploadDraggerVideoSizeTipsContent: '视频文件大小不超过16G，时长在60分钟以内',
    creatorContentUploadDraggerVideoResolutionTipsTitle: '视频分辨率',
    creatorContentUploadDraggerVideoResolutionTipsContent: '分辨率为720p（1280x720）及以上',

    creatorContentUploadFormUrlRequiredTips: '请上传作品',

    creatorContentUploadFormResetUploadBtn: '重新上传',
    creatorContentUploadFormCancelUploadBtn: '取消上传',

    creatorContentUploadFormSaveFormatErrorTips:
      '视频转码任务异常，自动跳转后视频可能暂时无法正常播放，如果过了1个小时后仍然无法播放请联系管理员',
    creatorContentUploadFormGotoPaly: '前往播放',
  })

  const { i18nRef } = useI18n(getI18nConfig())

  const currentUserIdRef = useCurrentUserId()

  const { videoTypeCascaderOptionsRef, videoTypeCascaderOptionsLoadingRef } = useVideoType()

  const { videoSetsOptionsRef, videoSetsOptionsLoadingRef } = useVideoSet()

  const { videoTagsOptionsRef, videoTagsOptionsLoadingRef, handleSearchVideoTags } = useVideoTags()

  const themeVarsRef = useThemeVars()

  const bgRef = computed(() => {
    const themeVars = themeVarsRef.value
    return {
      backgroundColor: themeVars.actionColor,
    }
  })
  const stepRef = ref(2)

  const formWarperClassRef = computed(() => {
    return stepRef.value === 1 ? '' : 'flex gap-4'
  })

  const fileRef = ref<UploadCustomRequestOptions['file'] | null>(null)

  const draftVideoFormDataRef = useStorage<FormDataType>('draftVideoFormData', {})

  const formValue = reactive<FormDataType>(
    merge(
      {
        // url: 'https://shop-1300204402.cos.ap-guangzhou.myqcloud.com/data/83845ff1-b3d4-40be-8ad1-84a593488647__v0200fg10000cj9og0vog65hed8d1320.MP4',
        url: '',
        title: '',
        summary: '',
        // coverUrl: 'https://shop-1300204402.cos.ap-guangzhou.myqcloud.com/data/89b7ddb6-3b76-44d9-9dac-7bcf17d7e247__cropImage.png',
        coverUrl: '',
        publishedAt: new Date(),
        videoTypeId: '',
        videoTags: [],
        videoSetId: '',
        published: true,
        creatorId: '',
      },
      fixEmptyKey(draftVideoFormDataRef.value)
    )
  )

  watch(
    () => formValue,
    (newValue) => {
      draftVideoFormDataRef.value = newValue
    },
    { deep: true }
  )

  const formRef = ref<FormInst | null>()
  const loadingRef = ref(false)

  const noFileRef = computed(() => {
    return !fileRef.value
  })

  const videoTypeRef = computed(() => {
    const arr = formValue.url.split('.')
    if (arr.length) {
      const last = arr[arr.length - 1]

      return `video/${last.toLowerCase()}`
    }
    return ''
  })

  const uploadDraggerClassRef = computed(() => {
    if (stepRef.value === 1) {
      return ''
    }
    return 'h-[23.1875rem] w-[15.1875rem] flex flex-col items-center justify-center relative'
  })

  const rulesRef = computed(() => {
    const rules: FormRules = {
      url: [
        {
          required: true,
          message: i18nRef.creatorContentUploadFormUrlRequiredTips,
          trigger: ['blur'],
        },
      ],
      coverUrl: [
        {
          required: true,
          message: i18nRef.creatorContentUploadFormCoverUrlRequiredTips,
          trigger: ['blur'],
        },
      ],
      title: [
        {
          required: true,
          message: evaluate(i18nRef.dataTableSaveRequiredTips, { text: i18nRef.creatorContentUploadFormTitle }),
          trigger: ['blur'],
        },
      ],
      summary: [
        {
          required: true,
          message: evaluate(i18nRef.dataTableSaveRequiredTips, { text: i18nRef.creatorContentUploadFormSummary }),
          trigger: ['blur'],
        },
      ],
      videoTypeId: [
        {
          required: true,
          message: i18nRef.creatorContentUploadFormVideoTypeIdPlaceholder,
          trigger: ['blur'],
        },
      ],
    }

    return rules
  })

  const percentageRef = ref(0)
  const taskIdRef = ref('')

  // https://cloud.tencent.com/document/product/436/11459
  const customRequest = async ({ file, onFinish, onError, onProgress }: UploadCustomRequestOptions) => {
    console.log('file', file)
    stepRef.value = 2
    fileRef.value = file

    try {
      const data = await sliceUploadFile(file.file, {
        onProgress: (progressData) => {
          console.log('onProgress progressData', progressData)

          const { percent } = progressData

          onProgress({ percent })
          percentageRef.value = percent * 100
        },
        onTaskReady(taskId) {
          taskIdRef.value = taskId
        },
      })
      console.log('data', data)

      const { url } = data || {}

      formValue.url = url

      onFinish()
    } catch (error) {
      console.error(error)
      onError()
    }
  }

  const message = useMessage()

  const router = useRouter()

  let checkUrlCount = 0
  const checkUrl = async (url: string) => {
    checkUrlCount++
    try {
      const res = await $fetch(url)
      console.log('checkUrl res', res)
      return true
    } catch (error) {
      console.error('checkUrl', url, error)

      if (checkUrlCount > 10) {
        return false
      }

      await sleep(2000)
      return await checkUrl(url)
    }
  }

  const dialog = useDialog()

  const handleSaveButtonClick = async (e: MouseEvent) => {
    e.preventDefault()

    await formRef.value?.validate()

    loadingRef.value = true
    try {
      const { videoTags, ...other } = formValue
      const data: PostFormDataType = {
        ...other,
        publishedAt: new Date(),
        creatorId: currentUserIdRef.value,
      }
      if (videoTags.length) {
        data.videoTags = formatVideoTags(videoTags)
      }

      const mulQualityVideoRes = await cosMulQualityVideoTranscodeTask({
        path: data.url,
      })

      data.mulQualityVideos = Object.keys(mulQualityVideoRes).map((key) => {
        const { outputUrl } = mulQualityVideoRes[key] || {}

        return {
          name: key,
          url: outputUrl,
          type: 'hls',
        }
      })

      console.log('handleSaveButtonClick will create data', data)

      const res = await getTrpc().db.video.create.mutate({
        data: fixEmptyKey(data),
      })

      console.log('handleSaveButtonClick res', res)

      const gotoPaly = () => {
        draftVideoFormDataRef.value = {}
        router.replace({
          path: '/',
          query: {
            id: res.id,
          },
        })
      }

      const [firstVideo] = data.mulQualityVideos

      const { url: formatAfterUrl } = (firstVideo || {}) as any

      const isPass = await checkUrl(formatAfterUrl)

      if (isPass) {
        gotoPaly()
      } else {
        dialog.warning({
          content: i18nRef.creatorContentUploadFormSaveFormatErrorTips,
          positiveText: i18nRef.creatorContentUploadFormGotoPaly,
          maskClosable: false,
          closable: false,
          onPositiveClick: () => {
            gotoPaly()
          },
        })
      }
    } catch (error) {
      console.error('error', error)
      loadingRef.value = false

      message.error(i18nRef.dataTableSaveErrorTips)
    }
  }

  const cancelUploadTask = () => {
    if (taskIdRef.value) {
      getTencentCos().cancelTask(taskIdRef.value)
    }
    percentageRef.value = 0
    formValue.url = ''
    fileRef.value = null
    taskIdRef.value = ''
  }

  return {
    i18nRef,
    formValue,
    formRef,
    rulesRef,
    stepRef,
    percentageRef,
    uploadDraggerClassRef,
    customRequest,
    handleSaveButtonClick,
    cancelUploadTask,
    noFileRef,
    videoTypeRef,
    formWarperClassRef,
    bgRef,
    handleSearchVideoTags,
    videoSetsOptionsRef,
    videoTypeCascaderOptionsRef,
    videoTypeCascaderOptionsLoadingRef,
    fileRef,
    videoTagsOptionsRef,
    videoTagsOptionsLoadingRef,
    videoSetsOptionsLoadingRef,
    loadingRef,
    taskIdRef,
  }
}
