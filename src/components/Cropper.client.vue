<template>
  <img ref="divRef" class="hidden" :src="value" />
</template>

<script setup lang="ts">
// https://mraining.github.io/Cropperjs.html
// https://fengyuanchen.github.io/cropperjs/

type V = string

interface Cropper {
  replace: (url: string) => void
  getCroppedCanvas: () => HTMLCanvasElement
}

interface CropResult {
  cropper: Cropper
  e: any
  croppedCanvas: HTMLCanvasElement
}

const props = defineProps<{
  value: V
  onCrop?: (res: CropResult) => void
  options?: Record<string, any> // CropperClass 上的构建参数
}>()

const getCropper = async (): Promise<Cropper> => {
  const obj = (getWindow() as any)?.Cropper as Cropper

  if (!obj) {
    await sleep(1000)
    return await getCropper()
  }

  return obj
}

const cropperJsLoadedRef = useCropperJsLoaded()

const divRef = ref(null)

const loadJs = () => {
  appendScripts([
    {
      attrs: {
        href: 'https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.6.1/cropper.min.css',
        rel: 'stylesheet',
        type: 'text/css',
      },
      tag: 'link',
    },
    {
      attrs: {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.6.1/cropper.min.js',
      },
      onload: () => {
        cropperJsLoadedRef.value = true
      },
    },
  ])
}

const initPropsRef = computed(() => {
  const ele = divRef.value

  if (cropperJsLoadedRef.value) {
    return ele
  }

  return null
})

let cropper: Cropper

const init = async () => {
  const ele = initPropsRef.value
  if (ele) {
    const CropperClass = (await getCropper()) as any

    const hasLoaded = getElementsByClassName('cropper-container', ele)
    if (hasLoaded.length) return

    cropper = new CropperClass(ele, {
      aspectRatio: 1,
      crop: (e) => {
        const canvas = cropper.getCroppedCanvas()
        props.onCrop &&
          props.onCrop({
            e,
            cropper,
            croppedCanvas: canvas,
          })
      },
      ...(props.options || {}),
    }) as Cropper
  }
}

loadJs()

watch(
  () => initPropsRef.value,
  async () => {
    await init()
  },
  {
    immediate: true,
  }
)

watch(
  () => props.value,
  (newValue) => {
    if (cropper && newValue) {
      cropper.replace(newValue)
    }
  }
)

defineExpose({
  entity: () => {
    return cropper
  },
})
</script>
