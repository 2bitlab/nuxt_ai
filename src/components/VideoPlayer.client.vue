<template>
  <div ref="divRef" />
</template>

<script setup lang="ts">
// https://cloud.tencent.com/document/product/460/65863
// https://cloud.tencent.com/document/product/881/30818

// https://dplayer.diygod.dev/zh/guide.html

type V = string

const props = defineProps<{
  src?: V

  options?: {
    poster?: string
    autoplay?: boolean
    loop?: boolean
    screenshot?: boolean
    hotkey?: boolean
    airplay?: boolean
    chromecast?: boolean
    preload?: 'none' | 'auto' | 'metadata'
    volume?: number // 0.7
    playbackSpeed?: number[]
    video?: {
      thumbnails?: string[]
      type?: 'auto' | 'hls' | 'flv' | 'dash' | 'webtorrent' | 'normal'
      quality?: {
        name: string
        url: string
        type: 'hls'
      }[]
      defaultQuality?: number
    }
  } // TCPlayer 上的构建参数
}>()

interface VideoPlayer {
  set: (v: any) => void
  get: () => any
  focus: () => void
}

const getVideoPlayer = async (): Promise<VideoPlayer> => {
  const obj = (getWindow() as any)?.DPlayer as VideoPlayer
  // const obj = (getWindow() as any)?.TCPlayer as VideoPlayer

  if (!obj) {
    await sleep(1000)
    return await getVideoPlayer()
  }

  return obj
}

const videoPlayerJsLoadedRef = useVideoPlayerJsLoaded()

const divRef = ref(null)

const jsUrl = 'https://cdn.jsdelivr.net/npm/dplayer@1.26.0/dist/DPlayer.min.js'

const loadJs = () => {
  appendScripts([
    {
      attrs: {
        src: 'https://web.sdk.qcloud.com/player/tcplayer/release/v4.2.1/libs/hls.min.0.13.2m.js',
      },
    }, // hls
    {
      attrs: {
        src: 'https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.2/libs/flv.min.1.6.2.js',
      },
    }, // flv
    {
      attrs: {
        src: 'https://cos-video-1258344699.cos.ap-guangzhou.myqcloud.com/lib/dash.all.min.js',
      },
    }, // dash
    {
      attrs: {
        src: jsUrl,
      },
      onload: () => {
        videoPlayerJsLoadedRef.value = true
      },
    },
  ])
}

let player: VideoPlayer

const initPropsRef = computed(() => {
  const ele = divRef.value

  if (videoPlayerJsLoadedRef.value) {
    return ele
  }

  return null
})

const init = async () => {
  const ele = initPropsRef.value
  if (ele) {
    const VideoPlayerClass = (await getVideoPlayer()) as any

    const hasLoaded = getElementsByClassName('dplayer-video', ele)
    if (hasLoaded.length) return

    player = new VideoPlayerClass({
      container: ele,
      video: {
        url: props.src,
      },
      ...(props.options || {}),
    }) as VideoPlayer

    ele.oncontextmenu = () => {
      const [menuEle] = getElementsByClassName('dplayer-menu', ele)
      if (menuEle) {
        menuEle.style.display = 'none'
      }

      const [maskEle] = getElementsByClassName('dplayer-mask', ele)
      if (maskEle) {
        maskEle.style.display = 'none'
      }

      return false
    }
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

defineExpose({
  entity: () => {
    return player
  },
})
</script>
