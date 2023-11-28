/* eslint-disable */
import type { Prisma, VideoType } from '@prisma/client'
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query'
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/vue'
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/vue'
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime'
import metadata from './__model_meta'

export function useCreateVideoType(
  options?: Omit<UseMutationOptions<VideoType | undefined, unknown, Prisma.VideoTypeCreateArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.VideoTypeCreateArgs, VideoType, true>(
    'VideoType',
    'POST',
    `${endpoint}/videoType/create`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.VideoTypeCreateArgs>(
      args: Prisma.SelectSubset<T, Prisma.VideoTypeCreateArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, VideoType, Prisma.VideoTypeGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.VideoTypeCreateArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, VideoType, Prisma.VideoTypeGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useCreateManyVideoType(
  options?: Omit<
    UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.VideoTypeCreateManyArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.VideoTypeCreateManyArgs, Prisma.BatchPayload, false>(
    'VideoType',
    'POST',
    `${endpoint}/videoType/createMany`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    false,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.VideoTypeCreateManyArgs>(
      args: Prisma.SelectSubset<T, Prisma.VideoTypeCreateManyArgs>,
      options?: Omit<
        UseMutationOptions<
          Prisma.BatchPayload,
          unknown,
          Prisma.SelectSubset<T, Prisma.VideoTypeCreateManyArgs>,
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

export function useFindManyVideoType<T extends Prisma.VideoTypeFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.VideoTypeFindManyArgs>,
  options?: Omit<UseQueryOptions<Array<Prisma.VideoTypeGetPayload<T> & { $optimistic?: boolean }>>, 'queryKey'>,
  optimisticUpdate: boolean = true
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('VideoType', `${endpoint}/videoType/findMany`, args, options, fetch, optimisticUpdate)
}

export function useInfiniteFindManyVideoType<T extends Prisma.VideoTypeFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.VideoTypeFindManyArgs>,
  options?: Omit<UseInfiniteQueryOptions<Array<Prisma.VideoTypeGetPayload<T>>>, 'queryKey'>
) {
  const { endpoint, fetch } = getHooksContext()
  return useInfiniteModelQuery('VideoType', `${endpoint}/videoType/findMany`, args, options, fetch)
}

export function useFindUniqueVideoType<T extends Prisma.VideoTypeFindUniqueArgs>(
  args: Prisma.SelectSubset<T, Prisma.VideoTypeFindUniqueArgs>,
  options?: Omit<UseQueryOptions<Prisma.VideoTypeGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
  optimisticUpdate: boolean = true
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('VideoType', `${endpoint}/videoType/findUnique`, args, options, fetch, optimisticUpdate)
}

export function useFindFirstVideoType<T extends Prisma.VideoTypeFindFirstArgs>(
  args?: Prisma.SelectSubset<T, Prisma.VideoTypeFindFirstArgs>,
  options?: Omit<UseQueryOptions<Prisma.VideoTypeGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
  optimisticUpdate: boolean = true
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('VideoType', `${endpoint}/videoType/findFirst`, args, options, fetch, optimisticUpdate)
}

export function useUpdateVideoType(
  options?: Omit<UseMutationOptions<VideoType | undefined, unknown, Prisma.VideoTypeUpdateArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.VideoTypeUpdateArgs, VideoType, true>(
    'VideoType',
    'PUT',
    `${endpoint}/videoType/update`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.VideoTypeUpdateArgs>(
      args: Prisma.SelectSubset<T, Prisma.VideoTypeUpdateArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, VideoType, Prisma.VideoTypeGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.VideoTypeUpdateArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, VideoType, Prisma.VideoTypeGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useUpdateManyVideoType(
  options?: Omit<
    UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.VideoTypeUpdateManyArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.VideoTypeUpdateManyArgs, Prisma.BatchPayload, false>(
    'VideoType',
    'PUT',
    `${endpoint}/videoType/updateMany`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    false,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.VideoTypeUpdateManyArgs>(
      args: Prisma.SelectSubset<T, Prisma.VideoTypeUpdateManyArgs>,
      options?: Omit<
        UseMutationOptions<
          Prisma.BatchPayload,
          unknown,
          Prisma.SelectSubset<T, Prisma.VideoTypeUpdateManyArgs>,
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

export function useUpsertVideoType(
  options?: Omit<UseMutationOptions<VideoType | undefined, unknown, Prisma.VideoTypeUpsertArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.VideoTypeUpsertArgs, VideoType, true>(
    'VideoType',
    'POST',
    `${endpoint}/videoType/upsert`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.VideoTypeUpsertArgs>(
      args: Prisma.SelectSubset<T, Prisma.VideoTypeUpsertArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, VideoType, Prisma.VideoTypeGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.VideoTypeUpsertArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, VideoType, Prisma.VideoTypeGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useDeleteVideoType(
  options?: Omit<UseMutationOptions<VideoType | undefined, unknown, Prisma.VideoTypeDeleteArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.VideoTypeDeleteArgs, VideoType, true>(
    'VideoType',
    'DELETE',
    `${endpoint}/videoType/delete`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.VideoTypeDeleteArgs>(
      args: Prisma.SelectSubset<T, Prisma.VideoTypeDeleteArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, VideoType, Prisma.VideoTypeGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.VideoTypeDeleteArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, VideoType, Prisma.VideoTypeGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useDeleteManyVideoType(
  options?: Omit<
    UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.VideoTypeDeleteManyArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.VideoTypeDeleteManyArgs, Prisma.BatchPayload, false>(
    'VideoType',
    'DELETE',
    `${endpoint}/videoType/deleteMany`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    false,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.VideoTypeDeleteManyArgs>(
      args: Prisma.SelectSubset<T, Prisma.VideoTypeDeleteManyArgs>,
      options?: Omit<
        UseMutationOptions<
          Prisma.BatchPayload,
          unknown,
          Prisma.SelectSubset<T, Prisma.VideoTypeDeleteManyArgs>,
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

export function useAggregateVideoType<T extends Prisma.VideoTypeAggregateArgs>(
  args: Prisma.SelectSubset<T, Prisma.VideoTypeAggregateArgs>,
  options?: Omit<UseQueryOptions<Prisma.GetVideoTypeAggregateType<T>>, 'queryKey'>
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('VideoType', `${endpoint}/videoType/aggregate`, args, options, fetch)
}

export function useGroupByVideoType<
  T extends Prisma.VideoTypeGroupByArgs,
  HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
  OrderByArg extends Prisma.True extends HasSelectOrTake
    ? { orderBy: Prisma.VideoTypeGroupByArgs['orderBy'] }
    : { orderBy?: Prisma.VideoTypeGroupByArgs['orderBy'] },
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
  args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.VideoTypeGroupByArgs, OrderByArg> & InputErrors>,
  options?: Omit<
    UseQueryOptions<
      {} extends InputErrors
        ? Array<
            PickEnumerable<Prisma.VideoTypeGroupByOutputType, T['by']> & {
              [P in keyof T & keyof Prisma.VideoTypeGroupByOutputType]: P extends '_count'
                ? T[P] extends boolean
                  ? number
                  : Prisma.GetScalarType<T[P], Prisma.VideoTypeGroupByOutputType[P]>
                : Prisma.GetScalarType<T[P], Prisma.VideoTypeGroupByOutputType[P]>
            }
          >
        : InputErrors
    >,
    'queryKey'
  >
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('VideoType', `${endpoint}/videoType/groupBy`, args, options, fetch)
}

export function useCountVideoType<T extends Prisma.VideoTypeCountArgs>(
  args?: Prisma.SelectSubset<T, Prisma.VideoTypeCountArgs>,
  options?: Omit<
    UseQueryOptions<
      T extends { select: any }
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<T['select'], Prisma.VideoTypeCountAggregateOutputType>
        : number
    >,
    'queryKey'
  >
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('VideoType', `${endpoint}/videoType/count`, args, options, fetch)
}
