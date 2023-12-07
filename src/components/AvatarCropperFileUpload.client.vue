<template>
  <div class="relative">
    <NUpload :custom-request="customRequest" class="absolute inset-0 cursor-pointer" :show-file-list="false">
      <div v-if="urlRef" class="absolute inset-0">
        <img v-if="urlRef" class="h-auto w-full" :src="urlRef" />
      </div>
      <NUploadDragger v-else class="absolute inset-0 flex flex-col items-center justify-center">
        <Icon name="ic:baseline-plus" class="h-10 w-10" />
      </NUploadDragger>
    </NUpload>
    <NModal v-model:show="showModalRef" preset="card" style="width: 550px" :mask-closable="false">
      <div class="flex justify-center gap-2">
        <div :class="cropperSize ?? 'h-96 w-96'">
          <Cropper v-if="cropperUrlRef" :value="cropperUrlRef" :on-crop="onCrop" :options="cropperOptions" />
        </div>
        <div v-if="previewConfig" class="flex flex-col gap-2">
          <div v-for="(previewConfigItem, i) in previewConfig" :key="i" :class="previewConfigItem">
            <img v-if="cropImgUrlRef" class="h-auto w-full" :src="cropImgUrlRef" />
          </div>
        </div>
      </div>
      <template #action>
        <div class="flex justify-end">
          <NButton :loading="loadingRef" @click="upload">{{ i18nRef.avatarCropperFileUploadBtnText }}</NButton>
        </div>
      </template>
    </NModal>
  </div>
</template>

<script setup lang="ts">
import { NUpload, NButton, NModal, NUploadDragger } from 'naive-ui'

import type { UploadCustomRequestOptions, UploadFileInfo } from 'naive-ui'

const getI18nConfig = () => ({
  avatarCropperFileUploadBtnText: '确认',
})

const { i18nRef } = useI18n(getI18nConfig())

type V = string

const props = defineProps<{
  value: V
  previewConfig?: string[]
  cropperSize?: string
  cropperOptions?: Record<string, any>
}>()

const emit = defineEmits<{
  (e: 'update:value', v: V): void
}>()

const urlRef = ref('')

const fileListRef = ref<Partial<UploadFileInfo>[]>([])

const showModalRef = ref(false)

const cropperUrlRef = ref('')

const cropImgUrlRef = ref('')
const loadingRef = ref(false)

let canvas: HTMLCanvasElement
let fileTemp: UploadFileInfo

const onCrop = ({ croppedCanvas }: { croppedCanvas: HTMLCanvasElement }) => {
  const cropImgUrl = croppedCanvas.toDataURL()
  cropImgUrlRef.value = cropImgUrl

  canvas = croppedCanvas
}

const canvasBlob2File = (): Promise<File> => {
  return new Promise((resolve) => {
    if (canvas) {
      canvas.toBlob((blob) => {
        console.log(blob)

        const newFile = new File([blob], 'cropImage.png', {
          type: blob.type,
        })

        resolve(newFile)
      })
    }
  })
}

const upload = async () => {
  loadingRef.value = true
  const newFile = await canvasBlob2File()

  try {
    const data = await uploadFile(newFile)
    console.log('data', data)

    const { url } = data || {}
    console.log('url', url)

    console.log('fileListRef', fileListRef.value)

    fileTemp.url = url
    fileTemp.status = 'finished'
    urlRef.value = url
    emit('update:value', url)

    console.log('fileTemp', fileTemp)
    showModalRef.value = false
    // onFinish()
  } catch (error) {
    console.error(error)
    // onError()
  }

  loadingRef.value = false
}

const customRequest = async (args: UploadCustomRequestOptions) => {
  console.log('customRequest args', args)
  const { file } = args
  showModalRef.value = true
  fileTemp = file

  cropperUrlRef.value = URL.createObjectURL(file.file)
}

watch(
  () => props.value,
  (newValue) => {
    urlRef.value = newValue
  },
  {
    immediate: true,
  }
)
</script>
