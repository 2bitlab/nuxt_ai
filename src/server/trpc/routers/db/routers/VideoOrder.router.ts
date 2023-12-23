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
      .input($Schema.VideoOrderInputSchema.aggregate)
      .query(({ ctx, input }) => checkRead(db(ctx).videoOrder.aggregate(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoOrderInputSchema)['aggregate'],
      ReturnType<PrismaClient['videoOrder']['aggregate']>
    >,

    createMany: procedure
      .input($Schema.VideoOrderInputSchema.createMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoOrder.createMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoOrderInputSchema)['createMany'],
      ReturnType<PrismaClient['videoOrder']['createMany']>
    >,

    create: procedure
      .input($Schema.VideoOrderInputSchema.create)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoOrder.create(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoOrderInputSchema)['create'],
      ReturnType<PrismaClient['videoOrder']['create']>
    >,

    deleteMany: procedure
      .input($Schema.VideoOrderInputSchema.deleteMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoOrder.deleteMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoOrderInputSchema)['deleteMany'],
      ReturnType<PrismaClient['videoOrder']['deleteMany']>
    >,

    delete: procedure
      .input($Schema.VideoOrderInputSchema.delete)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoOrder.delete(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoOrderInputSchema)['delete'],
      ReturnType<PrismaClient['videoOrder']['delete']>
    >,

    findFirst: procedure
      .input($Schema.VideoOrderInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).videoOrder.findFirst(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoOrderInputSchema)['findFirst'],
      ReturnType<PrismaClient['videoOrder']['findFirst']>
    >,

    findFirstOrThrow: procedure
      .input($Schema.VideoOrderInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).videoOrder.findFirstOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoOrderInputSchema)['findFirst'],
      ReturnType<PrismaClient['videoOrder']['findFirstOrThrow']>
    >,

    findMany: procedure
      .input($Schema.VideoOrderInputSchema.findMany)
      .query(({ ctx, input }) => checkRead(db(ctx).videoOrder.findMany(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoOrderInputSchema)['findMany'],
      ReturnType<PrismaClient['videoOrder']['findMany']>
    >,

    findUnique: procedure
      .input($Schema.VideoOrderInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).videoOrder.findUnique(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoOrderInputSchema)['findUnique'],
      ReturnType<PrismaClient['videoOrder']['findUnique']>
    >,

    findUniqueOrThrow: procedure
      .input($Schema.VideoOrderInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).videoOrder.findUniqueOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoOrderInputSchema)['findUnique'],
      ReturnType<PrismaClient['videoOrder']['findUniqueOrThrow']>
    >,

    groupBy: procedure
      .input($Schema.VideoOrderInputSchema.groupBy)
      .query(({ ctx, input }) => checkRead(db(ctx).videoOrder.groupBy(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoOrderInputSchema)['groupBy'],
      ReturnType<PrismaClient['videoOrder']['groupBy']>
    >,

    updateMany: procedure
      .input($Schema.VideoOrderInputSchema.updateMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoOrder.updateMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoOrderInputSchema)['updateMany'],
      ReturnType<PrismaClient['videoOrder']['updateMany']>
    >,

    update: procedure
      .input($Schema.VideoOrderInputSchema.update)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoOrder.update(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoOrderInputSchema)['update'],
      ReturnType<PrismaClient['videoOrder']['update']>
    >,

    upsert: procedure
      .input($Schema.VideoOrderInputSchema.upsert)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoOrder.upsert(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoOrderInputSchema)['upsert'],
      ReturnType<PrismaClient['videoOrder']['upsert']>
    >,

    count: procedure
      .input($Schema.VideoOrderInputSchema.count)
      .query(({ ctx, input }) => checkRead(db(ctx).videoOrder.count(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoOrderInputSchema)['count'],
      ReturnType<PrismaClient['videoOrder']['count']>
    >,
  })
}
