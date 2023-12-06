<template>
  <div>
    <div class="flex gap-4">
      <NCard title="Database list">
        <NSpin :show="databaseListLoadingRef">
          <div class="flex flex-wrap gap-2">
            <NTag v-for="item in databaseListRef" :key="item">
              {{ item }}
              <NDivider vertical />
              <NPopconfirm @positive-click="() => dropDatabase(item)">
                <template #trigger>
                  <NButton quaternary size="tiny" :loading="dropDatabaseLoadingRef">删除</NButton>
                </template>
                确认删除数据库？
              </NPopconfirm>
            </NTag>
          </div>
        </NSpin>
      </NCard>

      <NCard title="Create database">
        <NFormItem label="Database name">
          <NInput v-model:value="databaseNameRef" />
        </NFormItem>
        <NButton :loading="createDatabaseLoadingRef" @click="createDatabase">Create</NButton>
      </NCard>
    </div>

    <div v-if="resRef" class="p-4">
      <div>resRef:</div>
      <div>{{ resRef }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NSpin, NButton, NFormItem, NInput, NCard, NTag, NPopconfirm, NDivider } from 'naive-ui'

const {
  data: databaseListRef,
  refresh: databaseListRefresh,
  pending: databaseListLoadingRef,
} = await getTrpc().vectorDb.database.list.useQuery()

const resRef = ref<any>()
const databaseNameRef = ref('')

const createDatabaseLoadingRef = ref(false)
const createDatabase = async () => {
  createDatabaseLoadingRef.value = true
  const res = await getTrpc().vectorDb.database.create.mutate({
    database: databaseNameRef.value,
  })
  resRef.value = res
  databaseNameRef.value = ''
  databaseListRefresh()
  createDatabaseLoadingRef.value = false
}

const dropDatabaseLoadingRef = ref(false)
const dropDatabase = async (database: string) => {
  dropDatabaseLoadingRef.value = true
  const res = await getTrpc().vectorDb.database.drop.mutate({
    database,
  })
  resRef.value = res
  databaseListRefresh()
  dropDatabaseLoadingRef.value = false
}
</script>
