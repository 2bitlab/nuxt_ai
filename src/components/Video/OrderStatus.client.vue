<template>
  <div class="group">
    <span
      :class="{
        'inline group-hover:hidden': showGroupClassRef,
      }"
    >
      {{ showTextRef }}
    </span>
    <NButton
      v-if="canCancelRef"
      :loading="loadingRef"
      quaternary
      size="tiny"
      class="hidden group-hover:inline"
      @click="cancelOrder"
    >
      {{ i18nRef.myVideoOrderCancelOrder }}
    </NButton>
    <NuxtLink v-else-if="canViewRef" :to="urlRef">
      <NButton quaternary size="tiny" class="hidden group-hover:inline">
        {{ i18nRef.videoOrderStatusDetail }}
      </NButton>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { NButton, useDialog } from 'naive-ui'
import type { VideoOrder, VideoOrderStatus } from '@prisma/client'
const props = defineProps<{
  value: VideoOrder & {
    video?: {
      title: string
    }
  }
  refresh: () => void
}>()

const getI18nConfig = () => ({
  videoOrderStatusDetail: '查看详情',

  myVideoOrderCancelOrder: '取消订单',
  myVideoOrderCancelOrderContent: '确认取消订单？',
  myVideoOrderCancelOrderConfirmBtn: '确认',
  myVideoOrderCancelOrderRemark: '取消《${title}》订单',
})

const { i18nRef } = useI18n(getI18nConfig())

const { mapRef } = useVideoOrderStatusMap()

const statusRef = computed(() => {
  const { value: row } = props
  return row.status
})

const showTextRef = computed(() => {
  return mapRef.value[statusRef.value]
})

const currentUserIdRef = useCurrentUserId()

const canViewRef = computed(() => {
  const { value: row } = props

  const cantViewStatus: VideoOrderStatus[] = ['WAIT_HANDEL', 'PROCESSING', 'CANCEL']

  return (
    !cantViewStatus.includes(row.status) &&
    (currentUserIdRef.value === row.handlerId || currentUserIdRef.value === row.creatorId)
  )
})

const urlRef = computed(() => {
  const { value: row } = props
  return `/settings/videoOrderDetail?id=${row.id}`
})

const canCancelRef = computed(() => {
  const { value: row } = props
  return row.status === 'WAIT_HANDEL' && currentUserIdRef.value === row.creatorId
})

const showGroupClassRef = computed(() => {
  return canViewRef.value || canCancelRef.value
})

const loadingRef = ref(false)
const dialog = useDialog()

const runCancelOrder = async () => {
  loadingRef.value = true

  await getTrpc().balance.cancelPay.mutate({
    id: props.value.balanceLogId,
    remark: evaluate(i18nRef.myVideoOrderCancelOrderRemark, {
      title: props.value.video?.title,
    }),
  })
  await getTrpc().db.videoOrder.update.mutate({
    where: {
      id: props.value.id,
    },
    data: {
      status: 'CANCEL',
    },
  })
  loadingRef.value = false
  props.refresh()
}

const cancelOrder = () => {
  const d = dialog.warning({
    title: i18nRef.myVideoOrderCancelOrder,
    content: i18nRef.myVideoOrderCancelOrderContent,
    positiveText: i18nRef.myVideoOrderCancelOrderConfirmBtn,
    onPositiveClick: () => {
      d.loading = true
      return new Promise((resolve) => {
        runCancelOrder().then(resolve)
      })
    },
  })
}
</script>
