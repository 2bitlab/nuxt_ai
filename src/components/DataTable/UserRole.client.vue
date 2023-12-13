<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-end justify-between gap-5">
      <div class="flex flex-col gap-2">
        <div>
          <div>{{ i18nRef.dataTableUserRoleUserId }}</div>
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
          <div>{{ i18nRef.dataTableUserRoleRoleId }}</div>
          <NSelect
            v-model:value="query.roleId"
            filterable
            clearable
            remote
            :options="roleOptionsRef"
            :loading="roleSearchLoadingRef"
            :render-label="roleRenderLabel"
            :render-tag="roleRenderSingleSelectTag"
            @search="roleHandleSearch"
          />
        </div>

        <div class="flex flex-col gap-2">
          <div>{{ i18nRef.dataTableUserRoleCreatedAt }}</div>
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
          <NFormItem :label="i18nRef.dataTableUserRoleUserId" path="userId">
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
          <NFormItem :label="i18nRef.dataTableUserRoleRoleId" path="roleId">
            <NSelect
              v-model:value="formValueRef.roleId"
              filterable
              clearable
              remote
              :options="roleOptionsRef"
              :loading="roleSearchLoadingRef"
              :render-label="roleRenderLabel"
              :render-tag="roleRenderSingleSelectTag"
              @search="roleHandleSearch"
            />
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
import { NDataTable, NButton, NDrawer, NDrawerContent, NForm, NFormItem, NDropdown, NSelect } from 'naive-ui'
import type { DataTableColumn, FormRules } from 'naive-ui'
import type { UserRole } from '@prisma/client'
import AvatarCard from '~/components/User/AvatarCard.vue'

const getI18nConfig = () => ({
  dataTableUserRoleUserId: '用户',
  dataTableUserRoleRoleId: '角色',
  dataTableUserRoleCreator: '创建者',
  dataTableUserRoleCreatedAt: '创建时间',
})

type I18nType = ReturnType<typeof getI18nConfig>

const query = useUrlSearchParams('history')

const currentUserIdRef = useCurrentUserId()

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
} = useDataTable<UserRole, I18nType>({
  model: 'userRole',
  getI18nConfig,

  getColumns: () => {
    const columns: DataTableColumn<UserRole>[] = [
      {
        title: i18nRef.dataTableUserRoleUserId,
        key: 'userId',
        width: 300,
        resizable: true,
        render: (row) => {
          return h(
            'div',
            {
              class: 'cursor-pointer',
              onClick: () => {
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
        title: i18nRef.dataTableUserRoleRoleId,
        key: 'roleId',
        resizable: true,
        render: (row) => {
          return h(
            'div',
            {
              class: 'cursor-pointer',
              onClick: () => {
                formValueRef.roleId = row.roleId
              },
            },
            row.role.name
          )
        },
      },
      {
        title: i18nRef.dataTableUserRoleUserId,
        key: 'creator',
        width: 300,
        resizable: true,
        render: (row) => {
          return h(AvatarCard, {
            user: row.creator,
            round: true,
          })
        },
      },
      {
        title: i18nRef.dataTableUserRoleCreatedAt,
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
      roleId: [
        {
          required: true,
          message: evaluate(i18nRef.dataTableSaveRequiredTips, { text: i18nRef.dataTableUserRoleRoleId }),
          trigger: ['blur'],
        },
      ],
      userId: [
        {
          required: true,
          message: evaluate(i18nRef.dataTableSaveRequiredTips, { text: i18nRef.dataTableUserRoleUserId }),
          trigger: ['blur'],
        },
      ],
    }

    return rules
  },
  getDefFormData: () => ({
    userId: '',
    creatorId: '',
    roleId: '',
  }),
  createFormat: async (formValue) => {
    return {
      ...formValue,
      creatorId: currentUserIdRef.value,
    }
  },
  getSelectForList: () => ({
    select: {
      id: true,
      roleId: true,
      createdAt: true,
      userId: true,
      role: {
        select: {
          name: true,
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
      creator: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      },
    },
  }),
  initOrderBy: () => [
    {
      createdAt: 'desc',
    },
  ],
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
  optionsRef: roleOptionsRef,
  searchLoadingRef: roleSearchLoadingRef,
  handleSearch: roleHandleSearch,
  renderLabel: roleRenderLabel,
  renderSingleSelectTag: roleRenderSingleSelectTag,
} = useRoleSelect({
  getBefOrList: async () => {
    const orList = []
    if (formValueRef.roleId) {
      orList.push({
        id: formValueRef.roleId,
      })
    }
    return orList
  },
})

watch(
  () => query.roleId,
  (newValue) => {
    const { where } = whereRef.value as any
    if (newValue) {
      where.roleId = newValue
    } else {
      where.roleId = undefined
    }

    whereRef.value = {
      where,
    }

    formValueRef.roleId = newValue as string
    roleHandleSearch()
  },
  {
    immediate: true,
  }
)
</script>
