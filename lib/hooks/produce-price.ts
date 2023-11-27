/* eslint-disable */
import type { Prisma, ProducePrice } from '@prisma/client';
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/vue';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/vue';
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime';
import metadata from './__model_meta';

export function useCreateProducePrice(
    options?: Omit<
        UseMutationOptions<ProducePrice | undefined, unknown, Prisma.ProducePriceCreateArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ProducePriceCreateArgs, ProducePrice, true>(
        'ProducePrice',
        'POST',
        `${endpoint}/producePrice/create`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProducePriceCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProducePriceCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, ProducePrice, Prisma.ProducePriceGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ProducePriceCreateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, ProducePrice, Prisma.ProducePriceGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManyProducePrice(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ProducePriceCreateManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ProducePriceCreateManyArgs, Prisma.BatchPayload, false>(
        'ProducePrice',
        'POST',
        `${endpoint}/producePrice/createMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProducePriceCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProducePriceCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ProducePriceCreateManyArgs>,
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

export function useFindManyProducePrice<T extends Prisma.ProducePriceFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ProducePriceFindManyArgs>,
    options?: Omit<UseQueryOptions<Array<Prisma.ProducePriceGetPayload<T> & { $optimistic?: boolean }>>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('ProducePrice', `${endpoint}/producePrice/findMany`, args, options, fetch, optimisticUpdate);
}

export function useInfiniteFindManyProducePrice<T extends Prisma.ProducePriceFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ProducePriceFindManyArgs>,
    options?: Omit<UseInfiniteQueryOptions<Array<Prisma.ProducePriceGetPayload<T>>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery('ProducePrice', `${endpoint}/producePrice/findMany`, args, options, fetch);
}

export function useFindUniqueProducePrice<T extends Prisma.ProducePriceFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProducePriceFindUniqueArgs>,
    options?: Omit<UseQueryOptions<Prisma.ProducePriceGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('ProducePrice', `${endpoint}/producePrice/findUnique`, args, options, fetch, optimisticUpdate);
}

export function useFindFirstProducePrice<T extends Prisma.ProducePriceFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ProducePriceFindFirstArgs>,
    options?: Omit<UseQueryOptions<Prisma.ProducePriceGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('ProducePrice', `${endpoint}/producePrice/findFirst`, args, options, fetch, optimisticUpdate);
}

export function useUpdateProducePrice(
    options?: Omit<
        UseMutationOptions<ProducePrice | undefined, unknown, Prisma.ProducePriceUpdateArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ProducePriceUpdateArgs, ProducePrice, true>(
        'ProducePrice',
        'PUT',
        `${endpoint}/producePrice/update`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProducePriceUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProducePriceUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, ProducePrice, Prisma.ProducePriceGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ProducePriceUpdateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, ProducePrice, Prisma.ProducePriceGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManyProducePrice(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ProducePriceUpdateManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ProducePriceUpdateManyArgs, Prisma.BatchPayload, false>(
        'ProducePrice',
        'PUT',
        `${endpoint}/producePrice/updateMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProducePriceUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProducePriceUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ProducePriceUpdateManyArgs>,
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

export function useUpsertProducePrice(
    options?: Omit<
        UseMutationOptions<ProducePrice | undefined, unknown, Prisma.ProducePriceUpsertArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ProducePriceUpsertArgs, ProducePrice, true>(
        'ProducePrice',
        'POST',
        `${endpoint}/producePrice/upsert`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProducePriceUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProducePriceUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, ProducePrice, Prisma.ProducePriceGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ProducePriceUpsertArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, ProducePrice, Prisma.ProducePriceGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteProducePrice(
    options?: Omit<
        UseMutationOptions<ProducePrice | undefined, unknown, Prisma.ProducePriceDeleteArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ProducePriceDeleteArgs, ProducePrice, true>(
        'ProducePrice',
        'DELETE',
        `${endpoint}/producePrice/delete`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProducePriceDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProducePriceDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, ProducePrice, Prisma.ProducePriceGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ProducePriceDeleteArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, ProducePrice, Prisma.ProducePriceGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManyProducePrice(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ProducePriceDeleteManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ProducePriceDeleteManyArgs, Prisma.BatchPayload, false>(
        'ProducePrice',
        'DELETE',
        `${endpoint}/producePrice/deleteMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProducePriceDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProducePriceDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ProducePriceDeleteManyArgs>,
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

export function useAggregateProducePrice<T extends Prisma.ProducePriceAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProducePriceAggregateArgs>,
    options?: Omit<UseQueryOptions<Prisma.GetProducePriceAggregateType<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('ProducePrice', `${endpoint}/producePrice/aggregate`, args, options, fetch);
}

export function useGroupByProducePrice<
    T extends Prisma.ProducePriceGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.ProducePriceGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.ProducePriceGroupByArgs['orderBy'] },
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
        Prisma.SubsetIntersection<T, Prisma.ProducePriceGroupByArgs, OrderByArg> & InputErrors
    >,
    options?: Omit<
        UseQueryOptions<
            {} extends InputErrors
                ? Array<
                      PickEnumerable<Prisma.ProducePriceGroupByOutputType, T['by']> & {
                          [P in keyof T & keyof Prisma.ProducePriceGroupByOutputType]: P extends '_count'
                              ? T[P] extends boolean
                                  ? number
                                  : Prisma.GetScalarType<T[P], Prisma.ProducePriceGroupByOutputType[P]>
                              : Prisma.GetScalarType<T[P], Prisma.ProducePriceGroupByOutputType[P]>;
                      }
                  >
                : InputErrors
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('ProducePrice', `${endpoint}/producePrice/groupBy`, args, options, fetch);
}

export function useCountProducePrice<T extends Prisma.ProducePriceCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ProducePriceCountArgs>,
    options?: Omit<
        UseQueryOptions<
            T extends { select: any }
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ProducePriceCountAggregateOutputType>
                : number
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('ProducePrice', `${endpoint}/producePrice/count`, args, options, fetch);
}
