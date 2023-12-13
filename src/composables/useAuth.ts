import type { Permission, Role } from '@prisma/client'

export const usePermissionI18n = () => {
  const getI18nConfig = () => ({
    permissionTopUp: '充值',
    permissionSuperAdmin: '超级管理员',
  })
  return useI18n(getI18nConfig())
}

export const usePermissionMap = () => {
  const { i18nRef } = usePermissionI18n()
  const mapRef = computed<Record<Permission, string>>(() => {
    return {
      TOP_UP: i18nRef.permissionTopUp,
      SUPER_ADMIN: i18nRef.permissionSuperAdmin,
    }
  })

  return {
    mapRef,
    i18nRef,
  }
}

export const usePermissionOptions = <T = any>() => {
  const { i18nRef, mapRef } = usePermissionMap()

  const optionsRef = computed<T[]>(() => {
    const map = mapRef.value

    return Object.keys(map).map((key) => {
      return {
        label: map[key],
        value: key,
      } as T
    })
  })

  return {
    optionsRef,
    i18nRef,
    mapRef,
  }
}

export const useRoleSelect = ({
  getBefOrList,
  formatWhere,
}: {
  getBefOrList?: () => Promise<any[]>
  formatWhere?: (where: any) => Promise<any>
}) => {
  return useDataSelect<Role>({
    getBefOrList,
    formatWhere,
    model: 'role',
    getQueryOrList: (query) => [
      {
        id: {
          contains: query,
        },
      },
      {
        name: {
          contains: query,
        },
      },
    ],
  })
}
