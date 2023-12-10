<template>
  <span>{{ showLabelRef }}</span>
</template>

<script setup lang="ts">
import type { CompanyStatus } from '@prisma/client'
const props = defineProps<{
  value: CompanyStatus
}>()

const { mapRef } = useCompanyStatusMap()

const showLabelRef = computed(() => {
  return mapRef.value[props.value]
})
</script>
