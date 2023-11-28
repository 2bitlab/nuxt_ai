/* eslint-disable */
import type { Prisma, PhysicalProduce } from '@prisma/client'
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query'
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/vue'
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/vue'
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime'
import metadata from './__model_meta'

export function useCreatePhysicalProduce(
  options?: Omit<
    UseMutationOptions<PhysicalProduce | undefined, unknown, Prisma.PhysicalProduceCreateArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.PhysicalProduceCreateArgs, PhysicalProduce, true>(
    'PhysicalProduce',
    'POST',
    `${endpoint}/physicalProduce/create`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.PhysicalProduceCreateArgs>(
      args: Prisma.SelectSubset<T, Prisma.PhysicalProduceCreateArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, PhysicalProduce, Prisma.PhysicalProduceGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.PhysicalProduceCreateArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, PhysicalProduce, Prisma.PhysicalProduceGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useCreateManyPhysicalProduce(
  options?: Omit<
    UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.PhysicalProduceCreateManyArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.PhysicalProduceCreateManyArgs, Prisma.BatchPayload, false>(
    'PhysicalProduce',
    'POST',
    `${endpoint}/physicalProduce/createMany`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    false,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.PhysicalProduceCreateManyArgs>(
      args: Prisma.SelectSubset<T, Prisma.PhysicalProduceCreateManyArgs>,
      options?: Omit<
        UseMutationOptions<
          Prisma.BatchPayload,
          unknown,
          Prisma.SelectSubset<T, Prisma.PhysicalProduceCreateManyArgs>,
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

export function useFindManyPhysicalProduce<T extends Prisma.PhysicalProduceFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.PhysicalProduceFindManyArgs>,
  options?: Omit<UseQueryOptions<Array<Prisma.PhysicalProduceGetPayload<T> & { $optimistic?: boolean }>>, 'queryKey'>,
  optimisticUpdate: boolean = true
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery(
    'PhysicalProduce',
    `${endpoint}/physicalProduce/findMany`,
    args,
    options,
    fetch,
    optimisticUpdate
  )
}

export function useInfiniteFindManyPhysicalProduce<T extends Prisma.PhysicalProduceFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.PhysicalProduceFindManyArgs>,
  options?: Omit<UseInfiniteQueryOptions<Array<Prisma.PhysicalProduceGetPayload<T>>>, 'queryKey'>
) {
  const { endpoint, fetch } = getHooksContext()
  return useInfiniteModelQuery('PhysicalProduce', `${endpoint}/physicalProduce/findMany`, args, options, fetch)
}

export function useFindUniquePhysicalProduce<T extends Prisma.PhysicalProduceFindUniqueArgs>(
  args: Prisma.SelectSubset<T, Prisma.PhysicalProduceFindUniqueArgs>,
  options?: Omit<UseQueryOptions<Prisma.PhysicalProduceGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
  optimisticUpdate: boolean = true
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery(
    'PhysicalProduce',
    `${endpoint}/physicalProduce/findUnique`,
    args,
    options,
    fetch,
    optimisticUpdate
  )
}

export function useFindFirstPhysicalProduce<T extends Prisma.PhysicalProduceFindFirstArgs>(
  args?: Prisma.SelectSubset<T, Prisma.PhysicalProduceFindFirstArgs>,
  options?: Omit<UseQueryOptions<Prisma.PhysicalProduceGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
  optimisticUpdate: boolean = true
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery(
    'PhysicalProduce',
    `${endpoint}/physicalProduce/findFirst`,
    args,
    options,
    fetch,
    optimisticUpdate
  )
}

export function useUpdatePhysicalProduce(
  options?: Omit<
    UseMutationOptions<PhysicalProduce | undefined, unknown, Prisma.PhysicalProduceUpdateArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.PhysicalProduceUpdateArgs, PhysicalProduce, true>(
    'PhysicalProduce',
    'PUT',
    `${endpoint}/physicalProduce/update`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.PhysicalProduceUpdateArgs>(
      args: Prisma.SelectSubset<T, Prisma.PhysicalProduceUpdateArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, PhysicalProduce, Prisma.PhysicalProduceGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.PhysicalProduceUpdateArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, PhysicalProduce, Prisma.PhysicalProduceGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useUpdateManyPhysicalProduce(
  options?: Omit<
    UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.PhysicalProduceUpdateManyArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.PhysicalProduceUpdateManyArgs, Prisma.BatchPayload, false>(
    'PhysicalProduce',
    'PUT',
    `${endpoint}/physicalProduce/updateMany`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    false,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.PhysicalProduceUpdateManyArgs>(
      args: Prisma.SelectSubset<T, Prisma.PhysicalProduceUpdateManyArgs>,
      options?: Omit<
        UseMutationOptions<
          Prisma.BatchPayload,
          unknown,
          Prisma.SelectSubset<T, Prisma.PhysicalProduceUpdateManyArgs>,
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

export function useUpsertPhysicalProduce(
  options?: Omit<
    UseMutationOptions<PhysicalProduce | undefined, unknown, Prisma.PhysicalProduceUpsertArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.PhysicalProduceUpsertArgs, PhysicalProduce, true>(
    'PhysicalProduce',
    'POST',
    `${endpoint}/physicalProduce/upsert`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.PhysicalProduceUpsertArgs>(
      args: Prisma.SelectSubset<T, Prisma.PhysicalProduceUpsertArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, PhysicalProduce, Prisma.PhysicalProduceGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.PhysicalProduceUpsertArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, PhysicalProduce, Prisma.PhysicalProduceGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useDeletePhysicalProduce(
  options?: Omit<
    UseMutationOptions<PhysicalProduce | undefined, unknown, Prisma.PhysicalProduceDeleteArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.PhysicalProduceDeleteArgs, PhysicalProduce, true>(
    'PhysicalProduce',
    'DELETE',
    `${endpoint}/physicalProduce/delete`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.PhysicalProduceDeleteArgs>(
      args: Prisma.SelectSubset<T, Prisma.PhysicalProduceDeleteArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, PhysicalProduce, Prisma.PhysicalProduceGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.PhysicalProduceDeleteArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, PhysicalProduce, Prisma.PhysicalProduceGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useDeleteManyPhysicalProduce(
  options?: Omit<
    UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.PhysicalProduceDeleteManyArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.PhysicalProduceDeleteManyArgs, Prisma.BatchPayload, false>(
    'PhysicalProduce',
    'DELETE',
    `${endpoint}/physicalProduce/deleteMany`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    false,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.PhysicalProduceDeleteManyArgs>(
      args: Prisma.SelectSubset<T, Prisma.PhysicalProduceDeleteManyArgs>,
      options?: Omit<
        UseMutationOptions<
          Prisma.BatchPayload,
          unknown,
          Prisma.SelectSubset<T, Prisma.PhysicalProduceDeleteManyArgs>,
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

export function useAggregatePhysicalProduce<T extends Prisma.PhysicalProduceAggregateArgs>(
  args: Prisma.SelectSubset<T, Prisma.PhysicalProduceAggregateArgs>,
  options?: Omit<UseQueryOptions<Prisma.GetPhysicalProduceAggregateType<T>>, 'queryKey'>
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('PhysicalProduce', `${endpoint}/physicalProduce/aggregate`, args, options, fetch)
}

export function useGroupByPhysicalProduce<
  T extends Prisma.PhysicalProduceGroupByArgs,
  HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
  OrderByArg extends Prisma.True extends HasSelectOrTake
    ? { orderBy: Prisma.PhysicalProduceGroupByArgs['orderBy'] }
    : { orderBy?: Prisma.PhysicalProduceGroupByArgs['orderBy'] },
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
    Prisma.SubsetIntersection<T, Prisma.PhysicalProduceGroupByArgs, OrderByArg> & InputErrors
  >,
  options?: Omit<
    UseQueryOptions<
      {} extends InputErrors
        ? Array<
            PickEnumerable<Prisma.PhysicalProduceGroupByOutputType, T['by']> & {
              [P in keyof T & keyof Prisma.PhysicalProduceGroupByOutputType]: P extends '_count'
                ? T[P] extends boolean
                  ? number
                  : Prisma.GetScalarType<T[P], Prisma.PhysicalProduceGroupByOutputType[P]>
                : Prisma.GetScalarType<T[P], Prisma.PhysicalProduceGroupByOutputType[P]>
            }
          >
        : InputErrors
    >,
    'queryKey'
  >
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('PhysicalProduce', `${endpoint}/physicalProduce/groupBy`, args, options, fetch)
}

export function useCountPhysicalProduce<T extends Prisma.PhysicalProduceCountArgs>(
  args?: Prisma.SelectSubset<T, Prisma.PhysicalProduceCountArgs>,
  options?: Omit<
    UseQueryOptions<
      T extends { select: any }
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<T['select'], Prisma.PhysicalProduceCountAggregateOutputType>
        : number
    >,
    'queryKey'
  >
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('PhysicalProduce', `${endpoint}/physicalProduce/count`, args, options, fetch)
}
