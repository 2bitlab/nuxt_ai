<template>
  <div class="flex flex-col gap-5">
    <div class="flex flex-col space-y-2 text-center">
      <h1 class="text-2xl font-semibold tracking-tight">{{ i18nRef.credentialsFormTopTips1 }}</h1>
      <p class="text-sm">{{ i18nRef.credentialsFormTopTips2 }}</p>
    </div>
    <NForm ref="formRef" :show-label="false" :model="formValueRef" :rules="rulesRef">
      <NFormItem path="email">
        <NInput v-model:value="formValueRef.email" :placeholder="i18nRef.credentialsFormEmailRequiredTips" />
      </NFormItem>
      <NFormItem path="password">
        <NInput
          v-model:value="formValueRef.password"
          :placeholder="i18nRef.credentialsFormPasswordRequiredTips"
          type="password"
          show-password-on="mousedown"
        />
      </NFormItem>

      <NButton type="primary" class="w-full" :loading="loadingRef" @click="onSubmit">
        {{ i18nRef.credentialsFormBtn }}
      </NButton>
    </NForm>
  </div>
</template>

<script setup lang="ts">
import { NButton, NForm, NFormItem, useMessage, NInput } from 'naive-ui'
import type { FormInst, FormRules } from 'naive-ui'
import type { SignInOptions } from '@hebilicious/authjs-nuxt/dist/runtime/lib/types'

const getI18nConfig = () => ({
  credentialsFormEmail: '请输入邮箱',
  credentialsFormEmailRequiredTips: '请输入邮箱',
  credentialsFormEmailErrorTips: '请输入正确的邮箱格式',

  credentialsFormPassword: '请输入密码',
  credentialsFormPasswordRequiredTips: '请输入密码',

  credentialsFormBtn: '登陆',
  credentialsFormTopTips1: '账号密码登录', // 'Login with account',
  credentialsFormTopTips2: '请输入你的账号和密码', // 'Type in your email and password',

  credentialsFormSubmitErrorTips: '用户不存在或密码错误',
})

const { i18nRef } = useI18n(getI18nConfig())

const { signIn } = useAuth()

const formRef = ref<FormInst | null>()
const formValueRef = reactive<{ email: string; password: string }>({
  email: '',
  password: '',
})

const loadingRef = ref(false)
const message = useMessage()

const route = useRoute()
console.log('route', route)
const onSubmit = async (e: MouseEvent) => {
  e.preventDefault()

  await formRef.value?.validate()

  loadingRef.value = true

  console.log('EmailForm onSubmit route', route)

  const willPost: SignInOptions = {
    email: formValueRef.email,
    password: formValueRef.password,
    // csrfToken: sessionToken.value,
    inviter: '',
  }

  const callbackUrl = (route.query.callbackUrl ?? '') as string
  if (callbackUrl) {
    willPost.callbackUrl = callbackUrl
  }

  console.log('EmailForm onSubmit willPost', willPost)

  try {
    const res = await signIn('credentials', {
      ...willPost,
      // redirect: false,
    })
    console.log('EmailForm onSubmit res', res)

    // const { ok, error, url } = res || {}

    // console.log('EmailForm onSubmit ok', ok)
    // console.log('EmailForm onSubmit error', error)
    // console.log('EmailForm onSubmit url', url)

    // if (!ok && error) {
    //   message.error(error)
    // } else if (error === 'CredentialsSignin') {
    //   message.error(i18nRef.credentialsFormSubmitErrorTips)
    // } else if (ok) {
    //   // navigateTo(url, { replace: true, external: true })
    // }
  } catch (error) {
    console.error(
      'error',
      error,
      'error.stack',
      error.stack,
      'error.message',
      error.message,
      error.message === 'CredentialsSignin'
    )

    if (error.message === 'CredentialsSignin') {
      message.error(i18nRef.credentialsFormSubmitErrorTips)
    }
  }

  loadingRef.value = false
}

const rulesRef = computed(() => {
  const rules: FormRules = {
    email: [
      {
        required: true,
        message: i18nRef.credentialsFormEmailRequiredTips,
        trigger: ['blur'],
        type: 'email',
      },
    ],
    password: [
      {
        required: true,
        message: i18nRef.credentialsFormPasswordRequiredTips,
        trigger: ['blur'],
      },
    ],
  }

  return rules
})
</script>
