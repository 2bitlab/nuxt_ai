<template>
  <span>{{ showLabelRef }}</span>
</template>

<script setup lang="ts">
import type { CompanyMemberRole } from '@prisma/client'
const props = defineProps<{
  value: CompanyMemberRole
}>()

const { mapRef } = useCompanyMemberRoleMap()

const showLabelRef = computed(() => {
  return mapRef.value[props.value]
})
</script>
