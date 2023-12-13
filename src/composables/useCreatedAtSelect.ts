import { debounce } from 'lodash-es'

export const useCreatedAtSelect = (whereRef: Ref<{ where: Record<string, any> }>) => {
  const rangeCreatedAtRef = ref(null)

  watch(
    () => rangeCreatedAtRef.value,
    debounce((newValue) => {
      const { where } = whereRef.value
      const [start, end] = newValue || []

      let newWhere = {
        createdAt: undefined,
      }
      if (start && end) {
        newWhere = {
          createdAt: {
            gte: new Date(start),
            lt: new Date(end),
          },
        }
      }

      whereRef.value = {
        where: {
          ...where,
          ...newWhere,
        },
      }
    }, 300)
  )

  return {
    rangeCreatedAtRef,
  }
}
