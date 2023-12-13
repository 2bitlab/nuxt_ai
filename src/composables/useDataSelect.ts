import type { SelectOption, SelectRenderLabel, SelectRenderTag } from 'naive-ui'
import { debounce } from 'lodash-es'

const defGetQueryOrList = (query: string) => [
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

const defGetQuerySelect = () => ({
  select: {
    id: true,
    name: true,
  },
})

export const useDataSelect = <T>({
  getBefOrList,
  formatWhere,
  model,
  getQueryOrList = defGetQueryOrList,
  renderLabel,
  renderSingleSelectTag,
  getQuerySelect = defGetQuerySelect,
  optionFormat = (item) => ({ ...item, label: item.name, value: item.id }),
}: {
  getBefOrList?: () => Promise<any[]>
  formatWhere?: (where: any) => Promise<any>
  model: 'role' | 'user' | 'company'

  getQueryOrList?: (query: string) => any[]
  renderLabel?: SelectRenderLabel
  renderSingleSelectTag?: SelectRenderTag

  getQuerySelect?: () => { select?: Record<string, any> }
  optionFormat?: (option: SelectOption & T) => SelectOption & T
}) => {
  const optionsRef = ref<(SelectOption & T)[]>([])
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
      orList.push(...getQueryOrList(query))
    }

    if (orList.length) {
      let where = {
        OR: orList,
      }

      if (formatWhere) {
        where = await formatWhere(where)
      }

      const { select } = getQuerySelect() || {}

      const list = await getTrpc().db[model].findMany.query({
        take: 10,
        where,
        select,
      })
      console.log('handleSearch list', list)
      optionsRef.value = list.map(optionFormat)
    } else {
      optionsRef.value = []
    }

    searchLoadingRef.value = false
  }, 300)

  return {
    optionsRef,
    searchLoadingRef,
    handleSearch,
    renderLabel,
    renderSingleSelectTag,
  }
}
