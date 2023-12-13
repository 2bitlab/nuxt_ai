<template>
  <div class="container mx-auto flex flex-col gap-2 p-4">
    <div class="flex justify-end">
      <NButton @click="() => (addDrawerShowRef = true)">{{ i18nRef.dataTableAddBtn }}</NButton>
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
          <NFormItem :label="i18nRef.dataTableRoleName" path="name">
            <NInput v-model:value="formValueRef.name" />
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

    <NModal v-model:show="showPermissionsModalRef">
      <NSpin :show="rolePermissionLoadingRef">
        <NCard class="container max-w-2xl" role="dialog" :bordered="false" aria-modal="true">
          <div>
            <NTransfer
              v-model:value="permissionsRef"
              virtual-scroll
              :options="permissionOptionsRef"
              source-filterable
            />
          </div>

          <template #footer>
            <div class="flex justify-end">
              <NButton round type="primary" :loading="loadingRef" @click="handlePermissionSaveButtonClick">
                {{ i18nRef.dataTableSaveBtn }}
              </NButton>
            </div>
          </template>
        </NCard>
      </NSpin>
    </NModal>

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
  NTransfer,
  NModal,
  NCard,
  NSpin,
} from 'naive-ui'
import type { DataTableColumn, FormRules, TransferOption } from 'naive-ui'
import type { Role } from '@prisma/client'
import ShowOrEditInput from './ShowOrEditInput.vue'
import AvatarCard from '~/components/User/AvatarCard.vue'

const getI18nConfig = () => ({
  dataTableRoleName: '角色名',
  dataTableRoleUsers: '关联用户数',
  dataTableRolePermissions: '关联权限数',
})

type I18nType = ReturnType<typeof getI18nConfig>

const roleIdRef = ref('')

const { optionsRef: permissionOptionsRef } = usePermissionOptions<TransferOption>()
const showPermissionsModalRef = ref(false)
const rolePermissionLoadingRef = ref(false)
const permissionsRef = ref<string[]>([])

const openPermissionsModal = async (roleId: string) => {
  roleIdRef.value = roleId
  showPermissionsModalRef.value = true
  rolePermissionLoadingRef.value = true
  const rolePermission = await getTrpc().db.rolePermission.findMany.query({
    where: {
      roleId,
    },
  })
  permissionsRef.value = rolePermission.map((item) => item.permission)

  rolePermissionLoadingRef.value = false
}

const currentUserIdRef = useCurrentUserId()

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
  refresh,
  handleSorterChange,
  handleFiltersChange,

  handleDropdownSelect,
  onClickDropdownOutside,
  handleSaveButtonClick,
} = useDataTable<Role, I18nType>({
  model: 'role',
  getI18nConfig,

  getColumns: (update, i18nRef) => {
    const columns: DataTableColumn<Role>[] = [
      {
        title: i18nRef.dataTableRoleName,
        key: 'name',
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
        title: i18nRef.dataTableRoleUsers,
        key: 'users',
        resizable: true,
        render: (row) => {
          return h(
            'div',
            {
              class: 'cursor-pointer underline',
              onClick: () => {
                router.push({
                  path: '/lab/userRoles',
                  query: {
                    roleId: row.id,
                  },
                })
              },
            },
            row._count.users
          )
        },
      },
      {
        title: i18nRef.dataTableRolePermissions,
        key: 'permissions',
        resizable: true,
        render: (row) => {
          return h(
            'div',
            {
              class: 'cursor-pointer underline',
              onClick: () => {
                openPermissionsModal(row.id)
              },
            },
            row._count.permissions
          )
        },
      },
      {
        title: i18nRef.dataTableCreator,
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
      name: [
        {
          required: true,
          message: evaluate(i18nRef.dataTableSaveRequiredTips, { text: i18nRef.dataTableRoleName }),
          trigger: ['blur'],
        },
      ],
    }

    return rules
  },
  getDefFormData: () => ({
    name: '',
    creatorId: '',
  }),
  getSelectForList: () => ({
    select: {
      id: true,
      name: true,
      createdAt: true,
      _count: {
        select: {
          users: true,
          permissions: true,
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
  createFormat: async (formValue) => {
    return {
      ...formValue,
      creatorId: currentUserIdRef.value,
    }
  },
})

const handlePermissionSaveButtonClick = async () => {
  loadingRef.value = true

  const rolePermission = await getTrpc().db.rolePermission.findMany.query({
    where: {
      roleId: roleIdRef.value,
    },
  })

  const oldPermissions = rolePermission.map((item) => item.permission)

  const willDeletePermissions = oldPermissions.filter((item) => !permissionsRef.value.includes(item))

  await getTrpc().db.rolePermission.deleteMany.mutate({
    where: {
      roleId: roleIdRef.value,
      permission: {
        in: willDeletePermissions,
      },
    },
  })

  const willAddPermissions = permissionsRef.value.filter((item) => !oldPermissions.includes(item))

  await getTrpc().db.rolePermission.createMany.mutate({
    data: willAddPermissions.map((item) => ({
      roleId: roleIdRef.value,
      permission: item,
      creatorId: currentUserIdRef.value,
    })),
  })

  showPermissionsModalRef.value = false

  await refresh()
}
</script>
