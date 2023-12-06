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
      .input($Schema.VideoTypeInputSchema.aggregate)
      .query(({ ctx, input }) => checkRead(db(ctx).videoType.aggregate(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoTypeInputSchema)['aggregate'],
      ReturnType<PrismaClient['videoType']['aggregate']>
    >,

    createMany: procedure
      .input($Schema.VideoTypeInputSchema.createMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoType.createMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoTypeInputSchema)['createMany'],
      ReturnType<PrismaClient['videoType']['createMany']>
    >,

    create: procedure
      .input($Schema.VideoTypeInputSchema.create)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoType.create(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoTypeInputSchema)['create'],
      ReturnType<PrismaClient['videoType']['create']>
    >,

    deleteMany: procedure
      .input($Schema.VideoTypeInputSchema.deleteMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoType.deleteMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoTypeInputSchema)['deleteMany'],
      ReturnType<PrismaClient['videoType']['deleteMany']>
    >,

    delete: procedure
      .input($Schema.VideoTypeInputSchema.delete)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoType.delete(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoTypeInputSchema)['delete'],
      ReturnType<PrismaClient['videoType']['delete']>
    >,

    findFirst: procedure
      .input($Schema.VideoTypeInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).videoType.findFirst(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoTypeInputSchema)['findFirst'],
      ReturnType<PrismaClient['videoType']['findFirst']>
    >,

    findFirstOrThrow: procedure
      .input($Schema.VideoTypeInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).videoType.findFirstOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoTypeInputSchema)['findFirst'],
      ReturnType<PrismaClient['videoType']['findFirstOrThrow']>
    >,

    findMany: procedure
      .input($Schema.VideoTypeInputSchema.findMany)
      .query(({ ctx, input }) => checkRead(db(ctx).videoType.findMany(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoTypeInputSchema)['findMany'],
      ReturnType<PrismaClient['videoType']['findMany']>
    >,

    findUnique: procedure
      .input($Schema.VideoTypeInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).videoType.findUnique(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoTypeInputSchema)['findUnique'],
      ReturnType<PrismaClient['videoType']['findUnique']>
    >,

    findUniqueOrThrow: procedure
      .input($Schema.VideoTypeInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).videoType.findUniqueOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoTypeInputSchema)['findUnique'],
      ReturnType<PrismaClient['videoType']['findUniqueOrThrow']>
    >,

    groupBy: procedure
      .input($Schema.VideoTypeInputSchema.groupBy)
      .query(({ ctx, input }) => checkRead(db(ctx).videoType.groupBy(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoTypeInputSchema)['groupBy'],
      ReturnType<PrismaClient['videoType']['groupBy']>
    >,

    updateMany: procedure
      .input($Schema.VideoTypeInputSchema.updateMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoType.updateMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoTypeInputSchema)['updateMany'],
      ReturnType<PrismaClient['videoType']['updateMany']>
    >,

    update: procedure
      .input($Schema.VideoTypeInputSchema.update)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoType.update(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoTypeInputSchema)['update'],
      ReturnType<PrismaClient['videoType']['update']>
    >,

    upsert: procedure
      .input($Schema.VideoTypeInputSchema.upsert)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoType.upsert(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.VideoTypeInputSchema)['upsert'],
      ReturnType<PrismaClient['videoType']['upsert']>
    >,

    count: procedure
      .input($Schema.VideoTypeInputSchema.count)
      .query(({ ctx, input }) => checkRead(db(ctx).videoType.count(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.VideoTypeInputSchema)['count'],
      ReturnType<PrismaClient['videoType']['count']>
    >,
  })
}
