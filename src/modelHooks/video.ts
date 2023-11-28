/* eslint-disable */
import type { Prisma, Video } from '@prisma/client'
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query'
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/vue'
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/vue'
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime'
import metadata from './__model_meta'

export function useCreateVideo(
  options?: Omit<UseMutationOptions<Video | undefined, unknown, Prisma.VideoCreateArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.VideoCreateArgs, Video, true>(
    'Video',
    'POST',
    `${endpoint}/video/create`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.VideoCreateArgs>(
      args: Prisma.SelectSubset<T, Prisma.VideoCreateArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, Video, Prisma.VideoGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.VideoCreateArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, Video, Prisma.VideoGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useCreateManyVideo(
  options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.VideoCreateManyArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.VideoCreateManyArgs, Prisma.BatchPayload, false>(
    'Video',
    'POST',
    `${endpoint}/video/createMany`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    false,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.VideoCreateManyArgs>(
      args: Prisma.SelectSubset<T, Prisma.VideoCreateManyArgs>,
      options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.VideoCreateManyArgs>, unknown>,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload
    },
  }
  return mutation
}

export function useFindManyVideo<T extends Prisma.VideoFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.VideoFindManyArgs>,
  options?: Omit<UseQueryOptions<Array<Prisma.VideoGetPayload<T> & { $optimistic?: boolean }>>, 'queryKey'>,
  optimisticUpdate: boolean = true
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('Video', `${endpoint}/video/findMany`, args, options, fetch, optimisticUpdate)
}

export function useInfiniteFindManyVideo<T extends Prisma.VideoFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.VideoFindManyArgs>,
  options?: Omit<UseInfiniteQueryOptions<Array<Prisma.VideoGetPayload<T>>>, 'queryKey'>
) {
  const { endpoint, fetch } = getHooksContext()
  return useInfiniteModelQuery('Video', `${endpoint}/video/findMany`, args, options, fetch)
}

export function useFindUniqueVideo<T extends Prisma.VideoFindUniqueArgs>(
  args: Prisma.SelectSubset<T, Prisma.VideoFindUniqueArgs>,
  options?: Omit<UseQueryOptions<Prisma.VideoGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
  optimisticUpdate: boolean = true
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('Video', `${endpoint}/video/findUnique`, args, options, fetch, optimisticUpdate)
}

export function useFindFirstVideo<T extends Prisma.VideoFindFirstArgs>(
  args?: Prisma.SelectSubset<T, Prisma.VideoFindFirstArgs>,
  options?: Omit<UseQueryOptions<Prisma.VideoGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
  optimisticUpdate: boolean = true
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('Video', `${endpoint}/video/findFirst`, args, options, fetch, optimisticUpdate)
}

export function useUpdateVideo(
  options?: Omit<UseMutationOptions<Video | undefined, unknown, Prisma.VideoUpdateArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.VideoUpdateArgs, Video, true>(
    'Video',
    'PUT',
    `${endpoint}/video/update`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.VideoUpdateArgs>(
      args: Prisma.SelectSubset<T, Prisma.VideoUpdateArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, Video, Prisma.VideoGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.VideoUpdateArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, Video, Prisma.VideoGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useUpdateManyVideo(
  options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.VideoUpdateManyArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.VideoUpdateManyArgs, Prisma.BatchPayload, false>(
    'Video',
    'PUT',
    `${endpoint}/video/updateMany`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    false,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.VideoUpdateManyArgs>(
      args: Prisma.SelectSubset<T, Prisma.VideoUpdateManyArgs>,
      options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.VideoUpdateManyArgs>, unknown>,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload
    },
  }
  return mutation
}

export function useUpsertVideo(
  options?: Omit<UseMutationOptions<Video | undefined, unknown, Prisma.VideoUpsertArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.VideoUpsertArgs, Video, true>(
    'Video',
    'POST',
    `${endpoint}/video/upsert`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.VideoUpsertArgs>(
      args: Prisma.SelectSubset<T, Prisma.VideoUpsertArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, Video, Prisma.VideoGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.VideoUpsertArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, Video, Prisma.VideoGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useDeleteVideo(
  options?: Omit<UseMutationOptions<Video | undefined, unknown, Prisma.VideoDeleteArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.VideoDeleteArgs, Video, true>(
    'Video',
    'DELETE',
    `${endpoint}/video/delete`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.VideoDeleteArgs>(
      args: Prisma.SelectSubset<T, Prisma.VideoDeleteArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, Video, Prisma.VideoGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.VideoDeleteArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, Video, Prisma.VideoGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useDeleteManyVideo(
  options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.VideoDeleteManyArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.VideoDeleteManyArgs, Prisma.BatchPayload, false>(
    'Video',
    'DELETE',
    `${endpoint}/video/deleteMany`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    false,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.VideoDeleteManyArgs>(
      args: Prisma.SelectSubset<T, Prisma.VideoDeleteManyArgs>,
      options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.VideoDeleteManyArgs>, unknown>,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload
    },
  }
  return mutation
}

export function useAggregateVideo<T extends Prisma.VideoAggregateArgs>(
  args: Prisma.SelectSubset<T, Prisma.VideoAggregateArgs>,
  options?: Omit<UseQueryOptions<Prisma.GetVideoAggregateType<T>>, 'queryKey'>
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('Video', `${endpoint}/video/aggregate`, args, options, fetch)
}

export function useGroupByVideo<
  T extends Prisma.VideoGroupByArgs,
  HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
  OrderByArg extends Prisma.True extends HasSelectOrTake
    ? { orderBy: Prisma.VideoGroupByArgs['orderBy'] }
    : { orderBy?: Prisma.VideoGroupByArgs['orderBy'] },
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
  args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.VideoGroupByArgs, OrderByArg> & InputErrors>,
  options?: Omit<
    UseQueryOptions<
      {} extends InputErrors
        ? Array<
            PickEnumerable<Prisma.VideoGroupByOutputType, T['by']> & {
              [P in keyof T & keyof Prisma.VideoGroupByOutputType]: P extends '_count'
                ? T[P] extends boolean
                  ? number
                  : Prisma.GetScalarType<T[P], Prisma.VideoGroupByOutputType[P]>
                : Prisma.GetScalarType<T[P], Prisma.VideoGroupByOutputType[P]>
            }
          >
        : InputErrors
    >,
    'queryKey'
  >
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('Video', `${endpoint}/video/groupBy`, args, options, fetch)
}

export function useCountVideo<T extends Prisma.VideoCountArgs>(
  args?: Prisma.SelectSubset<T, Prisma.VideoCountArgs>,
  options?: Omit<
    UseQueryOptions<
      T extends { select: any }
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<T['select'], Prisma.VideoCountAggregateOutputType>
        : number
    >,
    'queryKey'
  >
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('Video', `${endpoint}/video/count`, args, options, fetch)
}
