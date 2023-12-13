import { map } from '@trpc/server/observable';
<template>
  <div>
    <div class="flex gap-4">
      <NCard title="Document list">
        <NFormItem label="Database name">
          <NSelect
            v-model:value="selectPropsRef.database"
            :options="databaseOptionsRef"
            remote
            filterable
            :loading="databaseListLoadingRef"
            @search="databaseListRefresh"
          />
        </NFormItem>
        <NFormItem label="Collection name">
          <NSelect
            v-model:value="selectPropsRef.collection"
            :options="collectionOptionsRef"
            remote
            filterable
            :loading="collectionListLoadingRef"
            @search="collectionListRefresh"
          />
        </NFormItem>

        <NFormItem label="读一致性要求">
          <NSelect
            v-model:value="selectPropsRef.readConsistency"
            :options="[
              {
                label: '强一致性',
                value: 'strongConsistency',
              },
              {
                label: '最终一致性',
                value: 'eventualConsistency',
              },
            ]"
          />
        </NFormItem>

        <NFormItem>
          <NSwitch v-model:value="selectPropsRef.query.retrieveVector">
            <template #checked> 返回向量值 </template>
            <template #unchecked> 不返回向量值 </template>
          </NSwitch>
        </NFormItem>

        <NTabs v-model:value="selectPropsRef.selectType" size="medium" justify-content="space-evenly" type="line">
          <NTabPane name="query" tab="Query 搜索">
            <NFormItem label="Ids">
              <NDynamicTags v-model:value="selectPropsRef.query.documentIds" />
            </NFormItem>
            <NFormItem label="需返回的字段">
              <NDynamicTags v-model:value="selectPropsRef.query.outputFields" />
            </NFormItem>
            <NFormItem label="索引的字段设置查询过滤表达式">
              <NInput
                v-model:value="selectPropsRef.query.filter"
                type="textarea"
                :autosize="{
                  minRows: 3,
                  maxRows: 10,
                }"
              />
            </NFormItem>
            <NFormItem>
              <NSwitch v-model:value="selectPropsRef.query.retrieveVector">
                <template #checked> 返回向量值 </template>
                <template #unchecked> 不返回向量值 </template>
              </NSwitch>
            </NFormItem>
          </NTabPane>
          <NTabPane name="search" tab="Search 搜索">
            <NTabs v-model:value="selectPropsRef.search.selectType" size="small">
              <NTabPane name="embeddingItems" tab="文本搜索">
                <NFormItem label="检索和文本信息相似的数据">
                  <NDynamicTags v-model:value="selectPropsRef.search.embeddingItems" />
                </NFormItem>
              </NTabPane>
              <NTabPane name="documentIds" tab="Ids 搜索">
                <NFormItem label="Ids">
                  <NDynamicTags v-model:value="selectPropsRef.search.documentIds" />
                </NFormItem>
              </NTabPane>
              <NTabPane name="vectors" tab="向量搜索">
                <NFormItem label="向量列表 (数字数组)">
                  <NDynamicInput v-model:value="selectPropsRef.search.vectors" />
                </NFormItem>
              </NTabPane>
            </NTabs>

            <NFormItem label="需返回的字段">
              <NDynamicTags v-model:value="selectPropsRef.search.outputFields" />
            </NFormItem>
            <NFormItem label="索引的字段设置查询过滤表达式">
              <NInput
                v-model:value="selectPropsRef.search.filter"
                type="textarea"
                :autosize="{
                  minRows: 3,
                  maxRows: 10,
                }"
              />
            </NFormItem>

            <NTabs v-model:value="selectPropsRef.search.params.selectType">
              <NTabPane name="ef" tab="配置的参数 ef">
                <NFormItem label="ef">
                  <NInput v-model:value="selectPropsRef.search.params.ef" />
                </NFormItem>
              </NTabPane>
              <NTabPane name="nprobe" tab="配置的参数 nprobe">
                <NFormItem label="nprobe">
                  <NInput v-model:value="selectPropsRef.search.params.nprobe" />
                </NFormItem>
              </NTabPane>
            </NTabs>

            <NFormItem>
              <NSwitch v-model:value="selectPropsRef.search.retrieveVector">
                <template #checked> 返回向量值 </template>
                <template #unchecked> 不返回向量值 </template>
              </NSwitch>
            </NFormItem>

            <NFormItem label="取多少条数据">
              <NInputNumber v-model:value="selectPropsRef.search.documentIds" />
            </NFormItem>
          </NTabPane>
        </NTabs>

        <div>
          <NButton
            class="w-full"
            quaternary
            size="tiny"
            :loading="documentListLoadingRef"
            :disabled="!canSelectRef"
            @click="queryDocument"
            >Query 搜索</NButton
          >
        </div>

        <NDivider />
        <NSpin :show="documentListLoadingRef">
          <NCollapse>
            <NCollapseItem v-for="item in documentListRef" :key="item.id" :title="item.id" :name="item.id">
              <DataTableShowOrEditJson :value="item" :on-update-value="(val) => updateDocument(item.id, val)" />
              <NDivider />
              <div class="flex justify-between gap-4">
                <!-- <NPopconfirm @positive-click="() => truncateCollection(item)">
                  <template #trigger>
                    <NButton quaternary size="tiny" :loading="truncateCollectionLoadingRef">清空数据和索引</NButton>
                  </template>
                  确认清空该集合的数据和索引？
                </NPopconfirm> -->
                <NPopconfirm @positive-click="() => deleteDocument(item.id)">
                  <template #trigger>
                    <NButton quaternary size="tiny" :loading="dropCollectionLoadingRef">删除</NButton>
                  </template>
                  确认删除该数据？
                </NPopconfirm>
              </div>
            </NCollapseItem>
          </NCollapse>
        </NSpin>
      </NCard>

      <NCard title="Create Database">
        <NForm ref="documentFormInstRef" :model="documentFormRef" :rules="documentRules">
          <NSpin :show="createDocumentLoadingRef">
            <NFormItem label="Database name" path="database">
              <NSelect
                v-model:value="documentFormRef.database"
                :options="databaseOptionsRef"
                remote
                filterable
                :loading="databaseListLoadingRef"
                @search="databaseListRefresh"
              />
            </NFormItem>
            <NFormItem label="Collection name" path="collection">
              <NSelect
                v-model:value="documentFormRef.collection"
                :options="collectionOptionsFormRef"
                remote
                filterable
                :loading="collectionListLoadingFormRef"
                @search="collectionListFormRefresh"
              />
            </NFormItem>
            <NFormItem>
              <NSwitch v-model:value="documentFormRef.buildIndex">
                <template #checked> 更新索引 </template>
                <template #unchecked> 无需更新索引 </template>
              </NSwitch>
            </NFormItem>
            <NFormItem label="Documents" path="documents">
              <JsonEditor v-model:value="documentFormRef.documents" class="w-full" />
            </NFormItem>
          </NSpin>
          <div>
            <NButton :loading="createDocumentLoadingRef" @click="createDocument">Create</NButton>
          </div>
        </NForm>
      </NCard>
    </div>

    <div v-if="resRef" class="p-4">
      <div>resRef:</div>
      <div>{{ resRef }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  NSpin,
  NButton,
  NFormItem,
  NInput,
  NInputNumber,
  NCard,
  NSwitch,
  NSelect,
  NForm,
  NDivider,
  NPopconfirm,
  NCollapse,
  NCollapseItem,
  NDynamicTags,
  NDynamicInput,
  NTabs,
  NTabPane,
  useMessage,
} from 'naive-ui'
import type { FormRules, FormInst, SelectOption } from 'naive-ui'
import { cloneDeep } from 'lodash-es'

const message = useMessage()

const resRef = ref<any>()

const selectPropsRef = reactive({
  database: '',
  collection: '',
  readConsistency: 'eventualConsistency',
  query: {
    documentIds: [],
    retrieveVector: false,
    filter: '',
    limit: 25,
    offset: 0,
    outputFields: [],
  },
  search: {
    vectors: [],
    documentIds: [],
    embeddingItems: [],
    params: {
      ef: null,
      nprobe: null,
      selectType: 'ef',
    },
    filter: '',
    retrieveVector: false,
    limit: 25,
    outputFields: [],
    selectType: 'embeddingItems',
  },
  selectType: 'query',
})

const {
  data: databaseListRef,
  refresh: databaseListRefresh,
  pending: databaseListLoadingRef,
} = await getTrpc().vectorDb.database.list.useQuery()

const databaseOptionsRef = computed(() => {
  const options: SelectOption[] = (databaseListRef.value || []).map((item) => ({
    label: item,
    value: item,
  }))
  return options
})

const collectionListPropsRef = computed(() => {
  return {
    database: selectPropsRef.database,
  }
})

const {
  data: collectionListRef,
  refresh: collectionListRefresh,
  pending: collectionListLoadingRef,
} = await getTrpc().vectorDb.collection.list.useQuery(collectionListPropsRef)

const collectionOptionsRef = computed(() => {
  const options: SelectOption[] = (collectionListRef.value || []).map(({ collection }) => ({
    label: collection,
    value: collection,
  }))
  return options
})

const canSelectRef = computed(() => {
  return !!selectPropsRef.database && !!selectPropsRef.collection
})
const documentListRef = ref([])
const documentCountRef = ref(0)
const documentListLoadingRef = ref(false)

const queryDocument = async () => {
  documentListLoadingRef.value = true
  let hasError = ''
  try {
    const { selectType, query, search, ...props } = selectPropsRef

    let func
    let funcProps

    if (selectType === 'query') {
      func = getTrpc().vectorDb.document.query.query
      funcProps = {
        ...props,
        query,
      }
    } else if (selectType === 'search') {
      const { selectType: searchSelectType, vectors, documentIds, embeddingItems, params, ...otherSearchProps } = search

      const wilSelect = otherSearchProps

      if (searchSelectType === 'vectors') {
        wilSelect.vectors = vectors.map((item) => {
          if (!hasError) {
            try {
              const val = JSON.parse(item)

              if (Array.isArray(val)) {
                const errorType = val.find((itemVal) => typeof itemVal !== 'number')
                if (!errorType) {
                  return val
                }
              }
            } catch (error) {}
            hasError = `向量列表: ${item} 不是数字数组 格式`
          }

          return item
        })
      } else if (searchSelectType === 'documentIds') {
        wilSelect.documentIds = documentIds
      } else if (searchSelectType === 'embeddingItems') {
        wilSelect.embeddingItems = embeddingItems
      }

      const { ef, nprobe, selectType: paramsSelectType } = params
      if (ef !== null && paramsSelectType === 'ef') {
        wilSelect.params = {
          ef,
        }
      } else if (nprobe !== null && paramsSelectType === 'nprobe') {
        wilSelect.params = {
          nprobe,
        }
      }

      if (!hasError) {
        func = getTrpc().vectorDb.document.search.query
        funcProps = {
          ...props,
          search: wilSelect,
        }
      }
    }

    if (func && funcProps) {
      const res = await func(funcProps)
      resRef.value = res
      const { documents, count, code, msg } = res

      if (code === 1 && msg) {
        hasError = msg
      } else {
        documentListRef.value = documents
        documentCountRef.value = count
      }
    }
  } catch (error) {
    hasError = error
  }

  if (hasError) {
    message.error(hasError)
  }

  documentListLoadingRef.value = false
}

// -----------------
const getDefDocumentFormValue = () => ({
  database: '',
  collection: '',
  buildIndex: false,
  documents: [
    {
      id: '001',
      text: 'this is text1',
      name: 'this is name1',
    },
    {
      id: '002',
      text: 'this is text2',
      name: 'this is name2',
    },
  ],
})
const documentFormRef = reactive(getDefDocumentFormValue())
const createDocumentLoadingRef = ref(false)

const collectionListFormPropsRef = computed(() => {
  return {
    database: documentFormRef.database,
  }
})

const {
  data: collectionListFormRef,
  refresh: collectionListFormRefresh,
  pending: collectionListLoadingFormRef,
} = await getTrpc().vectorDb.collection.list.useQuery(collectionListFormPropsRef)

const collectionOptionsFormRef = computed(() => {
  const options: SelectOption[] = (collectionListFormRef.value || []).map(({ collection }) => ({
    label: collection,
    value: collection,
  }))
  return options
})

const documentFormInstRef = ref<FormInst | null>()
const createDocument = async (e: MouseEvent) => {
  e.preventDefault()

  await documentFormInstRef.value?.validate()

  createDocumentLoadingRef.value = true
  try {
    const res = await getTrpc().vectorDb.document.upsert.mutate(documentFormRef)

    resRef.value = res
    const { code, msg } = res as any
    if (code === 1) {
      message.error(msg)

      createDocumentLoadingRef.value = false
      return
    }

    // collectionListDatabaseNameRef.value = willSave.database
    // listCollection()

    // resetCollectionForm()
  } catch (error) {
    message.error(error)
  }

  createDocumentLoadingRef.value = false
}

const documentRules: FormRules = {
  database: [
    {
      required: true,
      trigger: ['blur'],
    },
  ],
  collection: [
    {
      required: true,
      trigger: ['blur'],
    },
  ],
}

const dropCollectionLoadingRef = ref(false)

const deleteDocument = async (id: string) => {
  dropCollectionLoadingRef.value = true

  try {
    const res = await getTrpc().vectorDb.document.delete.mutate({
      database: selectPropsRef.database,
      collection: selectPropsRef.collection,
      query: {
        documentIds: [id],
      },
    })

    resRef.value = res
    const { code, msg } = res as any
    if (code === 1) {
      message.error(msg)

      dropCollectionLoadingRef.value = false
      return
    }

    // collectionListDatabaseNameRef.value = willSave.database
    // listCollection()

    // resetCollectionForm()
  } catch (error) {
    message.error(error)
  }

  await queryDocument()

  dropCollectionLoadingRef.value = false
}

const updateDocument = async (id: string, data: any) => {
  documentListLoadingRef.value = true
  const newData = cloneDeep(data)
  delete newData.id
  try {
    const res = await getTrpc().vectorDb.document.update.mutate({
      database: selectPropsRef.database,
      collection: selectPropsRef.collection,
      query: {
        documentIds: [id],
      },
      update: newData,
    })

    resRef.value = res
    const { code, msg } = res as any
    if (code === 1) {
      message.error(msg)
      documentListLoadingRef.value = false
      return
    }

    // collectionListDatabaseNameRef.value = willSave.database
    // listCollection()

    // resetCollectionForm()
  } catch (error) {
    message.error(error)
  }

  await queryDocument()

  return true
}
</script>
