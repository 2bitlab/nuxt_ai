<template>
  <div v-if="showRef" class="container mx-auto flex flex-col gap-2 p-4">
    <div class="flex justify-between gap-4">
      <NSelect v-model:value="statusRef" :options="optionsRef" clearable />
      <NDatePicker v-model:value="rangeCreatedAtRef" type="daterange" clearable />
    </div>
    <NDataTable
      remote
      :row-key="(row) => row.id"
      :columns="columnsRef"
      :data="listRef"
      :loading="loadingRef"
      :pagination="paginationReactive"
      :on-update:sorter="handleSorterChange"
      :on-update:filters="handleFiltersChange"
    />
  </div>
</template>

<script setup lang="ts">
import { NDataTable, NSelect, NDatePicker } from 'naive-ui'
import type { VideoOrder } from '@prisma/client'
import type { DataTableColumn } from 'naive-ui'

const NuxtLink = resolveComponent('NuxtLink')
const VideoAvatarCard = resolveComponent('VideoAvatarCard')
const UserAvatarCard = resolveComponent('UserAvatarCard')

const VideoOrderStatus = resolveComponent('VideoOrderStatus')

const { optionsRef } = useVideoOrderStatusOptions()

const getI18nConfig = () => ({
  myVideoOrderVideo: '视频',
  myVideoOrderPrice: '价格',

  myVideoOrderStatus: '状态',

  myVideoOrderHandler: '处理人',
})

const currentUserIdRef = useCurrentUserId()

const showRef = computed(() => {
  return !!currentUserIdRef.value
})

const { paginationReactive, loadingRef, whereRef, listRef, columnsRef, handleSorterChange, handleFiltersChange } =
  useDataList({
    model: 'videoOrder',
    getI18nConfig,
    getColumns: ({ i18nRef, refresh }) => {
      const columns: DataTableColumn<VideoOrder>[] = [
        {
          title: i18nRef.myVideoOrderVideo,
          key: 'videoId',
          resizable: true,
          render: (row) => {
            return h(
              NuxtLink,
              {
                to: {
                  path: '/',
                  query: {
                    id: row.videoId,
                  },
                },
              },
              [
                h(VideoAvatarCard, {
                  video: row.video,
                }),
              ]
            )
          },
        },
        {
          title: i18nRef.myVideoOrderPrice,
          key: 'price',
          sorter: {
            multiple: 3,
          },
          resizable: true,
          render: (row) => {
            return row.price.toLocaleString('zh-CN', {
              style: 'currency',
              currency: 'CNY',
            })
          },
        },
        {
          title: i18nRef.myVideoOrderStatus,
          key: 'status',
          sorter: {
            multiple: 3,
          },
          width: 150,
          resizable: true,
          render: (row) => {
            return h(VideoOrderStatus, {
              value: row,
              refresh,
            })
          },
        },
        {
          title: i18nRef.myVideoOrderHandler,
          key: 'handlerId',

          resizable: true,
          render: (row) => {
            if (row.handlerId) {
              return h(UserAvatarCard, {
                user: row.handler,
                round: true,
              })
            }
            return '-'
          },
        },
        {
          title: i18nRef.dataTableCreatedAt,
          key: 'createdAt',
          width: 150,
          sortOrder: 'descend' as any,
          sorter: {
            multiple: 3,
          },
          resizable: true,
          render: (row) => {
            return getDayjs(row.createdAt).format('YYYY-MM-DD HH:mm')
          },
        },
      ]
      return columns
    },
    getSelectForList: () => ({
      select: {
        id: true,
        videoId: true,
        video: {
          select: {
            id: true,
            title: true,
            coverUrl: true,
          },
        },
        price: true,
        balanceLogId: true,
        status: true,
        handlerId: true,
        handler: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
        createdAt: true,
      },
    }),
    initOrderBy: () => [
      {
        createdAt: 'desc',
      },
    ],
  })

const { rangeCreatedAtRef } = useCreatedAtSelect(whereRef)

watch(
  () => currentUserIdRef.value,
  (newValue) => {
    const { where } = whereRef.value

    whereRef.value = {
      where: {
        ...where,
        creatorId: newValue,
      },
    }
  },
  {
    immediate: true,
  }
)

const statusRef = ref('')

watch(
  () => statusRef.value,
  (newValue) => {
    const { where } = whereRef.value
    let newWhere = {
      status: newValue,
    }
    if (!newValue) {
      newWhere = {
        status: undefined,
      }
    }

    whereRef.value = {
      where: {
        ...where,
        ...newWhere,
      },
    }
  }
)
</script>
