<template>
  <div class="flex flex-col gap-4">
    <FileUpload v-model:value="fileListRef"></FileUpload>

    <FileUpload v-model:value="fileListRef" :options="imageCardOptionsRef"> 点击上传 </FileUpload>

    <NModal v-model:show="showModalRef" preset="card" style="width: 600px" title="一张很酷的图片">
      <NImage v-if="previewImageUrlRef" :src="previewImageUrlRef" style="width: 100%" />
    </NModal>

    <div class="flex gap-4">
      <div class="h-96 w-96">
        <Cropper v-if="firstImgUrlRef" :value="firstImgUrlRef" :on-crop="onCrop" />
      </div>
      <div class="w-40">
        <img v-if="cropImgUrlRef" class="h-auto w-full" :src="cropImgUrlRef" />
      </div>
    </div>

    <AvatarCropperFileUpload v-model:value="avatarCropperFileUploadRef" class="h-40 w-40" />

    <NInput v-model:value="avatarCropperFileUploadRef" />

    <div>
      <NButton @click="testOcr">OCR</NButton>
    </div>

    <NInput
      v-if="ocrTextRef"
      v-model:value="ocrTextRef"
      type="textarea"
      :autosize="{
        minRows: 3,
        maxRows: 10,
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { NModal, NImage, NInput, NButton } from 'naive-ui'
import type { UploadFileInfo } from 'naive-ui'

const fileListRef = ref<Partial<UploadFileInfo>[]>([
  {
    name: 'FireShot Capture 008 - Kimi Chat - 帮你看更大的世界 - kimi.moonshot.cn (1).png',
    url: 'https://shop-1300204402.cos.ap-guangzhou.myqcloud.com/data/ff1237b2-0b1f-495c-abc6-ec0a8e441d49__FireShot%20Capture%20008%20-%20Kimi%20Chat%20-%20%E5%B8%AE%E4%BD%A0%E7%9C%8B%E6%9B%B4%E5%A4%A7%E7%9A%84%E4%B8%96%E7%95%8C%20-%20kimi.moonshot.cn%20%281%29.png',
    status: 'finished',
  },
])

const showModalRef = ref(false)
const previewImageUrlRef = ref('')
const handlePreview = (file: UploadFileInfo) => {
  const { url } = file
  previewImageUrlRef.value = url
  showModalRef.value = true
}

const imageCardOptionsRef = computed(() => {
  return {
    'list-type': 'image-card',
    'on-preview': handlePreview,
  }
})

watch(
  () => fileListRef.value,
  (newValue) => {
    console.log('watch fileListRef', newValue)
  }
)

const firstImgUrlRef = computed(() => {
  const [first] = fileListRef.value || []
  const { url } = first || {}

  return url
})

const cropImgUrlRef = ref('')

const onCrop = ({ croppedCanvas }: { croppedCanvas: HTMLCanvasElement }) => {
  const cropImgUrl = croppedCanvas.toDataURL()
  cropImgUrlRef.value = cropImgUrl
}

const avatarCropperFileUploadRef = ref(
  'https://shop-1300204402.cos.ap-guangzhou.myqcloud.com/data/e75b613d-9dce-4ac0-b132-7c296aca6d0c__cropImage.png'
)

const ocrTextRef = ref('')

const testOcr = async () => {
  const res: any = await cosOcrTask({
    path: avatarCropperFileUploadRef.value,
  })
  console.log('testOcr', res)

  const { data } = res || {}
  const { Response } = data || {}

  const { TextDetections } = Response || {}
  const arr = (TextDetections || []).map((item) => {
    const { DetectedText } = item
    return DetectedText || ''
  })

  ocrTextRef.value = arr.join('\n')
}
</script>
