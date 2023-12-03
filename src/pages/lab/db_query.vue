<script setup lang="ts">
import type { BalanceLog } from '@prisma/client'

const { data: count } = useCount({
  model: 'balanceLog',
})
const { data } = useFindMany<BalanceLog[]>({
  model: 'balanceLog',
})
</script>

<template>
  <div>{{ count }}</div>
  <ul v-if="data" class="space-y-2 py-8">
    <li v-for="item in data" :key="item.id">
      {{ item.id }}
    </li>
  </ul>
</template>
