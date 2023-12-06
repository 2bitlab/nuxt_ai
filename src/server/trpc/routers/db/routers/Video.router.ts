/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, type ProcReturns, type PrismaClient, db } from '.'
import $Schema from '@zenstackhq/runtime/zod/input'
import { checkRead, checkMutate } from '../helper'

export default function createRouter<Router extends RouterFactory<BaseConfig>, Proc extends ProcBuilder<BaseConfig>>(
  router: Router,
  procedure: Proc
) {
  return router({
    aggregate: procedure
      .input($Schema.VideoInputSchema.aggregate)
      .query(({ ctx, input }) => checkRead(db(ctx).video.aggregate(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoInputSchema)['aggregate'],
      ReturnType<PrismaClient['video']['aggregate']>
    >,

    createMany: procedure
      .input($Schema.VideoInputSchema.createMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).video.createMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoInputSchema)['createMany'],
      ReturnType<PrismaClient['video']['createMany']>
    >,

    create: procedure
      .input($Schema.VideoInputSchema.create)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).video.create(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoInputSchema)['create'],
      ReturnType<PrismaClient['video']['create']>
    >,

    deleteMany: procedure
      .input($Schema.VideoInputSchema.deleteMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).video.deleteMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoInputSchema)['deleteMany'],
      ReturnType<PrismaClient['video']['deleteMany']>
    >,

    delete: procedure
      .input($Schema.VideoInputSchema.delete)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).video.delete(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoInputSchema)['delete'],
      ReturnType<PrismaClient['video']['delete']>
    >,

    findFirst: procedure
      .input($Schema.VideoInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).video.findFirst(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoInputSchema)['findFirst'],
      ReturnType<PrismaClient['video']['findFirst']>
    >,

    findFirstOrThrow: procedure
      .input($Schema.VideoInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).video.findFirstOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoInputSchema)['findFirst'],
      ReturnType<PrismaClient['video']['findFirstOrThrow']>
    >,

    findMany: procedure
      .input($Schema.VideoInputSchema.findMany)
      .query(({ ctx, input }) => checkRead(db(ctx).video.findMany(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoInputSchema)['findMany'],
      ReturnType<PrismaClient['video']['findMany']>
    >,

    findUnique: procedure
      .input($Schema.VideoInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).video.findUnique(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoInputSchema)['findUnique'],
      ReturnType<PrismaClient['video']['findUnique']>
    >,

    findUniqueOrThrow: procedure
      .input($Schema.VideoInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).video.findUniqueOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoInputSchema)['findUnique'],
      ReturnType<PrismaClient['video']['findUniqueOrThrow']>
    >,

    groupBy: procedure
      .input($Schema.VideoInputSchema.groupBy)
      .query(({ ctx, input }) => checkRead(db(ctx).video.groupBy(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoInputSchema)['groupBy'],
      ReturnType<PrismaClient['video']['groupBy']>
    >,

    updateMany: procedure
      .input($Schema.VideoInputSchema.updateMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).video.updateMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoInputSchema)['updateMany'],
      ReturnType<PrismaClient['video']['updateMany']>
    >,

    update: procedure
      .input($Schema.VideoInputSchema.update)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).video.update(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoInputSchema)['update'],
      ReturnType<PrismaClient['video']['update']>
    >,

    upsert: procedure
      .input($Schema.VideoInputSchema.upsert)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).video.upsert(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoInputSchema)['upsert'],
      ReturnType<PrismaClient['video']['upsert']>
    >,

    count: procedure
      .input($Schema.VideoInputSchema.count)
      .query(({ ctx, input }) => checkRead(db(ctx).video.count(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoInputSchema)['count'],
      ReturnType<PrismaClient['video']['count']>
    >,
  })
}
