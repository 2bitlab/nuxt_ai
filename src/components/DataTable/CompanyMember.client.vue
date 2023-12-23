<template>
  <div class="flex flex-col gap-2 p-4">
    <div class="flex items-end justify-between gap-5">
      <div class="flex flex-col gap-2">
        <div>
          <div>{{ i18nRef.dataTableCompanyMemberUserId }}</div>
          <NSelect
            v-model:value="query.userId"
            filterable
            clearable
            remote
            :options="userOptionsRef"
            :loading="userSearchLoadingRef"
            :render-label="userRenderLabel"
            :render-tag="userRenderSingleSelectTag"
            @search="userHandleSearch"
          />
        </div>

        <div>
          <div>{{ i18nRef.dataTableCompanyMemberCompanyId }}</div>
          <NSelect
            v-model:value="query.companyId"
            filterable
            clearable
            remote
            :options="companyOptionsRef"
            :loading="companySearchLoadingRef"
            :render-label="companyRenderLabel"
            :render-tag="companyRenderSingleSelectTag"
            @search="companyHandleSearch"
          />
        </div>

        <div class="flex flex-col gap-2">
          <div>{{ i18nRef.dataTableCompanyMemberCreatedAt }}</div>
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
          <NFormItem :label="i18nRef.dataTableCompanyMemberUserId" path="userId">
            <NSelect
              v-model:value="formValueRef.userId"
              filterable
              clearable
              remote
              :options="userOptionsRef"
              :loading="userSearchLoadingRef"
              :render-label="userRenderLabel"
              :render-tag="userRenderSingleSelectTag"
              @search="userHandleSearch"
            />
          </NFormItem>

          <NFormItem :label="i18nRef.dataTableCompanyMemberCompanyId" path="companyId">
            <NSelect
              v-model:value="formValueRef.companyId"
              filterable
              clearable
              remote
              :options="companyOptionsRef"
              :loading="companySearchLoadingRef"
              :render-label="companyRenderLabel"
              :render-tag="companyRenderSingleSelectTag"
              @search="companyHandleSearch"
            />
          </NFormItem>

          <NFormItem :label="i18nRef.dataTableCompanyMemberRole" path="role">
            <NSelect v-model:value="formValueRef.role" :options="memberRoleOptionsRef" />
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
  NDropdown,
  NSelect,
} from 'naive-ui'
import type { DataTableColumn, FormRules } from 'naive-ui'
import type { CompanyMember, CompanyMemberRole as CompanyMemberRoleType } from '@prisma/client'
import { CompanyMemberRole } from '@prisma/client'
import { useUrlSearchParams } from '@vueuse/core'
import ShowOrEditSelect from './ShowOrEditSelect.vue'
import CompanyAvatarCard from '~/components/Company/AvatarCard.vue'
import UserAvatarCard from '~/components/User/AvatarCard.vue'

const getI18nConfig = () => ({
  // Company
  dataTableCompanyMemberUserId: '用户',
  dataTableCompanyMemberCompanyId: '公司',
  dataTableCompanyMemberRole: '角色',

  dataTableCompanyMemberCreatedAt: '创建时间',
})

type I18nType = ReturnType<typeof getI18nConfig>

// const companyRef = useCurrentCompany()

const { mapRef: memberRoleMapRef, optionsRef: memberRoleOptionsRef } = useCompanyMemberRoleOptions()

const query = useUrlSearchParams('history')

const groupRoleWhereRef = ref({})

const groupRoleQueryRef = computed(() => {
  return {
    by: ['role'],
    _count: {
      role: true,
    },
    where: groupRoleWhereRef.value,
    orderBy: {
      _count: {
        role: 'desc',
      },
    },
  }
})

const {
  data: groupRoleRef,
  refresh: groupRoleRefresh,
  status: groupRoleStatusRef,
} = getTrpc().db.companyMember.groupBy.useQuery(groupRoleQueryRef, {
  immediate: true,
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
} = useDataTable<CompanyMember, I18nType>({
  model: 'companyMember',
  getI18nConfig,
  getStatusLoading: (loading) => {
    return loading || groupRoleStatusRef.value === 'pending'
  },

  getColumns: ({ update }) => {
    const columns: DataTableColumn<CompanyMember>[] = [
      {
        title: i18nRef.dataTableCompanyMemberCompanyId,
        key: 'companyId',
        sorter: {
          multiple: 3,
        },
        resizable: true,
        render: (row) => {
          return h(CompanyAvatarCard, {
            company: row.company,
          })
        },
      },
      {
        title: i18nRef.dataTableCompanyMemberUserId,
        key: 'userId',
        sorter: {
          multiple: 3,
        },
        resizable: true,
        render: (row) => {
          return h(UserAvatarCard, {
            user: row.user,
            round: true,
          })
        },
      },
      {
        title: i18nRef.dataTableCompanyMemberRole,
        key: 'role',
        width: 200,
        sorter: {
          multiple: 3,
        },
        resizable: true,
        render: (row) => {
          return h(ShowOrEditSelect, {
            value: row.role || '',
            options: memberRoleOptionsRef.value,
            onUpdateValue: async (v) => {
              return await update(row.id, {
                role: v as CompanyMemberRoleType,
              })
            },
          })
        },
        filterOptions: (groupRoleRef.value || []).map((item) => ({
          label: `${memberRoleMapRef.value[item.role]} (${item._count.role})`,
          value: item.role,
        })),
        filter: () => true,
      },
      {
        title: i18nRef.dataTableCompanyMemberCreatedAt,
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
  refresh: groupRoleRefresh,
  getRules: (i18nRef) => {
    const rules: FormRules = {
      userId: [
        {
          required: true,
          trigger: 'blur',
          message: evaluate(i18nRef.dataTableSaveRequiredTips, { text: i18nRef.dataTableCompanyMemberUserId }),
        },
      ],
      companyId: [
        {
          required: true,
          trigger: 'blur',
          message: evaluate(i18nRef.dataTableSaveRequiredTips, { text: i18nRef.dataTableCompanyMemberCompanyId }),
        },
      ],
    }

    return rules
  },
  getDefFormData: () => ({
    userId: '',
    companyId: '',
    role: CompanyMemberRole.MEMBER,
  }),
  getSelectForList: () => {
    return {
      select: {
        id: true,
        companyId: true,
        userId: true,
        role: true,
        createdAt: true,
        company: {
          select: {
            name: true,
            logo: true,
          },
        },
        user: {
          select: {
            name: true,
            image: true,
            email: true,
          },
        },
      },
    }
  },
})

const { rangeCreatedAtRef } = useCreatedAtSelect(whereRef)

const {
  optionsRef: userOptionsRef,
  searchLoadingRef: userSearchLoadingRef,
  handleSearch: userHandleSearch,
  renderLabel: userRenderLabel,
  renderSingleSelectTag: userRenderSingleSelectTag,
} = useUserSelect({
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
  () => query.userId,
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

    formValueRef.userId = newValue as string
    userHandleSearch()
  },
  {
    immediate: true,
  }
)

const {
  optionsRef: companyOptionsRef,
  searchLoadingRef: companySearchLoadingRef,
  handleSearch: companyHandleSearch,
  renderLabel: companyRenderLabel,
  renderSingleSelectTag: companyRenderSingleSelectTag,
} = useCompanySelect({
  getBefOrList: async () => {
    const orList = []
    if (formValueRef.companyId) {
      orList.push({
        id: formValueRef.companyId,
      })
    }
    return orList
  },
})

watch(
  () => query.companyId,
  (newValue) => {
    const { where } = whereRef.value as any
    if (newValue) {
      where.companyId = newValue
    } else {
      where.companyId = undefined
    }

    whereRef.value = {
      where,
    }

    formValueRef.companyId = newValue as string
    companyHandleSearch()
  },
  {
    immediate: true,
  }
)

watch(
  () => whereRef.value,
  (newValue) => {
    const { where } = newValue || {}

    groupRoleWhereRef.value = {
      ...(where || {}),
    }
  }
)
</script>
