import type { SelectOption, SelectRenderLabel, SelectRenderTag } from 'naive-ui'
import type { User } from '@prisma/client'
import { debounce } from 'lodash-es'

import AvatarCard from '~/components/User/AvatarCard.vue'

export const useUserSelect = ({
  getBefOrList,
  formatWhere,
}: {
  getBefOrList?: () => Promise<any[]>
  formatWhere?: (where: any) => Promise<any>
}) => {
  const optionsRef = ref<(SelectOption & User)[]>([])
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
          {
            email: {
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

      const list = await getTrpc().db.user.findMany.query({
        take: 10,
        where,
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
          block: true,
          deleted: true,
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
      user: option,
      round: true,
    })
  }

  const renderSingleSelectTag: SelectRenderTag = ({ option }) => {
    console.log('renderSingleSelectTag option', option)
    return h(AvatarCard, {
      user: option,
      round: true,
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
