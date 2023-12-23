<template>
  <NLayout>
    <NLayoutHeader>
      <Header />
    </NLayoutHeader>
    <NLayoutContent>
      <slot />
    </NLayoutContent>
  </NLayout>
</template>

<script setup lang="ts">
import { NLayout, NLayoutHeader, NLayoutContent } from 'naive-ui'
</script>
