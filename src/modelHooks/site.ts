/* eslint-disable */
import type { Prisma, Site } from '@prisma/client'
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query'
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/vue'
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/vue'
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime'
import metadata from './__model_meta'

export function useCreateSite(
  options?: Omit<UseMutationOptions<Site | undefined, unknown, Prisma.SiteCreateArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.SiteCreateArgs, Site, true>(
    'Site',
    'POST',
    `${endpoint}/site/create`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.SiteCreateArgs>(
      args: Prisma.SelectSubset<T, Prisma.SiteCreateArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, Site, Prisma.SiteGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.SiteCreateArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, Site, Prisma.SiteGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useCreateManySite(
  options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SiteCreateManyArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.SiteCreateManyArgs, Prisma.BatchPayload, false>(
    'Site',
    'POST',
    `${endpoint}/site/createMany`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    false,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.SiteCreateManyArgs>(
      args: Prisma.SelectSubset<T, Prisma.SiteCreateManyArgs>,
      options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.SiteCreateManyArgs>, unknown>,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload
    },
  }
  return mutation
}

export function useFindManySite<T extends Prisma.SiteFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.SiteFindManyArgs>,
  options?: Omit<UseQueryOptions<Array<Prisma.SiteGetPayload<T> & { $optimistic?: boolean }>>, 'queryKey'>,
  optimisticUpdate: boolean = true
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('Site', `${endpoint}/site/findMany`, args, options, fetch, optimisticUpdate)
}

export function useInfiniteFindManySite<T extends Prisma.SiteFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.SiteFindManyArgs>,
  options?: Omit<UseInfiniteQueryOptions<Array<Prisma.SiteGetPayload<T>>>, 'queryKey'>
) {
  const { endpoint, fetch } = getHooksContext()
  return useInfiniteModelQuery('Site', `${endpoint}/site/findMany`, args, options, fetch)
}

export function useFindUniqueSite<T extends Prisma.SiteFindUniqueArgs>(
  args: Prisma.SelectSubset<T, Prisma.SiteFindUniqueArgs>,
  options?: Omit<UseQueryOptions<Prisma.SiteGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
  optimisticUpdate: boolean = true
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('Site', `${endpoint}/site/findUnique`, args, options, fetch, optimisticUpdate)
}

export function useFindFirstSite<T extends Prisma.SiteFindFirstArgs>(
  args?: Prisma.SelectSubset<T, Prisma.SiteFindFirstArgs>,
  options?: Omit<UseQueryOptions<Prisma.SiteGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
  optimisticUpdate: boolean = true
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('Site', `${endpoint}/site/findFirst`, args, options, fetch, optimisticUpdate)
}

export function useUpdateSite(
  options?: Omit<UseMutationOptions<Site | undefined, unknown, Prisma.SiteUpdateArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.SiteUpdateArgs, Site, true>(
    'Site',
    'PUT',
    `${endpoint}/site/update`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.SiteUpdateArgs>(
      args: Prisma.SelectSubset<T, Prisma.SiteUpdateArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, Site, Prisma.SiteGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.SiteUpdateArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, Site, Prisma.SiteGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useUpdateManySite(
  options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SiteUpdateManyArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.SiteUpdateManyArgs, Prisma.BatchPayload, false>(
    'Site',
    'PUT',
    `${endpoint}/site/updateMany`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    false,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.SiteUpdateManyArgs>(
      args: Prisma.SelectSubset<T, Prisma.SiteUpdateManyArgs>,
      options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.SiteUpdateManyArgs>, unknown>,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload
    },
  }
  return mutation
}

export function useUpsertSite(
  options?: Omit<UseMutationOptions<Site | undefined, unknown, Prisma.SiteUpsertArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.SiteUpsertArgs, Site, true>(
    'Site',
    'POST',
    `${endpoint}/site/upsert`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.SiteUpsertArgs>(
      args: Prisma.SelectSubset<T, Prisma.SiteUpsertArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, Site, Prisma.SiteGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.SiteUpsertArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, Site, Prisma.SiteGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useDeleteSite(
  options?: Omit<UseMutationOptions<Site | undefined, unknown, Prisma.SiteDeleteArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.SiteDeleteArgs, Site, true>(
    'Site',
    'DELETE',
    `${endpoint}/site/delete`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.SiteDeleteArgs>(
      args: Prisma.SelectSubset<T, Prisma.SiteDeleteArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, Site, Prisma.SiteGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.SiteDeleteArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, Site, Prisma.SiteGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useDeleteManySite(
  options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SiteDeleteManyArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.SiteDeleteManyArgs, Prisma.BatchPayload, false>(
    'Site',
    'DELETE',
    `${endpoint}/site/deleteMany`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    false,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.SiteDeleteManyArgs>(
      args: Prisma.SelectSubset<T, Prisma.SiteDeleteManyArgs>,
      options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.SiteDeleteManyArgs>, unknown>,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload
    },
  }
  return mutation
}

export function useAggregateSite<T extends Prisma.SiteAggregateArgs>(
  args: Prisma.SelectSubset<T, Prisma.SiteAggregateArgs>,
  options?: Omit<UseQueryOptions<Prisma.GetSiteAggregateType<T>>, 'queryKey'>
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('Site', `${endpoint}/site/aggregate`, args, options, fetch)
}

export function useGroupBySite<
  T extends Prisma.SiteGroupByArgs,
  HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
  OrderByArg extends Prisma.True extends HasSelectOrTake
    ? { orderBy: Prisma.SiteGroupByArgs['orderBy'] }
    : { orderBy?: Prisma.SiteGroupByArgs['orderBy'] },
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
  args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.SiteGroupByArgs, OrderByArg> & InputErrors>,
  options?: Omit<
    UseQueryOptions<
      {} extends InputErrors
        ? Array<
            PickEnumerable<Prisma.SiteGroupByOutputType, T['by']> & {
              [P in keyof T & keyof Prisma.SiteGroupByOutputType]: P extends '_count'
                ? T[P] extends boolean
                  ? number
                  : Prisma.GetScalarType<T[P], Prisma.SiteGroupByOutputType[P]>
                : Prisma.GetScalarType<T[P], Prisma.SiteGroupByOutputType[P]>
            }
          >
        : InputErrors
    >,
    'queryKey'
  >
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('Site', `${endpoint}/site/groupBy`, args, options, fetch)
}

export function useCountSite<T extends Prisma.SiteCountArgs>(
  args?: Prisma.SelectSubset<T, Prisma.SiteCountArgs>,
  options?: Omit<
    UseQueryOptions<
      T extends { select: any }
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<T['select'], Prisma.SiteCountAggregateOutputType>
        : number
    >,
    'queryKey'
  >
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('Site', `${endpoint}/site/count`, args, options, fetch)
}
