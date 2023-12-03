export const provideCropperJsLoaded = () => {
  const cropperJsLoadedRef = ref(!!(getWindow() as any)?.Cropper)
  provide('cropperJsLoaded', cropperJsLoadedRef)
  return cropperJsLoadedRef
}
export const useCropperJsLoaded = () => {
  const cropperJsLoadedRef = inject('cropperJsLoaded', provideCropperJsLoaded, true)

  return cropperJsLoadedRef
}
