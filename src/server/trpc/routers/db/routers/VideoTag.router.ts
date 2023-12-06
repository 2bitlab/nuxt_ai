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
      .input($Schema.VideoTagInputSchema.aggregate)
      .query(({ ctx, input }) => checkRead(db(ctx).videoTag.aggregate(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoTagInputSchema)['aggregate'],
      ReturnType<PrismaClient['videoTag']['aggregate']>
    >,

    createMany: procedure
      .input($Schema.VideoTagInputSchema.createMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoTag.createMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoTagInputSchema)['createMany'],
      ReturnType<PrismaClient['videoTag']['createMany']>
    >,

    create: procedure
      .input($Schema.VideoTagInputSchema.create)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoTag.create(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoTagInputSchema)['create'],
      ReturnType<PrismaClient['videoTag']['create']>
    >,

    deleteMany: procedure
      .input($Schema.VideoTagInputSchema.deleteMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoTag.deleteMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoTagInputSchema)['deleteMany'],
      ReturnType<PrismaClient['videoTag']['deleteMany']>
    >,

    delete: procedure
      .input($Schema.VideoTagInputSchema.delete)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoTag.delete(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoTagInputSchema)['delete'],
      ReturnType<PrismaClient['videoTag']['delete']>
    >,

    findFirst: procedure
      .input($Schema.VideoTagInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).videoTag.findFirst(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoTagInputSchema)['findFirst'],
      ReturnType<PrismaClient['videoTag']['findFirst']>
    >,

    findFirstOrThrow: procedure
      .input($Schema.VideoTagInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).videoTag.findFirstOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoTagInputSchema)['findFirst'],
      ReturnType<PrismaClient['videoTag']['findFirstOrThrow']>
    >,

    findMany: procedure
      .input($Schema.VideoTagInputSchema.findMany)
      .query(({ ctx, input }) => checkRead(db(ctx).videoTag.findMany(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoTagInputSchema)['findMany'],
      ReturnType<PrismaClient['videoTag']['findMany']>
    >,

    findUnique: procedure
      .input($Schema.VideoTagInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).videoTag.findUnique(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoTagInputSchema)['findUnique'],
      ReturnType<PrismaClient['videoTag']['findUnique']>
    >,

    findUniqueOrThrow: procedure
      .input($Schema.VideoTagInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).videoTag.findUniqueOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoTagInputSchema)['findUnique'],
      ReturnType<PrismaClient['videoTag']['findUniqueOrThrow']>
    >,

    groupBy: procedure
      .input($Schema.VideoTagInputSchema.groupBy)
      .query(({ ctx, input }) => checkRead(db(ctx).videoTag.groupBy(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoTagInputSchema)['groupBy'],
      ReturnType<PrismaClient['videoTag']['groupBy']>
    >,

    updateMany: procedure
      .input($Schema.VideoTagInputSchema.updateMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoTag.updateMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoTagInputSchema)['updateMany'],
      ReturnType<PrismaClient['videoTag']['updateMany']>
    >,

    update: procedure
      .input($Schema.VideoTagInputSchema.update)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoTag.update(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoTagInputSchema)['update'],
      ReturnType<PrismaClient['videoTag']['update']>
    >,

    upsert: procedure
      .input($Schema.VideoTagInputSchema.upsert)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoTag.upsert(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoTagInputSchema)['upsert'],
      ReturnType<PrismaClient['videoTag']['upsert']>
    >,

    count: procedure
      .input($Schema.VideoTagInputSchema.count)
      .query(({ ctx, input }) => checkRead(db(ctx).videoTag.count(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoTagInputSchema)['count'],
      ReturnType<PrismaClient['videoTag']['count']>
    >,
  })
}
