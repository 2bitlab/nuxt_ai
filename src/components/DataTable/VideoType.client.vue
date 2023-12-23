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
          <NFormItem :label="i18nRef.dataTableVideoTypeLabel" path="label">
            <NInput v-model:value="formValueRef.label" />
          </NFormItem>
          <NFormItem :label="i18nRef.dataTableVideoTypeParent" path="parentId">
            <NSelect v-model:value="formValueRef.parentId" :options="parentOptionsRef" />
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
import { NDataTable, NButton, NDrawer, NDrawerContent, NForm, NFormItem, NInput, NDropdown, NSelect } from 'naive-ui'
import type { DataTableColumn, FormRules, SelectOption } from 'naive-ui'
import type { VideoType } from '@prisma/client'
import ShowOrEditInput from './ShowOrEditInput.vue'
import ShowOrEditSelect from './ShowOrEditSelect.vue'

const getI18nConfig = () => ({
  dataTableVideoTypeLabel: '标题(label)',
  dataTableVideoTypeParent: '父级',
})

type I18nType = ReturnType<typeof getI18nConfig>

const {
  data: groupParentRef,
  refresh: groupParentRefresh,
  status: groupParentStatusRef,
} = getTrpc().db.videoType.findMany.useQuery(
  {
    where: {
      parentId: null,
    },
    select: {
      id: true,
      label: true,
      children: {
        select: {
          label: true,
        },
      },
    },
  },
  {
    immediate: true,
  }
)

const parentOptionsRef = computed(() => {
  const options: SelectOption[] = (groupParentRef.value || []).map((item) => ({
    label: item.label,
    value: item.id,
  }))

  return options
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
  handleSorterChange,
  handleFiltersChange,

  handleDropdownSelect,
  onClickDropdownOutside,
  handleSaveButtonClick,
} = useDataTable<VideoType, I18nType>({
  model: 'videoType',
  getI18nConfig,
  getStatusLoading: (loading) => {
    return loading || groupParentStatusRef.value === 'pending'
  },
  getColumns: ({ update }) => {
    const columns: DataTableColumn<VideoType>[] = [
      {
        title: i18nRef.dataTableVideoTypeParent,
        key: 'parentId',
        width: 200,
        sorter: {
          multiple: 3,
        },
        resizable: true,
        render: (row) => {
          return h(ShowOrEditSelect, {
            value: row.parentId || '',
            options: parentOptionsRef.value,
            onUpdateValue: async (v) => {
              return await update(row.id, {
                parentId: v as string,
              })
            },
          })
        },
        filterOptions: (groupParentRef.value || []).map((item) => ({
          label: `${item.label} (${item.children.length})`,
          value: item.id,
        })),
        filter: () => true,
      },
      {
        title: i18nRef.dataTableVideoTypeLabel,
        key: 'label',
        width: 300,
        sorter: {
          multiple: 3,
        },
        resizable: true,
        render: (row) => {
          return h(ShowOrEditInput, {
            value: row.label,
            onUpdateValue: async (v) => {
              return await update(row.id, {
                label: v as string,
              })
            },
          })
        },
      },
    ]
    return columns
  },
  refresh: () => groupParentRefresh(),
  getRules: (i18nRef) => {
    const rules: FormRules = {
      label: [
        {
          required: true,
          message: evaluate(i18nRef.dataTableSaveRequiredTips, { text: i18nRef.dataTableVideoTypeLabel }),
          trigger: ['blur'],
        },
      ],
    }

    return rules
  },
  getDefFormData: () => ({
    label: '',
    parentId: '',
  }),
  createFormat: async (formValue) => {
    const { label } = formValue
    let { parentId } = formValue

    if (!parentId) {
      parentId = undefined
    }

    return {
      label,
      parentId,
    }
  },
})
</script>
