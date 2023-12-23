<template>
  <div class="container mx-auto flex flex-col gap-2 p-4">
    <div class="flex justify-between gap-4">
      <div class="flex-1">
        <NSelect
          v-model:value="creatorIdRef"
          filterable
          clearable
          remote
          :placeholder="i18nRef.myVideoOrderCreator"
          :options="userOptionsRef"
          :loading="userSearchLoadingRef"
          :render-label="userRenderLabel"
          :render-tag="userRenderSingleSelectTag"
          @search="userHandleSearch"
        />
      </div>
      <div class="flex-1">
        <NSelect v-model:value="statusRef" :options="optionsRef" />
      </div>
      <div class="flex-1">
        <NSelect
          v-model:value="handlerIdRef"
          filterable
          clearable
          remote
          :placeholder="i18nRef.myVideoOrderHandler"
          :options="userOptionsRef"
          :loading="userSearchLoadingRef"
          :render-label="userRenderLabel"
          :render-tag="userRenderSingleSelectTag"
          @search="userHandleSearch"
        />
      </div>
      <div class="flex-1">
        <NDatePicker v-model:value="rangeCreatedAtRef" type="daterange" clearable />
      </div>
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
const VideoOrderHandler = resolveComponent('VideoOrderHandler')
const UserAvatarCard = resolveComponent('UserAvatarCard')
const VideoOrderStatus = resolveComponent('VideoOrderStatus')
const VideoAvatarCard = resolveComponent('VideoAvatarCard')

const { optionsRef } = useVideoOrderStatusOptions()

const getI18nConfig = () => ({
  myVideoOrderVideo: '视频',
  myVideoOrderPrice: '价格',

  myVideoOrderStatus: '状态',

  myVideoOrderHandler: '处理人',
  myVideoOrderCreator: '下单人',
})

const {
  i18nRef,
  paginationReactive,
  loadingRef,
  whereRef,
  listRef,
  columnsRef,
  handleSorterChange,
  handleFiltersChange,
} = useDataList({
  model: 'videoOrder',
  getI18nConfig,
  getColumns: ({ i18nRef, refresh }) => {
    const columns: DataTableColumn<VideoOrder>[] = [
      {
        title: i18nRef.myVideoOrderCreator,
        key: 'creatorId',
        width: 250,
        resizable: true,
        render: (row) => {
          return h(UserAvatarCard, {
            user: row.creator,
            round: true,
          })
        },
      },
      {
        title: i18nRef.myVideoOrderVideo,
        key: 'videoId',
        sorter: {
          multiple: 3,
        },
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
        width: 100,
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
        width: 150,
        sorter: {
          multiple: 3,
        },
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
        width: 250,
        render: (row) => {
          return h(VideoOrderHandler, {
            value: row,
            refresh,
          })
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
      creatorId: true,
      creator: {
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

const creatorIdRef = ref<string>()
const handlerIdRef = ref<string>()

const {
  optionsRef: userOptionsRef,
  searchLoadingRef: userSearchLoadingRef,
  handleSearch: userHandleSearch,
  renderLabel: userRenderLabel,
  renderSingleSelectTag: userRenderSingleSelectTag,
} = useUserSelect({
  getBefOrList: async () => {
    const orList = []
    if (creatorIdRef.value) {
      orList.push({
        id: creatorIdRef.value,
      })
    }
    if (handlerIdRef.value) {
      orList.push({
        id: handlerIdRef.value,
      })
    }
    return orList
  },
})

watch(
  () => creatorIdRef.value,
  (newValue) => {
    const { where } = whereRef.value as any
    if (newValue) {
      where.creatorId = newValue
    } else {
      where.creatorId = undefined
    }

    whereRef.value = {
      where,
    }

    userHandleSearch()
  },
  {
    immediate: true,
  }
)

watch(
  () => handlerIdRef.value,
  (newValue) => {
    const { where } = whereRef.value as any
    if (newValue) {
      where.handlerId = newValue
    } else {
      where.handlerId = undefined
    }

    whereRef.value = {
      where,
    }

    userHandleSearch()
  },
  {
    immediate: true,
  }
)
</script>
