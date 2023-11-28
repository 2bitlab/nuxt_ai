/* eslint-disable */
import type { Prisma, ShopMember } from '@prisma/client'
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query'
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/vue'
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/vue'
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime'
import metadata from './__model_meta'

export function useCreateShopMember(
  options?: Omit<
    UseMutationOptions<ShopMember | undefined, unknown, Prisma.ShopMemberCreateArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.ShopMemberCreateArgs, ShopMember, true>(
    'ShopMember',
    'POST',
    `${endpoint}/shopMember/create`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.ShopMemberCreateArgs>(
      args: Prisma.SelectSubset<T, Prisma.ShopMemberCreateArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, ShopMember, Prisma.ShopMemberGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.ShopMemberCreateArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, ShopMember, Prisma.ShopMemberGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useCreateManyShopMember(
  options?: Omit<
    UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ShopMemberCreateManyArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.ShopMemberCreateManyArgs, Prisma.BatchPayload, false>(
    'ShopMember',
    'POST',
    `${endpoint}/shopMember/createMany`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    false,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.ShopMemberCreateManyArgs>(
      args: Prisma.SelectSubset<T, Prisma.ShopMemberCreateManyArgs>,
      options?: Omit<
        UseMutationOptions<
          Prisma.BatchPayload,
          unknown,
          Prisma.SelectSubset<T, Prisma.ShopMemberCreateManyArgs>,
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

export function useFindManyShopMember<T extends Prisma.ShopMemberFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.ShopMemberFindManyArgs>,
  options?: Omit<UseQueryOptions<Array<Prisma.ShopMemberGetPayload<T> & { $optimistic?: boolean }>>, 'queryKey'>,
  optimisticUpdate: boolean = true
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('ShopMember', `${endpoint}/shopMember/findMany`, args, options, fetch, optimisticUpdate)
}

export function useInfiniteFindManyShopMember<T extends Prisma.ShopMemberFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.ShopMemberFindManyArgs>,
  options?: Omit<UseInfiniteQueryOptions<Array<Prisma.ShopMemberGetPayload<T>>>, 'queryKey'>
) {
  const { endpoint, fetch } = getHooksContext()
  return useInfiniteModelQuery('ShopMember', `${endpoint}/shopMember/findMany`, args, options, fetch)
}

export function useFindUniqueShopMember<T extends Prisma.ShopMemberFindUniqueArgs>(
  args: Prisma.SelectSubset<T, Prisma.ShopMemberFindUniqueArgs>,
  options?: Omit<UseQueryOptions<Prisma.ShopMemberGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
  optimisticUpdate: boolean = true
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('ShopMember', `${endpoint}/shopMember/findUnique`, args, options, fetch, optimisticUpdate)
}

export function useFindFirstShopMember<T extends Prisma.ShopMemberFindFirstArgs>(
  args?: Prisma.SelectSubset<T, Prisma.ShopMemberFindFirstArgs>,
  options?: Omit<UseQueryOptions<Prisma.ShopMemberGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
  optimisticUpdate: boolean = true
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('ShopMember', `${endpoint}/shopMember/findFirst`, args, options, fetch, optimisticUpdate)
}

export function useUpdateShopMember(
  options?: Omit<
    UseMutationOptions<ShopMember | undefined, unknown, Prisma.ShopMemberUpdateArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.ShopMemberUpdateArgs, ShopMember, true>(
    'ShopMember',
    'PUT',
    `${endpoint}/shopMember/update`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.ShopMemberUpdateArgs>(
      args: Prisma.SelectSubset<T, Prisma.ShopMemberUpdateArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, ShopMember, Prisma.ShopMemberGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.ShopMemberUpdateArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, ShopMember, Prisma.ShopMemberGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useUpdateManyShopMember(
  options?: Omit<
    UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ShopMemberUpdateManyArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.ShopMemberUpdateManyArgs, Prisma.BatchPayload, false>(
    'ShopMember',
    'PUT',
    `${endpoint}/shopMember/updateMany`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    false,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.ShopMemberUpdateManyArgs>(
      args: Prisma.SelectSubset<T, Prisma.ShopMemberUpdateManyArgs>,
      options?: Omit<
        UseMutationOptions<
          Prisma.BatchPayload,
          unknown,
          Prisma.SelectSubset<T, Prisma.ShopMemberUpdateManyArgs>,
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

export function useUpsertShopMember(
  options?: Omit<
    UseMutationOptions<ShopMember | undefined, unknown, Prisma.ShopMemberUpsertArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.ShopMemberUpsertArgs, ShopMember, true>(
    'ShopMember',
    'POST',
    `${endpoint}/shopMember/upsert`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.ShopMemberUpsertArgs>(
      args: Prisma.SelectSubset<T, Prisma.ShopMemberUpsertArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, ShopMember, Prisma.ShopMemberGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.ShopMemberUpsertArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, ShopMember, Prisma.ShopMemberGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useDeleteShopMember(
  options?: Omit<
    UseMutationOptions<ShopMember | undefined, unknown, Prisma.ShopMemberDeleteArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.ShopMemberDeleteArgs, ShopMember, true>(
    'ShopMember',
    'DELETE',
    `${endpoint}/shopMember/delete`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.ShopMemberDeleteArgs>(
      args: Prisma.SelectSubset<T, Prisma.ShopMemberDeleteArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, ShopMember, Prisma.ShopMemberGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.ShopMemberDeleteArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, ShopMember, Prisma.ShopMemberGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useDeleteManyShopMember(
  options?: Omit<
    UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ShopMemberDeleteManyArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.ShopMemberDeleteManyArgs, Prisma.BatchPayload, false>(
    'ShopMember',
    'DELETE',
    `${endpoint}/shopMember/deleteMany`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    false,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.ShopMemberDeleteManyArgs>(
      args: Prisma.SelectSubset<T, Prisma.ShopMemberDeleteManyArgs>,
      options?: Omit<
        UseMutationOptions<
          Prisma.BatchPayload,
          unknown,
          Prisma.SelectSubset<T, Prisma.ShopMemberDeleteManyArgs>,
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

export function useAggregateShopMember<T extends Prisma.ShopMemberAggregateArgs>(
  args: Prisma.SelectSubset<T, Prisma.ShopMemberAggregateArgs>,
  options?: Omit<UseQueryOptions<Prisma.GetShopMemberAggregateType<T>>, 'queryKey'>
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('ShopMember', `${endpoint}/shopMember/aggregate`, args, options, fetch)
}

export function useGroupByShopMember<
  T extends Prisma.ShopMemberGroupByArgs,
  HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
  OrderByArg extends Prisma.True extends HasSelectOrTake
    ? { orderBy: Prisma.ShopMemberGroupByArgs['orderBy'] }
    : { orderBy?: Prisma.ShopMemberGroupByArgs['orderBy'] },
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
  args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.ShopMemberGroupByArgs, OrderByArg> & InputErrors>,
  options?: Omit<
    UseQueryOptions<
      {} extends InputErrors
        ? Array<
            PickEnumerable<Prisma.ShopMemberGroupByOutputType, T['by']> & {
              [P in keyof T & keyof Prisma.ShopMemberGroupByOutputType]: P extends '_count'
                ? T[P] extends boolean
                  ? number
                  : Prisma.GetScalarType<T[P], Prisma.ShopMemberGroupByOutputType[P]>
                : Prisma.GetScalarType<T[P], Prisma.ShopMemberGroupByOutputType[P]>
            }
          >
        : InputErrors
    >,
    'queryKey'
  >
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('ShopMember', `${endpoint}/shopMember/groupBy`, args, options, fetch)
}

export function useCountShopMember<T extends Prisma.ShopMemberCountArgs>(
  args?: Prisma.SelectSubset<T, Prisma.ShopMemberCountArgs>,
  options?: Omit<
    UseQueryOptions<
      T extends { select: any }
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<T['select'], Prisma.ShopMemberCountAggregateOutputType>
        : number
    >,
    'queryKey'
  >
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('ShopMember', `${endpoint}/shopMember/count`, args, options, fetch)
}
