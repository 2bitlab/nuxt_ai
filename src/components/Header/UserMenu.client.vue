<template>
  <div>
    <div v-if="isLoginRef">
      <div class="cursor-pointer" @click="() => (rightDrawerShowRef = true)">
        <UserAvatarCard :user="user" :round="true" :just-avatar="true" />
      </div>
    </div>
    <div v-else>
      <NButton @click="() => signIn()">{{ i18nRef.headerUserMenuLoginBtn }}</NButton>
    </div>

    <NDrawer v-model:show="rightDrawerShowRef" :mask-closable="true">
      <NDrawerContent>
        <template #header>
          <UserAvatarCard class="mx-[-1rem] flex-1 text-sm" :user="user" :round="true" />
        </template>

        <div class="mx-[-1.5rem] my-[-1rem]">
          <NMenu :root-indent="12" :options="menuOptionsRef" />
        </div>

        <template #footer>
          <div class="mx-[-1rem] flex-1">
            <NButton class="w-full" quaternary @click="clickSignOut">{{ i18nRef.headerUserMenuSignOutBtn }}</NButton>
          </div>
        </template>
      </NDrawerContent>
    </NDrawer>
  </div>
</template>

<script setup lang="ts">
import { NButton, NDrawer, NDrawerContent, NMenu } from 'naive-ui'
import type { MenuOption } from 'naive-ui'

const NuxtLink = resolveComponent('NuxtLink')
const Icon = resolveComponent('Icon')

const getI18nConfig = () => ({
  headerUserMenuLoginBtn: '登录',
  headerUserMenuSignOutBtn: '退出登录',

  headerUserMenuMyBalance: '余额情况',
  headerUserMenuMyVideoOrder: '订单情况',
  headerUserMenuVideoOrder: '待处理订单',
  headerUserMenuVideoUpload: '上传视频',
  headerUserMenuVideos: '视频',
  headerUserMenuVideoTypes: '视频类别管理',
  headerUserMenuUsers: '用户管理',
  headerUserMenuRoles: '角色管理',
  headerUserMenuUserRoles: '用户角色管理',
  headerUserMenuCompanies: '企业管理',
  headerUserMenuCompanyMembers: '企业成员管理',
  headerUserMenuBalanceLogs: '用户余额查询',
  headerUserMenuConfig: '系统配置',
})

const { i18nRef } = useI18n(getI18nConfig())

const { signIn, signOut, user } = useAuth()

const isLoginRef = computed(() => {
  return !!user.value
})

const clickSignOut = () => {
  signOut()
  signIn()
}

const rightDrawerShowRef = ref(false)

const getIconMenu = ({ to, icon, label }: { to: string; icon: string; label: string }): MenuOption => {
  return {
    label: () =>
      h(
        NuxtLink,
        {
          to,
        },
        { default: () => label }
      ),
    key: to,
    icon: () =>
      h(Icon, {
        name: icon,
        size: '20',
      }),
  }
}

const menuOptionsRef = computed(() => {
  const options: MenuOption[] = [
    getIconMenu({
      to: '/my/balance',
      icon: 'ic:sharp-search',
      label: i18nRef.headerUserMenuMyBalance,
    }),
    getIconMenu({
      to: '/my/videoOrders',
      icon: 'ic:sharp-search',
      label: i18nRef.headerUserMenuMyVideoOrder,
    }),
    getIconMenu({
      to: '/settings/videoOrders',
      icon: 'ic:sharp-search',
      label: i18nRef.headerUserMenuVideoOrder,
    }),
    getIconMenu({
      to: '/creator/content/upload',
      icon: 'ic:sharp-search',
      label: i18nRef.headerUserMenuVideoUpload,
    }),
    getIconMenu({
      to: '/',
      icon: 'ic:sharp-search',
      label: i18nRef.headerUserMenuVideos,
    }),
    getIconMenu({
      to: '/settings/videoTypes',
      icon: 'ic:sharp-search',
      label: i18nRef.headerUserMenuVideoTypes,
    }),
    getIconMenu({
      to: '/settings/users',
      icon: 'ic:sharp-search',
      label: i18nRef.headerUserMenuUsers,
    }),
    getIconMenu({
      to: '/settings/roles',
      icon: 'ic:sharp-search',
      label: i18nRef.headerUserMenuRoles,
    }),
    getIconMenu({
      to: '/settings/userRoles',
      icon: 'ic:sharp-search',
      label: i18nRef.headerUserMenuUserRoles,
    }),
    getIconMenu({
      to: '/settings/companies',
      icon: 'ic:sharp-search',
      label: i18nRef.headerUserMenuCompanies,
    }),
    getIconMenu({
      to: '/settings/companyMembers',
      icon: 'ic:sharp-search',
      label: i18nRef.headerUserMenuCompanyMembers,
    }),
    getIconMenu({
      to: '/settings/balanceLogs',
      icon: 'ic:sharp-search',
      label: i18nRef.headerUserMenuBalanceLogs,
    }),
    getIconMenu({
      to: '/settings/config',
      icon: 'ic:sharp-search',
      label: i18nRef.headerUserMenuConfig,
    }),
  ]

  return options
})
</script>
