<template>
  <div class="flex gap-4 p-4">
    <div class="flex flex-1 flex-col gap-2">
      <h1>Video Player</h1>

      <NFormItem label="video mp4 url">
        <NInput v-model:value="videoUrlRef" />
      </NFormItem>
      <div v-if="videoUrlRef">
        <VideoPlayer :src="videoUrlRef" />

        <div>
          <NButton @click="testVideoTranscodeTask">转成自适应</NButton>
          <NButton @click="testVoiceSeparateTask">人声分离</NButton>
          <NButton @click="testVideoSpeechRecognitionTask">语音提取</NButton>
        </div>
      </div>

      <div v-if="mulQualityVideoOptionsRef">
        <VideoPlayer :options="mulQualityVideoOptionsRef" />
      </div>

      <NFormItem label="voice mp3 url">
        <NInput v-model:value="voiceUrlRef" />
      </NFormItem>

      <div v-if="voiceUrlRef">
        <audio controls :src="voiceUrlRef">
          <a :href="voiceUrlRef"> Download audio </a>
        </audio>
        <div>
          <NButton @click="testVoiceSpeechRecognitionTask">语音提取</NButton>
        </div>
      </div>

      <NFormItem label="Job Id">
        <NInput v-model:value="jobIdRef" />
      </NFormItem>

      <NFormItem label="Queue Ids">
        <NInput v-model:value="queueIdsRef" />
      </NFormItem>

      <NFormItem label="txt url">
        <NInput v-model:value="txtUrlRef" />
      </NFormItem>
      <div v-if="txtUrlRef">{{ txtContentRef }}</div>
    </div>
    <div class="flex w-1/4 flex-col">
      <JsonEditor v-model:value="resRef" class="w-full flex-1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { NFormItem, NInput, NButton } from 'naive-ui'

const videoUrlRef = ref(
  'https://shop-1300204402.cos.ap-guangzhou.myqcloud.com/data/83845ff1-b3d4-40be-8ad1-84a593488647__v0200fg10000cj9og0vog65hed8d1320.MP4'
)

const voiceUrlRef = ref(
  'https://shop-1300204402.cos.ap-guangzhou.myqcloud.com/data/83845ff1-b3d4-40be-8ad1-84a593488647__voiceSeparateAudio.mp3'
)

const qualityRef = ref<
  {
    name: string
    url: string
    type: 'hls'
  }[]
>([
  {
    name: '640p',
    url: 'https://shop-1300204402.cos.ap-guangzhou.myqcloud.com/data/83845ff1-b3d4-40be-8ad1-84a593488647/a5bb689a-e7b6-470f-ac66-42c21a33ba71__transcodep640.m3u8',
    type: 'hls',
  },
  {
    name: '720p',
    url: 'https://shop-1300204402.cos.ap-guangzhou.myqcloud.com/data/83845ff1-b3d4-40be-8ad1-84a593488647/3b53f7f2-6d17-4ebd-bd6c-ae6fa4ac7b77__transcodep720.m3u8',
    type: 'hls',
  },
  {
    name: '1280p',
    url: 'https://shop-1300204402.cos.ap-guangzhou.myqcloud.com/data/83845ff1-b3d4-40be-8ad1-84a593488647/4951e0d4-9094-41e8-b19b-7289cc00ee27__transcodep1280.m3u8',
    type: 'hls',
  },
])

const mulQualityVideoOptionsRef = computed(() => {
  const quality = qualityRef.value || []
  if (quality.length) {
    return {
      video: {
        quality,
        defaultQuality: 0,
      },
    }
  }

  return null
})
const jobIdRef = ref('')

const resRef = ref<any>({})

const txtUrlRef = ref(
  'https://shop-1300204402.cos.ap-guangzhou.myqcloud.com/data/83845ff1-b3d4-40be-8ad1-84a593488647/75315fce-9ce2-4bae-ad93-b2213cff04c1__speechRecognition.txt'
)

const { data: txtContentRef } = await useFetch(txtUrlRef)

watch(
  () => jobIdRef.value,
  async (newValue) => {
    if (newValue) {
      resRef.value = await getCosJobDetail(newValue)
    }
  }
)

const queueIdsRef = ref('')

watch(
  () => queueIdsRef.value,
  async (newValue) => {
    if (newValue) {
      resRef.value = await searchCosMediaQueue(newValue)
    }
  }
)

const testVideoTranscodeTask = async () => {
  const res = await cosMulQualityVideoTranscodeTask({
    path: videoUrlRef.value,
  })

  resRef.value = res

  setTimeout(() => {
    qualityRef.value = Object.keys(res).map((key) => {
      const { outputUrl } = res[key] || {}
      return {
        name: key,
        url: outputUrl,
        type: 'hls',
      }
    })
  }, 2000)
}

const testVoiceSeparateTask = async () => {
  const res = await cosVoiceSeparateTask({
    path: videoUrlRef.value,
  })
  resRef.value = res

  const { outputUrl } = res || {}
  setTimeout(() => {
    voiceUrlRef.value = outputUrl
  }, 2000)
}

const testVideoSpeechRecognitionTask = async () => {
  const res = await cosSpeechRecognitionTask({
    path: videoUrlRef.value,
  })
  resRef.value = res

  const { outputUrl } = res || {}
  setTimeout(() => {
    txtUrlRef.value = outputUrl
  }, 2000)
}

const testVoiceSpeechRecognitionTask = async () => {
  const res = await cosSpeechRecognitionTask({
    path: voiceUrlRef.value,
    flashAsr: true,
    engineModelType: '16k_zh-PY',
  })
  resRef.value = res

  const { outputUrl } = res || {}

  setTimeout(() => {
    txtUrlRef.value = outputUrl
  }, 2000)
}
</script>
