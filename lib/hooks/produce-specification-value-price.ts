/* eslint-disable */
import type { Prisma, ProduceSpecificationValuePrice } from '@prisma/client';
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/vue';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/vue';
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime';
import metadata from './__model_meta';

export function useCreateProduceSpecificationValuePrice(
    options?: Omit<
        UseMutationOptions<
            ProduceSpecificationValuePrice | undefined,
            unknown,
            Prisma.ProduceSpecificationValuePriceCreateArgs,
            unknown
        >,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<
        Prisma.ProduceSpecificationValuePriceCreateArgs,
        ProduceSpecificationValuePrice,
        true
    >(
        'ProduceSpecificationValuePrice',
        'POST',
        `${endpoint}/produceSpecificationValuePrice/create`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProduceSpecificationValuePriceCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProduceSpecificationValuePriceCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    | CheckSelect<T, ProduceSpecificationValuePrice, Prisma.ProduceSpecificationValuePriceGetPayload<T>>
                    | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ProduceSpecificationValuePriceCreateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, ProduceSpecificationValuePrice, Prisma.ProduceSpecificationValuePriceGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManyProduceSpecificationValuePrice(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ProduceSpecificationValuePriceCreateManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ProduceSpecificationValuePriceCreateManyArgs, Prisma.BatchPayload, false>(
        'ProduceSpecificationValuePrice',
        'POST',
        `${endpoint}/produceSpecificationValuePrice/createMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProduceSpecificationValuePriceCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProduceSpecificationValuePriceCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ProduceSpecificationValuePriceCreateManyArgs>,
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

export function useFindManyProduceSpecificationValuePrice<T extends Prisma.ProduceSpecificationValuePriceFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ProduceSpecificationValuePriceFindManyArgs>,
    options?: Omit<
        UseQueryOptions<Array<Prisma.ProduceSpecificationValuePriceGetPayload<T> & { $optimistic?: boolean }>>,
        'queryKey'
    >,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery(
        'ProduceSpecificationValuePrice',
        `${endpoint}/produceSpecificationValuePrice/findMany`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useInfiniteFindManyProduceSpecificationValuePrice<
    T extends Prisma.ProduceSpecificationValuePriceFindManyArgs,
>(
    args?: Prisma.SelectSubset<T, Prisma.ProduceSpecificationValuePriceFindManyArgs>,
    options?: Omit<UseInfiniteQueryOptions<Array<Prisma.ProduceSpecificationValuePriceGetPayload<T>>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery(
        'ProduceSpecificationValuePrice',
        `${endpoint}/produceSpecificationValuePrice/findMany`,
        args,
        options,
        fetch,
    );
}

export function useFindUniqueProduceSpecificationValuePrice<
    T extends Prisma.ProduceSpecificationValuePriceFindUniqueArgs,
>(
    args: Prisma.SelectSubset<T, Prisma.ProduceSpecificationValuePriceFindUniqueArgs>,
    options?: Omit<
        UseQueryOptions<Prisma.ProduceSpecificationValuePriceGetPayload<T> & { $optimistic?: boolean }>,
        'queryKey'
    >,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery(
        'ProduceSpecificationValuePrice',
        `${endpoint}/produceSpecificationValuePrice/findUnique`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useFindFirstProduceSpecificationValuePrice<
    T extends Prisma.ProduceSpecificationValuePriceFindFirstArgs,
>(
    args?: Prisma.SelectSubset<T, Prisma.ProduceSpecificationValuePriceFindFirstArgs>,
    options?: Omit<
        UseQueryOptions<Prisma.ProduceSpecificationValuePriceGetPayload<T> & { $optimistic?: boolean }>,
        'queryKey'
    >,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery(
        'ProduceSpecificationValuePrice',
        `${endpoint}/produceSpecificationValuePrice/findFirst`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useUpdateProduceSpecificationValuePrice(
    options?: Omit<
        UseMutationOptions<
            ProduceSpecificationValuePrice | undefined,
            unknown,
            Prisma.ProduceSpecificationValuePriceUpdateArgs,
            unknown
        >,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<
        Prisma.ProduceSpecificationValuePriceUpdateArgs,
        ProduceSpecificationValuePrice,
        true
    >(
        'ProduceSpecificationValuePrice',
        'PUT',
        `${endpoint}/produceSpecificationValuePrice/update`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProduceSpecificationValuePriceUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProduceSpecificationValuePriceUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    | CheckSelect<T, ProduceSpecificationValuePrice, Prisma.ProduceSpecificationValuePriceGetPayload<T>>
                    | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ProduceSpecificationValuePriceUpdateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, ProduceSpecificationValuePrice, Prisma.ProduceSpecificationValuePriceGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManyProduceSpecificationValuePrice(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ProduceSpecificationValuePriceUpdateManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ProduceSpecificationValuePriceUpdateManyArgs, Prisma.BatchPayload, false>(
        'ProduceSpecificationValuePrice',
        'PUT',
        `${endpoint}/produceSpecificationValuePrice/updateMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProduceSpecificationValuePriceUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProduceSpecificationValuePriceUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ProduceSpecificationValuePriceUpdateManyArgs>,
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

export function useUpsertProduceSpecificationValuePrice(
    options?: Omit<
        UseMutationOptions<
            ProduceSpecificationValuePrice | undefined,
            unknown,
            Prisma.ProduceSpecificationValuePriceUpsertArgs,
            unknown
        >,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<
        Prisma.ProduceSpecificationValuePriceUpsertArgs,
        ProduceSpecificationValuePrice,
        true
    >(
        'ProduceSpecificationValuePrice',
        'POST',
        `${endpoint}/produceSpecificationValuePrice/upsert`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProduceSpecificationValuePriceUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProduceSpecificationValuePriceUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    | CheckSelect<T, ProduceSpecificationValuePrice, Prisma.ProduceSpecificationValuePriceGetPayload<T>>
                    | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ProduceSpecificationValuePriceUpsertArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, ProduceSpecificationValuePrice, Prisma.ProduceSpecificationValuePriceGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteProduceSpecificationValuePrice(
    options?: Omit<
        UseMutationOptions<
            ProduceSpecificationValuePrice | undefined,
            unknown,
            Prisma.ProduceSpecificationValuePriceDeleteArgs,
            unknown
        >,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<
        Prisma.ProduceSpecificationValuePriceDeleteArgs,
        ProduceSpecificationValuePrice,
        true
    >(
        'ProduceSpecificationValuePrice',
        'DELETE',
        `${endpoint}/produceSpecificationValuePrice/delete`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProduceSpecificationValuePriceDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProduceSpecificationValuePriceDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    | CheckSelect<T, ProduceSpecificationValuePrice, Prisma.ProduceSpecificationValuePriceGetPayload<T>>
                    | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ProduceSpecificationValuePriceDeleteArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, ProduceSpecificationValuePrice, Prisma.ProduceSpecificationValuePriceGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManyProduceSpecificationValuePrice(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ProduceSpecificationValuePriceDeleteManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ProduceSpecificationValuePriceDeleteManyArgs, Prisma.BatchPayload, false>(
        'ProduceSpecificationValuePrice',
        'DELETE',
        `${endpoint}/produceSpecificationValuePrice/deleteMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProduceSpecificationValuePriceDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProduceSpecificationValuePriceDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ProduceSpecificationValuePriceDeleteManyArgs>,
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

export function useAggregateProduceSpecificationValuePrice<
    T extends Prisma.ProduceSpecificationValuePriceAggregateArgs,
>(
    args: Prisma.SelectSubset<T, Prisma.ProduceSpecificationValuePriceAggregateArgs>,
    options?: Omit<UseQueryOptions<Prisma.GetProduceSpecificationValuePriceAggregateType<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery(
        'ProduceSpecificationValuePrice',
        `${endpoint}/produceSpecificationValuePrice/aggregate`,
        args,
        options,
        fetch,
    );
}

export function useGroupByProduceSpecificationValuePrice<
    T extends Prisma.ProduceSpecificationValuePriceGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.ProduceSpecificationValuePriceGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.ProduceSpecificationValuePriceGroupByArgs['orderBy'] },
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
        Prisma.SubsetIntersection<T, Prisma.ProduceSpecificationValuePriceGroupByArgs, OrderByArg> & InputErrors
    >,
    options?: Omit<
        UseQueryOptions<
            {} extends InputErrors
                ? Array<
                      PickEnumerable<Prisma.ProduceSpecificationValuePriceGroupByOutputType, T['by']> & {
                          [P in keyof T &
                              keyof Prisma.ProduceSpecificationValuePriceGroupByOutputType]: P extends '_count'
                              ? T[P] extends boolean
                                  ? number
                                  : Prisma.GetScalarType<
                                        T[P],
                                        Prisma.ProduceSpecificationValuePriceGroupByOutputType[P]
                                    >
                              : Prisma.GetScalarType<T[P], Prisma.ProduceSpecificationValuePriceGroupByOutputType[P]>;
                      }
                  >
                : InputErrors
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery(
        'ProduceSpecificationValuePrice',
        `${endpoint}/produceSpecificationValuePrice/groupBy`,
        args,
        options,
        fetch,
    );
}

export function useCountProduceSpecificationValuePrice<T extends Prisma.ProduceSpecificationValuePriceCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ProduceSpecificationValuePriceCountArgs>,
    options?: Omit<
        UseQueryOptions<
            T extends { select: any }
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ProduceSpecificationValuePriceCountAggregateOutputType>
                : number
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery(
        'ProduceSpecificationValuePrice',
        `${endpoint}/produceSpecificationValuePrice/count`,
        args,
        options,
        fetch,
    );
}
