<template>
  <div>
    <NSpin size="large" :show="pending">
      <div v-if="data"></div>
      <NResult
        v-else-if="isNotFoundRef"
        status="404"
        :title="i18nRef.videoOrderDetailNotFoundTitle"
        :description="i18nRef.videoOrderDetailNotFoundDescription"
      >
        <template #footer>
          <NuxtLink to="/">
            <NButton size="large" quaternary>{{ i18nRef.videoOrderDetailNotFoundBtn }}</NButton>
          </NuxtLink>
        </template>
      </NResult>
    </NSpin>
  </div>
</template>

<script setup lang="ts">
import { NResult, NSpin, NButton } from 'naive-ui'

const getI18nConfig = () => ({
  videoOrderDetailVideo: '视频',
  videoOrderDetailPrice: '价格',

  videoOrderDetailStatus: '状态',

  videoOrderDetailNotFoundBtn: '返回首页',

  videoOrderDetailNotFoundTitle: '资源不存在',
  videoOrderDetailNotFoundDescription: '资源不存在或无权访问',
})

const { i18nRef } = useI18n(getI18nConfig())

const currentUserIdRef = useCurrentUserId()
const query = useUrlSearchParams('history')

const queryOrderIdRef = computed(() => {
  const { id } = query
  return id as string
})

const whereRef = computed(() => {
  return {
    where: {
      id: queryOrderIdRef.value,
      OR: [
        {
          userId: currentUserIdRef.value,
        },
        {
          handlerId: currentUserIdRef.value,
        },
      ],
    },
  }
})

const { data, pending } = getTrpc().db.videoOrder.findUnique.useQuery(whereRef)

const isNotFoundRef = computed(() => {
  return !pending.value && !data.value
})
</script>
