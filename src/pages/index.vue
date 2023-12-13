<template>
  <VideoList />
</template>

<script lang="ts" setup>
definePageMeta({ middleware: 'auth', auth: { guestRedirectTo: '/signin' } })
</script>
