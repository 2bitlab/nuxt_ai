/* eslint-disable */
import type { Prisma, CardProduceAccount } from '@prisma/client'
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query'
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/vue'
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/vue'
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime'
import metadata from './__model_meta'

export function useCreateCardProduceAccount(
  options?: Omit<
    UseMutationOptions<CardProduceAccount | undefined, unknown, Prisma.CardProduceAccountCreateArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.CardProduceAccountCreateArgs, CardProduceAccount, true>(
    'CardProduceAccount',
    'POST',
    `${endpoint}/cardProduceAccount/create`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.CardProduceAccountCreateArgs>(
      args: Prisma.SelectSubset<T, Prisma.CardProduceAccountCreateArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, CardProduceAccount, Prisma.CardProduceAccountGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.CardProduceAccountCreateArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, CardProduceAccount, Prisma.CardProduceAccountGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useCreateManyCardProduceAccount(
  options?: Omit<
    UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.CardProduceAccountCreateManyArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.CardProduceAccountCreateManyArgs, Prisma.BatchPayload, false>(
    'CardProduceAccount',
    'POST',
    `${endpoint}/cardProduceAccount/createMany`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    false,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.CardProduceAccountCreateManyArgs>(
      args: Prisma.SelectSubset<T, Prisma.CardProduceAccountCreateManyArgs>,
      options?: Omit<
        UseMutationOptions<
          Prisma.BatchPayload,
          unknown,
          Prisma.SelectSubset<T, Prisma.CardProduceAccountCreateManyArgs>,
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

export function useFindManyCardProduceAccount<T extends Prisma.CardProduceAccountFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.CardProduceAccountFindManyArgs>,
  options?: Omit<
    UseQueryOptions<Array<Prisma.CardProduceAccountGetPayload<T> & { $optimistic?: boolean }>>,
    'queryKey'
  >,
  optimisticUpdate: boolean = true
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery(
    'CardProduceAccount',
    `${endpoint}/cardProduceAccount/findMany`,
    args,
    options,
    fetch,
    optimisticUpdate
  )
}

export function useInfiniteFindManyCardProduceAccount<T extends Prisma.CardProduceAccountFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.CardProduceAccountFindManyArgs>,
  options?: Omit<UseInfiniteQueryOptions<Array<Prisma.CardProduceAccountGetPayload<T>>>, 'queryKey'>
) {
  const { endpoint, fetch } = getHooksContext()
  return useInfiniteModelQuery('CardProduceAccount', `${endpoint}/cardProduceAccount/findMany`, args, options, fetch)
}

export function useFindUniqueCardProduceAccount<T extends Prisma.CardProduceAccountFindUniqueArgs>(
  args: Prisma.SelectSubset<T, Prisma.CardProduceAccountFindUniqueArgs>,
  options?: Omit<UseQueryOptions<Prisma.CardProduceAccountGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
  optimisticUpdate: boolean = true
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery(
    'CardProduceAccount',
    `${endpoint}/cardProduceAccount/findUnique`,
    args,
    options,
    fetch,
    optimisticUpdate
  )
}

export function useFindFirstCardProduceAccount<T extends Prisma.CardProduceAccountFindFirstArgs>(
  args?: Prisma.SelectSubset<T, Prisma.CardProduceAccountFindFirstArgs>,
  options?: Omit<UseQueryOptions<Prisma.CardProduceAccountGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
  optimisticUpdate: boolean = true
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery(
    'CardProduceAccount',
    `${endpoint}/cardProduceAccount/findFirst`,
    args,
    options,
    fetch,
    optimisticUpdate
  )
}

export function useUpdateCardProduceAccount(
  options?: Omit<
    UseMutationOptions<CardProduceAccount | undefined, unknown, Prisma.CardProduceAccountUpdateArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.CardProduceAccountUpdateArgs, CardProduceAccount, true>(
    'CardProduceAccount',
    'PUT',
    `${endpoint}/cardProduceAccount/update`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.CardProduceAccountUpdateArgs>(
      args: Prisma.SelectSubset<T, Prisma.CardProduceAccountUpdateArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, CardProduceAccount, Prisma.CardProduceAccountGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.CardProduceAccountUpdateArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, CardProduceAccount, Prisma.CardProduceAccountGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useUpdateManyCardProduceAccount(
  options?: Omit<
    UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.CardProduceAccountUpdateManyArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.CardProduceAccountUpdateManyArgs, Prisma.BatchPayload, false>(
    'CardProduceAccount',
    'PUT',
    `${endpoint}/cardProduceAccount/updateMany`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    false,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.CardProduceAccountUpdateManyArgs>(
      args: Prisma.SelectSubset<T, Prisma.CardProduceAccountUpdateManyArgs>,
      options?: Omit<
        UseMutationOptions<
          Prisma.BatchPayload,
          unknown,
          Prisma.SelectSubset<T, Prisma.CardProduceAccountUpdateManyArgs>,
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

export function useUpsertCardProduceAccount(
  options?: Omit<
    UseMutationOptions<CardProduceAccount | undefined, unknown, Prisma.CardProduceAccountUpsertArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.CardProduceAccountUpsertArgs, CardProduceAccount, true>(
    'CardProduceAccount',
    'POST',
    `${endpoint}/cardProduceAccount/upsert`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.CardProduceAccountUpsertArgs>(
      args: Prisma.SelectSubset<T, Prisma.CardProduceAccountUpsertArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, CardProduceAccount, Prisma.CardProduceAccountGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.CardProduceAccountUpsertArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, CardProduceAccount, Prisma.CardProduceAccountGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useDeleteCardProduceAccount(
  options?: Omit<
    UseMutationOptions<CardProduceAccount | undefined, unknown, Prisma.CardProduceAccountDeleteArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.CardProduceAccountDeleteArgs, CardProduceAccount, true>(
    'CardProduceAccount',
    'DELETE',
    `${endpoint}/cardProduceAccount/delete`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.CardProduceAccountDeleteArgs>(
      args: Prisma.SelectSubset<T, Prisma.CardProduceAccountDeleteArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, CardProduceAccount, Prisma.CardProduceAccountGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.CardProduceAccountDeleteArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, CardProduceAccount, Prisma.CardProduceAccountGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useDeleteManyCardProduceAccount(
  options?: Omit<
    UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.CardProduceAccountDeleteManyArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.CardProduceAccountDeleteManyArgs, Prisma.BatchPayload, false>(
    'CardProduceAccount',
    'DELETE',
    `${endpoint}/cardProduceAccount/deleteMany`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    false,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.CardProduceAccountDeleteManyArgs>(
      args: Prisma.SelectSubset<T, Prisma.CardProduceAccountDeleteManyArgs>,
      options?: Omit<
        UseMutationOptions<
          Prisma.BatchPayload,
          unknown,
          Prisma.SelectSubset<T, Prisma.CardProduceAccountDeleteManyArgs>,
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

export function useAggregateCardProduceAccount<T extends Prisma.CardProduceAccountAggregateArgs>(
  args: Prisma.SelectSubset<T, Prisma.CardProduceAccountAggregateArgs>,
  options?: Omit<UseQueryOptions<Prisma.GetCardProduceAccountAggregateType<T>>, 'queryKey'>
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('CardProduceAccount', `${endpoint}/cardProduceAccount/aggregate`, args, options, fetch)
}

export function useGroupByCardProduceAccount<
  T extends Prisma.CardProduceAccountGroupByArgs,
  HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
  OrderByArg extends Prisma.True extends HasSelectOrTake
    ? { orderBy: Prisma.CardProduceAccountGroupByArgs['orderBy'] }
    : { orderBy?: Prisma.CardProduceAccountGroupByArgs['orderBy'] },
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
    Prisma.SubsetIntersection<T, Prisma.CardProduceAccountGroupByArgs, OrderByArg> & InputErrors
  >,
  options?: Omit<
    UseQueryOptions<
      {} extends InputErrors
        ? Array<
            PickEnumerable<Prisma.CardProduceAccountGroupByOutputType, T['by']> & {
              [P in keyof T & keyof Prisma.CardProduceAccountGroupByOutputType]: P extends '_count'
                ? T[P] extends boolean
                  ? number
                  : Prisma.GetScalarType<T[P], Prisma.CardProduceAccountGroupByOutputType[P]>
                : Prisma.GetScalarType<T[P], Prisma.CardProduceAccountGroupByOutputType[P]>
            }
          >
        : InputErrors
    >,
    'queryKey'
  >
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('CardProduceAccount', `${endpoint}/cardProduceAccount/groupBy`, args, options, fetch)
}

export function useCountCardProduceAccount<T extends Prisma.CardProduceAccountCountArgs>(
  args?: Prisma.SelectSubset<T, Prisma.CardProduceAccountCountArgs>,
  options?: Omit<
    UseQueryOptions<
      T extends { select: any }
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<T['select'], Prisma.CardProduceAccountCountAggregateOutputType>
        : number
    >,
    'queryKey'
  >
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('CardProduceAccount', `${endpoint}/cardProduceAccount/count`, args, options, fetch)
}
