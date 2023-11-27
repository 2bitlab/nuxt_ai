/* eslint-disable */
import type { Prisma, FreeExpressFeeRuleCity } from '@prisma/client';
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/vue';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/vue';
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime';
import metadata from './__model_meta';

export function useCreateFreeExpressFeeRuleCity(
    options?: Omit<
        UseMutationOptions<
            FreeExpressFeeRuleCity | undefined,
            unknown,
            Prisma.FreeExpressFeeRuleCityCreateArgs,
            unknown
        >,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.FreeExpressFeeRuleCityCreateArgs, FreeExpressFeeRuleCity, true>(
        'FreeExpressFeeRuleCity',
        'POST',
        `${endpoint}/freeExpressFeeRuleCity/create`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.FreeExpressFeeRuleCityCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleCityCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, FreeExpressFeeRuleCity, Prisma.FreeExpressFeeRuleCityGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleCityCreateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, FreeExpressFeeRuleCity, Prisma.FreeExpressFeeRuleCityGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManyFreeExpressFeeRuleCity(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.FreeExpressFeeRuleCityCreateManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.FreeExpressFeeRuleCityCreateManyArgs, Prisma.BatchPayload, false>(
        'FreeExpressFeeRuleCity',
        'POST',
        `${endpoint}/freeExpressFeeRuleCity/createMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.FreeExpressFeeRuleCityCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleCityCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleCityCreateManyArgs>,
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

export function useFindManyFreeExpressFeeRuleCity<T extends Prisma.FreeExpressFeeRuleCityFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleCityFindManyArgs>,
    options?: Omit<
        UseQueryOptions<Array<Prisma.FreeExpressFeeRuleCityGetPayload<T> & { $optimistic?: boolean }>>,
        'queryKey'
    >,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery(
        'FreeExpressFeeRuleCity',
        `${endpoint}/freeExpressFeeRuleCity/findMany`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useInfiniteFindManyFreeExpressFeeRuleCity<T extends Prisma.FreeExpressFeeRuleCityFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleCityFindManyArgs>,
    options?: Omit<UseInfiniteQueryOptions<Array<Prisma.FreeExpressFeeRuleCityGetPayload<T>>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery(
        'FreeExpressFeeRuleCity',
        `${endpoint}/freeExpressFeeRuleCity/findMany`,
        args,
        options,
        fetch,
    );
}

export function useFindUniqueFreeExpressFeeRuleCity<T extends Prisma.FreeExpressFeeRuleCityFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleCityFindUniqueArgs>,
    options?: Omit<UseQueryOptions<Prisma.FreeExpressFeeRuleCityGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery(
        'FreeExpressFeeRuleCity',
        `${endpoint}/freeExpressFeeRuleCity/findUnique`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useFindFirstFreeExpressFeeRuleCity<T extends Prisma.FreeExpressFeeRuleCityFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleCityFindFirstArgs>,
    options?: Omit<UseQueryOptions<Prisma.FreeExpressFeeRuleCityGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery(
        'FreeExpressFeeRuleCity',
        `${endpoint}/freeExpressFeeRuleCity/findFirst`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useUpdateFreeExpressFeeRuleCity(
    options?: Omit<
        UseMutationOptions<
            FreeExpressFeeRuleCity | undefined,
            unknown,
            Prisma.FreeExpressFeeRuleCityUpdateArgs,
            unknown
        >,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.FreeExpressFeeRuleCityUpdateArgs, FreeExpressFeeRuleCity, true>(
        'FreeExpressFeeRuleCity',
        'PUT',
        `${endpoint}/freeExpressFeeRuleCity/update`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.FreeExpressFeeRuleCityUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleCityUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, FreeExpressFeeRuleCity, Prisma.FreeExpressFeeRuleCityGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleCityUpdateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, FreeExpressFeeRuleCity, Prisma.FreeExpressFeeRuleCityGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManyFreeExpressFeeRuleCity(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.FreeExpressFeeRuleCityUpdateManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.FreeExpressFeeRuleCityUpdateManyArgs, Prisma.BatchPayload, false>(
        'FreeExpressFeeRuleCity',
        'PUT',
        `${endpoint}/freeExpressFeeRuleCity/updateMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.FreeExpressFeeRuleCityUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleCityUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleCityUpdateManyArgs>,
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

export function useUpsertFreeExpressFeeRuleCity(
    options?: Omit<
        UseMutationOptions<
            FreeExpressFeeRuleCity | undefined,
            unknown,
            Prisma.FreeExpressFeeRuleCityUpsertArgs,
            unknown
        >,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.FreeExpressFeeRuleCityUpsertArgs, FreeExpressFeeRuleCity, true>(
        'FreeExpressFeeRuleCity',
        'POST',
        `${endpoint}/freeExpressFeeRuleCity/upsert`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.FreeExpressFeeRuleCityUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleCityUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, FreeExpressFeeRuleCity, Prisma.FreeExpressFeeRuleCityGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleCityUpsertArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, FreeExpressFeeRuleCity, Prisma.FreeExpressFeeRuleCityGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteFreeExpressFeeRuleCity(
    options?: Omit<
        UseMutationOptions<
            FreeExpressFeeRuleCity | undefined,
            unknown,
            Prisma.FreeExpressFeeRuleCityDeleteArgs,
            unknown
        >,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.FreeExpressFeeRuleCityDeleteArgs, FreeExpressFeeRuleCity, true>(
        'FreeExpressFeeRuleCity',
        'DELETE',
        `${endpoint}/freeExpressFeeRuleCity/delete`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.FreeExpressFeeRuleCityDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleCityDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, FreeExpressFeeRuleCity, Prisma.FreeExpressFeeRuleCityGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleCityDeleteArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, FreeExpressFeeRuleCity, Prisma.FreeExpressFeeRuleCityGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManyFreeExpressFeeRuleCity(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.FreeExpressFeeRuleCityDeleteManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.FreeExpressFeeRuleCityDeleteManyArgs, Prisma.BatchPayload, false>(
        'FreeExpressFeeRuleCity',
        'DELETE',
        `${endpoint}/freeExpressFeeRuleCity/deleteMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.FreeExpressFeeRuleCityDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleCityDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleCityDeleteManyArgs>,
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

export function useAggregateFreeExpressFeeRuleCity<T extends Prisma.FreeExpressFeeRuleCityAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleCityAggregateArgs>,
    options?: Omit<UseQueryOptions<Prisma.GetFreeExpressFeeRuleCityAggregateType<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery(
        'FreeExpressFeeRuleCity',
        `${endpoint}/freeExpressFeeRuleCity/aggregate`,
        args,
        options,
        fetch,
    );
}

export function useGroupByFreeExpressFeeRuleCity<
    T extends Prisma.FreeExpressFeeRuleCityGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.FreeExpressFeeRuleCityGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.FreeExpressFeeRuleCityGroupByArgs['orderBy'] },
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
        Prisma.SubsetIntersection<T, Prisma.FreeExpressFeeRuleCityGroupByArgs, OrderByArg> & InputErrors
    >,
    options?: Omit<
        UseQueryOptions<
            {} extends InputErrors
                ? Array<
                      PickEnumerable<Prisma.FreeExpressFeeRuleCityGroupByOutputType, T['by']> & {
                          [P in keyof T & keyof Prisma.FreeExpressFeeRuleCityGroupByOutputType]: P extends '_count'
                              ? T[P] extends boolean
                                  ? number
                                  : Prisma.GetScalarType<T[P], Prisma.FreeExpressFeeRuleCityGroupByOutputType[P]>
                              : Prisma.GetScalarType<T[P], Prisma.FreeExpressFeeRuleCityGroupByOutputType[P]>;
                      }
                  >
                : InputErrors
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('FreeExpressFeeRuleCity', `${endpoint}/freeExpressFeeRuleCity/groupBy`, args, options, fetch);
}

export function useCountFreeExpressFeeRuleCity<T extends Prisma.FreeExpressFeeRuleCityCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.FreeExpressFeeRuleCityCountArgs>,
    options?: Omit<
        UseQueryOptions<
            T extends { select: any }
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.FreeExpressFeeRuleCityCountAggregateOutputType>
                : number
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('FreeExpressFeeRuleCity', `${endpoint}/freeExpressFeeRuleCity/count`, args, options, fetch);
}
