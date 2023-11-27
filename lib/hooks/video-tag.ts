/* eslint-disable */
import type { Prisma, VideoTag } from '@prisma/client';
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/vue';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/vue';
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime';
import metadata from './__model_meta';

export function useCreateVideoTag(
    options?: Omit<UseMutationOptions<VideoTag | undefined, unknown, Prisma.VideoTagCreateArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.VideoTagCreateArgs, VideoTag, true>(
        'VideoTag',
        'POST',
        `${endpoint}/videoTag/create`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.VideoTagCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.VideoTagCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, VideoTag, Prisma.VideoTagGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.VideoTagCreateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, VideoTag, Prisma.VideoTagGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManyVideoTag(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.VideoTagCreateManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.VideoTagCreateManyArgs, Prisma.BatchPayload, false>(
        'VideoTag',
        'POST',
        `${endpoint}/videoTag/createMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.VideoTagCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.VideoTagCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.VideoTagCreateManyArgs>,
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

export function useFindManyVideoTag<T extends Prisma.VideoTagFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.VideoTagFindManyArgs>,
    options?: Omit<UseQueryOptions<Array<Prisma.VideoTagGetPayload<T> & { $optimistic?: boolean }>>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('VideoTag', `${endpoint}/videoTag/findMany`, args, options, fetch, optimisticUpdate);
}

export function useInfiniteFindManyVideoTag<T extends Prisma.VideoTagFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.VideoTagFindManyArgs>,
    options?: Omit<UseInfiniteQueryOptions<Array<Prisma.VideoTagGetPayload<T>>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery('VideoTag', `${endpoint}/videoTag/findMany`, args, options, fetch);
}

export function useFindUniqueVideoTag<T extends Prisma.VideoTagFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.VideoTagFindUniqueArgs>,
    options?: Omit<UseQueryOptions<Prisma.VideoTagGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('VideoTag', `${endpoint}/videoTag/findUnique`, args, options, fetch, optimisticUpdate);
}

export function useFindFirstVideoTag<T extends Prisma.VideoTagFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.VideoTagFindFirstArgs>,
    options?: Omit<UseQueryOptions<Prisma.VideoTagGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('VideoTag', `${endpoint}/videoTag/findFirst`, args, options, fetch, optimisticUpdate);
}

export function useUpdateVideoTag(
    options?: Omit<UseMutationOptions<VideoTag | undefined, unknown, Prisma.VideoTagUpdateArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.VideoTagUpdateArgs, VideoTag, true>(
        'VideoTag',
        'PUT',
        `${endpoint}/videoTag/update`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.VideoTagUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.VideoTagUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, VideoTag, Prisma.VideoTagGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.VideoTagUpdateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, VideoTag, Prisma.VideoTagGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManyVideoTag(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.VideoTagUpdateManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.VideoTagUpdateManyArgs, Prisma.BatchPayload, false>(
        'VideoTag',
        'PUT',
        `${endpoint}/videoTag/updateMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.VideoTagUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.VideoTagUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.VideoTagUpdateManyArgs>,
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

export function useUpsertVideoTag(
    options?: Omit<UseMutationOptions<VideoTag | undefined, unknown, Prisma.VideoTagUpsertArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.VideoTagUpsertArgs, VideoTag, true>(
        'VideoTag',
        'POST',
        `${endpoint}/videoTag/upsert`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.VideoTagUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.VideoTagUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, VideoTag, Prisma.VideoTagGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.VideoTagUpsertArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, VideoTag, Prisma.VideoTagGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteVideoTag(
    options?: Omit<UseMutationOptions<VideoTag | undefined, unknown, Prisma.VideoTagDeleteArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.VideoTagDeleteArgs, VideoTag, true>(
        'VideoTag',
        'DELETE',
        `${endpoint}/videoTag/delete`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.VideoTagDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.VideoTagDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, VideoTag, Prisma.VideoTagGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.VideoTagDeleteArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, VideoTag, Prisma.VideoTagGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManyVideoTag(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.VideoTagDeleteManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.VideoTagDeleteManyArgs, Prisma.BatchPayload, false>(
        'VideoTag',
        'DELETE',
        `${endpoint}/videoTag/deleteMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.VideoTagDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.VideoTagDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.VideoTagDeleteManyArgs>,
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

export function useAggregateVideoTag<T extends Prisma.VideoTagAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.VideoTagAggregateArgs>,
    options?: Omit<UseQueryOptions<Prisma.GetVideoTagAggregateType<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('VideoTag', `${endpoint}/videoTag/aggregate`, args, options, fetch);
}

export function useGroupByVideoTag<
    T extends Prisma.VideoTagGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.VideoTagGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.VideoTagGroupByArgs['orderBy'] },
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
    args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.VideoTagGroupByArgs, OrderByArg> & InputErrors>,
    options?: Omit<
        UseQueryOptions<
            {} extends InputErrors
                ? Array<
                      PickEnumerable<Prisma.VideoTagGroupByOutputType, T['by']> & {
                          [P in keyof T & keyof Prisma.VideoTagGroupByOutputType]: P extends '_count'
                              ? T[P] extends boolean
                                  ? number
                                  : Prisma.GetScalarType<T[P], Prisma.VideoTagGroupByOutputType[P]>
                              : Prisma.GetScalarType<T[P], Prisma.VideoTagGroupByOutputType[P]>;
                      }
                  >
                : InputErrors
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('VideoTag', `${endpoint}/videoTag/groupBy`, args, options, fetch);
}

export function useCountVideoTag<T extends Prisma.VideoTagCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.VideoTagCountArgs>,
    options?: Omit<
        UseQueryOptions<
            T extends { select: any }
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.VideoTagCountAggregateOutputType>
                : number
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('VideoTag', `${endpoint}/videoTag/count`, args, options, fetch);
}
