export const getDataTableI18nConfig = () => ({
  dataTablePaginationTotal: '共 ${num} 条',
  dataTableAddBtn: '新增',
  dataTableSaveBtn: '保存',
  dataTableDelBtn: '删除',
  dataTableSaveErrorTips: '保存失败',
  dataTableSaveSuccessTips: '保存成功',
  dataTableDelSuccessTips: '删除成功',
  dataTableDelErrorTips: '删除失败',
  dataTableSaveRequiredTips: '请填写${text}',
  dataTableCreatedAt: '创建时间',
  dataTableCreator: '创建者',
})

export type DataTableI18nType = ReturnType<typeof getDataTableI18nConfig>
