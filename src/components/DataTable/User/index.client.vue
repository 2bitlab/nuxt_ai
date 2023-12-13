<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-end justify-between gap-5">
      <div>
        <div>
          <NInput v-model:value="inputValueRef">
            <template #prefix>
              <Icon name="ic:sharp-search" size="16" />
            </template>
          </NInput>
        </div>
        <div>
          <div>{{ i18nRef.dataTableUserCreatedAt }}</div>
          <NDatePicker v-model:value="rangeCreatedAtRef" type="daterange" clearable />
        </div>
      </div>
      <div>
        <NButton @click="() => (addDrawerShowRef = true)">{{ i18nRef.dataTableAddBtn }}</NButton>
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
          <NFormItem :label="i18nRef.dataTableUserEmail" path="email">
            <NInput v-model:value="formValueRef.email" />
          </NFormItem>
          <NFormItem :label="i18nRef.dataTableUserName" path="name">
            <NInput v-model:value="formValueRef.name" />
          </NFormItem>
          <NFormItem :label="i18nRef.dataTableUserPassword" path="password">
            <NInput v-model:value="formValueRef.password" />
          </NFormItem>
        </NForm>
        <template #footer>
          <div class="flex justify-end">
            <NButton round type="primary" @click="handleSaveButtonClick">
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
  NDatePicker,
} from 'naive-ui'
import type { DataTableColumn, FormRules } from 'naive-ui'
import { debounce } from 'lodash-es'
import type { User } from '@prisma/client'
import ShowOrEditInput from '../ShowOrEditInput.vue'
import ShowOrEditSwitch from '../ShowOrEditSwitch.vue'
import ItemInfo from './ItemInfo.vue'
import AvatarCard from '~/components/User/AvatarCard.vue'

const getI18nConfig = () => ({
  // User
  dataTableUserEmail: '邮箱(email)',
  dataTableUserName: '昵称(name)',
  dataTableUserPassword: '密码(password)',
  dataTableUserCreatedAt: '注册时间',
  dataTableUserLastLogin: '最后登录',
  dataTableUserBalance: '余额',
  dataTableUserBlock: '禁用',

  dataTableUserBlockIng: '禁用中',
  dataTableUserUnBlockIng: '没禁用',

  dataTableUserEmailHasBeenRegistered: '邮箱已被注册',
  dataTableUserNameHasBeenRegistered: '昵称已被注册',
  dataTableUserEmailFormatError: '请使用正确的邮箱格式',
})

type I18nType = ReturnType<typeof getI18nConfig>

// const userRef = useCurrentUser()

const blockFilterOptionsRef = computed(() => {
  const arr: any = [
    {
      label: i18nRef.dataTableUserBlockIng,
      value: true,
    },
    {
      label: i18nRef.dataTableUserUnBlockIng,
      value: false,
    },
  ]

  return arr
})

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
  handleSorterChange,
  handleFiltersChange,

  handleDropdownSelect,
  onClickDropdownOutside,
  handleSaveButtonClick,
} = useDataTable<User, I18nType>({
  model: 'user',
  getI18nConfig,

  getColumns: (update) => {
    const columns: DataTableColumn<User>[] = [
      {
        type: 'expand',
        renderExpand: (rowData) => {
          return h(ItemInfo, {
            user: rowData,
          })
        },
      },
      {
        title: '',
        key: 'image',
        width: 50,
        render: (row) => {
          return h(AvatarCard, {
            user: row,
            justAvatar: true,
            round: true,
          })
        },
      },
      {
        title: i18nRef.dataTableUserEmail,
        key: 'email',
        width: 200,
        sorter: {
          multiple: 3,
        },
        resizable: true,
        render: (row) => {
          return h(ShowOrEditInput, {
            value: row.email,
            onUpdateValue: async (v) => {
              return await update(row.id, {
                email: v as string,
              })
            },
          })
        },
      },
      {
        title: i18nRef.dataTableUserName,
        key: 'name',
        width: 200,
        sorter: {
          multiple: 3,
        },
        resizable: true,
        render: (row) => {
          return h(ShowOrEditInput, {
            value: row.name,
            onUpdateValue: async (v) => {
              return await update(row.id, {
                name: v as string,
              })
            },
          })
        },
      },

      {
        title: i18nRef.dataTableUserBalance,
        key: 'balanceLogs',
        width: 100,

        render: (row) => {
          const { balanceLogs } = row as any

          const [first] = balanceLogs || []

          const { balance } = first || {}
          if (balance) {
            return balance
          }
          return '-'
        },
      },
      {
        title: i18nRef.dataTableUserCreatedAt,
        key: 'createdAt',
        width: 150,
        sorter: {
          multiple: 3,
        },
        resizable: true,
        render: (row) => {
          return getDayjs(row.createdAt).format('YYYY-MM-DD HH:mm')
        },
      },
      {
        title: i18nRef.dataTableUserLastLogin,
        key: 'loginLogs',
        width: 150,

        render: (row) => {
          const { loginLogs } = row as any

          const [first] = loginLogs || []

          const { startAt } = first || {}
          if (startAt) {
            return getDayjs(startAt).format('YYYY-MM-DD HH:mm')
          }
          return '-'
        },
      },
      {
        title: i18nRef.dataTableUserBlock,
        key: 'block',
        width: 120,
        render: (row) => {
          return h(ShowOrEditSwitch, {
            value: row.block,
            onUpdateValue: async (v) => {
              return await update(row.id, {
                block: v,
              })
            },
          })
        },
        sorter: {
          multiple: 3,
        },
        filterOptions: blockFilterOptionsRef.value,
        filter: () => true,
        filterMultiple: false,
      },
      {
        title: i18nRef.dataTableUserPassword,
        key: 'password',
        ellipsis: true,
        resizable: true,
        render: (row) => {
          return h(ShowOrEditInput, {
            value: row.password,
            editValueEmpty: true,
            onUpdateValue: async (v) => {
              if (v) {
                const password = await getTrpc().password.hash.query({
                  email: row.email,
                  password: v as string,
                })

                return await update(row.id, {
                  password,
                })
              }
              return true
            },
          })
        },
      },
    ]
    return columns
  },
  getRules: (i18nRef) => {
    const rules: FormRules = {
      email: [
        {
          required: true,
          trigger: 'blur',
          validator: (_, value: string) => {
            const v = value.trim()
            if (!v) {
              return Promise.reject(
                Error(evaluate(i18nRef.dataTableSaveRequiredTips, { text: i18nRef.dataTableUserEmail }))
              )
            }

            if (isEmail(v) === false) {
              return Promise.reject(Error(i18nRef.dataTableUserEmailFormatError))
            }

            return new Promise<void>((resolve, reject) => {
              getTrpc()
                .db.user.findUnique.query({
                  where: {
                    email: v,
                  },
                })
                .then((user) => {
                  if (user) {
                    reject(Error(i18nRef.dataTableUserEmailHasBeenRegistered)) // reject with error message
                  } else {
                    resolve()
                  }
                })
            })
          },
        },
      ],
      password: [
        {
          required: true,
          message: evaluate(i18nRef.dataTableSaveRequiredTips, { text: i18nRef.dataTableUserPassword }),
          trigger: ['blur'],
        },
      ],
      name: [
        {
          required: true,
          trigger: 'blur',
          validator: (_, value: string) => {
            if (!value.trim()) {
              return Promise.reject(
                Error(evaluate(i18nRef.dataTableSaveRequiredTips, { text: i18nRef.dataTableUserName }))
              )
            }

            return new Promise<void>((resolve, reject) => {
              getTrpc()
                .db.user.findUnique.query({
                  where: {
                    name: value.trim(),
                  },
                })
                .then((user) => {
                  if (user) {
                    reject(Error(i18nRef.dataTableUserNameHasBeenRegistered)) // reject with error message
                  } else {
                    resolve()
                  }
                })
            })
          },
        },
      ],
    }

    return rules
  },
  getDefFormData: () => ({
    name: '',
    email: '',
    password: '',
  }),
  createFormat: async (formValueRef) => {
    const hashPassword = await getTrpc().password.hash.query({
      email: formValueRef.email.trim(),
      password: formValueRef.password.trim(),
    })

    return {
      name: formValueRef.name.trim(),
      email: formValueRef.email.trim(),
      password: hashPassword,
    }
  },
  getSelectForList: () => {
    return {
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        password: true,
        createdAt: true,
        deletedAt: true,
        deleted: true,
        block: true,
        inviter: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        _count: {
          select: { invitee: true },
        },
        loginLogs: {
          select: {
            startAt: true,
          },
          orderBy: { startAt: 'desc' },
          take: 1,
        },
        balanceLogs: {
          select: {
            balance: true,
          },
          orderBy: { createdAt: 'desc' },
          take: 1,
        },
      },
    }
  },
})

const inputValueRef = ref('')

watch(
  () => inputValueRef.value,
  debounce((newValue) => {
    const { where } = whereRef.value
    let newWhere = {
      OR: [
        {
          id: {
            contains: newValue,
          },
        },
        {
          name: {
            contains: newValue,
          },
        },
        {
          email: {
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

const { rangeCreatedAtRef } = useCreatedAtSelect(whereRef)
</script>
