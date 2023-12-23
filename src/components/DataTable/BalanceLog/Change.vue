<template>
  <div>
    <NText :depth="before == 0 ? '3' : '1'">{{ before }}</NText>
    <NText v-if="change == 0" depth="3">{{ showChange }}</NText>
    <NText v-else strong :type="change > 0 ? 'success' : 'error'">{{ showChange }}</NText>
    <NText strong :depth="balance == 0 ? '3' : '1'">{{ balance.toLocaleString() }}</NText>
  </div>
</template>

<script setup lang="ts">
import { NText } from 'naive-ui'
const props = defineProps<{
  balance: number
  change: number
  before: number
}>()

const showChange = computed(() => {
  return props.change >= 0 ? `+${props.change}=` : `${props.change}=`
})
</script>
