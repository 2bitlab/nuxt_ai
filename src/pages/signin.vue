<template>
  <SignInPage />
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  },
})
</script>
