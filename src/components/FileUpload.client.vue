<template>
  <NUpload
    v-model:file-list="fileListRef"
    :custom-request="customRequest"
    v-bind="options ?? {}"
    @change="handleUploadChange"
    @remove="handleRemove"
  >
    <slot>
      <NButton>{{ i18nRef.fileUploadDefBtnText }}</NButton>
    </slot>
  </NUpload>
</template>

<script setup lang="ts">
import { NUpload, NButton } from 'naive-ui'

import type { UploadCustomRequestOptions, UploadFileInfo } from 'naive-ui'

type V = Partial<UploadFileInfo>[]
const props = defineProps<{
  value: V
  options?: Record<string, any> // jsoneditoronline 上的构建参数
}>()

const emit = defineEmits<{
  (e: 'update:value', v: V): void
}>()

const getI18nConfig = () => ({
  fileUploadDefBtnText: '点击上传',
})

const { i18nRef } = useI18n(getI18nConfig())

const fileListRef = ref<Partial<UploadFileInfo>[]>([])

// https://cloud.tencent.com/document/product/436/11459
const customRequest = async (args: UploadCustomRequestOptions) => {
  console.log('customRequest args', args)
  const { file, onFinish, onError, onProgress } = args
  console.log('file', file)
  // const { id } = file
  try {
    const data = await uploadFile(file.file, (progressData) => {
      console.log('onProgress progressData', progressData)

      const { percent } = progressData

      onProgress({ percent })
    })
    console.log('data', data)

    const { url } = data || {}
    console.log('url', url)

    file.url = url
    onFinish()
  } catch (error) {
    console.error(error)
    onError()
  }
}

const handleUploadChange = (data: { fileList: UploadFileInfo[] }) => {
  console.log('handleUploadChange data', data)

  const { fileList } = data || {}

  fileListRef.value = fileList || []
}

const handleRemove = (data: { file: UploadFileInfo; fileList: UploadFileInfo[] }) => {
  console.log('handleRemove data', data)
}

watch(
  () => props.value,
  (newValue) => {
    // if (newValue) {
    //   fileListRef.value = newValue
    // }
    if (JSON.stringify(newValue) !== JSON.stringify(fileListRef.value)) {
      fileListRef.value = newValue
    }
  },
  {
    immediate: true,
  }
)

watch(
  () => fileListRef.value,
  (newValue) => {
    // if (newValue) {
    //   fileListRef.value = newValue
    // }

    console.log('watch fileListRef.value', newValue)
    if (JSON.stringify(newValue) !== JSON.stringify(props.value)) {
      emit('update:value', newValue || [])
    }
  }
)
</script>
