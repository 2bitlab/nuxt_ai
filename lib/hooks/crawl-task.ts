/* eslint-disable */
import type { Prisma, CrawlTask } from '@prisma/client';
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/vue';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/vue';
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime';
import metadata from './__model_meta';

export function useCreateCrawlTask(
    options?: Omit<
        UseMutationOptions<CrawlTask | undefined, unknown, Prisma.CrawlTaskCreateArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.CrawlTaskCreateArgs, CrawlTask, true>(
        'CrawlTask',
        'POST',
        `${endpoint}/crawlTask/create`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CrawlTaskCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.CrawlTaskCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, CrawlTask, Prisma.CrawlTaskGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.CrawlTaskCreateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, CrawlTask, Prisma.CrawlTaskGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManyCrawlTask(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.CrawlTaskCreateManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.CrawlTaskCreateManyArgs, Prisma.BatchPayload, false>(
        'CrawlTask',
        'POST',
        `${endpoint}/crawlTask/createMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CrawlTaskCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CrawlTaskCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.CrawlTaskCreateManyArgs>,
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

export function useFindManyCrawlTask<T extends Prisma.CrawlTaskFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.CrawlTaskFindManyArgs>,
    options?: Omit<UseQueryOptions<Array<Prisma.CrawlTaskGetPayload<T> & { $optimistic?: boolean }>>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('CrawlTask', `${endpoint}/crawlTask/findMany`, args, options, fetch, optimisticUpdate);
}

export function useInfiniteFindManyCrawlTask<T extends Prisma.CrawlTaskFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.CrawlTaskFindManyArgs>,
    options?: Omit<UseInfiniteQueryOptions<Array<Prisma.CrawlTaskGetPayload<T>>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery('CrawlTask', `${endpoint}/crawlTask/findMany`, args, options, fetch);
}

export function useFindUniqueCrawlTask<T extends Prisma.CrawlTaskFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CrawlTaskFindUniqueArgs>,
    options?: Omit<UseQueryOptions<Prisma.CrawlTaskGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('CrawlTask', `${endpoint}/crawlTask/findUnique`, args, options, fetch, optimisticUpdate);
}

export function useFindFirstCrawlTask<T extends Prisma.CrawlTaskFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.CrawlTaskFindFirstArgs>,
    options?: Omit<UseQueryOptions<Prisma.CrawlTaskGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('CrawlTask', `${endpoint}/crawlTask/findFirst`, args, options, fetch, optimisticUpdate);
}

export function useUpdateCrawlTask(
    options?: Omit<
        UseMutationOptions<CrawlTask | undefined, unknown, Prisma.CrawlTaskUpdateArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.CrawlTaskUpdateArgs, CrawlTask, true>(
        'CrawlTask',
        'PUT',
        `${endpoint}/crawlTask/update`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CrawlTaskUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.CrawlTaskUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, CrawlTask, Prisma.CrawlTaskGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.CrawlTaskUpdateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, CrawlTask, Prisma.CrawlTaskGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManyCrawlTask(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.CrawlTaskUpdateManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.CrawlTaskUpdateManyArgs, Prisma.BatchPayload, false>(
        'CrawlTask',
        'PUT',
        `${endpoint}/crawlTask/updateMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CrawlTaskUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CrawlTaskUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.CrawlTaskUpdateManyArgs>,
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

export function useUpsertCrawlTask(
    options?: Omit<
        UseMutationOptions<CrawlTask | undefined, unknown, Prisma.CrawlTaskUpsertArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.CrawlTaskUpsertArgs, CrawlTask, true>(
        'CrawlTask',
        'POST',
        `${endpoint}/crawlTask/upsert`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CrawlTaskUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.CrawlTaskUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, CrawlTask, Prisma.CrawlTaskGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.CrawlTaskUpsertArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, CrawlTask, Prisma.CrawlTaskGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteCrawlTask(
    options?: Omit<
        UseMutationOptions<CrawlTask | undefined, unknown, Prisma.CrawlTaskDeleteArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.CrawlTaskDeleteArgs, CrawlTask, true>(
        'CrawlTask',
        'DELETE',
        `${endpoint}/crawlTask/delete`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CrawlTaskDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.CrawlTaskDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, CrawlTask, Prisma.CrawlTaskGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.CrawlTaskDeleteArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, CrawlTask, Prisma.CrawlTaskGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManyCrawlTask(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.CrawlTaskDeleteManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.CrawlTaskDeleteManyArgs, Prisma.BatchPayload, false>(
        'CrawlTask',
        'DELETE',
        `${endpoint}/crawlTask/deleteMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CrawlTaskDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CrawlTaskDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.CrawlTaskDeleteManyArgs>,
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

export function useAggregateCrawlTask<T extends Prisma.CrawlTaskAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CrawlTaskAggregateArgs>,
    options?: Omit<UseQueryOptions<Prisma.GetCrawlTaskAggregateType<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('CrawlTask', `${endpoint}/crawlTask/aggregate`, args, options, fetch);
}

export function useGroupByCrawlTask<
    T extends Prisma.CrawlTaskGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.CrawlTaskGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.CrawlTaskGroupByArgs['orderBy'] },
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
    args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.CrawlTaskGroupByArgs, OrderByArg> & InputErrors>,
    options?: Omit<
        UseQueryOptions<
            {} extends InputErrors
                ? Array<
                      PickEnumerable<Prisma.CrawlTaskGroupByOutputType, T['by']> & {
                          [P in keyof T & keyof Prisma.CrawlTaskGroupByOutputType]: P extends '_count'
                              ? T[P] extends boolean
                                  ? number
                                  : Prisma.GetScalarType<T[P], Prisma.CrawlTaskGroupByOutputType[P]>
                              : Prisma.GetScalarType<T[P], Prisma.CrawlTaskGroupByOutputType[P]>;
                      }
                  >
                : InputErrors
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('CrawlTask', `${endpoint}/crawlTask/groupBy`, args, options, fetch);
}

export function useCountCrawlTask<T extends Prisma.CrawlTaskCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.CrawlTaskCountArgs>,
    options?: Omit<
        UseQueryOptions<
            T extends { select: any }
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.CrawlTaskCountAggregateOutputType>
                : number
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('CrawlTask', `${endpoint}/crawlTask/count`, args, options, fetch);
}
