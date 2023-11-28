<script setup lang="ts">
import { useFindManyBalanceLog, useCountBalanceLog } from '~/modelHooks'

const { data: count } = useCountBalanceLog()
const { data } = useFindManyBalanceLog()
</script>

<template>
  <div>{{ count }}</div>
  <ul v-if="data" class="space-y-2 py-8">
    <li v-for="item in data" :key="item.id">
      {{ item.id }}
    </li>
  </ul>
</template>
