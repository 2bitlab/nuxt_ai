<template>
  <SignInPage />
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
  middleware: 'guest-only',
})
</script>
