<template>
  <div>
    <UserAvatarCard v-if="value.handler" :user="value.handler" round />
    <NButton v-else quaternary size="tiny" :loading="loadingRef" type="primary" @click="handleOrder">{{
      i18nRef.videoOrderHandleHandleIt
    }}</NButton>
  </div>
</template>

<script setup lang="ts">
import type { VideoOrder, User } from '@prisma/client'

import { NButton } from 'naive-ui'

const props = defineProps<{
  value: VideoOrder & {
    handler?: User
  }
  refresh: () => void
}>()

const currentUserIdRef = useCurrentUserId()

const getI18nConfig = () => ({
  videoOrderHandleHandleIt: '接单',
})

const { i18nRef } = useI18n(getI18nConfig())

const loadingRef = ref(false)

const handleOrder = async () => {
  loadingRef.value = true
  try {
    await getTrpc().db.videoOrder.update.mutate({
      where: {
        id: props.value.id,
      },
      data: {
        handlerId: currentUserIdRef.value,
        handleAt: new Date(),
        status: 'PROCESSING',
      },
    })
    props.refresh()
  } catch (e) {
    console.error(e)
  } finally {
    loadingRef.value = false
  }
}
</script>
