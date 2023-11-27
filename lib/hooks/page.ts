/* eslint-disable */
import type { Prisma, Page } from '@prisma/client';
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/vue';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/vue';
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime';
import metadata from './__model_meta';

export function useCreatePage(
    options?: Omit<UseMutationOptions<Page | undefined, unknown, Prisma.PageCreateArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.PageCreateArgs, Page, true>(
        'Page',
        'POST',
        `${endpoint}/page/create`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.PageCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.PageCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Page, Prisma.PageGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.PageCreateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Page, Prisma.PageGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManyPage(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.PageCreateManyArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.PageCreateManyArgs, Prisma.BatchPayload, false>(
        'Page',
        'POST',
        `${endpoint}/page/createMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.PageCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.PageCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.PageCreateManyArgs>,
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

export function useFindManyPage<T extends Prisma.PageFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.PageFindManyArgs>,
    options?: Omit<UseQueryOptions<Array<Prisma.PageGetPayload<T> & { $optimistic?: boolean }>>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Page', `${endpoint}/page/findMany`, args, options, fetch, optimisticUpdate);
}

export function useInfiniteFindManyPage<T extends Prisma.PageFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.PageFindManyArgs>,
    options?: Omit<UseInfiniteQueryOptions<Array<Prisma.PageGetPayload<T>>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery('Page', `${endpoint}/page/findMany`, args, options, fetch);
}

export function useFindUniquePage<T extends Prisma.PageFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PageFindUniqueArgs>,
    options?: Omit<UseQueryOptions<Prisma.PageGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Page', `${endpoint}/page/findUnique`, args, options, fetch, optimisticUpdate);
}

export function useFindFirstPage<T extends Prisma.PageFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.PageFindFirstArgs>,
    options?: Omit<UseQueryOptions<Prisma.PageGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Page', `${endpoint}/page/findFirst`, args, options, fetch, optimisticUpdate);
}

export function useUpdatePage(
    options?: Omit<UseMutationOptions<Page | undefined, unknown, Prisma.PageUpdateArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.PageUpdateArgs, Page, true>(
        'Page',
        'PUT',
        `${endpoint}/page/update`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.PageUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.PageUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Page, Prisma.PageGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.PageUpdateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Page, Prisma.PageGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManyPage(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.PageUpdateManyArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.PageUpdateManyArgs, Prisma.BatchPayload, false>(
        'Page',
        'PUT',
        `${endpoint}/page/updateMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.PageUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.PageUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.PageUpdateManyArgs>,
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

export function useUpsertPage(
    options?: Omit<UseMutationOptions<Page | undefined, unknown, Prisma.PageUpsertArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.PageUpsertArgs, Page, true>(
        'Page',
        'POST',
        `${endpoint}/page/upsert`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.PageUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.PageUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Page, Prisma.PageGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.PageUpsertArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Page, Prisma.PageGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeletePage(
    options?: Omit<UseMutationOptions<Page | undefined, unknown, Prisma.PageDeleteArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.PageDeleteArgs, Page, true>(
        'Page',
        'DELETE',
        `${endpoint}/page/delete`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.PageDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.PageDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Page, Prisma.PageGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.PageDeleteArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Page, Prisma.PageGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManyPage(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.PageDeleteManyArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.PageDeleteManyArgs, Prisma.BatchPayload, false>(
        'Page',
        'DELETE',
        `${endpoint}/page/deleteMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.PageDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.PageDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.PageDeleteManyArgs>,
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

export function useAggregatePage<T extends Prisma.PageAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PageAggregateArgs>,
    options?: Omit<UseQueryOptions<Prisma.GetPageAggregateType<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Page', `${endpoint}/page/aggregate`, args, options, fetch);
}

export function useGroupByPage<
    T extends Prisma.PageGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.PageGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.PageGroupByArgs['orderBy'] },
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
    args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.PageGroupByArgs, OrderByArg> & InputErrors>,
    options?: Omit<
        UseQueryOptions<
            {} extends InputErrors
                ? Array<
                      PickEnumerable<Prisma.PageGroupByOutputType, T['by']> & {
                          [P in keyof T & keyof Prisma.PageGroupByOutputType]: P extends '_count'
                              ? T[P] extends boolean
                                  ? number
                                  : Prisma.GetScalarType<T[P], Prisma.PageGroupByOutputType[P]>
                              : Prisma.GetScalarType<T[P], Prisma.PageGroupByOutputType[P]>;
                      }
                  >
                : InputErrors
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Page', `${endpoint}/page/groupBy`, args, options, fetch);
}

export function useCountPage<T extends Prisma.PageCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.PageCountArgs>,
    options?: Omit<
        UseQueryOptions<
            T extends { select: any }
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.PageCountAggregateOutputType>
                : number
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Page', `${endpoint}/page/count`, args, options, fetch);
}
