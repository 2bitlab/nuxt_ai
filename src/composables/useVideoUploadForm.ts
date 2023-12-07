import { useThemeVars, useMessage } from 'naive-ui'

import { debounce, merge } from 'lodash-es'
import type { UploadCustomRequestOptions, FormRules, FormInst, CascaderOption, SelectOption } from 'naive-ui'
import type { Video, VideoType } from '@prisma/client'
import { useStorage } from '@vueuse/core'

export const useVideoUploadForm = () => {
  const getI18nConfig = () => ({
    ...getDataTableI18nConfig(),
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
    creatorContentUploadFormResetUploadBtn: '重新上传',
    creatorContentUploadFormCancelUploadBtn: '取消上传',
  })

  const { i18nRef } = useI18n(getI18nConfig())

  const currentUserIdRef = useCurrentUserId()

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

  const videoTagsOptionsLoadingRef = ref(false)

  const videoTagsOptionsRef = ref<SelectOption[]>([])

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

  type FormDataType = Partial<Video & { videoTags?: string[] }>

  const inviterIdStorageRef = useStorage<FormDataType>('draftVideoFormData', {})

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
      fixEmptyKey(inviterIdStorageRef.value)
    )
  )

  watch(
    () => formValue,
    (newValue) => {
      inviterIdStorageRef.value = newValue
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

  const handleSaveButtonClick = async (e: MouseEvent) => {
    e.preventDefault()

    await formRef.value?.validate()

    loadingRef.value = true
    try {
      const { videoTags, ...other } = formValue
      const data: Partial<
        Video & {
          videoTags: {
            create: {
              label: string
            }[]
          }
        }
      > = {
        ...other,
        publishedAt: new Date(),
        creatorId: currentUserIdRef.value,
      }
      if (videoTags.length) {
        data.videoTags = {
          create: videoTags.map((label) => ({ label })),
        }
      }

      const res = await getTrpc().db.video.create.mutate({
        data: fixEmptyKey(data),
      })

      console.log('handleSaveButtonClick res', res)
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
