<template>
  <div>
    <div class="flex gap-4">
      <NCard title="Collection list">
        <NFormItem label="Database name">
          <NSelect
            v-model:value="collectionListDatabaseNameRef"
            :options="databaseOptionsRef"
            remote
            filterable
            :loading="databaseListLoadingRef"
            @search="databaseListRefresh"
          />
        </NFormItem>
        <NDivider />
        <NSpin :show="collectionListLoadingRef">
          <NCollapse>
            <NCollapseItem
              v-for="item in collectionListRef"
              :key="item.collection"
              :title="item.collection"
              :name="item.collection"
            >
              <div class="whitespace-pre-wrap">{{ item }}</div>
              <NDivider />
              <div class="flex justify-between gap-4">
                <div class="flex gap-4">
                  <NPopconfirm @positive-click="() => truncateCollection(item)">
                    <template #trigger>
                      <NButton quaternary size="tiny" :loading="truncateCollectionLoadingRef">清空数据和索引</NButton>
                    </template>
                    确认清空该集合的数据和索引？
                  </NPopconfirm>
                  <NPopconfirm @positive-click="() => rebuildIndex(item)">
                    <template #trigger>
                      <NButton quaternary size="tiny" :loading="rebuildIndexLoadingRef">重建索引</NButton>
                    </template>
                    确认重建该集合索引？
                  </NPopconfirm>
                </div>

                <NPopconfirm @positive-click="() => dropCollection(item)">
                  <template #trigger>
                    <NButton quaternary size="tiny" :loading="dropCollectionLoadingRef">删除</NButton>
                  </template>
                  确认删除该集合？
                </NPopconfirm>
              </div>
            </NCollapseItem>
          </NCollapse>
        </NSpin>
      </NCard>

      <NCard title="Create collection">
        <NForm ref="collectionFormInstRef" :model="collectionFormRef" :rules="collectionRules">
          <NSpin :show="createCollectionLoadingRef">
            <NFormItem label="Database name" path="database">
              <NSelect
                v-model:value="collectionFormRef.database"
                :options="databaseOptionsRef"
                remote
                filterable
                :loading="databaseListLoadingRef"
                @search="databaseListRefresh"
              />
            </NFormItem>
            <NFormItem label="Collection name" path="collection">
              <NInput v-model:value="collectionFormRef.collection" />
            </NFormItem>
            <NFormItem label="Replica num (副本数)" path="replicaNum">
              <NInputNumber v-model:value="collectionFormRef.replicaNum" />
            </NFormItem>
            <NFormItem label="Shard num (分片数)" path="shardNum">
              <NInputNumber v-model:value="collectionFormRef.shardNum" />
            </NFormItem>
            <NFormItem label="Description" path="description">
              <NInput v-model:value="collectionFormRef.description" type="textarea" />
            </NFormItem>
            <NFormItem>
              <NSwitch v-model:value="embeddingRef">
                <template #checked> Embedding 开启中 </template>
                <template #unchecked> Embedding 已关闭 </template>
              </NSwitch>
            </NFormItem>

            <NCard v-if="embeddingRef" title="Embedding(非结构化数据转换为向量数据的能力)" class="mb-4">
              <NFormItem label="Field (字段名称)">
                <NInput v-model:value="collectionFormRef.embedding.field" disabled />
              </NFormItem>
              <NFormItem label="Vector field (向量字段)">
                <NInput v-model:value="collectionFormRef.embedding.vectorField" disabled />
              </NFormItem>
              <NFormItem label="Model (模型的名称)">
                <NSelect
                  v-model:value="collectionFormRef.embedding.model"
                  :options="[
                    {
                      label: 'bge-base-zh (适用中文，768 维，推荐使用)',
                      value: 'bge-base-zh',
                    },
                    {
                      label: 'm3e-base (适用中文，768 维)',
                      value: 'm3e-base',
                    },
                    {
                      label: 'e5-large-v2 (适用中文，1024 维)',
                      value: 'e5-large-v2',
                    },
                    {
                      label: 'text2vec-large-chinese (适用中文，1024 维)',
                      value: 'text2vec-large-chinese',
                    },
                    {
                      label: 'multilingual-e5-base (适用于多种语言类型，768 维)',
                      value: 'multilingual-e5-base',
                    },
                  ]"
                />
              </NFormItem>
            </NCard>

            <div class="flex flex-col gap-4">
              <div v-for="(item, index) in collectionFormRef.indexes" :key="index">
                <NCard v-if="item.indexType === 'primaryKey'" title="主键索引">
                  <NFormItem label="fieldName" :path="`indexes[${index}].fieldName`">
                    <NInput v-model:value="collectionFormRef.indexes[index].fieldName" disabled />
                  </NFormItem>
                  <NFormItem label="fieldType" :path="`indexes[${index}].fieldType`">
                    <NInput v-model:value="collectionFormRef.indexes[index].fieldType" disabled />
                  </NFormItem>
                  <NFormItem label="indexType" :path="`indexes[${index}].indexType`">
                    <NInput v-model:value="collectionFormRef.indexes[index].indexType" disabled />
                  </NFormItem>
                </NCard>
                <NCard v-else-if="item.fieldType === 'vector'" title="向量索引">
                  <NFormItem label="fieldName" :path="`indexes[${index}].fieldName`">
                    <NInput v-model:value="collectionFormRef.indexes[index].fieldName" disabled />
                  </NFormItem>
                  <NFormItem label="fieldType" :path="`indexes[${index}].fieldType`">
                    <NInput v-model:value="collectionFormRef.indexes[index].fieldType" disabled />
                  </NFormItem>
                  <NFormItem label="indexType" :path="`indexes[${index}].indexType`">
                    <NSelect
                      v-model:value="collectionFormRef.indexes[index].indexType"
                      :options="[
                        {
                          label: 'HNSW (暴力检索)',
                          value: 'HNSW',
                        },
                        {
                          label: 'flat (可通过参数调整召回率)',
                          value: 'flat',
                        },
                        {
                          label: 'ivf_flat (IVF 系列索引)',
                          value: 'ivf_flat',
                        },
                        {
                          label: 'ivf_pq',
                          value: 'ivf_pq',
                        },
                        {
                          label: 'ivf_sq4',
                          value: 'ivf_sq4',
                        },
                        {
                          label: 'ivf_sq8',
                          value: 'ivf_sq8',
                        },
                        {
                          label: 'ivf_sq16',
                          value: 'ivf_sq16',
                        },
                      ]"
                    />
                  </NFormItem>
                  <NFormItem label="metricType 向量之间距离度量的算法" :path="`indexes[${index}].metricType`">
                    <NSelect
                      v-model:value="collectionFormRef.indexes[index].metricType"
                      :options="[
                        {
                          label: 'COSINE (余弦相似度)',
                          value: 'COSINE',
                        },
                        {
                          label: 'IP (内积)',
                          value: 'IP',
                        },
                        {
                          label: 'L2 (欧几里得距离)',
                          value: 'L2',
                        },
                      ]"
                    />
                  </NFormItem>
                  <NFormItem v-if="!embeddingRef" label="Dimension (向量维度)" :path="`indexes[${index}].dimension`">
                    <NInputNumber v-model:value="collectionFormRef.indexes[index].dimension" :max="4096" :min="1" />
                  </NFormItem>

                  <NCard v-if="collectionFormRef.indexes[index].indexType === 'HNSW'" title="HNSW params">
                    <NFormItem label="M (邻居节点数)" :path="`indexes[${index}].params.M`">
                      <NInputNumber v-model:value="collectionFormRef.indexes[index].params.M" :max="64" :min="4" />
                    </NFormItem>
                    <NFormItem
                      label="efConstruction (节点邻居遍历的范围)"
                      :path="`indexes[${index}].params.efConstruction`"
                    >
                      <NInputNumber
                        v-model:value="collectionFormRef.indexes[index].params.efConstruction"
                        :max="512"
                        :min="8"
                      />
                    </NFormItem>
                  </NCard>
                  <NCard
                    v-else-if="collectionFormRef.indexes[index].indexType.indexOf('ivf_') === 0"
                    title="IVF params"
                  >
                    <NFormItem label="M (邻居节点数)" :path="`indexes[${index}].params.M`">
                      <NInputNumber v-model:value="collectionFormRef.indexes[index].params.M" :max="65536" :min="1" />
                    </NFormItem>
                    <NFormItem label="efConstruction (节点邻居遍历的范围)" :path="`indexes[${index}].params.nlist`">
                      <NInputNumber
                        v-model:value="collectionFormRef.indexes[index].params.nlist"
                        :max="65536"
                        :min="1"
                      />
                    </NFormItem>
                  </NCard>
                </NCard>
                <NCard v-else :title="`其他索引${index - 1}`">
                  <NFormItem label="fieldName" :path="`indexes[${index}].fieldName`">
                    <NInput v-model:value="collectionFormRef.indexes[index].fieldName" />
                  </NFormItem>
                  <NFormItem label="fieldType" :path="`indexes[${index}].fieldType`">
                    <NSelect
                      v-model:value="collectionFormRef.indexes[index].fieldType"
                      :options="[
                        {
                          label: 'string (字符型)',
                          value: 'string',
                        },
                        {
                          label: 'uint64 (无符号整数)',
                          value: 'uint64',
                        },
                      ]"
                    />
                  </NFormItem>
                  <NFormItem label="indexType" :path="`indexes[${index}].indexType`">
                    <NInput v-model:value="collectionFormRef.indexes[index].indexType" disabled />
                  </NFormItem>

                  <div>
                    <NButton quaternary size="tiny" class="w-full" @click="() => removeCollectionIndexes(index)"
                      >删除</NButton
                    >
                  </div>
                </NCard>
              </div>
            </div>

            <div class="py-4">
              <NButton quaternary size="tiny" class="w-full" @click="addCollectionIndexes">添加其他索引</NButton>
            </div>
          </NSpin>
          <div>
            <NButton :loading="createCollectionLoadingRef" @click="createCollection">Create</NButton>
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
  useMessage,
} from 'naive-ui'
import type { FormRules, FormInst, SelectOption } from 'naive-ui'
import { debounce, cloneDeep } from 'lodash-es'
import type { Collection, CollectionIndex } from '~/types/vectorDb'

const message = useMessage()

const collectionListDatabaseNameRef = ref<string>(null)

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

const resRef = ref<any>()
const collectionListLoadingRef = ref(false)
const collectionListRef = ref<Collection[]>([])
const listCollection = debounce(async () => {
  if (!collectionListDatabaseNameRef.value) return

  collectionListLoadingRef.value = true
  const res = await getTrpc().vectorDb.collection.list.query({
    database: collectionListDatabaseNameRef.value,
  })
  collectionListLoadingRef.value = false
  resRef.value = res
  collectionListRef.value = res
}, 300)

watch(
  () => collectionListDatabaseNameRef.value,
  (newValue) => {
    if (newValue) {
      listCollection()
    }
  }
)

const createCollectionLoadingRef = ref(false)
const embeddingRef = ref(false)

const getDefCollection = (): Collection => ({
  database: '',
  collection: '',
  replicaNum: 0,
  shardNum: 1,
  description: '',
  embedding: {
    field: 'text',
    vectorField: 'vector',
    model: 'bge-base-zh',
  },
  indexes: [
    {
      fieldName: 'id',
      fieldType: 'string',
      indexType: 'primaryKey',
    },
    {
      fieldName: 'vector',
      fieldType: 'vector',
      indexType: 'HNSW',
      metricType: 'COSINE',
      dimension: 4,
      params: {
        M: 16,
        efConstruction: 200,
        nlist: 1,
      },
    },
  ],
})

const collectionFormRef = reactive<Collection>(getDefCollection())

const resetCollectionForm = () => {
  const defCollection = getDefCollection()
  Object.keys(defCollection).forEach((key) => {
    collectionFormRef[key] = defCollection[key]
  })
}

const collectionFormInstRef = ref<FormInst | null>()
const createCollection = async (e: MouseEvent) => {
  e.preventDefault()

  await collectionFormInstRef.value?.validate()

  createCollectionLoadingRef.value = true
  const willSave = cloneDeep(collectionFormRef)
  if (!embeddingRef.value) {
    delete willSave.embedding
  }

  willSave.indexes = willSave.indexes.map((item) => {
    const { params, indexType, dimension, ...otherProps } = item

    const thisItem = {
      ...otherProps,
      indexType,
    }
    console.log('createCollection dimension', dimension)
    if (!embeddingRef.value && dimension) {
      thisItem.dimension = dimension
    }

    if (indexType === 'HNSW') {
      delete params.nlist
      thisItem.params = params
    } else if (indexType.indexOf('ivf_') === 0) {
      delete params.efConstruction
      thisItem.params = params
    }

    return thisItem
  })
  try {
    const res = await getTrpc().vectorDb.collection.create.mutate(willSave)

    resRef.value = res
    const { code, msg } = res as any
    if (code === 1) {
      message.error(msg)

      createCollectionLoadingRef.value = false
      return
    }

    collectionListDatabaseNameRef.value = willSave.database
    listCollection()

    resetCollectionForm()
  } catch (error) {
    message.error(error)
  }

  createCollectionLoadingRef.value = false
}

const collectionRules: FormRules = {
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

const addCollectionIndexes = () => {
  collectionFormRef.indexes.push({
    fieldName: '',
    fieldType: 'string',
    indexType: 'filter',
  })
}

const removeCollectionIndexes = (index: number) => {
  const indexes = cloneDeep(collectionFormRef.indexes)

  const newIndexes: CollectionIndex[] = indexes.filter((_, i) => i !== index)

  collectionFormRef.indexes = newIndexes
}

const dropCollectionLoadingRef = ref(false)
const dropCollection = async (item: Collection) => {
  dropCollectionLoadingRef.value = true

  const { database, collection } = item

  const res = await getTrpc().vectorDb.collection.drop.mutate({
    database,
    collection,
  })
  resRef.value = res
  listCollection()
  dropCollectionLoadingRef.value = false
}

const truncateCollectionLoadingRef = ref(false)
const truncateCollection = async (item: Collection) => {
  truncateCollectionLoadingRef.value = true

  const { database, collection } = item

  const res = await getTrpc().vectorDb.collection.truncate.mutate({
    database,
    collection,
  })
  resRef.value = res
  truncateCollectionLoadingRef.value = false

  message.success('操作成功')
}

const rebuildIndexLoadingRef = ref(false)
const rebuildIndex = async (item: Collection) => {
  rebuildIndexLoadingRef.value = true

  const { database, collection } = item
  const res = await getTrpc().vectorDb.index.rebuild.mutate({
    database,
    collection,
  })
  resRef.value = res
  rebuildIndexLoadingRef.value = false

  message.success('操作成功')
}
</script>
