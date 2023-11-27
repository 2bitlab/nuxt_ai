/* eslint-disable */
import type { Prisma, BalanceLog } from '@prisma/client';
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/vue';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/vue';
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime';
import metadata from './__model_meta';

export function useCreateBalanceLog(
    options?: Omit<
        UseMutationOptions<BalanceLog | undefined, unknown, Prisma.BalanceLogCreateArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.BalanceLogCreateArgs, BalanceLog, true>(
        'BalanceLog',
        'POST',
        `${endpoint}/balanceLog/create`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.BalanceLogCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.BalanceLogCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, BalanceLog, Prisma.BalanceLogGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.BalanceLogCreateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, BalanceLog, Prisma.BalanceLogGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManyBalanceLog(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.BalanceLogCreateManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.BalanceLogCreateManyArgs, Prisma.BatchPayload, false>(
        'BalanceLog',
        'POST',
        `${endpoint}/balanceLog/createMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.BalanceLogCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.BalanceLogCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.BalanceLogCreateManyArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyBalanceLog<T extends Prisma.BalanceLogFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.BalanceLogFindManyArgs>,
    options?: Omit<UseQueryOptions<Array<Prisma.BalanceLogGetPayload<T> & { $optimistic?: boolean }>>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('BalanceLog', `${endpoint}/balanceLog/findMany`, args, options, fetch, optimisticUpdate);
}

export function useInfiniteFindManyBalanceLog<T extends Prisma.BalanceLogFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.BalanceLogFindManyArgs>,
    options?: Omit<UseInfiniteQueryOptions<Array<Prisma.BalanceLogGetPayload<T>>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery('BalanceLog', `${endpoint}/balanceLog/findMany`, args, options, fetch);
}

export function useFindUniqueBalanceLog<T extends Prisma.BalanceLogFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BalanceLogFindUniqueArgs>,
    options?: Omit<UseQueryOptions<Prisma.BalanceLogGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('BalanceLog', `${endpoint}/balanceLog/findUnique`, args, options, fetch, optimisticUpdate);
}

export function useFindFirstBalanceLog<T extends Prisma.BalanceLogFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.BalanceLogFindFirstArgs>,
    options?: Omit<UseQueryOptions<Prisma.BalanceLogGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('BalanceLog', `${endpoint}/balanceLog/findFirst`, args, options, fetch, optimisticUpdate);
}

export function useUpdateBalanceLog(
    options?: Omit<
        UseMutationOptions<BalanceLog | undefined, unknown, Prisma.BalanceLogUpdateArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.BalanceLogUpdateArgs, BalanceLog, true>(
        'BalanceLog',
        'PUT',
        `${endpoint}/balanceLog/update`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.BalanceLogUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.BalanceLogUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, BalanceLog, Prisma.BalanceLogGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.BalanceLogUpdateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, BalanceLog, Prisma.BalanceLogGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManyBalanceLog(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.BalanceLogUpdateManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.BalanceLogUpdateManyArgs, Prisma.BatchPayload, false>(
        'BalanceLog',
        'PUT',
        `${endpoint}/balanceLog/updateMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.BalanceLogUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.BalanceLogUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.BalanceLogUpdateManyArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertBalanceLog(
    options?: Omit<
        UseMutationOptions<BalanceLog | undefined, unknown, Prisma.BalanceLogUpsertArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.BalanceLogUpsertArgs, BalanceLog, true>(
        'BalanceLog',
        'POST',
        `${endpoint}/balanceLog/upsert`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.BalanceLogUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.BalanceLogUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, BalanceLog, Prisma.BalanceLogGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.BalanceLogUpsertArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, BalanceLog, Prisma.BalanceLogGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteBalanceLog(
    options?: Omit<
        UseMutationOptions<BalanceLog | undefined, unknown, Prisma.BalanceLogDeleteArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.BalanceLogDeleteArgs, BalanceLog, true>(
        'BalanceLog',
        'DELETE',
        `${endpoint}/balanceLog/delete`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.BalanceLogDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.BalanceLogDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, BalanceLog, Prisma.BalanceLogGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.BalanceLogDeleteArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, BalanceLog, Prisma.BalanceLogGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManyBalanceLog(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.BalanceLogDeleteManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.BalanceLogDeleteManyArgs, Prisma.BatchPayload, false>(
        'BalanceLog',
        'DELETE',
        `${endpoint}/balanceLog/deleteMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.BalanceLogDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.BalanceLogDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.BalanceLogDeleteManyArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateBalanceLog<T extends Prisma.BalanceLogAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BalanceLogAggregateArgs>,
    options?: Omit<UseQueryOptions<Prisma.GetBalanceLogAggregateType<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('BalanceLog', `${endpoint}/balanceLog/aggregate`, args, options, fetch);
}

export function useGroupByBalanceLog<
    T extends Prisma.BalanceLogGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.BalanceLogGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.BalanceLogGroupByArgs['orderBy'] },
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
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Prisma.Keys<T>
        ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
            : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Prisma.Keys<T>
        ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
            : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends Prisma.True
        ? {}
        : {
              [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
>(
    args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.BalanceLogGroupByArgs, OrderByArg> & InputErrors>,
    options?: Omit<
        UseQueryOptions<
            {} extends InputErrors
                ? Array<
                      PickEnumerable<Prisma.BalanceLogGroupByOutputType, T['by']> & {
                          [P in keyof T & keyof Prisma.BalanceLogGroupByOutputType]: P extends '_count'
                              ? T[P] extends boolean
                                  ? number
                                  : Prisma.GetScalarType<T[P], Prisma.BalanceLogGroupByOutputType[P]>
                              : Prisma.GetScalarType<T[P], Prisma.BalanceLogGroupByOutputType[P]>;
                      }
                  >
                : InputErrors
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('BalanceLog', `${endpoint}/balanceLog/groupBy`, args, options, fetch);
}

export function useCountBalanceLog<T extends Prisma.BalanceLogCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.BalanceLogCountArgs>,
    options?: Omit<
        UseQueryOptions<
            T extends { select: any }
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.BalanceLogCountAggregateOutputType>
                : number
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('BalanceLog', `${endpoint}/balanceLog/count`, args, options, fetch);
}
