<template>
  <div class="container mx-auto flex flex-col gap-4 p-4">
    <NSpin size="large" :show="pending">
      <div v-if="videoOrderRef" class="flex flex-col gap-4">
        <div v-if="selectedVideoRef" class="flex flex-col gap-2">
          <div>
            <NTag :bordered="false" type="success">
              {{ showTextRef }}
            </NTag>
          </div>

          <div>
            {{ selectedVideoRef.title }}
          </div>
          <div
            class="text-base font-bold"
            :class="{ 'whitespace-pre-wrap': summaryMoreRef, 'line-clamp-2 whitespace-normal': !summaryMoreRef }"
            @click="() => summaryMoreToggle()"
          >
            {{ selectedVideoRef.summary }}
          </div>
          <NText tag="div" depth="3" class="flex flex-wrap gap-2 text-xs">
            <span v-for="tag in selectedVideoRef.videoTags" :key="tag.label">#{{ tag.label }}</span>
          </NText>
        </div>

        <div class="flex gap-4">
          <NCard v-if="videoOrderRef.creator" class="max-w-xs">
            <div class="flex flex-col gap-2">
              <UserAvatarCard :user="videoOrderRef.creator" round />
              <div>
                {{ createdAtRef }}
              </div>
            </div>
          </NCard>

          <NCard v-if="videoOrderRef.handler" class="max-w-xs">
            <div class="flex flex-col gap-2">
              <UserAvatarCard :user="videoOrderRef.handler" round />
              <div>
                {{ handleAtRef }}
              </div>
              <div v-if="finishedAtRef">
                {{ finishedAtRef }}
              </div>
            </div>
          </NCard>
        </div>
        <div class="flex gap-4">
          <div class="h-[23.1875rem] w-[15.1875rem]">
            <VideoPlayer
              v-if="mulQualityVideoOptionsRef"
              class="hidden-player-icons-right h-[23.1875rem] w-[15.1875rem]"
              :options="mulQualityVideoOptionsRef"
            />
          </div>

          <div v-if="isHandlerRef" class="flex flex-1 gap-4">
            <div class="flex flex-col gap-4">
              <DataTableShowOrEditInput
                v-if="copywritingRef"
                :value="copywritingRef"
                :on-update-value="copywritingUpdate"
                :input-options="{
                  type: 'textarea',
                  autosize: {
                    minRows: 5,
                    maxRows: 10,
                  },
                }"
              />
              <div class="flex justify-between gap-4">
                <NButton size="small" :loading="getCopywritingLoadingRef" @click="() => getCopywriting()">{{
                  i18nRef.videoOrderDetailGetCopywritingBtn
                }}</NButton>

                <NButton v-if="showCopyRef" size="small" @click="() => copy(copywritingRef)">
                  {{ copied ? i18nRef.videoOrderDetailCopiedBtn : i18nRef.videoOrderDetailCopyBtn }}
                </NButton>
              </div>
            </div>
            <div v-if="finishVideoUrlRef" class="flex w-[15.1875rem] flex-col gap-4">
              <div class="flex h-[23.1875rem] w-[15.1875rem] flex-col justify-end rounded bg-black">
                <video width="243" height="371" muted autoplay>
                  <source :src="finishVideoUrlRef" :type="videoTypeRef" />
                </video>
              </div>

              <div class="flex justify-between gap-4">
                <NUpload key="resetUploadBtn" :custom-request="customRequest" :show-file-list="false">
                  <NButton quaternary size="small">{{ i18nRef.videoOrderDetailResetUploadBtn }}</NButton>
                </NUpload>

                <NButton primary size="small" :loading="loadingRef" :disabled="loadingRef" @click="finishOrder">
                  {{ i18nRef.videoOrderDetailFinishBtn }}
                </NButton>
                <NButton
                  v-if="statusRef === 'WAIT_CONFIRM'"
                  primary
                  size="small"
                  :loading="loadingRef"
                  :disabled="loadingRef"
                  @click="sendEmail"
                >
                  {{ i18nRef.videoOrderDetailSendEmailBtn }}
                </NButton>
              </div>
            </div>
            <NUpload v-else key="uploadBtn" :custom-request="customRequest" directory-dnd :show-file-list="false">
              <NUploadDragger class="relative flex h-[23.1875rem] w-[15.1875rem] flex-col items-center justify-center">
                <div
                  v-if="noFileRef"
                  class="absolute inset-0 z-[0] flex flex-col items-center justify-center gap-2 px-4"
                >
                  <div class="text-2xl font-bold text-gray-400">+</div>
                  <div class="text-sm text-gray-400">{{ i18nRef.videoOrderDetailUploadTips }}</div>
                </div>
                <template v-else>
                  <div
                    class="absolute inset-0 z-[1] flex cursor-default flex-col items-center justify-center gap-2 px-4"
                    @click.stop="() => ({})"
                  >
                    <div v-if="fileRef" class="max-w-full truncate">{{ fileRef.name || '' }}</div>
                    <NProgress type="line" :percentage="percentageRef" />
                    <NButton quaternary size="tiny" @click="cancelUploadTask">{{
                      i18nRef.videoOrderDetailCancelUploadBtn
                    }}</NButton>
                  </div>
                </template>
              </NUploadDragger>
            </NUpload>
          </div>
          <div v-else-if="finishVideoUrlRef" class="flex flex-col gap-4">
            <div class="flex h-[23.1875rem] w-[15.1875rem] flex-col justify-end rounded bg-black">
              <video width="243" height="371" muted autoplay>
                <source :src="finishVideoUrlRef" :type="videoTypeRef" />
              </video>
            </div>

            <div class="flex justify-center">
              <a :href="finishVideoUrlRef">
                <NButton quaternary size="small">{{ i18nRef.videoOrderDetailDownloadBtn }}</NButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </NSpin>
  </div>
</template>

<script setup lang="ts">
import { NSpin, NButton, NCard, NText, NUpload, NUploadDragger, NProgress, NTag, useMessage } from 'naive-ui'
import type { UploadCustomRequestOptions } from 'naive-ui'
import { useUrlSearchParams, useToggle, useClipboard } from '@vueuse/core'

const getI18nConfig = () => ({
  videoOrderDetailNotFoundTitle: '数据不存在或无权访问',

  videoOrderDetailCreatedAt: '${time} 创建',
  videoOrderDetailHandleAt: '${time} 接单',
  videoOrderDetailFinishedAt: '${time} 完成',

  videoOrderDetailPayConfirm: '确认支付视频《${title}》制作费${price}',

  videoOrderDetailResetUploadBtn: '重新上传',
  videoOrderDetailCancelUploadBtn: '取消上传',
  videoOrderDetailFinishErrorTips: '请先上传视频',

  videoOrderDetailFinishBtn: '确认发送给客户',
  videoOrderDetailDownloadBtn: '重新上传',

  videoOrderDetailGetCopywritingBtn: '提取视频文案',

  videoOrderDetailCopyBtn: '复制文案',
  videoOrderDetailCopiedBtn: '复制成功',

  videoOrderDetailSendEmailBtn: '重发邮件',

  videoOrderDetailUploadTips: '完成作品后，点击或拖拽上传视频',
})

const { i18nRef } = useI18n(getI18nConfig())

const currentUserIdRef = useCurrentUserId()
const query = useUrlSearchParams('history')

const queryOrderIdRef = computed(() => {
  const { id } = query
  return id as string
})

const whereRef = computed(() => {
  return {
    where: {
      id: queryOrderIdRef.value,
      OR: [
        {
          creatorId: currentUserIdRef.value,
        },
        {
          handlerId: currentUserIdRef.value,
        },
      ],
    },
    select: {
      id: true,
      handleAt: true,
      handlerId: true,
      status: true,
      handler: {
        select: {
          id: true,
          name: true,
          image: true,
          email: true,
        },
      },
      creatorId: true,
      creator: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      },
      createdAt: true,
      price: true,
      balanceLogId: true,
      video: {
        select: {
          id: true,
          title: true,
          coverUrl: true,
          url: true,
          mulQualityVideos: true,
          copywriting: true,
          copywritingUrl: true,
          videoTags: {
            select: {
              label: true,
            },
          },
        },
      },
    },
  }
})

const { data: videoOrderRef, pending, refresh } = getTrpc().db.videoOrder.findUnique.useQuery(whereRef)

const isNotFoundRef = computed(() => {
  return !pending.value && !videoOrderRef.value
})

const router = useRouter()

watch(
  () => isNotFoundRef.value,
  (newValue) => {
    if (newValue) {
      router.replace({
        path: '/error',
        query: {
          error: '404',
          msg: i18nRef.videoOrderDetailNotFoundTitle,
          status: '404',
        },
      })
    }
  }
)

const statusRef = computed(() => {
  return videoOrderRef.value?.status
})

const { mapRef } = useVideoOrderStatusMap()

const showTextRef = computed(() => {
  return mapRef.value[statusRef.value]
})

const createdAtRef = computed(() => {
  return evaluate(i18nRef.videoOrderDetailCreatedAt, {
    time: getDayjs(videoOrderRef.value?.createdAt).format('YYYY-MM-DD HH:mm'),
  })
})

const handleAtRef = computed(() => {
  return evaluate(i18nRef.videoOrderDetailHandleAt, {
    time: getDayjs(videoOrderRef.value?.handleAt).format('YYYY-MM-DD HH:mm'),
  })
})

const finishedAtRef = computed(() => {
  const finishedAt = videoOrderRef.value?.finishedAt
  if (finishedAt) {
    return evaluate(i18nRef.videoOrderDetailFinishedAt, {
      time: getDayjs(videoOrderRef.value?.finishedAt).format('YYYY-MM-DD HH:mm'),
    })
  }
  return ''
})

const dataFinishedVideoUrlRef = computed(() => {
  return videoOrderRef.value?.finishedVideoUrl
})

const isHandlerRef = computed(() => {
  return videoOrderRef.value?.handlerId === currentUserIdRef.value
})

const [summaryMoreRef, summaryMoreToggle] = useToggle()

const selectedVideoRef = computed(() => {
  return videoOrderRef.value?.video
})

const videoUrlRef = computed(() => {
  return selectedVideoRef.value?.url
})

const copywritingRef = computed(() => {
  return selectedVideoRef.value?.copywriting
})

const { copy, copied, isSupported } = useClipboard({ source: copywritingRef })

const showCopyRef = computed(() => {
  return isSupported.value && copywritingRef.value
})

const getCopywritingLoadingRef = ref(false)

const getCopywriting = async () => {
  getCopywritingLoadingRef.value = true
  const res = await cosSpeechRecognitionTask({
    path: videoUrlRef.value,
  })

  const { outputUrl } = res || {}

  if (outputUrl) {
    await getTrpc().db.video.update.mutate({
      where: {
        id: selectedVideoRef.value?.id,
      },
      data: {
        copywritingUrl: outputUrl,
      },
    })

    const copywriting = await new CheckUrl().check(outputUrl)
    console.log('copywriting', copywriting)

    if (copywriting) {
      await getTrpc().db.video.update.mutate({
        where: {
          id: selectedVideoRef.value?.id,
        },
        data: {
          copywriting,
        },
      })
    }

    refresh()
  }

  getCopywritingLoadingRef.value = false
}

const copywritingUpdate = async (v: string) => {
  if (v) {
    try {
      await getTrpc().db.video.update.mutate({
        where: {
          id: selectedVideoRef.value?.id,
        },
        data: {
          copywriting: v,
        },
      })
      return true
    } catch (error) {
      console.error(error)
    }
  }
  return false
}

const mulQualityVideoOptionsRef = computed(() => {
  const { mulQualityVideos: quality = [], coverUrl: pic } = selectedVideoRef.value || {}

  console.log('mulQualityVideoOptionsRef quality', quality)

  const [first] = quality || []
  const { url } = first || {}
  if (url) {
    return {
      video: {
        url,
        quality,
        defaultQuality: 0,
        pic,
      },
      autoplay: true,
      loop: true,
    }
  }

  return null
})

const finishVideoUrlRef = ref<string>()

watch(
  () => dataFinishedVideoUrlRef.value,
  (newValue) => {
    if (newValue) {
      finishVideoUrlRef.value = newValue
    }
  },
  {
    immediate: true,
  }
)

const videoTypeRef = computed(() => {
  const arr = finishVideoUrlRef.value.split('.')
  if (arr.length) {
    const last = arr[arr.length - 1]

    return `video/${last.toLowerCase()}`
  }
  return ''
})

const fileRef = ref<UploadCustomRequestOptions['file'] | null>(null)

const noFileRef = computed(() => {
  return !fileRef.value
})

const percentageRef = ref(0)
const taskIdRef = ref('')

const customRequest = async ({ file, onFinish, onError, onProgress }: UploadCustomRequestOptions) => {
  console.log('file', file)
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

    finishVideoUrlRef.value = url

    onFinish()
  } catch (error) {
    console.error(error)
    onError()
  }
}

const cancelUploadTask = () => {
  if (taskIdRef.value) {
    getTencentCos().cancelTask(taskIdRef.value)
  }
  percentageRef.value = 0
  finishVideoUrlRef.value = ''
  fileRef.value = null
  taskIdRef.value = ''
}

const message = useMessage()

const loadingRef = ref(false)

const sendEmail = async () => {
  const { creator, video } = videoOrderRef.value || {}
  const { email } = creator || {}
  const { title } = video || {}

  const url = location.href

  try {
    await getTrpc().email.send.mutate({
      to: email,
      subject: `《${title}》视频已制作完请查收`,
      text: `前往下载${url}`,
      html: `
  <body>
    <div style="background:#f2f5f7;display: flex;justify-content: center;align-items: center; height:200px"><a href="${url}" target="_blank">前往下载</a></div>
  </body>
  `,
    })
  } catch (error) {
    console.error(error)
    message.error(error.message)
  }
}

const finishOrder = async () => {
  if (finishVideoUrlRef.value) {
    loadingRef.value = true
    await getTrpc().db.videoOrder.update.mutate({
      where: {
        id: queryOrderIdRef.value,
      },
      data: {
        status: 'WAIT_CONFIRM',
        finishedVideoUrl: finishVideoUrlRef.value,
        finishedAt: new Date(),
      },
    })

    await sendEmail()

    refresh()

    loadingRef.value = false
  } else {
    message.error(i18nRef.videoOrderDetailFinishErrorTips)
  }
}

const waitConfirmRef = computed(() => {
  return statusRef.value === 'WAIT_CONFIRM' && videoOrderRef.value?.creatorId === currentUserIdRef.value
})

const balanceLogIdRef = computed(() => {
  return videoOrderRef.value?.balanceLogId
})

watch(
  () => waitConfirmRef.value,
  async (newValue) => {
    if (newValue) {
      try {
        await getTrpc().balance.payConfirm.mutate({
          id: balanceLogIdRef.value,
          remark: evaluate(i18nRef.videoOrderDetailPayConfirm, {
            title: videoOrderRef.value?.video?.title,
            price: videoOrderRef.value?.price,
          }),
        })

        await getTrpc().db.videoOrder.update.mutate({
          where: {
            id: queryOrderIdRef.value,
          },
          data: {
            status: 'DONE',
          },
        })
        refresh()
      } catch (error) {
        console.error(error)
      }
    }
  },
  {
    immediate: true,
  }
)
</script>

<style scoped>
.hidden-player-icons-right >>> .dplayer-icons-right {
  @apply hidden;
}
</style>
