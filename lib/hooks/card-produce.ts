/* eslint-disable */
import type { Prisma, CardProduce } from '@prisma/client';
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/vue';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/vue';
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime';
import metadata from './__model_meta';

export function useCreateCardProduce(
    options?: Omit<
        UseMutationOptions<CardProduce | undefined, unknown, Prisma.CardProduceCreateArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.CardProduceCreateArgs, CardProduce, true>(
        'CardProduce',
        'POST',
        `${endpoint}/cardProduce/create`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CardProduceCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.CardProduceCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, CardProduce, Prisma.CardProduceGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.CardProduceCreateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, CardProduce, Prisma.CardProduceGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManyCardProduce(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.CardProduceCreateManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.CardProduceCreateManyArgs, Prisma.BatchPayload, false>(
        'CardProduce',
        'POST',
        `${endpoint}/cardProduce/createMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CardProduceCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CardProduceCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.CardProduceCreateManyArgs>,
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

export function useFindManyCardProduce<T extends Prisma.CardProduceFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.CardProduceFindManyArgs>,
    options?: Omit<UseQueryOptions<Array<Prisma.CardProduceGetPayload<T> & { $optimistic?: boolean }>>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('CardProduce', `${endpoint}/cardProduce/findMany`, args, options, fetch, optimisticUpdate);
}

export function useInfiniteFindManyCardProduce<T extends Prisma.CardProduceFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.CardProduceFindManyArgs>,
    options?: Omit<UseInfiniteQueryOptions<Array<Prisma.CardProduceGetPayload<T>>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery('CardProduce', `${endpoint}/cardProduce/findMany`, args, options, fetch);
}

export function useFindUniqueCardProduce<T extends Prisma.CardProduceFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CardProduceFindUniqueArgs>,
    options?: Omit<UseQueryOptions<Prisma.CardProduceGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('CardProduce', `${endpoint}/cardProduce/findUnique`, args, options, fetch, optimisticUpdate);
}

export function useFindFirstCardProduce<T extends Prisma.CardProduceFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.CardProduceFindFirstArgs>,
    options?: Omit<UseQueryOptions<Prisma.CardProduceGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('CardProduce', `${endpoint}/cardProduce/findFirst`, args, options, fetch, optimisticUpdate);
}

export function useUpdateCardProduce(
    options?: Omit<
        UseMutationOptions<CardProduce | undefined, unknown, Prisma.CardProduceUpdateArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.CardProduceUpdateArgs, CardProduce, true>(
        'CardProduce',
        'PUT',
        `${endpoint}/cardProduce/update`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CardProduceUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.CardProduceUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, CardProduce, Prisma.CardProduceGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.CardProduceUpdateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, CardProduce, Prisma.CardProduceGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManyCardProduce(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.CardProduceUpdateManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.CardProduceUpdateManyArgs, Prisma.BatchPayload, false>(
        'CardProduce',
        'PUT',
        `${endpoint}/cardProduce/updateMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CardProduceUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CardProduceUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.CardProduceUpdateManyArgs>,
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

export function useUpsertCardProduce(
    options?: Omit<
        UseMutationOptions<CardProduce | undefined, unknown, Prisma.CardProduceUpsertArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.CardProduceUpsertArgs, CardProduce, true>(
        'CardProduce',
        'POST',
        `${endpoint}/cardProduce/upsert`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CardProduceUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.CardProduceUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, CardProduce, Prisma.CardProduceGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.CardProduceUpsertArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, CardProduce, Prisma.CardProduceGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteCardProduce(
    options?: Omit<
        UseMutationOptions<CardProduce | undefined, unknown, Prisma.CardProduceDeleteArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.CardProduceDeleteArgs, CardProduce, true>(
        'CardProduce',
        'DELETE',
        `${endpoint}/cardProduce/delete`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CardProduceDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.CardProduceDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, CardProduce, Prisma.CardProduceGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.CardProduceDeleteArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, CardProduce, Prisma.CardProduceGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManyCardProduce(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.CardProduceDeleteManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.CardProduceDeleteManyArgs, Prisma.BatchPayload, false>(
        'CardProduce',
        'DELETE',
        `${endpoint}/cardProduce/deleteMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CardProduceDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CardProduceDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.CardProduceDeleteManyArgs>,
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

export function useAggregateCardProduce<T extends Prisma.CardProduceAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CardProduceAggregateArgs>,
    options?: Omit<UseQueryOptions<Prisma.GetCardProduceAggregateType<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('CardProduce', `${endpoint}/cardProduce/aggregate`, args, options, fetch);
}

export function useGroupByCardProduce<
    T extends Prisma.CardProduceGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.CardProduceGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.CardProduceGroupByArgs['orderBy'] },
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
    args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.CardProduceGroupByArgs, OrderByArg> & InputErrors>,
    options?: Omit<
        UseQueryOptions<
            {} extends InputErrors
                ? Array<
                      PickEnumerable<Prisma.CardProduceGroupByOutputType, T['by']> & {
                          [P in keyof T & keyof Prisma.CardProduceGroupByOutputType]: P extends '_count'
                              ? T[P] extends boolean
                                  ? number
                                  : Prisma.GetScalarType<T[P], Prisma.CardProduceGroupByOutputType[P]>
                              : Prisma.GetScalarType<T[P], Prisma.CardProduceGroupByOutputType[P]>;
                      }
                  >
                : InputErrors
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('CardProduce', `${endpoint}/cardProduce/groupBy`, args, options, fetch);
}

export function useCountCardProduce<T extends Prisma.CardProduceCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.CardProduceCountArgs>,
    options?: Omit<
        UseQueryOptions<
            T extends { select: any }
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.CardProduceCountAggregateOutputType>
                : number
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('CardProduce', `${endpoint}/cardProduce/count`, args, options, fetch);
}
