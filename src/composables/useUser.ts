import type { User } from '@prisma/client'

import { useDataSelect } from './useDataSelect'
import AvatarCard from '~/components/User/AvatarCard.vue'

export const useUserSelect = ({
  getBefOrList,
  formatWhere,
}: {
  getBefOrList?: () => Promise<any[]>
  formatWhere?: (where: any) => Promise<any>
}) => {
  return useDataSelect<User>({
    getBefOrList,
    formatWhere,
    model: 'user',
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
      {
        email: {
          contains: query,
        },
      },
    ],
    renderLabel: (option) => {
      console.log('renderLabel option', option)
      return h(AvatarCard, {
        user: option,
        round: true,
      })
    },
    renderSingleSelectTag: ({ option }) => {
      console.log('renderSingleSelectTag option', option)
      return h(AvatarCard, {
        user: option,
        round: true,
      })
    },
    getQuerySelect: () => ({
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        block: true,
        deleted: true,
      },
    }),
  })
}
