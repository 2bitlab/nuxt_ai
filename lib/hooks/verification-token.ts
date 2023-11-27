/* eslint-disable */
import type { Prisma, VerificationToken } from '@prisma/client';
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/vue';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/vue';
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime';
import metadata from './__model_meta';

export function useCreateVerificationToken(
    options?: Omit<
        UseMutationOptions<VerificationToken | undefined, unknown, Prisma.VerificationTokenCreateArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.VerificationTokenCreateArgs, VerificationToken, true>(
        'VerificationToken',
        'POST',
        `${endpoint}/verificationToken/create`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.VerificationTokenCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.VerificationTokenCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, VerificationToken, Prisma.VerificationTokenGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.VerificationTokenCreateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, VerificationToken, Prisma.VerificationTokenGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManyVerificationToken(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.VerificationTokenCreateManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.VerificationTokenCreateManyArgs, Prisma.BatchPayload, false>(
        'VerificationToken',
        'POST',
        `${endpoint}/verificationToken/createMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.VerificationTokenCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.VerificationTokenCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.VerificationTokenCreateManyArgs>,
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

export function useFindManyVerificationToken<T extends Prisma.VerificationTokenFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.VerificationTokenFindManyArgs>,
    options?: Omit<
        UseQueryOptions<Array<Prisma.VerificationTokenGetPayload<T> & { $optimistic?: boolean }>>,
        'queryKey'
    >,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery(
        'VerificationToken',
        `${endpoint}/verificationToken/findMany`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useInfiniteFindManyVerificationToken<T extends Prisma.VerificationTokenFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.VerificationTokenFindManyArgs>,
    options?: Omit<UseInfiniteQueryOptions<Array<Prisma.VerificationTokenGetPayload<T>>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery('VerificationToken', `${endpoint}/verificationToken/findMany`, args, options, fetch);
}

export function useFindUniqueVerificationToken<T extends Prisma.VerificationTokenFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.VerificationTokenFindUniqueArgs>,
    options?: Omit<UseQueryOptions<Prisma.VerificationTokenGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery(
        'VerificationToken',
        `${endpoint}/verificationToken/findUnique`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useFindFirstVerificationToken<T extends Prisma.VerificationTokenFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.VerificationTokenFindFirstArgs>,
    options?: Omit<UseQueryOptions<Prisma.VerificationTokenGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery(
        'VerificationToken',
        `${endpoint}/verificationToken/findFirst`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useUpdateVerificationToken(
    options?: Omit<
        UseMutationOptions<VerificationToken | undefined, unknown, Prisma.VerificationTokenUpdateArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.VerificationTokenUpdateArgs, VerificationToken, true>(
        'VerificationToken',
        'PUT',
        `${endpoint}/verificationToken/update`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.VerificationTokenUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.VerificationTokenUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, VerificationToken, Prisma.VerificationTokenGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.VerificationTokenUpdateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, VerificationToken, Prisma.VerificationTokenGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManyVerificationToken(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.VerificationTokenUpdateManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.VerificationTokenUpdateManyArgs, Prisma.BatchPayload, false>(
        'VerificationToken',
        'PUT',
        `${endpoint}/verificationToken/updateMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.VerificationTokenUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.VerificationTokenUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.VerificationTokenUpdateManyArgs>,
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

export function useUpsertVerificationToken(
    options?: Omit<
        UseMutationOptions<VerificationToken | undefined, unknown, Prisma.VerificationTokenUpsertArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.VerificationTokenUpsertArgs, VerificationToken, true>(
        'VerificationToken',
        'POST',
        `${endpoint}/verificationToken/upsert`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.VerificationTokenUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.VerificationTokenUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, VerificationToken, Prisma.VerificationTokenGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.VerificationTokenUpsertArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, VerificationToken, Prisma.VerificationTokenGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteVerificationToken(
    options?: Omit<
        UseMutationOptions<VerificationToken | undefined, unknown, Prisma.VerificationTokenDeleteArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.VerificationTokenDeleteArgs, VerificationToken, true>(
        'VerificationToken',
        'DELETE',
        `${endpoint}/verificationToken/delete`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.VerificationTokenDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.VerificationTokenDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, VerificationToken, Prisma.VerificationTokenGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.VerificationTokenDeleteArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, VerificationToken, Prisma.VerificationTokenGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManyVerificationToken(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.VerificationTokenDeleteManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.VerificationTokenDeleteManyArgs, Prisma.BatchPayload, false>(
        'VerificationToken',
        'DELETE',
        `${endpoint}/verificationToken/deleteMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.VerificationTokenDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.VerificationTokenDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.VerificationTokenDeleteManyArgs>,
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

export function useAggregateVerificationToken<T extends Prisma.VerificationTokenAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.VerificationTokenAggregateArgs>,
    options?: Omit<UseQueryOptions<Prisma.GetVerificationTokenAggregateType<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('VerificationToken', `${endpoint}/verificationToken/aggregate`, args, options, fetch);
}

export function useGroupByVerificationToken<
    T extends Prisma.VerificationTokenGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.VerificationTokenGroupByArgs['orderBy'] },
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
        Prisma.SubsetIntersection<T, Prisma.VerificationTokenGroupByArgs, OrderByArg> & InputErrors
    >,
    options?: Omit<
        UseQueryOptions<
            {} extends InputErrors
                ? Array<
                      PickEnumerable<Prisma.VerificationTokenGroupByOutputType, T['by']> & {
                          [P in keyof T & keyof Prisma.VerificationTokenGroupByOutputType]: P extends '_count'
                              ? T[P] extends boolean
                                  ? number
                                  : Prisma.GetScalarType<T[P], Prisma.VerificationTokenGroupByOutputType[P]>
                              : Prisma.GetScalarType<T[P], Prisma.VerificationTokenGroupByOutputType[P]>;
                      }
                  >
                : InputErrors
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('VerificationToken', `${endpoint}/verificationToken/groupBy`, args, options, fetch);
}

export function useCountVerificationToken<T extends Prisma.VerificationTokenCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.VerificationTokenCountArgs>,
    options?: Omit<
        UseQueryOptions<
            T extends { select: any }
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.VerificationTokenCountAggregateOutputType>
                : number
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('VerificationToken', `${endpoint}/verificationToken/count`, args, options, fetch);
}
