/* eslint-disable */
import type { Prisma, ComboProduce } from '@prisma/client';
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/vue';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/vue';
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime';
import metadata from './__model_meta';

export function useCreateComboProduce(
    options?: Omit<
        UseMutationOptions<ComboProduce | undefined, unknown, Prisma.ComboProduceCreateArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ComboProduceCreateArgs, ComboProduce, true>(
        'ComboProduce',
        'POST',
        `${endpoint}/comboProduce/create`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ComboProduceCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ComboProduceCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, ComboProduce, Prisma.ComboProduceGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ComboProduceCreateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, ComboProduce, Prisma.ComboProduceGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManyComboProduce(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ComboProduceCreateManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ComboProduceCreateManyArgs, Prisma.BatchPayload, false>(
        'ComboProduce',
        'POST',
        `${endpoint}/comboProduce/createMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ComboProduceCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ComboProduceCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ComboProduceCreateManyArgs>,
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

export function useFindManyComboProduce<T extends Prisma.ComboProduceFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ComboProduceFindManyArgs>,
    options?: Omit<UseQueryOptions<Array<Prisma.ComboProduceGetPayload<T> & { $optimistic?: boolean }>>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('ComboProduce', `${endpoint}/comboProduce/findMany`, args, options, fetch, optimisticUpdate);
}

export function useInfiniteFindManyComboProduce<T extends Prisma.ComboProduceFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ComboProduceFindManyArgs>,
    options?: Omit<UseInfiniteQueryOptions<Array<Prisma.ComboProduceGetPayload<T>>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery('ComboProduce', `${endpoint}/comboProduce/findMany`, args, options, fetch);
}

export function useFindUniqueComboProduce<T extends Prisma.ComboProduceFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ComboProduceFindUniqueArgs>,
    options?: Omit<UseQueryOptions<Prisma.ComboProduceGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('ComboProduce', `${endpoint}/comboProduce/findUnique`, args, options, fetch, optimisticUpdate);
}

export function useFindFirstComboProduce<T extends Prisma.ComboProduceFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ComboProduceFindFirstArgs>,
    options?: Omit<UseQueryOptions<Prisma.ComboProduceGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('ComboProduce', `${endpoint}/comboProduce/findFirst`, args, options, fetch, optimisticUpdate);
}

export function useUpdateComboProduce(
    options?: Omit<
        UseMutationOptions<ComboProduce | undefined, unknown, Prisma.ComboProduceUpdateArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ComboProduceUpdateArgs, ComboProduce, true>(
        'ComboProduce',
        'PUT',
        `${endpoint}/comboProduce/update`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ComboProduceUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ComboProduceUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, ComboProduce, Prisma.ComboProduceGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ComboProduceUpdateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, ComboProduce, Prisma.ComboProduceGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManyComboProduce(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ComboProduceUpdateManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ComboProduceUpdateManyArgs, Prisma.BatchPayload, false>(
        'ComboProduce',
        'PUT',
        `${endpoint}/comboProduce/updateMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ComboProduceUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ComboProduceUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ComboProduceUpdateManyArgs>,
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

export function useUpsertComboProduce(
    options?: Omit<
        UseMutationOptions<ComboProduce | undefined, unknown, Prisma.ComboProduceUpsertArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ComboProduceUpsertArgs, ComboProduce, true>(
        'ComboProduce',
        'POST',
        `${endpoint}/comboProduce/upsert`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ComboProduceUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.ComboProduceUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, ComboProduce, Prisma.ComboProduceGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ComboProduceUpsertArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, ComboProduce, Prisma.ComboProduceGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteComboProduce(
    options?: Omit<
        UseMutationOptions<ComboProduce | undefined, unknown, Prisma.ComboProduceDeleteArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ComboProduceDeleteArgs, ComboProduce, true>(
        'ComboProduce',
        'DELETE',
        `${endpoint}/comboProduce/delete`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ComboProduceDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.ComboProduceDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, ComboProduce, Prisma.ComboProduceGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ComboProduceDeleteArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, ComboProduce, Prisma.ComboProduceGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManyComboProduce(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ComboProduceDeleteManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ComboProduceDeleteManyArgs, Prisma.BatchPayload, false>(
        'ComboProduce',
        'DELETE',
        `${endpoint}/comboProduce/deleteMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ComboProduceDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ComboProduceDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ComboProduceDeleteManyArgs>,
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

export function useAggregateComboProduce<T extends Prisma.ComboProduceAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ComboProduceAggregateArgs>,
    options?: Omit<UseQueryOptions<Prisma.GetComboProduceAggregateType<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('ComboProduce', `${endpoint}/comboProduce/aggregate`, args, options, fetch);
}

export function useGroupByComboProduce<
    T extends Prisma.ComboProduceGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.ComboProduceGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.ComboProduceGroupByArgs['orderBy'] },
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
    args: Prisma.SelectSubset<
        T,
        Prisma.SubsetIntersection<T, Prisma.ComboProduceGroupByArgs, OrderByArg> & InputErrors
    >,
    options?: Omit<
        UseQueryOptions<
            {} extends InputErrors
                ? Array<
                      PickEnumerable<Prisma.ComboProduceGroupByOutputType, T['by']> & {
                          [P in keyof T & keyof Prisma.ComboProduceGroupByOutputType]: P extends '_count'
                              ? T[P] extends boolean
                                  ? number
                                  : Prisma.GetScalarType<T[P], Prisma.ComboProduceGroupByOutputType[P]>
                              : Prisma.GetScalarType<T[P], Prisma.ComboProduceGroupByOutputType[P]>;
                      }
                  >
                : InputErrors
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('ComboProduce', `${endpoint}/comboProduce/groupBy`, args, options, fetch);
}

export function useCountComboProduce<T extends Prisma.ComboProduceCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ComboProduceCountArgs>,
    options?: Omit<
        UseQueryOptions<
            T extends { select: any }
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ComboProduceCountAggregateOutputType>
                : number
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('ComboProduce', `${endpoint}/comboProduce/count`, args, options, fetch);
}
