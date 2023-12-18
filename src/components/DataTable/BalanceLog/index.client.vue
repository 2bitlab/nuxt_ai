<template>
  <div class="container mx-auto flex flex-col gap-2 p-4">
    <div class="flex items-end justify-between gap-5">
      <div class="flex flex-col gap-2">
        <div>
          <div>{{ i18nRef.dataTableBalanceLogUser }}</div>
          <NSelect
            v-model:value="formValueRef.userId"
            filterable
            clearable
            remote
            :options="optionsRef"
            :loading="searchLoadingRef"
            :render-label="renderLabel"
            :render-tag="renderSingleSelectTag"
            @search="handleSearch"
          />
        </div>
        <div>
          <div>{{ i18nRef.dataTableCreatedAt }}</div>
          <NDatePicker v-model:value="rangeCreatedAtRef" type="daterange" clearable />
        </div>
      </div>
      <div class="flex gap-2">
        <NButton @click="openGiveAwayDrawer">{{ i18nRef.dataTableBalanceLogGiveAway }}</NButton>
        <NButton @click="openTopUpDrawer">{{ i18nRef.dataTableBalanceLogTopUp }}</NButton>
      </div>
    </div>
    <NDataTable
      remote
      :row-key="(row) => row.id"
      :columns="columnsRef"
      :data="listRef"
      :loading="loadingRef"
      :row-props="rowProps"
      :pagination="paginationReactive"
      :on-update:sorter="handleSorterChange"
      :on-update:filters="handleFiltersChange"
    />
    <NDrawer v-model:show="addDrawerShowRef" :mask-closable="false" resizable>
      <NDrawerContent closable>
        <NForm ref="formRef" :model="formValueRef" :rules="rulesRef">
          <NFormItem :label="i18nRef.dataTableBalanceLogUser" path="userId">
            <NSelect
              v-model:value="formValueRef.userId"
              filterable
              clearable
              remote
              :options="optionsRef"
              :loading="searchLoadingRef"
              :render-label="renderLabel"
              :render-tag="renderSingleSelectTag"
              @search="handleSearch"
            />
          </NFormItem>
          <NFormItem :label="i18nRef.dataTableBalanceLogTopUp" path="price">
            <NInputNumber v-model:value="formValueRef.price">
              <template #prefix> ￥ </template>
            </NInputNumber>
          </NFormItem>
          <NFormItem :label="i18nRef.dataTableBalanceLogRemark" path="remark">
            <NInput v-model:value="formValueRef.remark" />
          </NFormItem>
        </NForm>
        <template #footer>
          <div class="flex justify-end">
            <NButton round type="primary" :loading="loadingRef" @click="handleSaveButtonClick">
              {{ i18nRef.dataTableSaveBtn }}
            </NButton>
          </div>
        </template>
      </NDrawerContent>
    </NDrawer>

    <NDrawer v-model:show="giveAwayDrawerShowRef" :mask-closable="false" resizable>
      <NDrawerContent closable>
        <NForm ref="giveAwayFormRef" :model="formValueRef" :rules="rulesRef">
          <NFormItem :label="i18nRef.dataTableBalanceLogUser" path="userId">
            <NSelect
              v-model:value="formValueRef.userId"
              filterable
              clearable
              remote
              :options="optionsRef"
              :loading="searchLoadingRef"
              :render-label="renderLabel"
              :render-tag="renderSingleSelectTag"
              @search="handleSearch"
            />
          </NFormItem>
          <NFormItem :label="i18nRef.dataTableBalanceLogGiveAway" path="price">
            <NInputNumber v-model:value="formValueRef.price">
              <template #prefix> ￥ </template>
            </NInputNumber>
          </NFormItem>
          <NFormItem :label="i18nRef.dataTableBalanceLogRemark" path="remark">
            <NInput v-model:value="formValueRef.remark" />
          </NFormItem>
        </NForm>
        <template #footer>
          <div class="flex justify-end">
            <NButton round type="primary" :loading="loadingRef" @click="handleGiveAwaySaveButtonClick">
              {{ i18nRef.dataTableSaveBtn }}
            </NButton>
          </div>
        </template>
      </NDrawerContent>
    </NDrawer>

    <NDropdown
      placement="bottom-start"
      trigger="manual"
      :x="xRef"
      :y="yRef"
      :options="dropdownOptionsRef"
      :show="showDropdownRef"
      :on-clickoutside="onClickDropdownOutside"
      @select="handleDropdownSelect"
    />
  </div>
</template>

<script setup lang="ts">
import {
  NDataTable,
  NButton,
  NDrawer,
  NDrawerContent,
  NForm,
  NFormItem,
  NInput,
  NDropdown,
  NSelect,
  NInputNumber,
  NDatePicker,
} from 'naive-ui'
import type { DataTableColumn, FormRules, FormInst } from 'naive-ui'
import type { BalanceLog } from '@prisma/client'
import Change from './Change.vue'
import AvatarCard from '~/components/User/AvatarCard.vue'

const getI18nConfig = () => ({
  dataTableBalanceLogUser: '用户',

  dataTableBalanceLogAvailableBalance: '可用余额',
  dataTableBalanceLogLockedBalance: '锁定余额',
  dataTableBalanceLogWithdrawableBalance: '可提现余额',
  dataTableBalanceLogNonWithdrawableBalance: '不可提现余额',
  dataTableBalanceLogWithdrawLockedBalance: '提现锁定余额',

  dataTableBalanceLogPrice: '金额',

  dataTableBalanceLogRemark: '备注(remark)',
  dataTableBalanceLogTopUp: '充值',

  dataTableBalanceLogGiveAway: '赠送',
})

type I18nType = ReturnType<typeof getI18nConfig>

const {
  paginationReactive,
  loadingRef,

  listRef,
  i18nRef,
  columnsRef,
  rowProps,
  dropdownOptionsRef,
  xRef,
  yRef,
  showDropdownRef,
  rulesRef,
  formValueRef,
  addDrawerShowRef,
  formRef,
  whereRef,
  message,
  refresh,
  handleSorterChange,
  handleFiltersChange,

  handleDropdownSelect,
  onClickDropdownOutside,
  handleSaveButtonClick,
} = useDataTable<BalanceLog & { price: number }, I18nType>({
  model: 'balanceLog',
  getI18nConfig,

  getColumns: ({ i18nRef }) => {
    const columns: DataTableColumn<BalanceLog>[] = [
      {
        type: 'expand',
        // expandable: (rowData) => !!rowData.log,
        renderExpand: (rowData) => {
          return h(
            'div',
            {
              class: 'text-xs',
            },
            [
              h('div', {}, i18nRef.dataTableBalanceLogRemark),
              h(
                'div',
                {
                  class: 'whitespace-pre-wrap',
                },
                rowData.remark
              ),
              h(
                'div',
                {
                  class: 'whitespace-pre-wrap',
                },
                JSON.stringify(rowData.log, null, 2)
              ),
            ]
          )
        },
      },
      {
        title: i18nRef.dataTableBalanceLogUser,
        key: 'user',
        width: 180,
        resizable: true,
        render: (row) => {
          return h(
            'div',
            {
              class: 'cursor-pointer',
              onClick: () => {
                console.log('click row.userId', row.userId)
                formValueRef.userId = row.userId
              },
            },
            h(AvatarCard, {
              user: row.user,
              round: true,
            })
          )
        },
      },
      {
        title: i18nRef.dataTableBalanceLogAvailableBalance,
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
      {
        title: i18nRef.dataTableBalanceLogLockedBalance,
        key: 'lockedBalance',
        resizable: true,
        render: (row) => {
          return h(Change, {
            balance: row.lockedBalance,
            change: row.lockedBalanceChange,
            before: row.lockedBalanceBefore,
          })
        },
      },
      {
        title: i18nRef.dataTableBalanceLogWithdrawableBalance,
        key: 'withdrawableBalance',
        resizable: true,
        render: (row) => {
          return h(Change, {
            balance: row.withdrawableBalance,
            change: row.withdrawableBalanceChange,
            before: row.withdrawableBalanceBefore,
          })
        },
      },
      {
        title: i18nRef.dataTableBalanceLogNonWithdrawableBalance,
        key: 'nonWithdrawableBalance',
        resizable: true,
        render: (row) => {
          return h(Change, {
            balance: row.nonWithdrawableBalance,
            change: row.nonWithdrawableBalanceChange,
            before: row.nonWithdrawableBalanceBefore,
          })
        },
      },
      {
        title: i18nRef.dataTableBalanceLogWithdrawLockedBalance,
        key: 'withdrawLockedBalance',
        resizable: true,
        render: (row) => {
          return h(Change, {
            balance: row.withdrawLockedBalance,
            change: row.withdrawLockedBalanceChange,
            before: row.withdrawLockedBalanceBefore,
          })
        },
      },

      {
        title: i18nRef.dataTableCreator,
        key: 'creator',
        width: 180,
        resizable: true,
        render: (row) => {
          return h(AvatarCard, {
            user: row.creator,
            round: true,
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
  getRules: (i18nRef) => {
    const rules: FormRules = {
      price: [
        {
          required: true,
          trigger: ['blur'],
          type: 'number',
          validator: (_, value) => {
            const v = `${value}`.trim()

            if (v === '0' || !v) {
              return Promise.reject(
                new Error(evaluate(i18nRef.dataTableSaveRequiredTips, { text: i18nRef.dataTableBalanceLogPrice }))
              )
            }
          },
        },
      ],
      remark: [
        {
          required: true,
          message: evaluate(i18nRef.dataTableSaveRequiredTips, { text: i18nRef.dataTableBalanceLogRemark }),
          trigger: ['blur'],
        },
      ],
      userId: [
        {
          required: true,
          message: evaluate(i18nRef.dataTableSaveRequiredTips, { text: i18nRef.dataTableBalanceLogUser }),
          trigger: ['blur'],
        },
      ],
    }

    return rules
  },
  getDefFormData: () => ({
    price: 0,
    remark: '',
    userId: null,
  }),
  create: async (formValueRef) => {
    await getTrpc().balance.topUp.mutate({
      userId: formValueRef.userId,
      remark: formValueRef.remark,
      price: formValueRef.price,
    })
  },
  getSelectForList: () => ({
    select: {
      id: true,
      availableBalance: true, // 余额
      lockedBalance: true, // 锁定余额
      withdrawableBalance: true, // 可提现余额
      nonWithdrawableBalance: true, // 不可提现余额
      withdrawLockedBalance: true, // 提现锁定余额

      availableBalanceChange: true, // 余额
      lockedBalanceChange: true, // 锁定余额
      withdrawableBalanceChange: true, // 可提现余额
      nonWithdrawableBalanceChange: true, // 不可提现余额
      withdrawLockedBalanceChange: true, // 提现锁定余额

      availableBalanceBefore: true, // 余额
      lockedBalanceBefore: true, // 锁定余额
      withdrawableBalanceBefore: true, // 可提现余额
      nonWithdrawableBalanceBefore: true, // 不可提现余额
      withdrawLockedBalanceBefore: true, // 提现锁定余额

      remark: true,
      log: true,
      createdAt: true,
      userId: true,
      creator: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      },
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      },
      // preBalanceLog: {
      //   select: {
      //     availableBalance: true, // 余额
      //     lockedBalance: true, // 锁定余额
      //     withdrawableBalance: true, // 可提现余额
      //     nonWithdrawableBalance: true, // 不可提现余额
      //     withdrawLockedBalance: true, // 提现锁定余额

      //     availableBalanceChange: true, // 余额
      //     lockedBalanceChange: true, // 锁定余额
      //     withdrawableBalanceChange: true, // 可提现余额
      //     nonWithdrawableBalanceChange: true, // 不可提现余额
      //     withdrawLockedBalanceChange: true, // 提现锁定余额

      //     availableBalanceBefore: true, // 余额
      //     lockedBalanceBefore: true, // 锁定余额
      //     withdrawableBalanceBefore: true, // 可提现余额
      //     nonWithdrawableBalanceBefore: true, // 不可提现余额
      //     withdrawLockedBalanceBefore: true, // 提现锁定余额
      //     remark: true,
      //   },
      // },
    },
  }),
  initOrderBy: () => [
    {
      createdAt: 'desc',
    },
  ],
})

const giveAwayDrawerShowRef = ref(false)

const { optionsRef, searchLoadingRef, handleSearch, renderLabel, renderSingleSelectTag } = useUserSelect({
  getBefOrList: async () => {
    const orList = []
    if (formValueRef.userId) {
      orList.push({
        id: formValueRef.userId,
      })
    }
    return orList
  },
})

watch(
  () => formValueRef.userId,
  (newValue) => {
    const { where } = whereRef.value as any
    if (newValue) {
      where.userId = newValue
    } else {
      where.userId = undefined
    }

    whereRef.value = {
      where,
    }

    handleSearch()
  }
)

const giveAwayFormRef = ref<FormInst | null>()

const handleGiveAwaySaveButtonClick = async (e: MouseEvent) => {
  e.preventDefault()

  await giveAwayFormRef.value?.validate()

  loadingRef.value = true

  try {
    await getTrpc().balance.giveAway.mutate({
      userId: formValueRef.userId,
      remark: formValueRef.remark,
      price: formValueRef.price,
    })
    refresh()
    message.success(i18nRef.dataTableSaveSuccessTips)

    giveAwayDrawerShowRef.value = false
  } catch (error) {
    console.error('error', error)
    loadingRef.value = false

    message.error(i18nRef.dataTableSaveErrorTips)
  }
}

const openGiveAwayDrawer = () => {
  giveAwayDrawerShowRef.value = true
  formValueRef.remark = ''
}

const openTopUpDrawer = () => {
  addDrawerShowRef.value = true
  formValueRef.remark = '充值'
}

const { rangeCreatedAtRef } = useCreatedAtSelect(whereRef)
</script>
