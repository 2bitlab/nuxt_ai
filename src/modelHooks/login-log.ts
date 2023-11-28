/* eslint-disable */
import type { Prisma, LoginLog } from '@prisma/client'
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query'
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/vue'
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/vue'
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime'
import metadata from './__model_meta'

export function useCreateLoginLog(
  options?: Omit<UseMutationOptions<LoginLog | undefined, unknown, Prisma.LoginLogCreateArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.LoginLogCreateArgs, LoginLog, true>(
    'LoginLog',
    'POST',
    `${endpoint}/loginLog/create`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.LoginLogCreateArgs>(
      args: Prisma.SelectSubset<T, Prisma.LoginLogCreateArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, LoginLog, Prisma.LoginLogGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.LoginLogCreateArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, LoginLog, Prisma.LoginLogGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useCreateManyLoginLog(
  options?: Omit<
    UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.LoginLogCreateManyArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.LoginLogCreateManyArgs, Prisma.BatchPayload, false>(
    'LoginLog',
    'POST',
    `${endpoint}/loginLog/createMany`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    false,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.LoginLogCreateManyArgs>(
      args: Prisma.SelectSubset<T, Prisma.LoginLogCreateManyArgs>,
      options?: Omit<
        UseMutationOptions<
          Prisma.BatchPayload,
          unknown,
          Prisma.SelectSubset<T, Prisma.LoginLogCreateManyArgs>,
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

export function useFindManyLoginLog<T extends Prisma.LoginLogFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.LoginLogFindManyArgs>,
  options?: Omit<UseQueryOptions<Array<Prisma.LoginLogGetPayload<T> & { $optimistic?: boolean }>>, 'queryKey'>,
  optimisticUpdate: boolean = true
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('LoginLog', `${endpoint}/loginLog/findMany`, args, options, fetch, optimisticUpdate)
}

export function useInfiniteFindManyLoginLog<T extends Prisma.LoginLogFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.LoginLogFindManyArgs>,
  options?: Omit<UseInfiniteQueryOptions<Array<Prisma.LoginLogGetPayload<T>>>, 'queryKey'>
) {
  const { endpoint, fetch } = getHooksContext()
  return useInfiniteModelQuery('LoginLog', `${endpoint}/loginLog/findMany`, args, options, fetch)
}

export function useFindUniqueLoginLog<T extends Prisma.LoginLogFindUniqueArgs>(
  args: Prisma.SelectSubset<T, Prisma.LoginLogFindUniqueArgs>,
  options?: Omit<UseQueryOptions<Prisma.LoginLogGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
  optimisticUpdate: boolean = true
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('LoginLog', `${endpoint}/loginLog/findUnique`, args, options, fetch, optimisticUpdate)
}

export function useFindFirstLoginLog<T extends Prisma.LoginLogFindFirstArgs>(
  args?: Prisma.SelectSubset<T, Prisma.LoginLogFindFirstArgs>,
  options?: Omit<UseQueryOptions<Prisma.LoginLogGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
  optimisticUpdate: boolean = true
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('LoginLog', `${endpoint}/loginLog/findFirst`, args, options, fetch, optimisticUpdate)
}

export function useUpdateLoginLog(
  options?: Omit<UseMutationOptions<LoginLog | undefined, unknown, Prisma.LoginLogUpdateArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.LoginLogUpdateArgs, LoginLog, true>(
    'LoginLog',
    'PUT',
    `${endpoint}/loginLog/update`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.LoginLogUpdateArgs>(
      args: Prisma.SelectSubset<T, Prisma.LoginLogUpdateArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, LoginLog, Prisma.LoginLogGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.LoginLogUpdateArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, LoginLog, Prisma.LoginLogGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useUpdateManyLoginLog(
  options?: Omit<
    UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.LoginLogUpdateManyArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.LoginLogUpdateManyArgs, Prisma.BatchPayload, false>(
    'LoginLog',
    'PUT',
    `${endpoint}/loginLog/updateMany`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    false,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.LoginLogUpdateManyArgs>(
      args: Prisma.SelectSubset<T, Prisma.LoginLogUpdateManyArgs>,
      options?: Omit<
        UseMutationOptions<
          Prisma.BatchPayload,
          unknown,
          Prisma.SelectSubset<T, Prisma.LoginLogUpdateManyArgs>,
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

export function useUpsertLoginLog(
  options?: Omit<UseMutationOptions<LoginLog | undefined, unknown, Prisma.LoginLogUpsertArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.LoginLogUpsertArgs, LoginLog, true>(
    'LoginLog',
    'POST',
    `${endpoint}/loginLog/upsert`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.LoginLogUpsertArgs>(
      args: Prisma.SelectSubset<T, Prisma.LoginLogUpsertArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, LoginLog, Prisma.LoginLogGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.LoginLogUpsertArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, LoginLog, Prisma.LoginLogGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useDeleteLoginLog(
  options?: Omit<UseMutationOptions<LoginLog | undefined, unknown, Prisma.LoginLogDeleteArgs, unknown>, 'mutationFn'>,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.LoginLogDeleteArgs, LoginLog, true>(
    'LoginLog',
    'DELETE',
    `${endpoint}/loginLog/delete`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    true,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.LoginLogDeleteArgs>(
      args: Prisma.SelectSubset<T, Prisma.LoginLogDeleteArgs>,
      options?: Omit<
        UseMutationOptions<
          CheckSelect<T, LoginLog, Prisma.LoginLogGetPayload<T>> | undefined,
          unknown,
          Prisma.SelectSubset<T, Prisma.LoginLogDeleteArgs>,
          unknown
        >,
        'mutationFn'
      >
    ) {
      return (await _mutation.mutateAsync(args, options as any)) as
        | CheckSelect<T, LoginLog, Prisma.LoginLogGetPayload<T>>
        | undefined
    },
  }
  return mutation
}

export function useDeleteManyLoginLog(
  options?: Omit<
    UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.LoginLogDeleteManyArgs, unknown>,
    'mutationFn'
  >,
  invalidateQueries: boolean = true,
  optimisticUpdate: boolean = false
) {
  const { endpoint, fetch } = getHooksContext()
  const _mutation = useModelMutation<Prisma.LoginLogDeleteManyArgs, Prisma.BatchPayload, false>(
    'LoginLog',
    'DELETE',
    `${endpoint}/loginLog/deleteMany`,
    metadata,
    options,
    fetch,
    invalidateQueries,
    false,
    optimisticUpdate
  )
  const mutation = {
    ..._mutation,
    async mutateAsync<T extends Prisma.LoginLogDeleteManyArgs>(
      args: Prisma.SelectSubset<T, Prisma.LoginLogDeleteManyArgs>,
      options?: Omit<
        UseMutationOptions<
          Prisma.BatchPayload,
          unknown,
          Prisma.SelectSubset<T, Prisma.LoginLogDeleteManyArgs>,
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

export function useAggregateLoginLog<T extends Prisma.LoginLogAggregateArgs>(
  args: Prisma.SelectSubset<T, Prisma.LoginLogAggregateArgs>,
  options?: Omit<UseQueryOptions<Prisma.GetLoginLogAggregateType<T>>, 'queryKey'>
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('LoginLog', `${endpoint}/loginLog/aggregate`, args, options, fetch)
}

export function useGroupByLoginLog<
  T extends Prisma.LoginLogGroupByArgs,
  HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
  OrderByArg extends Prisma.True extends HasSelectOrTake
    ? { orderBy: Prisma.LoginLogGroupByArgs['orderBy'] }
    : { orderBy?: Prisma.LoginLogGroupByArgs['orderBy'] },
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
  args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.LoginLogGroupByArgs, OrderByArg> & InputErrors>,
  options?: Omit<
    UseQueryOptions<
      {} extends InputErrors
        ? Array<
            PickEnumerable<Prisma.LoginLogGroupByOutputType, T['by']> & {
              [P in keyof T & keyof Prisma.LoginLogGroupByOutputType]: P extends '_count'
                ? T[P] extends boolean
                  ? number
                  : Prisma.GetScalarType<T[P], Prisma.LoginLogGroupByOutputType[P]>
                : Prisma.GetScalarType<T[P], Prisma.LoginLogGroupByOutputType[P]>
            }
          >
        : InputErrors
    >,
    'queryKey'
  >
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('LoginLog', `${endpoint}/loginLog/groupBy`, args, options, fetch)
}

export function useCountLoginLog<T extends Prisma.LoginLogCountArgs>(
  args?: Prisma.SelectSubset<T, Prisma.LoginLogCountArgs>,
  options?: Omit<
    UseQueryOptions<
      T extends { select: any }
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<T['select'], Prisma.LoginLogCountAggregateOutputType>
        : number
    >,
    'queryKey'
  >
) {
  const { endpoint, fetch } = getHooksContext()
  return useModelQuery('LoginLog', `${endpoint}/loginLog/count`, args, options, fetch)
}
