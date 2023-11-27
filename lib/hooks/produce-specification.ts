/* eslint-disable */
import type { Prisma, ProduceSpecification } from '@prisma/client';
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/vue';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/vue';
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime';
import metadata from './__model_meta';

export function useCreateProduceSpecification(
    options?: Omit<
        UseMutationOptions<ProduceSpecification | undefined, unknown, Prisma.ProduceSpecificationCreateArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ProduceSpecificationCreateArgs, ProduceSpecification, true>(
        'ProduceSpecification',
        'POST',
        `${endpoint}/produceSpecification/create`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProduceSpecificationCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProduceSpecificationCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, ProduceSpecification, Prisma.ProduceSpecificationGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ProduceSpecificationCreateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, ProduceSpecification, Prisma.ProduceSpecificationGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManyProduceSpecification(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ProduceSpecificationCreateManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ProduceSpecificationCreateManyArgs, Prisma.BatchPayload, false>(
        'ProduceSpecification',
        'POST',
        `${endpoint}/produceSpecification/createMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProduceSpecificationCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProduceSpecificationCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ProduceSpecificationCreateManyArgs>,
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

export function useFindManyProduceSpecification<T extends Prisma.ProduceSpecificationFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ProduceSpecificationFindManyArgs>,
    options?: Omit<
        UseQueryOptions<Array<Prisma.ProduceSpecificationGetPayload<T> & { $optimistic?: boolean }>>,
        'queryKey'
    >,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery(
        'ProduceSpecification',
        `${endpoint}/produceSpecification/findMany`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useInfiniteFindManyProduceSpecification<T extends Prisma.ProduceSpecificationFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ProduceSpecificationFindManyArgs>,
    options?: Omit<UseInfiniteQueryOptions<Array<Prisma.ProduceSpecificationGetPayload<T>>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery(
        'ProduceSpecification',
        `${endpoint}/produceSpecification/findMany`,
        args,
        options,
        fetch,
    );
}

export function useFindUniqueProduceSpecification<T extends Prisma.ProduceSpecificationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProduceSpecificationFindUniqueArgs>,
    options?: Omit<UseQueryOptions<Prisma.ProduceSpecificationGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery(
        'ProduceSpecification',
        `${endpoint}/produceSpecification/findUnique`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useFindFirstProduceSpecification<T extends Prisma.ProduceSpecificationFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ProduceSpecificationFindFirstArgs>,
    options?: Omit<UseQueryOptions<Prisma.ProduceSpecificationGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery(
        'ProduceSpecification',
        `${endpoint}/produceSpecification/findFirst`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useUpdateProduceSpecification(
    options?: Omit<
        UseMutationOptions<ProduceSpecification | undefined, unknown, Prisma.ProduceSpecificationUpdateArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ProduceSpecificationUpdateArgs, ProduceSpecification, true>(
        'ProduceSpecification',
        'PUT',
        `${endpoint}/produceSpecification/update`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProduceSpecificationUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProduceSpecificationUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, ProduceSpecification, Prisma.ProduceSpecificationGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ProduceSpecificationUpdateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, ProduceSpecification, Prisma.ProduceSpecificationGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManyProduceSpecification(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ProduceSpecificationUpdateManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ProduceSpecificationUpdateManyArgs, Prisma.BatchPayload, false>(
        'ProduceSpecification',
        'PUT',
        `${endpoint}/produceSpecification/updateMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProduceSpecificationUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProduceSpecificationUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ProduceSpecificationUpdateManyArgs>,
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

export function useUpsertProduceSpecification(
    options?: Omit<
        UseMutationOptions<ProduceSpecification | undefined, unknown, Prisma.ProduceSpecificationUpsertArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ProduceSpecificationUpsertArgs, ProduceSpecification, true>(
        'ProduceSpecification',
        'POST',
        `${endpoint}/produceSpecification/upsert`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProduceSpecificationUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProduceSpecificationUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, ProduceSpecification, Prisma.ProduceSpecificationGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ProduceSpecificationUpsertArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, ProduceSpecification, Prisma.ProduceSpecificationGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteProduceSpecification(
    options?: Omit<
        UseMutationOptions<ProduceSpecification | undefined, unknown, Prisma.ProduceSpecificationDeleteArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ProduceSpecificationDeleteArgs, ProduceSpecification, true>(
        'ProduceSpecification',
        'DELETE',
        `${endpoint}/produceSpecification/delete`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProduceSpecificationDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProduceSpecificationDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, ProduceSpecification, Prisma.ProduceSpecificationGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ProduceSpecificationDeleteArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, ProduceSpecification, Prisma.ProduceSpecificationGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManyProduceSpecification(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ProduceSpecificationDeleteManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ProduceSpecificationDeleteManyArgs, Prisma.BatchPayload, false>(
        'ProduceSpecification',
        'DELETE',
        `${endpoint}/produceSpecification/deleteMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProduceSpecificationDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProduceSpecificationDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ProduceSpecificationDeleteManyArgs>,
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

export function useAggregateProduceSpecification<T extends Prisma.ProduceSpecificationAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProduceSpecificationAggregateArgs>,
    options?: Omit<UseQueryOptions<Prisma.GetProduceSpecificationAggregateType<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('ProduceSpecification', `${endpoint}/produceSpecification/aggregate`, args, options, fetch);
}

export function useGroupByProduceSpecification<
    T extends Prisma.ProduceSpecificationGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.ProduceSpecificationGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.ProduceSpecificationGroupByArgs['orderBy'] },
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
        Prisma.SubsetIntersection<T, Prisma.ProduceSpecificationGroupByArgs, OrderByArg> & InputErrors
    >,
    options?: Omit<
        UseQueryOptions<
            {} extends InputErrors
                ? Array<
                      PickEnumerable<Prisma.ProduceSpecificationGroupByOutputType, T['by']> & {
                          [P in keyof T & keyof Prisma.ProduceSpecificationGroupByOutputType]: P extends '_count'
                              ? T[P] extends boolean
                                  ? number
                                  : Prisma.GetScalarType<T[P], Prisma.ProduceSpecificationGroupByOutputType[P]>
                              : Prisma.GetScalarType<T[P], Prisma.ProduceSpecificationGroupByOutputType[P]>;
                      }
                  >
                : InputErrors
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('ProduceSpecification', `${endpoint}/produceSpecification/groupBy`, args, options, fetch);
}

export function useCountProduceSpecification<T extends Prisma.ProduceSpecificationCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ProduceSpecificationCountArgs>,
    options?: Omit<
        UseQueryOptions<
            T extends { select: any }
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ProduceSpecificationCountAggregateOutputType>
                : number
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('ProduceSpecification', `${endpoint}/produceSpecification/count`, args, options, fetch);
}
