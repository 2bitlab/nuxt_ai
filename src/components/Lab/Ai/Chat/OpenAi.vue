<template>
  <div class="stretch mx-auto flex w-full max-w-md flex-col py-24">
    <div v-for="m in messages" :key="m.id" class="whitespace-pre-wrap">
      {{ m.role === 'user' ? 'User: ' : 'AI: ' }}
      {{ m.content }}
    </div>

    <form @submit="handleSubmit">
      <input
        v-model="input"
        class="fixed bottom-0 mb-8 w-full max-w-md rounded border border-gray-300 p-2 shadow-xl"
        placeholder="Say something..."
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import { useChat } from 'ai/vue'

const { messages, input, handleSubmit } = useChat({
  headers: { 'Content-Type': 'application/json' },
})
</script>
