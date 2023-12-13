import type { SelectOption } from 'naive-ui'
import type { CompanyStatus, CompanyMemberRole, Company } from '@prisma/client'

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
  return useDataSelect<Company>({
    getBefOrList,
    formatWhere,
    model: 'company',

    renderLabel: (option) => {
      console.log('renderLabel option', option)
      return h(AvatarCard, {
        company: option,
      })
    },
    renderSingleSelectTag: ({ option }) => {
      console.log('renderSingleSelectTag option', option)
      return h(AvatarCard, {
        company: option,
      })
    },
    getQuerySelect: () => ({
      select: {
        id: true,
        name: true,
        logo: true,
      },
    }),
  })
}
