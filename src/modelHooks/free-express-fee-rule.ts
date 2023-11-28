/* eslint-disable */
import type { Prisma, FreeExpressFeeRule } from '@prisma/client'
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query'
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/vue'
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/vue'
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime'
import metadata from './__model_meta'

export function useCreateFreeExpressFeeRule(
  options?: Omit<
    UseMutationOptions<FreeExpressFeeRule | undefined, unknown, Prisma.FreeExpressFeeRuleCreateArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.FreeExpressFeeRuleCreateArgs, FreeExpressFeeRule, true>(
    'FreeExpressFeeRule',
    'POST',
    `${endpoint}/freeExpressFeeRule/create`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.FreeExpressFeeRuleCreateArgs>(
      args: Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleCreateArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, FreeExpressFeeRule, Prisma.FreeExpressFeeRuleGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleCreateArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, FreeExpressFeeRule, Prisma.FreeExpressFeeRuleGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useCreateManyFreeExpressFeeRule(
  options?: Omit<
    UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.FreeExpressFeeRuleCreateManyArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.FreeExpressFeeRuleCreateManyArgs, Prisma.BatchPayload, false>(
    'FreeExpressFeeRule',
    'POST',
    `${endpoint}/freeExpressFeeRule/createMany`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    false,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.FreeExpressFeeRuleCreateManyArgs>(
      args: Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleCreateManyArgs>,
      options?: Omit<
        UseMutationOptions<
          Prisma.BatchPayload,
          unknown,
          Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleCreateManyArgs>,
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

export function useFindManyFreeExpressFeeRule<T extends Prisma.FreeExpressFeeRuleFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleFindManyArgs>,
  options?: Omit<
    UseQueryOptions<Array<Prisma.FreeExpressFeeRuleGetPayload<T> & { $optimistic?: boolean }>>,
    'queryKey'
  >,
  optimisticUpdate: boolean = true
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery(
    'FreeExpressFeeRule',
    `${endpoint}/freeExpressFeeRule/findMany`,
    args,
    options,
    fetch,
    optimisticUpdate
  )
}

export function useInfiniteFindManyFreeExpressFeeRule<T extends Prisma.FreeExpressFeeRuleFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleFindManyArgs>,
  options?: Omit<UseInfiniteQueryOptions<Array<Prisma.FreeExpressFeeRuleGetPayload<T>>>, 'queryKey'>
) {
  const { endpoint, fetch } = getHooksContext()
  return useInfiniteModelQuery('FreeExpressFeeRule', `${endpoint}/freeExpressFeeRule/findMany`, args, options, fetch)
}

export function useFindUniqueFreeExpressFeeRule<T extends Prisma.FreeExpressFeeRuleFindUniqueArgs>(
  args: Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleFindUniqueArgs>,
  options?: Omit<UseQueryOptions<Prisma.FreeExpressFeeRuleGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
  optimisticUpdate: boolean = true
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery(
    'FreeExpressFeeRule',
    `${endpoint}/freeExpressFeeRule/findUnique`,
    args,
    options,
    fetch,
    optimisticUpdate
  )
}

export function useFindFirstFreeExpressFeeRule<T extends Prisma.FreeExpressFeeRuleFindFirstArgs>(
  args?: Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleFindFirstArgs>,
  options?: Omit<UseQueryOptions<Prisma.FreeExpressFeeRuleGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
  optimisticUpdate: boolean = true
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery(
    'FreeExpressFeeRule',
    `${endpoint}/freeExpressFeeRule/findFirst`,
    args,
    options,
    fetch,
    optimisticUpdate
  )
}

export function useUpdateFreeExpressFeeRule(
  options?: Omit<
    UseMutationOptions<FreeExpressFeeRule | undefined, unknown, Prisma.FreeExpressFeeRuleUpdateArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.FreeExpressFeeRuleUpdateArgs, FreeExpressFeeRule, true>(
    'FreeExpressFeeRule',
    'PUT',
    `${endpoint}/freeExpressFeeRule/update`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.FreeExpressFeeRuleUpdateArgs>(
      args: Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleUpdateArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, FreeExpressFeeRule, Prisma.FreeExpressFeeRuleGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleUpdateArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, FreeExpressFeeRule, Prisma.FreeExpressFeeRuleGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useUpdateManyFreeExpressFeeRule(
  options?: Omit<
    UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.FreeExpressFeeRuleUpdateManyArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.FreeExpressFeeRuleUpdateManyArgs, Prisma.BatchPayload, false>(
    'FreeExpressFeeRule',
    'PUT',
    `${endpoint}/freeExpressFeeRule/updateMany`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    false,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.FreeExpressFeeRuleUpdateManyArgs>(
      args: Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleUpdateManyArgs>,
      options?: Omit<
        UseMutationOptions<
          Prisma.BatchPayload,
          unknown,
          Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleUpdateManyArgs>,
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

export function useUpsertFreeExpressFeeRule(
  options?: Omit<
    UseMutationOptions<FreeExpressFeeRule | undefined, unknown, Prisma.FreeExpressFeeRuleUpsertArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.FreeExpressFeeRuleUpsertArgs, FreeExpressFeeRule, true>(
    'FreeExpressFeeRule',
    'POST',
    `${endpoint}/freeExpressFeeRule/upsert`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.FreeExpressFeeRuleUpsertArgs>(
      args: Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleUpsertArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, FreeExpressFeeRule, Prisma.FreeExpressFeeRuleGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleUpsertArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, FreeExpressFeeRule, Prisma.FreeExpressFeeRuleGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useDeleteFreeExpressFeeRule(
  options?: Omit<
    UseMutationOptions<FreeExpressFeeRule | undefined, unknown, Prisma.FreeExpressFeeRuleDeleteArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.FreeExpressFeeRuleDeleteArgs, FreeExpressFeeRule, true>(
    'FreeExpressFeeRule',
    'DELETE',
    `${endpoint}/freeExpressFeeRule/delete`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.FreeExpressFeeRuleDeleteArgs>(
      args: Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleDeleteArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, FreeExpressFeeRule, Prisma.FreeExpressFeeRuleGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleDeleteArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, FreeExpressFeeRule, Prisma.FreeExpressFeeRuleGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useDeleteManyFreeExpressFeeRule(
  options?: Omit<
    UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.FreeExpressFeeRuleDeleteManyArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.FreeExpressFeeRuleDeleteManyArgs, Prisma.BatchPayload, false>(
    'FreeExpressFeeRule',
    'DELETE',
    `${endpoint}/freeExpressFeeRule/deleteMany`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    false,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.FreeExpressFeeRuleDeleteManyArgs>(
      args: Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleDeleteManyArgs>,
      options?: Omit<
        UseMutationOptions<
          Prisma.BatchPayload,
          unknown,
          Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleDeleteManyArgs>,
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

export function useAggregateFreeExpressFeeRule<T extends Prisma.FreeExpressFeeRuleAggregateArgs>(
  args: Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleAggregateArgs>,
  options?: Omit<UseQueryOptions<Prisma.GetFreeExpressFeeRuleAggregateType<T>>, 'queryKey'>
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('FreeExpressFeeRule', `${endpoint}/freeExpressFeeRule/aggregate`, args, options, fetch)
}

export function useGroupByFreeExpressFeeRule<
  T extends Prisma.FreeExpressFeeRuleGroupByArgs,
  HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
  OrderByArg extends Prisma.True extends HasSelectOrTake
    ? { orderBy: Prisma.FreeExpressFeeRuleGroupByArgs['orderBy'] }
    : { orderBy?: Prisma.FreeExpressFeeRuleGroupByArgs['orderBy'] },
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
  args: Prisma.SelectSubset<
    T,
    Prisma.SubsetIntersection<T, Prisma.FreeExpressFeeRuleGroupByArgs, OrderByArg> & InputErrors
  >,
  options?: Omit<
    UseQueryOptions<
      {} extends InputErrors
        ? Array<
            PickEnumerable<Prisma.FreeExpressFeeRuleGroupByOutputType, T['by']> & {
              [P in keyof T & keyof Prisma.FreeExpressFeeRuleGroupByOutputType]: P extends '_count'
                ? T[P] extends boolean
                  ? number
                  : Prisma.GetScalarType<T[P], Prisma.FreeExpressFeeRuleGroupByOutputType[P]>
                : Prisma.GetScalarType<T[P], Prisma.FreeExpressFeeRuleGroupByOutputType[P]>
            }
          >
        : InputErrors
    >,
    'queryKey'
  >
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('FreeExpressFeeRule', `${endpoint}/freeExpressFeeRule/groupBy`, args, options, fetch)
}

export function useCountFreeExpressFeeRule<T extends Prisma.FreeExpressFeeRuleCountArgs>(
  args?: Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleCountArgs>,
  options?: Omit<
    UseQueryOptions<
      T extends { select: any }
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<T['select'], Prisma.FreeExpressFeeRuleCountAggregateOutputType>
        : number
    >,
    'queryKey'
  >
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('FreeExpressFeeRule', `${endpoint}/freeExpressFeeRule/count`, args, options, fetch)
}
