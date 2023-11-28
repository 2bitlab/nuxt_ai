/* eslint-disable */
import type { Prisma, I18nValue } from '@prisma/client'
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query'
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/vue'
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/vue'
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime'
import metadata from './__model_meta'

export function useCreateI18nValue(
  options?: Omit<UseMutationOptions<I18nValue | undefined, unknown, Prisma.I18nValueCreateArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.I18nValueCreateArgs, I18nValue, true>(
    'I18nValue',
    'POST',
    `${endpoint}/i18nValue/create`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.I18nValueCreateArgs>(
      args: Prisma.SelectSubset<T, Prisma.I18nValueCreateArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, I18nValue, Prisma.I18nValueGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.I18nValueCreateArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, I18nValue, Prisma.I18nValueGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useCreateManyI18nValue(
  options?: Omit<
    UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.I18nValueCreateManyArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.I18nValueCreateManyArgs, Prisma.BatchPayload, false>(
    'I18nValue',
    'POST',
    `${endpoint}/i18nValue/createMany`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    false,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.I18nValueCreateManyArgs>(
      args: Prisma.SelectSubset<T, Prisma.I18nValueCreateManyArgs>,
      options?: Omit<
        UseMutationOptions<
          Prisma.BatchPayload,
          unknown,
          Prisma.SelectSubset<T, Prisma.I18nValueCreateManyArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload
    },
  }
  return mutation
}

export function useFindManyI18nValue<T extends Prisma.I18nValueFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.I18nValueFindManyArgs>,
  options?: Omit<UseQueryOptions<Array<Prisma.I18nValueGetPayload<T> & { $optimistic?: boolean }>>, 'queryKey'>,
  optimisticUpdate: boolean = true
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('I18nValue', `${endpoint}/i18nValue/findMany`, args, options, fetch, optimisticUpdate)
}

export function useInfiniteFindManyI18nValue<T extends Prisma.I18nValueFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.I18nValueFindManyArgs>,
  options?: Omit<UseInfiniteQueryOptions<Array<Prisma.I18nValueGetPayload<T>>>, 'queryKey'>
) {
  const { endpoint, fetch } = getHooksContext()
  return useInfiniteModelQuery('I18nValue', `${endpoint}/i18nValue/findMany`, args, options, fetch)
}

export function useFindUniqueI18nValue<T extends Prisma.I18nValueFindUniqueArgs>(
  args: Prisma.SelectSubset<T, Prisma.I18nValueFindUniqueArgs>,
  options?: Omit<UseQueryOptions<Prisma.I18nValueGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
  optimisticUpdate: boolean = true
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('I18nValue', `${endpoint}/i18nValue/findUnique`, args, options, fetch, optimisticUpdate)
}

export function useFindFirstI18nValue<T extends Prisma.I18nValueFindFirstArgs>(
  args?: Prisma.SelectSubset<T, Prisma.I18nValueFindFirstArgs>,
  options?: Omit<UseQueryOptions<Prisma.I18nValueGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
  optimisticUpdate: boolean = true
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('I18nValue', `${endpoint}/i18nValue/findFirst`, args, options, fetch, optimisticUpdate)
}

export function useUpdateI18nValue(
  options?: Omit<UseMutationOptions<I18nValue | undefined, unknown, Prisma.I18nValueUpdateArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.I18nValueUpdateArgs, I18nValue, true>(
    'I18nValue',
    'PUT',
    `${endpoint}/i18nValue/update`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.I18nValueUpdateArgs>(
      args: Prisma.SelectSubset<T, Prisma.I18nValueUpdateArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, I18nValue, Prisma.I18nValueGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.I18nValueUpdateArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, I18nValue, Prisma.I18nValueGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useUpdateManyI18nValue(
  options?: Omit<
    UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.I18nValueUpdateManyArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.I18nValueUpdateManyArgs, Prisma.BatchPayload, false>(
    'I18nValue',
    'PUT',
    `${endpoint}/i18nValue/updateMany`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    false,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.I18nValueUpdateManyArgs>(
      args: Prisma.SelectSubset<T, Prisma.I18nValueUpdateManyArgs>,
      options?: Omit<
        UseMutationOptions<
          Prisma.BatchPayload,
          unknown,
          Prisma.SelectSubset<T, Prisma.I18nValueUpdateManyArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload
    },
  }
  return mutation
}

export function useUpsertI18nValue(
  options?: Omit<UseMutationOptions<I18nValue | undefined, unknown, Prisma.I18nValueUpsertArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.I18nValueUpsertArgs, I18nValue, true>(
    'I18nValue',
    'POST',
    `${endpoint}/i18nValue/upsert`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.I18nValueUpsertArgs>(
      args: Prisma.SelectSubset<T, Prisma.I18nValueUpsertArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, I18nValue, Prisma.I18nValueGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.I18nValueUpsertArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, I18nValue, Prisma.I18nValueGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useDeleteI18nValue(
  options?: Omit<UseMutationOptions<I18nValue | undefined, unknown, Prisma.I18nValueDeleteArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.I18nValueDeleteArgs, I18nValue, true>(
    'I18nValue',
    'DELETE',
    `${endpoint}/i18nValue/delete`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.I18nValueDeleteArgs>(
      args: Prisma.SelectSubset<T, Prisma.I18nValueDeleteArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, I18nValue, Prisma.I18nValueGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.I18nValueDeleteArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, I18nValue, Prisma.I18nValueGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useDeleteManyI18nValue(
  options?: Omit<
    UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.I18nValueDeleteManyArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.I18nValueDeleteManyArgs, Prisma.BatchPayload, false>(
    'I18nValue',
    'DELETE',
    `${endpoint}/i18nValue/deleteMany`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    false,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.I18nValueDeleteManyArgs>(
      args: Prisma.SelectSubset<T, Prisma.I18nValueDeleteManyArgs>,
      options?: Omit<
        UseMutationOptions<
          Prisma.BatchPayload,
          unknown,
          Prisma.SelectSubset<T, Prisma.I18nValueDeleteManyArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload
    },
  }
  return mutation
}

export function useAggregateI18nValue<T extends Prisma.I18nValueAggregateArgs>(
  args: Prisma.SelectSubset<T, Prisma.I18nValueAggregateArgs>,
  options?: Omit<UseQueryOptions<Prisma.GetI18nValueAggregateType<T>>, 'queryKey'>
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('I18nValue', `${endpoint}/i18nValue/aggregate`, args, options, fetch)
}

export function useGroupByI18nValue<
  T extends Prisma.I18nValueGroupByArgs,
  HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
  OrderByArg extends Prisma.True extends HasSelectOrTake
    ? { orderBy: Prisma.I18nValueGroupByArgs['orderBy'] }
    : { orderBy?: Prisma.I18nValueGroupByArgs['orderBy'] },
  OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
  ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
  ByValid extends Prisma.Has<ByFields, OrderFields>,
  HavingFields extends Prisma.GetHavingFields<T['having']>,
  HavingValid extends Prisma.Has<ByFields, HavingFields>,
  ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
  InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
          ? never
          : P extends string
          ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
          : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
      }[HavingFields]
    : 'take' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
      ? ByValid extends Prisma.True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
      : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
      ? ByValid extends Prisma.True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
      : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
      }[OrderFields],
>(
  args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.I18nValueGroupByArgs, OrderByArg> & InputErrors>,
  options?: Omit<
    UseQueryOptions<
      {} extends InputErrors
        ? Array<
            PickEnumerable<Prisma.I18nValueGroupByOutputType, T['by']> & {
              [P in keyof T & keyof Prisma.I18nValueGroupByOutputType]: P extends '_count'
                ? T[P] extends boolean
                  ? number
                  : Prisma.GetScalarType<T[P], Prisma.I18nValueGroupByOutputType[P]>
                : Prisma.GetScalarType<T[P], Prisma.I18nValueGroupByOutputType[P]>
            }
          >
        : InputErrors
    >,
    'queryKey'
  >
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('I18nValue', `${endpoint}/i18nValue/groupBy`, args, options, fetch)
}

export function useCountI18nValue<T extends Prisma.I18nValueCountArgs>(
  args?: Prisma.SelectSubset<T, Prisma.I18nValueCountArgs>,
  options?: Omit<
    UseQueryOptions<
      T extends { select: any }
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<T['select'], Prisma.I18nValueCountAggregateOutputType>
        : number
    >,
    'queryKey'
  >
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('I18nValue', `${endpoint}/i18nValue/count`, args, options, fetch)
}
