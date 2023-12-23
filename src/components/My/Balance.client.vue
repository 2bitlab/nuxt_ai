<template>
  <div v-if="showRef" class="container mx-auto flex flex-col gap-2 p-4">
    <div class="flex gap-4">
      <NInput v-model:value="inputValueRef">
        <template #prefix>
          <Icon name="ic:sharp-search" size="16" />
        </template>
      </NInput>

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
import { NDataTable, NInput, NDatePicker } from 'naive-ui'
import type { BalanceLog } from '@prisma/client'
import { debounce } from 'lodash-es'
import type { DataTableColumn } from 'naive-ui'

import Change from '~/components/DataTable/BalanceLog/Change.vue'

const getI18nConfig = () => ({
  myBalanceAvailableBalance: '可用余额',
  myBalanceWithdrawableBalance: '可提现余额',

  myBalanceRemark: '备注',
  myBalanceTopUp: '充值',
})

const currentUserIdRef = useCurrentUserId()

const showRef = computed(() => {
  return !!currentUserIdRef.value
})

const { paginationReactive, loadingRef, whereRef, listRef, columnsRef, handleSorterChange, handleFiltersChange } =
  useDataList({
    model: 'balanceLog',
    getI18nConfig,
    getColumns: ({ i18nRef }) => {
      const columns: DataTableColumn<BalanceLog>[] = [
        {
          title: i18nRef.myBalanceAvailableBalance,
          key: 'availableBalance',
          resizable: true,
          render: (row) => {
            return h(Change, {
              balance: row.availableBalance,
              change: row.availableBalanceChange,
              before: row.availableBalanceBefore,
            })
          },
        },

        // {
        //   title: i18nRef.myBalanceWithdrawableBalance,
        //   key: 'withdrawableBalance',
        //   resizable: true,
        //   render: (row) => {
        //     return h(Change, {
        //       balance: row.withdrawableBalance,
        //       change: row.withdrawableBalanceChange,
        //       before: row.withdrawableBalanceBefore,
        //     })
        //   },
        // },

        {
          title: i18nRef.myBalanceRemark,
          key: 'remark',
          resizable: true,
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
        availableBalance: true, // 余额
        // lockedBalance: true, // 锁定余额
        // withdrawableBalance: true, // 可提现余额
        // nonWithdrawableBalance: true, // 不可提现余额
        // withdrawLockedBalance: true, // 提现锁定余额

        availableBalanceChange: true, // 余额
        // lockedBalanceChange: true, // 锁定余额
        // withdrawableBalanceChange: true, // 可提现余额
        // nonWithdrawableBalanceChange: true, // 不可提现余额
        // withdrawLockedBalanceChange: true, // 提现锁定余额

        availableBalanceBefore: true, // 余额
        // lockedBalanceBefore: true, // 锁定余额
        // withdrawableBalanceBefore: true, // 可提现余额
        // nonWithdrawableBalanceBefore: true, // 不可提现余额
        // withdrawLockedBalanceBefore: true, // 提现锁定余额

        remark: true,
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
        userId: newValue,
      },
    }
  },
  {
    immediate: true,
  }
)

const inputValueRef = ref('')

watch(
  () => inputValueRef.value,
  debounce((newValue) => {
    const { where } = whereRef.value
    let newWhere = {
      OR: [
        {
          remark: {
            contains: newValue,
          },
        },
      ],
    }
    if (!newValue) {
      newWhere = {
        OR: undefined,
      }
    }

    whereRef.value = {
      where: {
        ...where,
        ...newWhere,
      },
    }
  }, 300)
)
</script>
