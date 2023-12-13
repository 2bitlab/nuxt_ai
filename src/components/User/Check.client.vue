<template>
  <span></span>
</template>

<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import { useDialog } from 'naive-ui'

// --------- check user start ---------
const { i18nRef } = useI18n({
  checkUserError: '用户状态异常',
  checkUserLogin: '重新登录',
  checkUserTips: '当前用户可能已失效，如果多次无法成功登录，请联系管理员',
})

const { user: sessionUser, signOut, signIn } = useAuth()

const dialog = useDialog()

const whereRef = computed(() => {
  const userId = sessionUser.value?.id
  if (!userId) {
    return null
  }
  return {
    where: {
      id: userId,
    },
    select: {
      block: true,
    },
  }
})

const { data: userRef, pending: getUserPendingRef } = getTrpc().db.user.findUnique.useQuery(whereRef, {
  immediate: true,
})

const isBlockRef = computed(() => {
  if (getUserPendingRef.value) {
    return false
  }

  if (sessionUser.value?.id && userRef.value?.block) {
    return true
  }
  if (sessionUser.value?.id && !userRef.value) {
    return true
  }

  return false
})

watch(
  () => isBlockRef.value,
  async (newValue) => {
    if (newValue) {
      dialog.error({
        title: i18nRef.checkUserError,
        content: i18nRef.checkUserTips,
        positiveText: i18nRef.checkUserLogin,
        maskClosable: false,
        closable: false,
        onPositiveClick: () => {
          signOut()
          signIn()
        },
      })
    }
  },
  {
    immediate: true,
  }
)

// --------- check user end ---------

// --------- check inviter start ---------
const inviterIdStorageRef = useStorage('inviterId', '')

const currentUserIdRef = useCurrentUserId()

const checkPropsRef = computed(() => {
  const inviterId = inviterIdStorageRef.value
  const currentUserId = currentUserIdRef.value

  if (inviterId && currentUserId && currentUserId !== inviterId) {
    return {
      inviterId,
      id: currentUserId,
    }
  }
})

watch(
  () => checkPropsRef.value,
  async (newValue) => {
    if (newValue) {
      const { inviterId, id } = newValue

      const currentUser = await getTrpc().db.user.findUnique.query({
        where: {
          id,
        },
        select: {
          inviterId: true,
        },
      })

      if (!currentUser.inviterId) {
        await getTrpc().db.user.update.mutate({
          data: {
            inviterId,
          },
          where: {
            id,
          },
        })

        inviterIdStorageRef.value = ''
      }
    }
  },
  {
    immediate: true,
  }
)

// --------- check inviter end ---------
</script>
