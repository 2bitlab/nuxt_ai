/* eslint-disable */
import type { Prisma, ConfigValue } from '@prisma/client';
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/vue';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/vue';
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime';
import metadata from './__model_meta';

export function useCreateConfigValue(
    options?: Omit<
        UseMutationOptions<ConfigValue | undefined, unknown, Prisma.ConfigValueCreateArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ConfigValueCreateArgs, ConfigValue, true>(
        'ConfigValue',
        'POST',
        `${endpoint}/configValue/create`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ConfigValueCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ConfigValueCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, ConfigValue, Prisma.ConfigValueGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ConfigValueCreateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, ConfigValue, Prisma.ConfigValueGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManyConfigValue(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ConfigValueCreateManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ConfigValueCreateManyArgs, Prisma.BatchPayload, false>(
        'ConfigValue',
        'POST',
        `${endpoint}/configValue/createMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ConfigValueCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ConfigValueCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ConfigValueCreateManyArgs>,
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

export function useFindManyConfigValue<T extends Prisma.ConfigValueFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ConfigValueFindManyArgs>,
    options?: Omit<UseQueryOptions<Array<Prisma.ConfigValueGetPayload<T> & { $optimistic?: boolean }>>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('ConfigValue', `${endpoint}/configValue/findMany`, args, options, fetch, optimisticUpdate);
}

export function useInfiniteFindManyConfigValue<T extends Prisma.ConfigValueFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ConfigValueFindManyArgs>,
    options?: Omit<UseInfiniteQueryOptions<Array<Prisma.ConfigValueGetPayload<T>>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery('ConfigValue', `${endpoint}/configValue/findMany`, args, options, fetch);
}

export function useFindUniqueConfigValue<T extends Prisma.ConfigValueFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConfigValueFindUniqueArgs>,
    options?: Omit<UseQueryOptions<Prisma.ConfigValueGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('ConfigValue', `${endpoint}/configValue/findUnique`, args, options, fetch, optimisticUpdate);
}

export function useFindFirstConfigValue<T extends Prisma.ConfigValueFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ConfigValueFindFirstArgs>,
    options?: Omit<UseQueryOptions<Prisma.ConfigValueGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('ConfigValue', `${endpoint}/configValue/findFirst`, args, options, fetch, optimisticUpdate);
}

export function useUpdateConfigValue(
    options?: Omit<
        UseMutationOptions<ConfigValue | undefined, unknown, Prisma.ConfigValueUpdateArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ConfigValueUpdateArgs, ConfigValue, true>(
        'ConfigValue',
        'PUT',
        `${endpoint}/configValue/update`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ConfigValueUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ConfigValueUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, ConfigValue, Prisma.ConfigValueGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ConfigValueUpdateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, ConfigValue, Prisma.ConfigValueGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManyConfigValue(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ConfigValueUpdateManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ConfigValueUpdateManyArgs, Prisma.BatchPayload, false>(
        'ConfigValue',
        'PUT',
        `${endpoint}/configValue/updateMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ConfigValueUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ConfigValueUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ConfigValueUpdateManyArgs>,
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

export function useUpsertConfigValue(
    options?: Omit<
        UseMutationOptions<ConfigValue | undefined, unknown, Prisma.ConfigValueUpsertArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ConfigValueUpsertArgs, ConfigValue, true>(
        'ConfigValue',
        'POST',
        `${endpoint}/configValue/upsert`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ConfigValueUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.ConfigValueUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, ConfigValue, Prisma.ConfigValueGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ConfigValueUpsertArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, ConfigValue, Prisma.ConfigValueGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteConfigValue(
    options?: Omit<
        UseMutationOptions<ConfigValue | undefined, unknown, Prisma.ConfigValueDeleteArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ConfigValueDeleteArgs, ConfigValue, true>(
        'ConfigValue',
        'DELETE',
        `${endpoint}/configValue/delete`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ConfigValueDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.ConfigValueDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, ConfigValue, Prisma.ConfigValueGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ConfigValueDeleteArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, ConfigValue, Prisma.ConfigValueGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManyConfigValue(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ConfigValueDeleteManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ConfigValueDeleteManyArgs, Prisma.BatchPayload, false>(
        'ConfigValue',
        'DELETE',
        `${endpoint}/configValue/deleteMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ConfigValueDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ConfigValueDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ConfigValueDeleteManyArgs>,
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

export function useAggregateConfigValue<T extends Prisma.ConfigValueAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConfigValueAggregateArgs>,
    options?: Omit<UseQueryOptions<Prisma.GetConfigValueAggregateType<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('ConfigValue', `${endpoint}/configValue/aggregate`, args, options, fetch);
}

export function useGroupByConfigValue<
    T extends Prisma.ConfigValueGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.ConfigValueGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.ConfigValueGroupByArgs['orderBy'] },
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
    args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.ConfigValueGroupByArgs, OrderByArg> & InputErrors>,
    options?: Omit<
        UseQueryOptions<
            {} extends InputErrors
                ? Array<
                      PickEnumerable<Prisma.ConfigValueGroupByOutputType, T['by']> & {
                          [P in keyof T & keyof Prisma.ConfigValueGroupByOutputType]: P extends '_count'
                              ? T[P] extends boolean
                                  ? number
                                  : Prisma.GetScalarType<T[P], Prisma.ConfigValueGroupByOutputType[P]>
                              : Prisma.GetScalarType<T[P], Prisma.ConfigValueGroupByOutputType[P]>;
                      }
                  >
                : InputErrors
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('ConfigValue', `${endpoint}/configValue/groupBy`, args, options, fetch);
}

export function useCountConfigValue<T extends Prisma.ConfigValueCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ConfigValueCountArgs>,
    options?: Omit<
        UseQueryOptions<
            T extends { select: any }
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ConfigValueCountAggregateOutputType>
                : number
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('ConfigValue', `${endpoint}/configValue/count`, args, options, fetch);
}
