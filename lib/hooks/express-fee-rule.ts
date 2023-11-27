/* eslint-disable */
import type { Prisma, ExpressFeeRule } from '@prisma/client';
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/vue';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/vue';
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime';
import metadata from './__model_meta';

export function useCreateExpressFeeRule(
    options?: Omit<
        UseMutationOptions<ExpressFeeRule | undefined, unknown, Prisma.ExpressFeeRuleCreateArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ExpressFeeRuleCreateArgs, ExpressFeeRule, true>(
        'ExpressFeeRule',
        'POST',
        `${endpoint}/expressFeeRule/create`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ExpressFeeRuleCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ExpressFeeRuleCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, ExpressFeeRule, Prisma.ExpressFeeRuleGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ExpressFeeRuleCreateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, ExpressFeeRule, Prisma.ExpressFeeRuleGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManyExpressFeeRule(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ExpressFeeRuleCreateManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ExpressFeeRuleCreateManyArgs, Prisma.BatchPayload, false>(
        'ExpressFeeRule',
        'POST',
        `${endpoint}/expressFeeRule/createMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ExpressFeeRuleCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ExpressFeeRuleCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ExpressFeeRuleCreateManyArgs>,
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

export function useFindManyExpressFeeRule<T extends Prisma.ExpressFeeRuleFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ExpressFeeRuleFindManyArgs>,
    options?: Omit<UseQueryOptions<Array<Prisma.ExpressFeeRuleGetPayload<T> & { $optimistic?: boolean }>>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery(
        'ExpressFeeRule',
        `${endpoint}/expressFeeRule/findMany`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useInfiniteFindManyExpressFeeRule<T extends Prisma.ExpressFeeRuleFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ExpressFeeRuleFindManyArgs>,
    options?: Omit<UseInfiniteQueryOptions<Array<Prisma.ExpressFeeRuleGetPayload<T>>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery('ExpressFeeRule', `${endpoint}/expressFeeRule/findMany`, args, options, fetch);
}

export function useFindUniqueExpressFeeRule<T extends Prisma.ExpressFeeRuleFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ExpressFeeRuleFindUniqueArgs>,
    options?: Omit<UseQueryOptions<Prisma.ExpressFeeRuleGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery(
        'ExpressFeeRule',
        `${endpoint}/expressFeeRule/findUnique`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useFindFirstExpressFeeRule<T extends Prisma.ExpressFeeRuleFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ExpressFeeRuleFindFirstArgs>,
    options?: Omit<UseQueryOptions<Prisma.ExpressFeeRuleGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery(
        'ExpressFeeRule',
        `${endpoint}/expressFeeRule/findFirst`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useUpdateExpressFeeRule(
    options?: Omit<
        UseMutationOptions<ExpressFeeRule | undefined, unknown, Prisma.ExpressFeeRuleUpdateArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ExpressFeeRuleUpdateArgs, ExpressFeeRule, true>(
        'ExpressFeeRule',
        'PUT',
        `${endpoint}/expressFeeRule/update`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ExpressFeeRuleUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ExpressFeeRuleUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, ExpressFeeRule, Prisma.ExpressFeeRuleGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ExpressFeeRuleUpdateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, ExpressFeeRule, Prisma.ExpressFeeRuleGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManyExpressFeeRule(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ExpressFeeRuleUpdateManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ExpressFeeRuleUpdateManyArgs, Prisma.BatchPayload, false>(
        'ExpressFeeRule',
        'PUT',
        `${endpoint}/expressFeeRule/updateMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ExpressFeeRuleUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ExpressFeeRuleUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ExpressFeeRuleUpdateManyArgs>,
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

export function useUpsertExpressFeeRule(
    options?: Omit<
        UseMutationOptions<ExpressFeeRule | undefined, unknown, Prisma.ExpressFeeRuleUpsertArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ExpressFeeRuleUpsertArgs, ExpressFeeRule, true>(
        'ExpressFeeRule',
        'POST',
        `${endpoint}/expressFeeRule/upsert`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ExpressFeeRuleUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.ExpressFeeRuleUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, ExpressFeeRule, Prisma.ExpressFeeRuleGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ExpressFeeRuleUpsertArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, ExpressFeeRule, Prisma.ExpressFeeRuleGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteExpressFeeRule(
    options?: Omit<
        UseMutationOptions<ExpressFeeRule | undefined, unknown, Prisma.ExpressFeeRuleDeleteArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ExpressFeeRuleDeleteArgs, ExpressFeeRule, true>(
        'ExpressFeeRule',
        'DELETE',
        `${endpoint}/expressFeeRule/delete`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ExpressFeeRuleDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.ExpressFeeRuleDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, ExpressFeeRule, Prisma.ExpressFeeRuleGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ExpressFeeRuleDeleteArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, ExpressFeeRule, Prisma.ExpressFeeRuleGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManyExpressFeeRule(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ExpressFeeRuleDeleteManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ExpressFeeRuleDeleteManyArgs, Prisma.BatchPayload, false>(
        'ExpressFeeRule',
        'DELETE',
        `${endpoint}/expressFeeRule/deleteMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ExpressFeeRuleDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ExpressFeeRuleDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ExpressFeeRuleDeleteManyArgs>,
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

export function useAggregateExpressFeeRule<T extends Prisma.ExpressFeeRuleAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ExpressFeeRuleAggregateArgs>,
    options?: Omit<UseQueryOptions<Prisma.GetExpressFeeRuleAggregateType<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('ExpressFeeRule', `${endpoint}/expressFeeRule/aggregate`, args, options, fetch);
}

export function useGroupByExpressFeeRule<
    T extends Prisma.ExpressFeeRuleGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.ExpressFeeRuleGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.ExpressFeeRuleGroupByArgs['orderBy'] },
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
        Prisma.SubsetIntersection<T, Prisma.ExpressFeeRuleGroupByArgs, OrderByArg> & InputErrors
    >,
    options?: Omit<
        UseQueryOptions<
            {} extends InputErrors
                ? Array<
                      PickEnumerable<Prisma.ExpressFeeRuleGroupByOutputType, T['by']> & {
                          [P in keyof T & keyof Prisma.ExpressFeeRuleGroupByOutputType]: P extends '_count'
                              ? T[P] extends boolean
                                  ? number
                                  : Prisma.GetScalarType<T[P], Prisma.ExpressFeeRuleGroupByOutputType[P]>
                              : Prisma.GetScalarType<T[P], Prisma.ExpressFeeRuleGroupByOutputType[P]>;
                      }
                  >
                : InputErrors
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('ExpressFeeRule', `${endpoint}/expressFeeRule/groupBy`, args, options, fetch);
}

export function useCountExpressFeeRule<T extends Prisma.ExpressFeeRuleCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ExpressFeeRuleCountArgs>,
    options?: Omit<
        UseQueryOptions<
            T extends { select: any }
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ExpressFeeRuleCountAggregateOutputType>
                : number
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('ExpressFeeRule', `${endpoint}/expressFeeRule/count`, args, options, fetch);
}
