import type {
  PaginationProps,
  DataTableFilterState,
  DataTableSortState,
  DataTableColumn,
  DropdownOption,
  DataTableCreateRowProps,
  FormRules,
  FormInst,
} from 'naive-ui'

import type { Ref, UnwrapNestedRefs } from 'vue'
import { useMessage } from 'naive-ui'

import type { DataTableI18nType } from '~/utils/i18n'

type ModelType =
  | 'i18nValue'
  | 'configValue'
  | 'user'
  | 'balanceLog'
  | 'loginLog'
  | 'videoType'
  | 'page'
  | 'company'
  | 'companyMember'
  | 'role'
  | 'userRole'
  | 'videoOrder'
type UpdateFunc<DataType> = (id: string, data: Partial<DataType>) => Promise<boolean>
type CreateFormatFunc<DataType> = (
  formValueRef: UnwrapNestedRefs<Partial<DataType>>
) => Promise<Partial<DataType> | UnwrapNestedRefs<Partial<DataType>>>

type ActionType = 'del'
type OrderType = 'desc' | 'asc'
type ActionFunc = () => Promise<void>
type InitOrderByFunc = () => Record<string, OrderType>[]

type I18nConfigForFunc<I18nType> = {
  getI18nConfig?: () => I18nType
  i18nRef?: UnwrapNestedRefs<DataTableI18nType & I18nType>
}

type GetColumnsFunc<DataType, I18nType> = (props: {
  update: UpdateFunc<DataType>
  i18nRef: UnwrapNestedRefs<DataTableI18nType & I18nType>
  refresh: () => void
  loadingRef: Ref<boolean>
}) => DataTableColumn<DataType>[]

export const useDataI18n = <I18nType>({
  getI18nConfig: getNewI18nConfig,
  i18nRef: orgI18nRef,
}: I18nConfigForFunc<I18nType>) => {
  if (getNewI18nConfig) {
    const getI18nConfig = () =>
      ({
        ...getDataTableI18nConfig(),
        ...getNewI18nConfig(),
      }) as DataTableI18nType & I18nType

    const { i18nRef } = useI18n(getI18nConfig())

    return i18nRef
  } else if (orgI18nRef) {
    return orgI18nRef
  }

  const getI18nConfig = () =>
    ({
      ...getDataTableI18nConfig(),
    }) as DataTableI18nType & I18nType

  const { i18nRef } = useI18n(getI18nConfig())

  return i18nRef
}

export const useDataList = <DataType extends { id: string }, I18nType>(
  props: {
    model: ModelType
    getColumns: GetColumnsFunc
    refresh?: () => void
    getStatusLoading?: (statusLoading: boolean) => boolean
    getSelectForList?: () => { select?: Record<string, any> }
    initOrderBy?: InitOrderByFunc
  } & I18nConfigForFunc<I18nType>
) => {
  const { model, getStatusLoading, getColumns, refresh: otherRefresh, getSelectForList, initOrderBy = () => [] } = props
  const i18nRef = useDataI18n<I18nType>(props)

  const whereRef = ref({
    where: {},
  })
  const orderRef = ref({
    orderBy: initOrderBy(),
  })

  const {
    data: countRef,
    refresh: countRefresh,
    status: countStatusRef,
  } = getTrpc().db[model].count.useQuery(whereRef, {
    immediate: true,
  })

  const paginationReactive = reactive<PaginationProps>({
    page: 1,
    pageSize: 10,
    itemCount: countRef.value,
    // pageCount: 1,
    pageSizes: [10, 20, 30],
    showSizePicker: true,
    prefix({ itemCount }) {
      return evaluate(i18nRef.dataTablePaginationTotal, {
        num: itemCount,
      })
    },
    onUpdatePage: (page: number) => {
      paginationReactive.page = page
    },
    onUpdatePageSize: (pageSize: number) => {
      paginationReactive.pageSize = pageSize
      paginationReactive.page = 1
    },
  })

  const handleSorterChange = (sorterArr: DataTableSortState[]) => {
    const orderObj = { ...orderRef.value }
    console.log('sorterArr', sorterArr)
    sorterArr.forEach((sorter) => {
      const { columnKey, order } = sorter || {}
      console.log('sorter', sorter, 'columnKey', columnKey)
      if (columnKey) {
        orderObj.orderBy = orderObj.orderBy.filter((item) => !item[columnKey])

        if (order) {
          const valMap: Record<'descend' | 'ascend', OrderType> = {
            descend: 'desc',
            ascend: 'asc',
          }

          const orderType = valMap[order]

          orderObj.orderBy.push({
            [columnKey]: orderType,
          })
        }
      }
    })

    orderRef.value = orderObj
  }

  const handleFiltersChange = (filter: DataTableFilterState) => {
    const whereObj = { ...whereRef.value }

    const whereKeys = Object.keys(filter)

    whereObj.where = whereKeys.reduce((where, key) => {
      let val = filter[key]
      if (val === null) {
        where[key] = undefined
      } else {
        if (!Array.isArray(val)) {
          val = [val]
        }

        const { length } = val || []
        if (length === 1) {
          const [first] = val
          where[key] = first
        } else if (length) {
          where[key] = {
            in: val,
          }
        } else {
          where[key] = undefined
        }
      }

      return where
    }, whereObj.where)
    whereRef.value = whereObj
  }

  const listWhereRef = computed(() => {
    let select
    if (getSelectForList) {
      select = getSelectForList()
    }

    const listWhere = {
      ...whereRef.value,
      ...getPaginationProps(paginationReactive.page, paginationReactive.pageSize),
      ...orderRef.value,
      ...(select || {}),
    }
    console.log('listWhere computed', listWhere)
    return listWhere
  })

  const loadingRef = ref(false)

  const {
    data: listDataRef,
    refresh: listRefresh,
    status: listStatusRef,
  } = getTrpc().db[model].findMany.useQuery(listWhereRef, {
    immediate: true,
  })

  const listRef = computed(() => {
    return listDataRef.value || []
  })

  const refresh = () => {
    countRefresh()
    listRefresh()
    otherRefresh && otherRefresh()
  }

  const statusLoadingRef = computed(() => {
    const defFunc = (statusLoading: boolean) => statusLoading

    const func = getStatusLoading ?? defFunc

    const loading = countStatusRef.value === 'pending' || listStatusRef.value === 'pending'

    console.log('statusLoadingRef computed', loading)
    return func(loading)
  })

  watch(
    () => statusLoadingRef.value,
    (loading) => {
      console.log('statusLoadingRef watch', loading)

      if (loading !== loadingRef.value) {
        loadingRef.value = loading
      }
    }
  )

  watch(
    () => countRef.value,
    (newValue) => {
      console.log('countRef watch', newValue)
      paginationReactive.itemCount = newValue
    }
  )

  const message = useMessage()

  const update: UpdateFunc<DataType> = async (id, data) => {
    if (loadingRef.value) return false

    loadingRef.value = true
    try {
      await getTrpc().db[model].update.mutate({
        where: {
          id,
        },
        data,
      })
      refresh()
      message.success(i18nRef.dataTableSaveSuccessTips)
      return true
    } catch (error) {
      console.error('error', error)
      loadingRef.value = false

      message.error(i18nRef.dataTableSaveErrorTips)
    }

    return false
  }

  const columnsRef = computed(() => {
    return getColumns({
      update,
      i18nRef,
      refresh,
      loadingRef,
    })
  })

  return {
    paginationReactive,
    loadingRef,
    listWhereRef,
    whereRef,
    countRef,
    countStatusRef,
    listStatusRef,
    listRef: listRef as Ref<DataType[]>,
    statusLoadingRef,
    i18nRef,
    columnsRef,
    message,
    handleSorterChange,
    handleFiltersChange,
    countRefresh,
    listRefresh,
    refresh,
    update,
  }
}

export const useDataForm = <DataType extends { id: string }, I18nType>(
  props: {
    model: ModelType
    loadingRef: Ref<boolean>
    getRules?: (i18nRef: UnwrapNestedRefs<DataTableI18nType & I18nType>) => FormRules
    getDefFormData?: () => Partial<DataType>
    refresh: () => void
    createFormat?: CreateFormatFunc<DataType>
    create?: (form: Partial<DataType> | UnwrapNestedRefs<Partial<DataType>>) => Promise<void>
  } & I18nConfigForFunc<I18nType>
) => {
  const {
    model,
    loadingRef,
    refresh,
    getRules = () => ({}),
    getDefFormData = () => ({}),
    createFormat = async (v) => v,
    create,
  } = props

  const i18nRef = useDataI18n<I18nType>(props)

  const addDrawerShowRef = ref(false)

  const formRef = ref<FormInst | null>()
  const formValueRef = reactive<Partial<DataType>>(getDefFormData())

  const rulesRef = computed(() => {
    return getRules(i18nRef)
  })
  const message = useMessage()
  const handleSaveButtonClick = async (e: MouseEvent) => {
    e.preventDefault()

    await formRef.value?.validate()

    loadingRef.value = true
    try {
      const data = await createFormat(formValueRef)

      if (create) {
        await create(data)
      } else {
        await getTrpc().db[model].create.mutate({
          data,
        })
      }
      refresh()
      message.success(i18nRef.dataTableSaveSuccessTips)

      addDrawerShowRef.value = false
    } catch (error) {
      console.error('error', error)
      loadingRef.value = false

      message.error(i18nRef.dataTableSaveErrorTips)
    }
  }

  return {
    rulesRef,
    formValueRef,
    addDrawerShowRef,
    formRef,
    handleSaveButtonClick,
  }
}

export const useDataTable = <DataType extends { id: string }, I18nType>(
  props: {
    model: ModelType
    getColumns: GetColumnsFunc
    getRules?: (i18nRef: UnwrapNestedRefs<DataTableI18nType & I18nType>) => FormRules
    getDefFormData?: () => Partial<DataType>
    refresh?: () => void
    getStatusLoading?: (statusLoading: boolean) => boolean
    getSelectForList?: () => { select?: Record<string, any> }
    createFormat?: CreateFormatFunc<DataType>
    initOrderBy?: InitOrderByFunc
    create?: (form: Partial<DataType> | UnwrapNestedRefs<Partial<DataType>>) => Promise<void>
  } & I18nConfigForFunc<I18nType>
) => {
  const {
    model,
    getStatusLoading,
    getColumns,
    refresh: otherRefresh,
    getRules = () => ({}),
    getDefFormData = () => ({}),
    getSelectForList,
    createFormat = async (v) => v,
    initOrderBy = () => [],
    create,
  } = props

  const i18nRef = useDataI18n<I18nType>(props)

  const {
    paginationReactive,
    loadingRef,
    listWhereRef,
    whereRef,
    countRef,
    countStatusRef,
    listStatusRef,
    listRef,
    statusLoadingRef,
    columnsRef,
    message,
    handleSorterChange,
    handleFiltersChange,
    countRefresh,
    listRefresh,
    refresh,
    update,
  } = useDataList<DataType, I18nType>({
    model,
    getStatusLoading,
    getColumns,
    refresh: otherRefresh,
    getSelectForList,
    initOrderBy,
    i18nRef,
  })

  /**
   * =======================================================
   * Dropdown
   * =======================================================
   */

  const showDropdownRef = ref(false)
  const xRef = ref(0)
  const yRef = ref(0)
  const selectRowRef = ref<DataType | null>(null)

  const dropdownOptionsRef = computed(() => {
    const dropdownOptions: DropdownOption[] = [
      {
        key: 'del',
        label: i18nRef.dataTableDelBtn,
      },
    ]

    return dropdownOptions
  })

  const rowProps: DataTableCreateRowProps<DataType> = (row) => {
    return {
      onContextmenu: (e) => {
        e.preventDefault()
        showDropdownRef.value = false
        nextTick().then(() => {
          showDropdownRef.value = true
          xRef.value = e.clientX
          yRef.value = e.clientY
          selectRowRef.value = row as any
        })
      },
    }
  }

  const onClickDropdownOutside = () => {
    showDropdownRef.value = false
  }

  const handleDropdownSelect = async (key: ActionType) => {
    const funcMap: Record<ActionType, ActionFunc> = {
      del: async () => {
        if (selectRowRef.value) {
          const { id } = selectRowRef.value
          if (id) {
            try {
              await getTrpc().db[model].delete.mutate({
                where: {
                  id,
                },
              })

              refresh()
              message.success(i18nRef.dataTableDelSuccessTips)
            } catch (error) {
              console.error('error', error)
              message.error(i18nRef.dataTableDelErrorTips)
            }
          }
        }
      },
    }

    const func = funcMap[key]
    if (func) {
      await func()
    }
    showDropdownRef.value = false
  }

  /**
   * =======================================================
   * Drawer
   * =======================================================
   */
  const { rulesRef, formValueRef, addDrawerShowRef, formRef, handleSaveButtonClick } = useDataForm({
    model,
    loadingRef,
    i18nRef,
    refresh,
    getRules,
    getDefFormData,
    createFormat,
    create,
  })

  return {
    paginationReactive,
    loadingRef,
    listWhereRef,
    whereRef,
    countRef,
    countStatusRef,
    listStatusRef,
    listRef: listRef as Ref<DataType[]>,
    statusLoadingRef,
    i18nRef,
    columnsRef,
    message,
    rowProps,
    dropdownOptionsRef,
    xRef,
    yRef,
    showDropdownRef,
    rulesRef,
    formValueRef,
    addDrawerShowRef,
    formRef,
    handleSorterChange,
    handleFiltersChange,
    countRefresh,
    listRefresh,
    refresh,
    update,
    handleDropdownSelect,
    onClickDropdownOutside,
    handleSaveButtonClick,
  }
}
