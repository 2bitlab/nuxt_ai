<template>
  <div class="p-4">
    <div :class="formWarperClassRef">
      <div v-if="stepRef === 2" class="flex-1">
        <NForm ref="formRef" :model="formValue" :rules="rulesRef">
          <NFormItem :label="i18nRef.creatorContentUploadFormTitle" path="title">
            <NInput
              v-model:value="formValue.title"
              :placeholder="i18nRef.creatorContentUploadFormTitlePlaceholder"
              maxlength="30"
            />
          </NFormItem>
          <NFormItem :label="i18nRef.creatorContentUploadFormSummary" path="summary">
            <NInput
              v-model:value="formValue.summary"
              type="textarea"
              maxlength="1000"
              :placeholder="i18nRef.creatorContentUploadFormSummaryPlaceholder"
              :autosize="{
                minRows: 3,
                maxRows: 10,
              }"
            />
          </NFormItem>

          <NFormItem :label="i18nRef.creatorContentUploadFormVideoTypeId" path="videoTypeId">
            <NCascader
              v-model:value="formValue.videoTypeId"
              :placeholder="i18nRef.creatorContentUploadFormVideoTypeIdPlaceholder"
              :options="videoTypeCascaderOptionsRef"
              :loading="videoTypeCascaderOptionsLoadingRef"
              check-strategy="child"
              separator=" | "
              show-path
              filterable
            />
          </NFormItem>

          <NFormItem :label="i18nRef.creatorContentUploadFormVideoTags" path="videoTags">
            <NSelect
              v-model:value="formValue.videoTags"
              multiple
              filterable
              tag
              :placeholder="i18nRef.creatorContentUploadFormVideoTagsPlaceholder"
              :options="videoTagsOptionsRef"
              :loading="videoTagsOptionsLoadingRef"
              clearable
              remote
              :clear-filter-after-select="true"
              @search="handleSearchVideoTags"
            />
          </NFormItem>

          <NFormItem :label="i18nRef.creatorContentUploadFormVideoSetId" path="videoSetId">
            <NSelect
              v-model:value="formValue.videoSetId"
              :placeholder="i18nRef.creatorContentUploadFormVideoSetIdPlaceholder"
              :options="videoSetsOptionsRef"
              :loading="videoSetsOptionsLoadingRef"
              clearable
            />
          </NFormItem>

          <NButton :loading="loadingRef" @click="handleSaveButtonClick">{{
            i18nRef.creatorContentUploadFormPublishBtn
          }}</NButton>
        </NForm>

        {{ formValue }}
      </div>
      <div>
        <div v-if="formValue.url">
          <div class="flex h-[23.1875rem] w-[15.1875rem] flex-col justify-end rounded bg-black">
            <video width="243" height="371" controls muted autoplay>
              <source :src="formValue.url" :type="videoTypeRef" />
            </video>
          </div>
          <div class="flex justify-center pt-4">
            <NUpload :custom-request="customRequest" :show-file-list="false">
              <NButton>{{ i18nRef.creatorContentUploadFormResetUploadBtn }}</NButton>
            </NUpload>
          </div>
        </div>
        <NUpload v-else :custom-request="customRequest" directory-dnd :show-file-list="false">
          <NUploadDragger :class="uploadDraggerClassRef">
            <template v-if="noFileRef">
              <div v-if="stepRef === 1">
                <div>
                  <Icon name="ic:baseline-cloud-upload" size="32" />
                </div>
                <div class="pb-2 pt-4 font-semibold">
                  {{ i18nRef.creatorContentUploadDraggerTipsTitle }}
                </div>
                <div class="text-xs">
                  {{ i18nRef.creatorContentUploadDraggerTipsContent }}
                </div>
              </div>
              <template v-else>
                <div>
                  <Icon name="ic:baseline-cloud-upload" size="32" />
                </div>
                <div class="pt-4 font-semibold">
                  {{ i18nRef.creatorContentUploadDraggerStep2TipsTitle1 }}
                </div>
                <div class="pb-4 pt-1 font-semibold">
                  {{ i18nRef.creatorContentUploadDraggerStep2TipsTitle2 }}
                </div>
                <div class="text-xs">
                  {{ i18nRef.creatorContentUploadDraggerStep2TipsContent }}
                </div>
              </template>
            </template>
            <template v-else>
              <div
                class="absolute inset-0 z-[1] flex cursor-default flex-col items-center justify-center gap-2 px-4"
                @click.stop="() => ({})"
              >
                <div v-if="fileRef" class="max-w-full truncate">{{ fileRef.name || '' }}</div>
                <NProgress type="line" :percentage="percentageRef" />
                <NButton quaternary size="tiny" @click="cancelUploadTask">{{
                  i18nRef.creatorContentUploadFormCancelUploadBtn
                }}</NButton>
              </div>
            </template>
          </NUploadDragger>
        </NUpload>

        {{ taskIdRef }}
        <NButton @click="test">test</NButton>
      </div>
    </div>

    <div v-if="stepRef === 1" class="flex gap-4">
      <div class="rounded p-4" :style="bgRef">
        <div>{{ i18nRef.creatorContentUploadDraggerVideoTypeTipsTitle }}</div>
        <div class="pt-2 text-xs">{{ i18nRef.creatorContentUploadDraggerVideoTypeTipsContent }}</div>
      </div>
      <div class="rounded p-4" :style="bgRef">
        <div>{{ i18nRef.creatorContentUploadDraggerVideoSizeTipsTitle }}</div>
        <div class="pt-2 text-xs">{{ i18nRef.creatorContentUploadDraggerVideoSizeTipsContent }}</div>
      </div>
      <div class="rounded p-4" :style="bgRef">
        <div>{{ i18nRef.creatorContentUploadDraggerVideoResolutionTipsTitle }}</div>
        <div class="pt-2 text-xs">{{ i18nRef.creatorContentUploadDraggerVideoResolutionTipsContent }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  NUpload,
  NButton,
  NCascader,
  NForm,
  NFormItem,
  NInput,
  NUploadDragger,
  NSelect,
  NProgress,
  useThemeVars,
  useMessage,
} from 'naive-ui'

import { debounce } from 'lodash-es'
import type { UploadCustomRequestOptions, FormRules, FormInst, CascaderOption, SelectOption } from 'naive-ui'
import type { Video, VideoType } from '@prisma/client'

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
const formValue = reactive<Partial<Video & { videoTags: string[] }>>({
  url: 'https://shop-1300204402.cos.ap-guangzhou.myqcloud.com/data/83845ff1-b3d4-40be-8ad1-84a593488647__v0200fg10000cj9og0vog65hed8d1320.MP4', // TODO DEL
  title: '',
  summary: '',
  coverUrl: '',
  publishedAt: new Date(),
  videoTypeId: '',
  videoTags: [],
  videoSetId: '',
  published: true,
  creatorId: '',
})

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
    }
    if (videoTags.length) {
      data.videoTags = {
        create: videoTags.map((label) => ({ label })),
      }
    }

    const res = await getTrpc().db.video.create.mutate({
      data,
    })

    console.log('handleSaveButtonClick res', res)
  } catch (error) {
    console.error('error', error)
    loadingRef.value = false

    message.error(i18nRef.dataTableSaveErrorTips)
  }
}

let timer
const test = () => {
  clearTimeout(timer)
  timer = setTimeout(() => {
    percentageRef.value = percentageRef.value + 1

    if (percentageRef.value < 100) {
      test()
    }
  }, 100)
}

const cancelUploadTask = () => {
  if (taskIdRef.value) {
    getTencentCos().cancelTask(taskIdRef.value)
  }
  percentageRef.value = 0
  formValue.url = ''
  fileRef.value = null
  taskIdRef.value = ''

  clearTimeout(timer) // TODO DEL
}
</script>
