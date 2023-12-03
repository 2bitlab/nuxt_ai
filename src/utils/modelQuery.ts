import type { UseQueryOptions } from '@tanstack/vue-query'
import { getHooksContext, useModelQuery } from '@zenstackhq/tanstack-query/runtime/vue'
import { upperFirst } from 'lodash-es'

export const useCount = ({
  model,
  body,
  options,
}: {
  body?: any
  options?: UseQueryOptions<number>
  model: string
}) => {
  const { endpoint, fetch } = getHooksContext()
  const modelName = upperFirst(model)

  return useModelQuery<number>(modelName, `${endpoint}/${model}/count`, body, options, fetch)
}

export const useFindMany = <R>({
  model,
  body,
  options,
}: {
  body?: any
  options?: UseQueryOptions<R>
  model: string
}) => {
  const { endpoint, fetch } = getHooksContext()
  const modelName = upperFirst(model)

  return useModelQuery<R>(modelName, `${endpoint}/${model}/findMany`, body, options, fetch)
}

export const findMany = async ({ model, body }: { body?: any; model: string }) => {
  const { endpoint, fetch } = getHooksContext()

  const res = await fetch(`${endpoint}/${model}/findMany`, {
    body,
  })

  return res
}
