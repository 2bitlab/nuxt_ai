export const provideVideoPlayerJsLoaded = () => {
  const videoPlayerJsLoadedRef = ref(!!(getWindow() as any)?.DPlayer)
  provide('videoPlayerJsLoaded', videoPlayerJsLoadedRef)
  return videoPlayerJsLoadedRef
}
export const useVideoPlayerJsLoaded = () => {
  const videoPlayerJsLoadedRef = inject('videoPlayerJsLoaded', provideVideoPlayerJsLoaded, true)

  return videoPlayerJsLoadedRef
}
