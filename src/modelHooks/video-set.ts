/* eslint-disable */
import type { Prisma, VideoSet } from '@prisma/client'
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query'
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/vue'
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/vue'
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime'
import metadata from './__model_meta'

export function useCreateVideoSet(
  options?: Omit<UseMutationOptions<VideoSet | undefined, unknown, Prisma.VideoSetCreateArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.VideoSetCreateArgs, VideoSet, true>(
    'VideoSet',
    'POST',
    `${endpoint}/videoSet/create`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.VideoSetCreateArgs>(
      args: Prisma.SelectSubset<T, Prisma.VideoSetCreateArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, VideoSet, Prisma.VideoSetGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.VideoSetCreateArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, VideoSet, Prisma.VideoSetGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useCreateManyVideoSet(
  options?: Omit<
    UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.VideoSetCreateManyArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.VideoSetCreateManyArgs, Prisma.BatchPayload, false>(
    'VideoSet',
    'POST',
    `${endpoint}/videoSet/createMany`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    false,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.VideoSetCreateManyArgs>(
      args: Prisma.SelectSubset<T, Prisma.VideoSetCreateManyArgs>,
      options?: Omit<
        UseMutationOptions<
          Prisma.BatchPayload,
          unknown,
          Prisma.SelectSubset<T, Prisma.VideoSetCreateManyArgs>,
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

export function useFindManyVideoSet<T extends Prisma.VideoSetFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.VideoSetFindManyArgs>,
  options?: Omit<UseQueryOptions<Array<Prisma.VideoSetGetPayload<T> & { $optimistic?: boolean }>>, 'queryKey'>,
  optimisticUpdate: boolean = true
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('VideoSet', `${endpoint}/videoSet/findMany`, args, options, fetch, optimisticUpdate)
}

export function useInfiniteFindManyVideoSet<T extends Prisma.VideoSetFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.VideoSetFindManyArgs>,
  options?: Omit<UseInfiniteQueryOptions<Array<Prisma.VideoSetGetPayload<T>>>, 'queryKey'>
) {
  const { endpoint, fetch } = getHooksContext()
  return useInfiniteModelQuery('VideoSet', `${endpoint}/videoSet/findMany`, args, options, fetch)
}

export function useFindUniqueVideoSet<T extends Prisma.VideoSetFindUniqueArgs>(
  args: Prisma.SelectSubset<T, Prisma.VideoSetFindUniqueArgs>,
  options?: Omit<UseQueryOptions<Prisma.VideoSetGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
  optimisticUpdate: boolean = true
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('VideoSet', `${endpoint}/videoSet/findUnique`, args, options, fetch, optimisticUpdate)
}

export function useFindFirstVideoSet<T extends Prisma.VideoSetFindFirstArgs>(
  args?: Prisma.SelectSubset<T, Prisma.VideoSetFindFirstArgs>,
  options?: Omit<UseQueryOptions<Prisma.VideoSetGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
  optimisticUpdate: boolean = true
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('VideoSet', `${endpoint}/videoSet/findFirst`, args, options, fetch, optimisticUpdate)
}

export function useUpdateVideoSet(
  options?: Omit<UseMutationOptions<VideoSet | undefined, unknown, Prisma.VideoSetUpdateArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.VideoSetUpdateArgs, VideoSet, true>(
    'VideoSet',
    'PUT',
    `${endpoint}/videoSet/update`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.VideoSetUpdateArgs>(
      args: Prisma.SelectSubset<T, Prisma.VideoSetUpdateArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, VideoSet, Prisma.VideoSetGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.VideoSetUpdateArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, VideoSet, Prisma.VideoSetGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useUpdateManyVideoSet(
  options?: Omit<
    UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.VideoSetUpdateManyArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.VideoSetUpdateManyArgs, Prisma.BatchPayload, false>(
    'VideoSet',
    'PUT',
    `${endpoint}/videoSet/updateMany`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    false,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.VideoSetUpdateManyArgs>(
      args: Prisma.SelectSubset<T, Prisma.VideoSetUpdateManyArgs>,
      options?: Omit<
        UseMutationOptions<
          Prisma.BatchPayload,
          unknown,
          Prisma.SelectSubset<T, Prisma.VideoSetUpdateManyArgs>,
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

export function useUpsertVideoSet(
  options?: Omit<UseMutationOptions<VideoSet | undefined, unknown, Prisma.VideoSetUpsertArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.VideoSetUpsertArgs, VideoSet, true>(
    'VideoSet',
    'POST',
    `${endpoint}/videoSet/upsert`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.VideoSetUpsertArgs>(
      args: Prisma.SelectSubset<T, Prisma.VideoSetUpsertArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, VideoSet, Prisma.VideoSetGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.VideoSetUpsertArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, VideoSet, Prisma.VideoSetGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useDeleteVideoSet(
  options?: Omit<UseMutationOptions<VideoSet | undefined, unknown, Prisma.VideoSetDeleteArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.VideoSetDeleteArgs, VideoSet, true>(
    'VideoSet',
    'DELETE',
    `${endpoint}/videoSet/delete`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.VideoSetDeleteArgs>(
      args: Prisma.SelectSubset<T, Prisma.VideoSetDeleteArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, VideoSet, Prisma.VideoSetGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.VideoSetDeleteArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, VideoSet, Prisma.VideoSetGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useDeleteManyVideoSet(
  options?: Omit<
    UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.VideoSetDeleteManyArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.VideoSetDeleteManyArgs, Prisma.BatchPayload, false>(
    'VideoSet',
    'DELETE',
    `${endpoint}/videoSet/deleteMany`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    false,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.VideoSetDeleteManyArgs>(
      args: Prisma.SelectSubset<T, Prisma.VideoSetDeleteManyArgs>,
      options?: Omit<
        UseMutationOptions<
          Prisma.BatchPayload,
          unknown,
          Prisma.SelectSubset<T, Prisma.VideoSetDeleteManyArgs>,
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

export function useAggregateVideoSet<T extends Prisma.VideoSetAggregateArgs>(
  args: Prisma.SelectSubset<T, Prisma.VideoSetAggregateArgs>,
  options?: Omit<UseQueryOptions<Prisma.GetVideoSetAggregateType<T>>, 'queryKey'>
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('VideoSet', `${endpoint}/videoSet/aggregate`, args, options, fetch)
}

export function useGroupByVideoSet<
  T extends Prisma.VideoSetGroupByArgs,
  HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
  OrderByArg extends Prisma.True extends HasSelectOrTake
    ? { orderBy: Prisma.VideoSetGroupByArgs['orderBy'] }
    : { orderBy?: Prisma.VideoSetGroupByArgs['orderBy'] },
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
  args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.VideoSetGroupByArgs, OrderByArg> & InputErrors>,
  options?: Omit<
    UseQueryOptions<
      {} extends InputErrors
        ? Array<
            PickEnumerable<Prisma.VideoSetGroupByOutputType, T['by']> & {
              [P in keyof T & keyof Prisma.VideoSetGroupByOutputType]: P extends '_count'
                ? T[P] extends boolean
                  ? number
                  : Prisma.GetScalarType<T[P], Prisma.VideoSetGroupByOutputType[P]>
                : Prisma.GetScalarType<T[P], Prisma.VideoSetGroupByOutputType[P]>
            }
          >
        : InputErrors
    >,
    'queryKey'
  >
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('VideoSet', `${endpoint}/videoSet/groupBy`, args, options, fetch)
}

export function useCountVideoSet<T extends Prisma.VideoSetCountArgs>(
  args?: Prisma.SelectSubset<T, Prisma.VideoSetCountArgs>,
  options?: Omit<
    UseQueryOptions<
      T extends { select: any }
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<T['select'], Prisma.VideoSetCountAggregateOutputType>
        : number
    >,
    'queryKey'
  >
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('VideoSet', `${endpoint}/videoSet/count`, args, options, fetch)
}
