/* eslint-disable */
import type { Prisma, Produce } from '@prisma/client'
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query'
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/vue'
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/vue'
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime'
import metadata from './__model_meta'

export function useCreateProduce(
  options?: Omit<UseMutationOptions<Produce | undefined, unknown, Prisma.ProduceCreateArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.ProduceCreateArgs, Produce, true>(
    'Produce',
    'POST',
    `${endpoint}/produce/create`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.ProduceCreateArgs>(
      args: Prisma.SelectSubset<T, Prisma.ProduceCreateArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, Produce, Prisma.ProduceGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.ProduceCreateArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, Produce, Prisma.ProduceGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useCreateManyProduce(
  options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ProduceCreateManyArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.ProduceCreateManyArgs, Prisma.BatchPayload, false>(
    'Produce',
    'POST',
    `${endpoint}/produce/createMany`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    false,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.ProduceCreateManyArgs>(
      args: Prisma.SelectSubset<T, Prisma.ProduceCreateManyArgs>,
      options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.ProduceCreateManyArgs>, unknown>,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload
    },
  }
  return mutation
}

export function useFindManyProduce<T extends Prisma.ProduceFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.ProduceFindManyArgs>,
  options?: Omit<UseQueryOptions<Array<Prisma.ProduceGetPayload<T> & { $optimistic?: boolean }>>, 'queryKey'>,
  optimisticUpdate: boolean = true
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('Produce', `${endpoint}/produce/findMany`, args, options, fetch, optimisticUpdate)
}

export function useInfiniteFindManyProduce<T extends Prisma.ProduceFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.ProduceFindManyArgs>,
  options?: Omit<UseInfiniteQueryOptions<Array<Prisma.ProduceGetPayload<T>>>, 'queryKey'>
) {
  const { endpoint, fetch } = getHooksContext()
  return useInfiniteModelQuery('Produce', `${endpoint}/produce/findMany`, args, options, fetch)
}

export function useFindUniqueProduce<T extends Prisma.ProduceFindUniqueArgs>(
  args: Prisma.SelectSubset<T, Prisma.ProduceFindUniqueArgs>,
  options?: Omit<UseQueryOptions<Prisma.ProduceGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
  optimisticUpdate: boolean = true
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('Produce', `${endpoint}/produce/findUnique`, args, options, fetch, optimisticUpdate)
}

export function useFindFirstProduce<T extends Prisma.ProduceFindFirstArgs>(
  args?: Prisma.SelectSubset<T, Prisma.ProduceFindFirstArgs>,
  options?: Omit<UseQueryOptions<Prisma.ProduceGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
  optimisticUpdate: boolean = true
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('Produce', `${endpoint}/produce/findFirst`, args, options, fetch, optimisticUpdate)
}

export function useUpdateProduce(
  options?: Omit<UseMutationOptions<Produce | undefined, unknown, Prisma.ProduceUpdateArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.ProduceUpdateArgs, Produce, true>(
    'Produce',
    'PUT',
    `${endpoint}/produce/update`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.ProduceUpdateArgs>(
      args: Prisma.SelectSubset<T, Prisma.ProduceUpdateArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, Produce, Prisma.ProduceGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.ProduceUpdateArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, Produce, Prisma.ProduceGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useUpdateManyProduce(
  options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ProduceUpdateManyArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.ProduceUpdateManyArgs, Prisma.BatchPayload, false>(
    'Produce',
    'PUT',
    `${endpoint}/produce/updateMany`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    false,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.ProduceUpdateManyArgs>(
      args: Prisma.SelectSubset<T, Prisma.ProduceUpdateManyArgs>,
      options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.ProduceUpdateManyArgs>, unknown>,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload
    },
  }
  return mutation
}

export function useUpsertProduce(
  options?: Omit<UseMutationOptions<Produce | undefined, unknown, Prisma.ProduceUpsertArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.ProduceUpsertArgs, Produce, true>(
    'Produce',
    'POST',
    `${endpoint}/produce/upsert`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.ProduceUpsertArgs>(
      args: Prisma.SelectSubset<T, Prisma.ProduceUpsertArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, Produce, Prisma.ProduceGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.ProduceUpsertArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, Produce, Prisma.ProduceGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useDeleteProduce(
  options?: Omit<UseMutationOptions<Produce | undefined, unknown, Prisma.ProduceDeleteArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.ProduceDeleteArgs, Produce, true>(
    'Produce',
    'DELETE',
    `${endpoint}/produce/delete`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.ProduceDeleteArgs>(
      args: Prisma.SelectSubset<T, Prisma.ProduceDeleteArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, Produce, Prisma.ProduceGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.ProduceDeleteArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, Produce, Prisma.ProduceGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useDeleteManyProduce(
  options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ProduceDeleteManyArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.ProduceDeleteManyArgs, Prisma.BatchPayload, false>(
    'Produce',
    'DELETE',
    `${endpoint}/produce/deleteMany`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    false,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.ProduceDeleteManyArgs>(
      args: Prisma.SelectSubset<T, Prisma.ProduceDeleteManyArgs>,
      options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.ProduceDeleteManyArgs>, unknown>,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload
    },
  }
  return mutation
}

export function useAggregateProduce<T extends Prisma.ProduceAggregateArgs>(
  args: Prisma.SelectSubset<T, Prisma.ProduceAggregateArgs>,
  options?: Omit<UseQueryOptions<Prisma.GetProduceAggregateType<T>>, 'queryKey'>
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('Produce', `${endpoint}/produce/aggregate`, args, options, fetch)
}

export function useGroupByProduce<
  T extends Prisma.ProduceGroupByArgs,
  HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
  OrderByArg extends Prisma.True extends HasSelectOrTake
    ? { orderBy: Prisma.ProduceGroupByArgs['orderBy'] }
    : { orderBy?: Prisma.ProduceGroupByArgs['orderBy'] },
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
  args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.ProduceGroupByArgs, OrderByArg> & InputErrors>,
  options?: Omit<
    UseQueryOptions<
      {} extends InputErrors
        ? Array<
            PickEnumerable<Prisma.ProduceGroupByOutputType, T['by']> & {
              [P in keyof T & keyof Prisma.ProduceGroupByOutputType]: P extends '_count'
                ? T[P] extends boolean
                  ? number
                  : Prisma.GetScalarType<T[P], Prisma.ProduceGroupByOutputType[P]>
                : Prisma.GetScalarType<T[P], Prisma.ProduceGroupByOutputType[P]>
            }
          >
        : InputErrors
    >,
    'queryKey'
  >
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('Produce', `${endpoint}/produce/groupBy`, args, options, fetch)
}

export function useCountProduce<T extends Prisma.ProduceCountArgs>(
  args?: Prisma.SelectSubset<T, Prisma.ProduceCountArgs>,
  options?: Omit<
    UseQueryOptions<
      T extends { select: any }
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<T['select'], Prisma.ProduceCountAggregateOutputType>
        : number
    >,
    'queryKey'
  >
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('Produce', `${endpoint}/produce/count`, args, options, fetch)
}
