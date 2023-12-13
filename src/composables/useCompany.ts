import type { SelectOption, SelectRenderLabel, SelectRenderTag } from 'naive-ui'
import type { CompanyStatus, CompanyMemberRole, Company } from '@prisma/client'

import { debounce } from 'lodash-es'
import AvatarCard from '~/components/Company/AvatarCard.vue'

export const useCompanyStatusI18n = () => {
  const getI18nConfig = () => ({
    companyStatusVerified: '已认证',
    companyStatusWaitCertified: '待认证',
    companyStatusReview: '审核中',
    companyStatusLoggedOut: '已注销',
  })
  return useI18n(getI18nConfig())
}

export const useCompanyStatusMap = () => {
  const { i18nRef } = useCompanyStatusI18n()
  const mapRef = computed<Record<CompanyStatus, string>>(() => {
    return {
      VERIFIED: i18nRef.companyStatusVerified, // 已认证
      WAIT_CERTIFIED: i18nRef.companyStatusWaitCertified, // 待认证
      REVIEW: i18nRef.companyStatusReview, // 审核中
      LOGGED_OUT: i18nRef.companyStatusLoggedOut, // 已注销
    }
  })

  return {
    mapRef,
    i18nRef,
  }
}

// export const useCompanyStatusOptions = () => {}

export const useCompanyMemberRoleI18n = () => {
  const getI18nConfig = () => ({
    companyMemberRoleOwner: '拥有者',
    companyMemberRoleAdmin: '管理员',
    companyMemberRoleMember: '成员',
  })
  return useI18n(getI18nConfig())
}

export const useCompanyMemberRoleMap = () => {
  const { i18nRef } = useCompanyMemberRoleI18n()
  const mapRef = computed<Record<CompanyMemberRole, string>>(() => {
    return {
      OWNER: i18nRef.companyMemberRoleOwner, // 拥有者
      ADMIN: i18nRef.companyMemberRoleAdmin, // 管理员
      MEMBER: i18nRef.companyMemberRoleMember, // 成员
    }
  })

  return {
    mapRef,
    i18nRef,
  }
}

export const useCompanyMemberRoleOptions = () => {
  const { i18nRef, mapRef } = useCompanyMemberRoleMap()

  const optionsRef = computed<SelectOption[]>(() => {
    const map = mapRef.value

    return Object.keys(map).map((key) => {
      return {
        label: map[key],
        value: key,
      }
    })
  })

  return {
    optionsRef,
    i18nRef,
    mapRef,
  }
}

export const useCompanySelect = ({
  getBefOrList,
  formatWhere,
}: {
  getBefOrList?: () => Promise<any[]>
  formatWhere?: (where: any) => Promise<any>
}) => {
  const optionsRef = ref<(SelectOption & Company)[]>([])
  const searchLoadingRef = ref(false)
  const handleSearch = debounce(async (query?: string) => {
    searchLoadingRef.value = true

    const orList = []
    if (getBefOrList) {
      const defOrList = await getBefOrList()
      orList.push(...defOrList)
    }

    if (query) {
      console.log('handleSearch query', query)
      orList.push(
        ...[
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
        ]
      )
    }

    if (orList.length) {
      let where = {
        OR: orList,
      }

      if (formatWhere) {
        where = await formatWhere(where)
      }

      const list = await getTrpc().db.company.findMany.query({
        take: 10,
        where,
        select: {
          id: true,
          name: true,
          logo: true,
        },
      })
      console.log('handleSearch list', list)
      optionsRef.value = list.map((item) => ({ ...item, label: item.name, value: item.id }))
    } else {
      optionsRef.value = []
    }

    searchLoadingRef.value = false
  }, 300)

  const renderLabel: SelectRenderLabel = (option) => {
    console.log('renderLabel option', option)
    return h(AvatarCard, {
      company: option,
    })
  }

  const renderSingleSelectTag: SelectRenderTag = ({ option }) => {
    console.log('renderSingleSelectTag option', option)
    return h(AvatarCard, {
      company: option,
    })
  }

  return {
    optionsRef,
    searchLoadingRef,
    handleSearch,
    renderLabel,
    renderSingleSelectTag,
  }
}
