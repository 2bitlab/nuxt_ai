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
      .input($Schema.VideoSetInputSchema.aggregate)
      .query(({ ctx, input }) => checkRead(db(ctx).videoSet.aggregate(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoSetInputSchema)['aggregate'],
      ReturnType<PrismaClient['videoSet']['aggregate']>
    >,

    createMany: procedure
      .input($Schema.VideoSetInputSchema.createMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoSet.createMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoSetInputSchema)['createMany'],
      ReturnType<PrismaClient['videoSet']['createMany']>
    >,

    create: procedure
      .input($Schema.VideoSetInputSchema.create)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoSet.create(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoSetInputSchema)['create'],
      ReturnType<PrismaClient['videoSet']['create']>
    >,

    deleteMany: procedure
      .input($Schema.VideoSetInputSchema.deleteMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoSet.deleteMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoSetInputSchema)['deleteMany'],
      ReturnType<PrismaClient['videoSet']['deleteMany']>
    >,

    delete: procedure
      .input($Schema.VideoSetInputSchema.delete)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoSet.delete(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoSetInputSchema)['delete'],
      ReturnType<PrismaClient['videoSet']['delete']>
    >,

    findFirst: procedure
      .input($Schema.VideoSetInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).videoSet.findFirst(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoSetInputSchema)['findFirst'],
      ReturnType<PrismaClient['videoSet']['findFirst']>
    >,

    findFirstOrThrow: procedure
      .input($Schema.VideoSetInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).videoSet.findFirstOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoSetInputSchema)['findFirst'],
      ReturnType<PrismaClient['videoSet']['findFirstOrThrow']>
    >,

    findMany: procedure
      .input($Schema.VideoSetInputSchema.findMany)
      .query(({ ctx, input }) => checkRead(db(ctx).videoSet.findMany(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoSetInputSchema)['findMany'],
      ReturnType<PrismaClient['videoSet']['findMany']>
    >,

    findUnique: procedure
      .input($Schema.VideoSetInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).videoSet.findUnique(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoSetInputSchema)['findUnique'],
      ReturnType<PrismaClient['videoSet']['findUnique']>
    >,

    findUniqueOrThrow: procedure
      .input($Schema.VideoSetInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).videoSet.findUniqueOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoSetInputSchema)['findUnique'],
      ReturnType<PrismaClient['videoSet']['findUniqueOrThrow']>
    >,

    groupBy: procedure
      .input($Schema.VideoSetInputSchema.groupBy)
      .query(({ ctx, input }) => checkRead(db(ctx).videoSet.groupBy(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoSetInputSchema)['groupBy'],
      ReturnType<PrismaClient['videoSet']['groupBy']>
    >,

    updateMany: procedure
      .input($Schema.VideoSetInputSchema.updateMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoSet.updateMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoSetInputSchema)['updateMany'],
      ReturnType<PrismaClient['videoSet']['updateMany']>
    >,

    update: procedure
      .input($Schema.VideoSetInputSchema.update)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoSet.update(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoSetInputSchema)['update'],
      ReturnType<PrismaClient['videoSet']['update']>
    >,

    upsert: procedure
      .input($Schema.VideoSetInputSchema.upsert)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoSet.upsert(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoSetInputSchema)['upsert'],
      ReturnType<PrismaClient['videoSet']['upsert']>
    >,

    count: procedure
      .input($Schema.VideoSetInputSchema.count)
      .query(({ ctx, input }) => checkRead(db(ctx).videoSet.count(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoSetInputSchema)['count'],
      ReturnType<PrismaClient['videoSet']['count']>
    >,
  })
}
