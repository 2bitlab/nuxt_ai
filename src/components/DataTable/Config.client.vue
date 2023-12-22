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
    <NDrawer v-model:show="addDrawerShowRef" :mask-closable="false" resizable :default-width="500">
      <NDrawerContent closable class="flex flex-col">
        <NForm ref="formRef" :model="formValueRef" :rules="rulesRef" class="flex h-full flex-1 flex-col overflow-auto">
          <NFormItem :label="i18nRef.dataTableConfigValueKey" path="key">
            <NSelect v-model:value="formValueRef.key" :options="keyOptionsRef" />
          </NFormItem>

          <NFormItem v-if="sampleRef" :label="i18nRef.dataTableConfigValueValueSample">
            <NCode :code="sampleRef" language="json" />
          </NFormItem>
          <NFormItem :label="i18nRef.dataTableConfigValueValue" path="value" class="form-item-flex-1">
            <JsonEditor v-model:value="formValueRef.value" class="w-full flex-1" />
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
import { NDataTable, NButton, NDrawer, NDrawerContent, NForm, NFormItem, NDropdown, NSelect, NCode } from 'naive-ui'
import type { DataTableColumn, FormRules, SelectOption } from 'naive-ui'
import type { ConfigValue } from '@prisma/client'
import { ConfigValueKey } from '@prisma/client'
import ShowOrEditJson from './ShowOrEditJson.vue'

const getI18nConfig = () => ({
  // ConfigValue
  dataTableConfigValueKey: 'Key(key)',
  dataTableConfigValueValue: '值(value)',
  dataTableConfigValueValueErrorTips: 'json 格式错误',
  dataTableConfigValueValueSample: '例子',

  // key
  [`dataTableConfigValueKey_${ConfigValueKey.TENCENT_COS_SECRET}`]: '腾讯云cos密钥配置',
  [`dataTableConfigValueKey_${ConfigValueKey.TENCENT_COS_UPLOAD}`]: '腾讯云cos上传配置',
  [`dataTableConfigValueKey_${ConfigValueKey.TENCENT_VECTOR_DB}`]: '腾讯云向量数据库配置',
  [`dataTableConfigValueKey_${ConfigValueKey.OPENAI_API_KEY}`]: 'OpenAi api key',
  [`dataTableConfigValueKey_${ConfigValueKey.EMAIL_SMTP}`]: '系统邮箱SMTP配置',
  [`dataTableConfigValueKey_${ConfigValueKey.WORK_WECHAT_ROBOT_KEY}`]: '企业微信机器人key',

  // TENCENT_COS_SECRET value
  [`dataTableConfigValueKey_${ConfigValueKey.TENCENT_COS_SECRET}_secretId`]: 'secretId',
  [`dataTableConfigValueKey_${ConfigValueKey.TENCENT_COS_SECRET}_secretKey`]: 'secretKey',

  // TENCENT_COS_UPLOAD value
  [`dataTableConfigValueKey_${ConfigValueKey.TENCENT_COS_UPLOAD}_Bucket`]: '桶的名字',
  [`dataTableConfigValueKey_${ConfigValueKey.TENCENT_COS_UPLOAD}_Region`]: '桶所在的地区',

  // TENCENT_VECTOR_DB value
  [`dataTableConfigValueKey_${ConfigValueKey.TENCENT_VECTOR_DB}_host`]: '访问链接（http://abc.com）',
  [`dataTableConfigValueKey_${ConfigValueKey.TENCENT_VECTOR_DB}_api_key`]: 'api key',
  [`dataTableConfigValueKey_${ConfigValueKey.TENCENT_VECTOR_DB}_account`]: '账号（默认root）',

  // OPENAI_API_KEY value
  [`dataTableConfigValueKey_${ConfigValueKey.OPENAI_API_KEY}_apiKey`]: 'apiKey',

  // EMAIL_SMTP value
  [`dataTableConfigValueKey_${ConfigValueKey.EMAIL_SMTP}_server_host`]: 'Server host',
  [`dataTableConfigValueKey_${ConfigValueKey.EMAIL_SMTP}_server_port`]: 'Server port',
  [`dataTableConfigValueKey_${ConfigValueKey.EMAIL_SMTP}_server_user`]: 'Server user',
  [`dataTableConfigValueKey_${ConfigValueKey.EMAIL_SMTP}_server_password`]: 'Server password',
  [`dataTableConfigValueKey_${ConfigValueKey.EMAIL_SMTP}_from`]: 'From',

  // WORK_WECHAT_ROBOT_KEY value
  [`dataTableConfigValueKey_${ConfigValueKey.WORK_WECHAT_ROBOT_KEY}_apiKey`]: 'apiKey',
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
  handleSorterChange,
  handleFiltersChange,

  handleDropdownSelect,
  onClickDropdownOutside,
  handleSaveButtonClick,
} = useDataTable<ConfigValue, I18nType>({
  model: 'configValue',
  getI18nConfig,
  getColumns: ({ update }) => {
    const columns: DataTableColumn<ConfigValue>[] = [
      {
        type: 'expand',
        renderExpand: (rowData) => {
          console.log('renderExpand rowData', rowData)
          console.log('renderExpand rowData.value', rowData.value)

          return h(ShowOrEditJson, {
            value: rowData.value,
            onUpdateValue: async (v) => {
              return await update(rowData.id, {
                value: v,
              })
            },
          })
        },
      },
      {
        title: i18nRef.dataTableConfigValueKey,
        key: 'key',
        sorter: {
          multiple: 3,
        },
        render: (row) => {
          const label = i18nRef[`dataTableConfigValueKey_${row.key}`]

          return `${row.key} (${label})`
        },
      },
    ]
    return columns
  },
  getRules: (i18nRef) => {
    const rules: FormRules = {
      key: [
        {
          required: true,
          message: evaluate(i18nRef.dataTableSaveRequiredTips, { text: i18nRef.dataTableConfigValueKey }),
          trigger: ['blur'],
        },
      ],
      value: [
        {
          required: true,
          trigger: ['input', 'blur'],
          validator: (_, value) => {
            if (!value) {
              return new Error(evaluate(i18nRef.dataTableSaveRequiredTips, { text: i18nRef.dataTableConfigValueValue }))
            }
            try {
              console.log('value validator value', value)
              JSON.stringify(value)
            } catch (error) {
              return new Error(i18nRef.dataTableConfigValueValueErrorTips)
            }
            return true
          },
        },
      ],
    }

    return rules
  },
  getDefFormData: () => ({
    key: '' as ConfigValue['key'],
    value: {},
  }),
})

/**
 * =======================================================
 * Drawer
 * =======================================================
 */

const keyOptionsRef = computed(() => {
  const options: SelectOption[] = Object.keys(ConfigValueKey).map((key) => ({
    label: i18nRef[`dataTableConfigValueKey_${key}`],
    value: key,
  }))

  console.log('keyOptionsRef options', options)
  const list = listRef.value

  const hasKeys = list.map(({ key }) => key)

  return options.filter(({ value }) => !hasKeys.includes(value as ConfigValue['key']))
})

const sampleDataRef = computed(() => {
  const map: Record<ConfigValueKey, Record<string, string>> = {
    TENCENT_COS_SECRET: {
      secretId: i18nRef[`dataTableConfigValueKey_${ConfigValueKey.TENCENT_COS_SECRET}_secretId`],
      secretKey: i18nRef[`dataTableConfigValueKey_${ConfigValueKey.TENCENT_COS_SECRET}_secretKey`],
    },
    TENCENT_COS_UPLOAD: {
      Bucket: i18nRef[`dataTableConfigValueKey_${ConfigValueKey.TENCENT_COS_UPLOAD}_Bucket`],
      Region: i18nRef[`dataTableConfigValueKey_${ConfigValueKey.TENCENT_COS_UPLOAD}_Region`],
    },
    TENCENT_VECTOR_DB: {
      host: i18nRef[`dataTableConfigValueKey_${ConfigValueKey.TENCENT_VECTOR_DB}_host`],
      apiKey: i18nRef[`dataTableConfigValueKey_${ConfigValueKey.TENCENT_VECTOR_DB}_api_key`],
      account: i18nRef[`dataTableConfigValueKey_${ConfigValueKey.TENCENT_VECTOR_DB}_account`],
    },
    OPENAI_API_KEY: {
      apiKey: i18nRef[`dataTableConfigValueKey_${ConfigValueKey.OPENAI_API_KEY}_apiKey`],
    },
    EMAIL_SMTP: {
      host: i18nRef[`dataTableConfigValueKey_${ConfigValueKey.EMAIL_SMTP}_server_host`],
      port: i18nRef[`dataTableConfigValueKey_${ConfigValueKey.EMAIL_SMTP}_server_port`],
      user: i18nRef[`dataTableConfigValueKey_${ConfigValueKey.EMAIL_SMTP}_server_user`],
      pass: i18nRef[`dataTableConfigValueKey_${ConfigValueKey.EMAIL_SMTP}_server_password`],
      from: i18nRef[`dataTableConfigValueKey_${ConfigValueKey.EMAIL_SMTP}_from`],
    },
    WORK_WECHAT_ROBOT_KEY: {
      apiKey: i18nRef[`dataTableConfigValueKey_${ConfigValueKey.WORK_WECHAT_ROBOT_KEY}_apiKey`],
    },
  }

  return map[formValueRef.key]
})

const sampleRef = computed(() => {
  return sampleDataRef.value ? JSON.stringify(sampleDataRef.value, null, 2) : ''
})

watch(
  () => sampleDataRef.value,
  (newValue) => {
    if (newValue) {
      formValueRef.value = newValue
    }
  }
)
</script>

<style scoped>
.form-item-flex-1 {
  @apply flex flex-1 flex-col overflow-auto;
}

.form-item-flex-1 :deep(.n-form-item-blank) {
  @apply flex flex-1 flex-col overflow-auto;
}
</style>
