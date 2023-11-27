/* eslint-disable */
import type { Prisma, ExpressFeeRuleCity } from '@prisma/client';
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/vue';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/vue';
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime';
import metadata from './__model_meta';

export function useCreateExpressFeeRuleCity(
    options?: Omit<
        UseMutationOptions<ExpressFeeRuleCity | undefined, unknown, Prisma.ExpressFeeRuleCityCreateArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ExpressFeeRuleCityCreateArgs, ExpressFeeRuleCity, true>(
        'ExpressFeeRuleCity',
        'POST',
        `${endpoint}/expressFeeRuleCity/create`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ExpressFeeRuleCityCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ExpressFeeRuleCityCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, ExpressFeeRuleCity, Prisma.ExpressFeeRuleCityGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ExpressFeeRuleCityCreateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, ExpressFeeRuleCity, Prisma.ExpressFeeRuleCityGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManyExpressFeeRuleCity(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ExpressFeeRuleCityCreateManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ExpressFeeRuleCityCreateManyArgs, Prisma.BatchPayload, false>(
        'ExpressFeeRuleCity',
        'POST',
        `${endpoint}/expressFeeRuleCity/createMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ExpressFeeRuleCityCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ExpressFeeRuleCityCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ExpressFeeRuleCityCreateManyArgs>,
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

export function useFindManyExpressFeeRuleCity<T extends Prisma.ExpressFeeRuleCityFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ExpressFeeRuleCityFindManyArgs>,
    options?: Omit<
        UseQueryOptions<Array<Prisma.ExpressFeeRuleCityGetPayload<T> & { $optimistic?: boolean }>>,
        'queryKey'
    >,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery(
        'ExpressFeeRuleCity',
        `${endpoint}/expressFeeRuleCity/findMany`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useInfiniteFindManyExpressFeeRuleCity<T extends Prisma.ExpressFeeRuleCityFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ExpressFeeRuleCityFindManyArgs>,
    options?: Omit<UseInfiniteQueryOptions<Array<Prisma.ExpressFeeRuleCityGetPayload<T>>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery('ExpressFeeRuleCity', `${endpoint}/expressFeeRuleCity/findMany`, args, options, fetch);
}

export function useFindUniqueExpressFeeRuleCity<T extends Prisma.ExpressFeeRuleCityFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ExpressFeeRuleCityFindUniqueArgs>,
    options?: Omit<UseQueryOptions<Prisma.ExpressFeeRuleCityGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery(
        'ExpressFeeRuleCity',
        `${endpoint}/expressFeeRuleCity/findUnique`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useFindFirstExpressFeeRuleCity<T extends Prisma.ExpressFeeRuleCityFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ExpressFeeRuleCityFindFirstArgs>,
    options?: Omit<UseQueryOptions<Prisma.ExpressFeeRuleCityGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery(
        'ExpressFeeRuleCity',
        `${endpoint}/expressFeeRuleCity/findFirst`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useUpdateExpressFeeRuleCity(
    options?: Omit<
        UseMutationOptions<ExpressFeeRuleCity | undefined, unknown, Prisma.ExpressFeeRuleCityUpdateArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ExpressFeeRuleCityUpdateArgs, ExpressFeeRuleCity, true>(
        'ExpressFeeRuleCity',
        'PUT',
        `${endpoint}/expressFeeRuleCity/update`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ExpressFeeRuleCityUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ExpressFeeRuleCityUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, ExpressFeeRuleCity, Prisma.ExpressFeeRuleCityGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ExpressFeeRuleCityUpdateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, ExpressFeeRuleCity, Prisma.ExpressFeeRuleCityGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManyExpressFeeRuleCity(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ExpressFeeRuleCityUpdateManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ExpressFeeRuleCityUpdateManyArgs, Prisma.BatchPayload, false>(
        'ExpressFeeRuleCity',
        'PUT',
        `${endpoint}/expressFeeRuleCity/updateMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ExpressFeeRuleCityUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ExpressFeeRuleCityUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ExpressFeeRuleCityUpdateManyArgs>,
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

export function useUpsertExpressFeeRuleCity(
    options?: Omit<
        UseMutationOptions<ExpressFeeRuleCity | undefined, unknown, Prisma.ExpressFeeRuleCityUpsertArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ExpressFeeRuleCityUpsertArgs, ExpressFeeRuleCity, true>(
        'ExpressFeeRuleCity',
        'POST',
        `${endpoint}/expressFeeRuleCity/upsert`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ExpressFeeRuleCityUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.ExpressFeeRuleCityUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, ExpressFeeRuleCity, Prisma.ExpressFeeRuleCityGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ExpressFeeRuleCityUpsertArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, ExpressFeeRuleCity, Prisma.ExpressFeeRuleCityGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteExpressFeeRuleCity(
    options?: Omit<
        UseMutationOptions<ExpressFeeRuleCity | undefined, unknown, Prisma.ExpressFeeRuleCityDeleteArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ExpressFeeRuleCityDeleteArgs, ExpressFeeRuleCity, true>(
        'ExpressFeeRuleCity',
        'DELETE',
        `${endpoint}/expressFeeRuleCity/delete`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ExpressFeeRuleCityDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.ExpressFeeRuleCityDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, ExpressFeeRuleCity, Prisma.ExpressFeeRuleCityGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ExpressFeeRuleCityDeleteArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, ExpressFeeRuleCity, Prisma.ExpressFeeRuleCityGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManyExpressFeeRuleCity(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ExpressFeeRuleCityDeleteManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ExpressFeeRuleCityDeleteManyArgs, Prisma.BatchPayload, false>(
        'ExpressFeeRuleCity',
        'DELETE',
        `${endpoint}/expressFeeRuleCity/deleteMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ExpressFeeRuleCityDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ExpressFeeRuleCityDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ExpressFeeRuleCityDeleteManyArgs>,
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

export function useAggregateExpressFeeRuleCity<T extends Prisma.ExpressFeeRuleCityAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ExpressFeeRuleCityAggregateArgs>,
    options?: Omit<UseQueryOptions<Prisma.GetExpressFeeRuleCityAggregateType<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('ExpressFeeRuleCity', `${endpoint}/expressFeeRuleCity/aggregate`, args, options, fetch);
}

export function useGroupByExpressFeeRuleCity<
    T extends Prisma.ExpressFeeRuleCityGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.ExpressFeeRuleCityGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.ExpressFeeRuleCityGroupByArgs['orderBy'] },
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
        Prisma.SubsetIntersection<T, Prisma.ExpressFeeRuleCityGroupByArgs, OrderByArg> & InputErrors
    >,
    options?: Omit<
        UseQueryOptions<
            {} extends InputErrors
                ? Array<
                      PickEnumerable<Prisma.ExpressFeeRuleCityGroupByOutputType, T['by']> & {
                          [P in keyof T & keyof Prisma.ExpressFeeRuleCityGroupByOutputType]: P extends '_count'
                              ? T[P] extends boolean
                                  ? number
                                  : Prisma.GetScalarType<T[P], Prisma.ExpressFeeRuleCityGroupByOutputType[P]>
                              : Prisma.GetScalarType<T[P], Prisma.ExpressFeeRuleCityGroupByOutputType[P]>;
                      }
                  >
                : InputErrors
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('ExpressFeeRuleCity', `${endpoint}/expressFeeRuleCity/groupBy`, args, options, fetch);
}

export function useCountExpressFeeRuleCity<T extends Prisma.ExpressFeeRuleCityCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ExpressFeeRuleCityCountArgs>,
    options?: Omit<
        UseQueryOptions<
            T extends { select: any }
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ExpressFeeRuleCityCountAggregateOutputType>
                : number
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('ExpressFeeRuleCity', `${endpoint}/expressFeeRuleCity/count`, args, options, fetch);
}
