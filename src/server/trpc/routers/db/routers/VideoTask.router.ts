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
      .input($Schema.VideoTaskInputSchema.aggregate)
      .query(({ ctx, input }) => checkRead(db(ctx).videoTask.aggregate(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoTaskInputSchema)['aggregate'],
      ReturnType<PrismaClient['videoTask']['aggregate']>
    >,

    createMany: procedure
      .input($Schema.VideoTaskInputSchema.createMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoTask.createMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoTaskInputSchema)['createMany'],
      ReturnType<PrismaClient['videoTask']['createMany']>
    >,

    create: procedure
      .input($Schema.VideoTaskInputSchema.create)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoTask.create(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoTaskInputSchema)['create'],
      ReturnType<PrismaClient['videoTask']['create']>
    >,

    deleteMany: procedure
      .input($Schema.VideoTaskInputSchema.deleteMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoTask.deleteMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoTaskInputSchema)['deleteMany'],
      ReturnType<PrismaClient['videoTask']['deleteMany']>
    >,

    delete: procedure
      .input($Schema.VideoTaskInputSchema.delete)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoTask.delete(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoTaskInputSchema)['delete'],
      ReturnType<PrismaClient['videoTask']['delete']>
    >,

    findFirst: procedure
      .input($Schema.VideoTaskInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).videoTask.findFirst(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoTaskInputSchema)['findFirst'],
      ReturnType<PrismaClient['videoTask']['findFirst']>
    >,

    findFirstOrThrow: procedure
      .input($Schema.VideoTaskInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).videoTask.findFirstOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoTaskInputSchema)['findFirst'],
      ReturnType<PrismaClient['videoTask']['findFirstOrThrow']>
    >,

    findMany: procedure
      .input($Schema.VideoTaskInputSchema.findMany)
      .query(({ ctx, input }) => checkRead(db(ctx).videoTask.findMany(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoTaskInputSchema)['findMany'],
      ReturnType<PrismaClient['videoTask']['findMany']>
    >,

    findUnique: procedure
      .input($Schema.VideoTaskInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).videoTask.findUnique(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoTaskInputSchema)['findUnique'],
      ReturnType<PrismaClient['videoTask']['findUnique']>
    >,

    findUniqueOrThrow: procedure
      .input($Schema.VideoTaskInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).videoTask.findUniqueOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoTaskInputSchema)['findUnique'],
      ReturnType<PrismaClient['videoTask']['findUniqueOrThrow']>
    >,

    groupBy: procedure
      .input($Schema.VideoTaskInputSchema.groupBy)
      .query(({ ctx, input }) => checkRead(db(ctx).videoTask.groupBy(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoTaskInputSchema)['groupBy'],
      ReturnType<PrismaClient['videoTask']['groupBy']>
    >,

    updateMany: procedure
      .input($Schema.VideoTaskInputSchema.updateMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoTask.updateMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoTaskInputSchema)['updateMany'],
      ReturnType<PrismaClient['videoTask']['updateMany']>
    >,

    update: procedure
      .input($Schema.VideoTaskInputSchema.update)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoTask.update(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoTaskInputSchema)['update'],
      ReturnType<PrismaClient['videoTask']['update']>
    >,

    upsert: procedure
      .input($Schema.VideoTaskInputSchema.upsert)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoTask.upsert(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoTaskInputSchema)['upsert'],
      ReturnType<PrismaClient['videoTask']['upsert']>
    >,

    count: procedure
      .input($Schema.VideoTaskInputSchema.count)
      .query(({ ctx, input }) => checkRead(db(ctx).videoTask.count(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoTaskInputSchema)['count'],
      ReturnType<PrismaClient['videoTask']['count']>
    >,
  })
}
