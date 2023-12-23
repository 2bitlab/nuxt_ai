<template>
  <div class="flex flex-col gap-2 p-4">
    <div class="flex items-end justify-between gap-5">
      <div class="flex flex-col gap-2">
        <div>
          <NInput v-model:value="inputValueRef">
            <template #prefix>
              <Icon name="ic:sharp-search" size="16" />
            </template>
          </NInput>
        </div>
        <div class="flex flex-col gap-2">
          <div>{{ i18nRef.dataTableCompanyCreatedAt }}</div>
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
          <NFormItem :label="i18nRef.dataTableCompanyLogo" path="logo">
            <AvatarCropperFileUpload
              v-model:value="formValueRef.logo"
              class="h-40 w-40"
              :preview-config="['w-20', 'w-10', 'w-5']"
            />
          </NFormItem>
          <NFormItem :label="i18nRef.dataTableCompanyName" path="name">
            <NInput v-model:value="formValueRef.name" />
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
  NDatePicker,
  NDrawerContent,
  NForm,
  NFormItem,
  NInput,
  NDropdown,
} from 'naive-ui'
import type { DataTableColumn, FormRules } from 'naive-ui'
import { debounce } from 'lodash-es'
import type { Company } from '@prisma/client'
import ShowOrEditInput from './ShowOrEditInput.vue'
import AvatarCard from '~/components/Company/AvatarCard.vue'
import Status from '~/components/Company/Status.vue'

const getI18nConfig = () => ({
  // Company
  dataTableCompanyLogo: 'Logo',
  dataTableCompanyName: '公司全称(name)',
  dataTableCompanyMemberNum: '关联用户',

  dataTableCompanyStatus: '状态',
  dataTableCompanyCreatedAt: '创建时间',

  dataTableCompanyNameHasBeenRegistered: '公司已被注册',
})

type I18nType = ReturnType<typeof getI18nConfig>

// const companyRef = useCurrentCompany()

const { mapRef: statusMapRef } = useCompanyStatusMap()

const {
  data: groupStatusRef,
  refresh: groupStatusRefresh,
  status: groupStatusStatusRef,
} = getTrpc().db.company.groupBy.useQuery(
  {
    by: ['status'],
    _count: {
      status: true,
    },
    orderBy: {
      _count: {
        status: 'desc',
      },
    },
  },
  {
    immediate: true,
  }
)

const router = useRouter()

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
} = useDataTable<Company, I18nType>({
  model: 'company',
  getI18nConfig,
  getStatusLoading: (loading) => {
    return loading || groupStatusStatusRef.value === 'pending'
  },

  getColumns: ({ update }) => {
    const columns: DataTableColumn<Company>[] = [
      {
        title: '',
        key: 'logo',
        width: 50,
        render: (row) => {
          return h(AvatarCard, {
            company: row,
            justAvatar: true,
          })
        },
      },
      {
        title: i18nRef.dataTableCompanyName,
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
        title: i18nRef.dataTableCompanyStatus,
        key: 'status',
        width: 200,
        sorter: {
          multiple: 3,
        },
        resizable: true,
        render: (row) => {
          return h(Status, {
            value: row.status,
          })
        },
        filterOptions: (groupStatusRef.value || []).map((item) => ({
          label: `${statusMapRef.value[item.status]} (${item._count.status})`,
          value: item.status,
        })),
        filter: () => true,
      },
      {
        title: i18nRef.dataTableCompanyMemberNum,
        key: '_count.companyMembers',
        width: 150,
        resizable: true,
        render: (row) => {
          return h(
            'div',
            {
              class: 'cursor-pointer underline',
              onClick: () => {
                router.push({
                  path: '/lab/companyMembers',
                  query: {
                    companyId: row.id,
                  },
                })
              },
            },
            row._count.companyMembers
          )
        },
      },
      {
        title: i18nRef.dataTableCompanyCreatedAt,
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
    ]
    return columns
  },
  refresh: groupStatusRefresh,
  getRules: (i18nRef) => {
    const rules: FormRules = {
      name: [
        {
          required: true,
          trigger: 'blur',
          validator: (_, value: string) => {
            if (!value.trim()) {
              return Promise.reject(
                Error(evaluate(i18nRef.dataTableSaveRequiredTips, { text: i18nRef.dataTableCompanyName }))
              )
            }

            return new Promise<void>((resolve, reject) => {
              getTrpc()
                .db.company.findUnique.query({
                  where: {
                    name: value.trim(),
                  },
                })
                .then((company) => {
                  if (company) {
                    reject(Error(i18nRef.dataTableCompanyNameHasBeenRegistered)) // reject with error message
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
    logo: '',
  }),
  getSelectForList: () => {
    return {
      select: {
        id: true,
        name: true,
        logo: true,
        status: true,
        createdAt: true,
        _count: {
          select: { companyMembers: true },
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
