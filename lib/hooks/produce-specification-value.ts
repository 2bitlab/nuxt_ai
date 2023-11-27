/* eslint-disable */
import type { Prisma, ProduceSpecificationValue } from '@prisma/client';
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/vue';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/vue';
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime';
import metadata from './__model_meta';

export function useCreateProduceSpecificationValue(
    options?: Omit<
        UseMutationOptions<
            ProduceSpecificationValue | undefined,
            unknown,
            Prisma.ProduceSpecificationValueCreateArgs,
            unknown
        >,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ProduceSpecificationValueCreateArgs, ProduceSpecificationValue, true>(
        'ProduceSpecificationValue',
        'POST',
        `${endpoint}/produceSpecificationValue/create`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProduceSpecificationValueCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProduceSpecificationValueCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    | CheckSelect<T, ProduceSpecificationValue, Prisma.ProduceSpecificationValueGetPayload<T>>
                    | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ProduceSpecificationValueCreateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, ProduceSpecificationValue, Prisma.ProduceSpecificationValueGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManyProduceSpecificationValue(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ProduceSpecificationValueCreateManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ProduceSpecificationValueCreateManyArgs, Prisma.BatchPayload, false>(
        'ProduceSpecificationValue',
        'POST',
        `${endpoint}/produceSpecificationValue/createMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProduceSpecificationValueCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProduceSpecificationValueCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ProduceSpecificationValueCreateManyArgs>,
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

export function useFindManyProduceSpecificationValue<T extends Prisma.ProduceSpecificationValueFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ProduceSpecificationValueFindManyArgs>,
    options?: Omit<
        UseQueryOptions<Array<Prisma.ProduceSpecificationValueGetPayload<T> & { $optimistic?: boolean }>>,
        'queryKey'
    >,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery(
        'ProduceSpecificationValue',
        `${endpoint}/produceSpecificationValue/findMany`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useInfiniteFindManyProduceSpecificationValue<T extends Prisma.ProduceSpecificationValueFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ProduceSpecificationValueFindManyArgs>,
    options?: Omit<UseInfiniteQueryOptions<Array<Prisma.ProduceSpecificationValueGetPayload<T>>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery(
        'ProduceSpecificationValue',
        `${endpoint}/produceSpecificationValue/findMany`,
        args,
        options,
        fetch,
    );
}

export function useFindUniqueProduceSpecificationValue<T extends Prisma.ProduceSpecificationValueFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProduceSpecificationValueFindUniqueArgs>,
    options?: Omit<
        UseQueryOptions<Prisma.ProduceSpecificationValueGetPayload<T> & { $optimistic?: boolean }>,
        'queryKey'
    >,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery(
        'ProduceSpecificationValue',
        `${endpoint}/produceSpecificationValue/findUnique`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useFindFirstProduceSpecificationValue<T extends Prisma.ProduceSpecificationValueFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ProduceSpecificationValueFindFirstArgs>,
    options?: Omit<
        UseQueryOptions<Prisma.ProduceSpecificationValueGetPayload<T> & { $optimistic?: boolean }>,
        'queryKey'
    >,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery(
        'ProduceSpecificationValue',
        `${endpoint}/produceSpecificationValue/findFirst`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useUpdateProduceSpecificationValue(
    options?: Omit<
        UseMutationOptions<
            ProduceSpecificationValue | undefined,
            unknown,
            Prisma.ProduceSpecificationValueUpdateArgs,
            unknown
        >,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ProduceSpecificationValueUpdateArgs, ProduceSpecificationValue, true>(
        'ProduceSpecificationValue',
        'PUT',
        `${endpoint}/produceSpecificationValue/update`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProduceSpecificationValueUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProduceSpecificationValueUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    | CheckSelect<T, ProduceSpecificationValue, Prisma.ProduceSpecificationValueGetPayload<T>>
                    | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ProduceSpecificationValueUpdateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, ProduceSpecificationValue, Prisma.ProduceSpecificationValueGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManyProduceSpecificationValue(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ProduceSpecificationValueUpdateManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ProduceSpecificationValueUpdateManyArgs, Prisma.BatchPayload, false>(
        'ProduceSpecificationValue',
        'PUT',
        `${endpoint}/produceSpecificationValue/updateMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProduceSpecificationValueUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProduceSpecificationValueUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ProduceSpecificationValueUpdateManyArgs>,
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

export function useUpsertProduceSpecificationValue(
    options?: Omit<
        UseMutationOptions<
            ProduceSpecificationValue | undefined,
            unknown,
            Prisma.ProduceSpecificationValueUpsertArgs,
            unknown
        >,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ProduceSpecificationValueUpsertArgs, ProduceSpecificationValue, true>(
        'ProduceSpecificationValue',
        'POST',
        `${endpoint}/produceSpecificationValue/upsert`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProduceSpecificationValueUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProduceSpecificationValueUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    | CheckSelect<T, ProduceSpecificationValue, Prisma.ProduceSpecificationValueGetPayload<T>>
                    | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ProduceSpecificationValueUpsertArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, ProduceSpecificationValue, Prisma.ProduceSpecificationValueGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteProduceSpecificationValue(
    options?: Omit<
        UseMutationOptions<
            ProduceSpecificationValue | undefined,
            unknown,
            Prisma.ProduceSpecificationValueDeleteArgs,
            unknown
        >,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ProduceSpecificationValueDeleteArgs, ProduceSpecificationValue, true>(
        'ProduceSpecificationValue',
        'DELETE',
        `${endpoint}/produceSpecificationValue/delete`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProduceSpecificationValueDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProduceSpecificationValueDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    | CheckSelect<T, ProduceSpecificationValue, Prisma.ProduceSpecificationValueGetPayload<T>>
                    | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ProduceSpecificationValueDeleteArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, ProduceSpecificationValue, Prisma.ProduceSpecificationValueGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManyProduceSpecificationValue(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ProduceSpecificationValueDeleteManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ProduceSpecificationValueDeleteManyArgs, Prisma.BatchPayload, false>(
        'ProduceSpecificationValue',
        'DELETE',
        `${endpoint}/produceSpecificationValue/deleteMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProduceSpecificationValueDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProduceSpecificationValueDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ProduceSpecificationValueDeleteManyArgs>,
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

export function useAggregateProduceSpecificationValue<T extends Prisma.ProduceSpecificationValueAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProduceSpecificationValueAggregateArgs>,
    options?: Omit<UseQueryOptions<Prisma.GetProduceSpecificationValueAggregateType<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery(
        'ProduceSpecificationValue',
        `${endpoint}/produceSpecificationValue/aggregate`,
        args,
        options,
        fetch,
    );
}

export function useGroupByProduceSpecificationValue<
    T extends Prisma.ProduceSpecificationValueGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.ProduceSpecificationValueGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.ProduceSpecificationValueGroupByArgs['orderBy'] },
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
        Prisma.SubsetIntersection<T, Prisma.ProduceSpecificationValueGroupByArgs, OrderByArg> & InputErrors
    >,
    options?: Omit<
        UseQueryOptions<
            {} extends InputErrors
                ? Array<
                      PickEnumerable<Prisma.ProduceSpecificationValueGroupByOutputType, T['by']> & {
                          [P in keyof T & keyof Prisma.ProduceSpecificationValueGroupByOutputType]: P extends '_count'
                              ? T[P] extends boolean
                                  ? number
                                  : Prisma.GetScalarType<T[P], Prisma.ProduceSpecificationValueGroupByOutputType[P]>
                              : Prisma.GetScalarType<T[P], Prisma.ProduceSpecificationValueGroupByOutputType[P]>;
                      }
                  >
                : InputErrors
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery(
        'ProduceSpecificationValue',
        `${endpoint}/produceSpecificationValue/groupBy`,
        args,
        options,
        fetch,
    );
}

export function useCountProduceSpecificationValue<T extends Prisma.ProduceSpecificationValueCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ProduceSpecificationValueCountArgs>,
    options?: Omit<
        UseQueryOptions<
            T extends { select: any }
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ProduceSpecificationValueCountAggregateOutputType>
                : number
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery(
        'ProduceSpecificationValue',
        `${endpoint}/produceSpecificationValue/count`,
        args,
        options,
        fetch,
    );
}
