<template>
  <div class="flex items-center gap-2 overflow-hidden" :title="showNameRef">
    <NAvatar :src="avatarUrlRef" :round="round" :size="size ?? 'small'" />
    <div v-if="!(justAvatar ?? false)" class="flex-1 truncate">{{ showNameRef }}</div>
  </div>
</template>

<script setup lang="ts">
import { NAvatar } from 'naive-ui'
import type { Video } from '@prisma/client'
const props = defineProps<{
  video: Partial<Video>
  round?: boolean
  size?: 'small' | 'medium' | 'large' | number
  justAvatar?: boolean
}>()

const showNameRef = computed(() => {
  const { title } = props.video || {}
  return title ?? ''
})

const avatarUrlRef = computed(() => {
  const { coverUrl } = props.video || {}
  return coverUrl
})
</script>
