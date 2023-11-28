<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { provideHooksContext } from '~/modelHooks'

// Provide tanstack-query context
// Use an absolute endpoint so server-side fetch works too
provideHooksContext({
  endpoint: '/api/model',
})
</script>
