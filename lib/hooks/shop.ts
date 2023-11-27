/* eslint-disable */
import type { Prisma, Shop } from '@prisma/client';
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/vue';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/vue';
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime';
import metadata from './__model_meta';

export function useCreateShop(
    options?: Omit<UseMutationOptions<Shop | undefined, unknown, Prisma.ShopCreateArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ShopCreateArgs, Shop, true>(
        'Shop',
        'POST',
        `${endpoint}/shop/create`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ShopCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ShopCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Shop, Prisma.ShopGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ShopCreateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Shop, Prisma.ShopGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManyShop(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ShopCreateManyArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ShopCreateManyArgs, Prisma.BatchPayload, false>(
        'Shop',
        'POST',
        `${endpoint}/shop/createMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ShopCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ShopCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ShopCreateManyArgs>,
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

export function useFindManyShop<T extends Prisma.ShopFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ShopFindManyArgs>,
    options?: Omit<UseQueryOptions<Array<Prisma.ShopGetPayload<T> & { $optimistic?: boolean }>>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Shop', `${endpoint}/shop/findMany`, args, options, fetch, optimisticUpdate);
}

export function useInfiniteFindManyShop<T extends Prisma.ShopFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ShopFindManyArgs>,
    options?: Omit<UseInfiniteQueryOptions<Array<Prisma.ShopGetPayload<T>>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery('Shop', `${endpoint}/shop/findMany`, args, options, fetch);
}

export function useFindUniqueShop<T extends Prisma.ShopFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ShopFindUniqueArgs>,
    options?: Omit<UseQueryOptions<Prisma.ShopGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Shop', `${endpoint}/shop/findUnique`, args, options, fetch, optimisticUpdate);
}

export function useFindFirstShop<T extends Prisma.ShopFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ShopFindFirstArgs>,
    options?: Omit<UseQueryOptions<Prisma.ShopGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Shop', `${endpoint}/shop/findFirst`, args, options, fetch, optimisticUpdate);
}

export function useUpdateShop(
    options?: Omit<UseMutationOptions<Shop | undefined, unknown, Prisma.ShopUpdateArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ShopUpdateArgs, Shop, true>(
        'Shop',
        'PUT',
        `${endpoint}/shop/update`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ShopUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ShopUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Shop, Prisma.ShopGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ShopUpdateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Shop, Prisma.ShopGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManyShop(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ShopUpdateManyArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ShopUpdateManyArgs, Prisma.BatchPayload, false>(
        'Shop',
        'PUT',
        `${endpoint}/shop/updateMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ShopUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ShopUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ShopUpdateManyArgs>,
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

export function useUpsertShop(
    options?: Omit<UseMutationOptions<Shop | undefined, unknown, Prisma.ShopUpsertArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ShopUpsertArgs, Shop, true>(
        'Shop',
        'POST',
        `${endpoint}/shop/upsert`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ShopUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.ShopUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Shop, Prisma.ShopGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ShopUpsertArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Shop, Prisma.ShopGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteShop(
    options?: Omit<UseMutationOptions<Shop | undefined, unknown, Prisma.ShopDeleteArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ShopDeleteArgs, Shop, true>(
        'Shop',
        'DELETE',
        `${endpoint}/shop/delete`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ShopDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.ShopDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Shop, Prisma.ShopGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ShopDeleteArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Shop, Prisma.ShopGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManyShop(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ShopDeleteManyArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ShopDeleteManyArgs, Prisma.BatchPayload, false>(
        'Shop',
        'DELETE',
        `${endpoint}/shop/deleteMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ShopDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ShopDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ShopDeleteManyArgs>,
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

export function useAggregateShop<T extends Prisma.ShopAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ShopAggregateArgs>,
    options?: Omit<UseQueryOptions<Prisma.GetShopAggregateType<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Shop', `${endpoint}/shop/aggregate`, args, options, fetch);
}

export function useGroupByShop<
    T extends Prisma.ShopGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.ShopGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.ShopGroupByArgs['orderBy'] },
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
    args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.ShopGroupByArgs, OrderByArg> & InputErrors>,
    options?: Omit<
        UseQueryOptions<
            {} extends InputErrors
                ? Array<
                      PickEnumerable<Prisma.ShopGroupByOutputType, T['by']> & {
                          [P in keyof T & keyof Prisma.ShopGroupByOutputType]: P extends '_count'
                              ? T[P] extends boolean
                                  ? number
                                  : Prisma.GetScalarType<T[P], Prisma.ShopGroupByOutputType[P]>
                              : Prisma.GetScalarType<T[P], Prisma.ShopGroupByOutputType[P]>;
                      }
                  >
                : InputErrors
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Shop', `${endpoint}/shop/groupBy`, args, options, fetch);
}

export function useCountShop<T extends Prisma.ShopCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ShopCountArgs>,
    options?: Omit<
        UseQueryOptions<
            T extends { select: any }
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ShopCountAggregateOutputType>
                : number
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Shop', `${endpoint}/shop/count`, args, options, fetch);
}
