<template>
  <NLayout>
    <NLayoutHeader>
      <Header />
    </NLayoutHeader>
    <NLayout>
      <NLayoutContent>
        <slot />
      </NLayoutContent>
    </NLayout>
  </NLayout>
</template>

<script setup lang="ts">
import { NLayout, NLayoutHeader, NLayoutContent } from 'naive-ui'
</script>
