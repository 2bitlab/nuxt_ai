export const useCurrentUserId = () => {
  const { user } = useAuth()
  const userIdRef = computed(() => {
    return user.value?.id
  })

  return userIdRef
}
