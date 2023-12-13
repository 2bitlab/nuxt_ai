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
      .input($Schema.BalnaceInputSchema.aggregate)
      .query(({ ctx, input }) => checkRead(db(ctx).balnace.aggregate(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.BalnaceInputSchema)['aggregate'],
      ReturnType<PrismaClient['balnace']['aggregate']>
    >,

    createMany: procedure
      .input($Schema.BalnaceInputSchema.createMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).balnace.createMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.BalnaceInputSchema)['createMany'],
      ReturnType<PrismaClient['balnace']['createMany']>
    >,

    create: procedure
      .input($Schema.BalnaceInputSchema.create)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).balnace.create(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.BalnaceInputSchema)['create'],
      ReturnType<PrismaClient['balnace']['create']>
    >,

    deleteMany: procedure
      .input($Schema.BalnaceInputSchema.deleteMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).balnace.deleteMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.BalnaceInputSchema)['deleteMany'],
      ReturnType<PrismaClient['balnace']['deleteMany']>
    >,

    delete: procedure
      .input($Schema.BalnaceInputSchema.delete)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).balnace.delete(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.BalnaceInputSchema)['delete'],
      ReturnType<PrismaClient['balnace']['delete']>
    >,

    findFirst: procedure
      .input($Schema.BalnaceInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).balnace.findFirst(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.BalnaceInputSchema)['findFirst'],
      ReturnType<PrismaClient['balnace']['findFirst']>
    >,

    findFirstOrThrow: procedure
      .input($Schema.BalnaceInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).balnace.findFirstOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.BalnaceInputSchema)['findFirst'],
      ReturnType<PrismaClient['balnace']['findFirstOrThrow']>
    >,

    findMany: procedure
      .input($Schema.BalnaceInputSchema.findMany)
      .query(({ ctx, input }) => checkRead(db(ctx).balnace.findMany(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.BalnaceInputSchema)['findMany'],
      ReturnType<PrismaClient['balnace']['findMany']>
    >,

    findUnique: procedure
      .input($Schema.BalnaceInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).balnace.findUnique(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.BalnaceInputSchema)['findUnique'],
      ReturnType<PrismaClient['balnace']['findUnique']>
    >,

    findUniqueOrThrow: procedure
      .input($Schema.BalnaceInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).balnace.findUniqueOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.BalnaceInputSchema)['findUnique'],
      ReturnType<PrismaClient['balnace']['findUniqueOrThrow']>
    >,

    groupBy: procedure
      .input($Schema.BalnaceInputSchema.groupBy)
      .query(({ ctx, input }) => checkRead(db(ctx).balnace.groupBy(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.BalnaceInputSchema)['groupBy'],
      ReturnType<PrismaClient['balnace']['groupBy']>
    >,

    updateMany: procedure
      .input($Schema.BalnaceInputSchema.updateMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).balnace.updateMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.BalnaceInputSchema)['updateMany'],
      ReturnType<PrismaClient['balnace']['updateMany']>
    >,

    update: procedure
      .input($Schema.BalnaceInputSchema.update)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).balnace.update(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.BalnaceInputSchema)['update'],
      ReturnType<PrismaClient['balnace']['update']>
    >,

    upsert: procedure
      .input($Schema.BalnaceInputSchema.upsert)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).balnace.upsert(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.BalnaceInputSchema)['upsert'],
      ReturnType<PrismaClient['balnace']['upsert']>
    >,

    count: procedure
      .input($Schema.BalnaceInputSchema.count)
      .query(({ ctx, input }) => checkRead(db(ctx).balnace.count(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.BalnaceInputSchema)['count'],
      ReturnType<PrismaClient['balnace']['count']>
    >,
  })
}
