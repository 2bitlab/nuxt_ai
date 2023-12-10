<template>
  <div class="flex items-center gap-2 overflow-hidden" :title="showNameRef" @click="handleClick">
    <NAvatar v-if="avatarUrlRef" :src="avatarUrlRef" :round="round" :size="size ?? 'small'"></NAvatar>
    <NAvatar v-else :round="round" :size="size ?? 'small'"> {{ avatarTextRef }}</NAvatar>

    <div v-if="!(justAvatar ?? false)" class="flex-1 truncate">{{ showNameRef }}</div>
  </div>
</template>

<script setup lang="ts">
import { NAvatar } from 'naive-ui'
import type { Company } from '@prisma/client'
const props = defineProps<{
  company: Partial<Company>
  round?: boolean
  size?: 'small' | 'medium' | 'large' | number
  justAvatar?: boolean
  to?: string
}>()

const showNameRef = computed(() => {
  const { name } = props.company || {}
  return name ?? ''
})

const avatarUrlRef = computed(() => {
  const { logo } = props.company || {}
  return logo
})

const avatarTextRef = computed(() => {
  const text = showNameRef.value
  if (avatarUrlRef.value) {
    return ''
  }

  if (text.length < 6) {
    return text
  }
  return text.substr(0, 1).toUpperCase()
})

const router = useRouter()

const handleClick = () => {
  if (props.to) {
    router.push(props.to)
  }
}
</script>
