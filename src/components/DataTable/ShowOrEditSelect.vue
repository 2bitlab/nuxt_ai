<template>
  <div class="min-h-[1.375rem]" @click="handleOnClick">
    <NSelect v-if="isEdit" v-model:value="inputValueRef" :options="options" :on-update:value="handleChange" />
    <div v-else class="cursor-pointer">{{ showRef }}</div>
  </div>
</template>

<script setup lang="ts">
import { NSelect } from 'naive-ui'
import type { SelectOption } from 'naive-ui'
const props = defineProps<{
  value: string
  options: SelectOption[]
  editValueEmpty?: boolean
  onUpdateValue: (v: string) => Promise<boolean>
}>()

const isEdit = ref(false)
const inputValueRef = ref(props.value)
function handleOnClick() {
  isEdit.value = true
  inputValueRef.value = `${props.editValueEmpty ? '' : props.value || ''}`
}
const handleChange = async (value) => {
  inputValueRef.value = value

  if (props.value !== inputValueRef.value) {
    const isSuccess = await props.onUpdateValue(inputValueRef.value)

    if (isSuccess) {
      isEdit.value = false
    }
  } else {
    isEdit.value = false
  }
}

const showRef = computed(() => {
  const { label } = (props.options || []).find(({ value }) => value === (props.value || '')) || {}

  return label || '-'
})
</script>
