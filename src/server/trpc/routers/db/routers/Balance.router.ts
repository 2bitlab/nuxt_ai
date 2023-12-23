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
      .input($Schema.BalanceInputSchema.aggregate)
      .query(({ ctx, input }) => checkRead(db(ctx).balance.aggregate(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.BalanceInputSchema)['aggregate'],
      ReturnType<PrismaClient['balance']['aggregate']>
    >,

    createMany: procedure
      .input($Schema.BalanceInputSchema.createMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).balance.createMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.BalanceInputSchema)['createMany'],
      ReturnType<PrismaClient['balance']['createMany']>
    >,

    create: procedure
      .input($Schema.BalanceInputSchema.create)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).balance.create(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.BalanceInputSchema)['create'],
      ReturnType<PrismaClient['balance']['create']>
    >,

    deleteMany: procedure
      .input($Schema.BalanceInputSchema.deleteMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).balance.deleteMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.BalanceInputSchema)['deleteMany'],
      ReturnType<PrismaClient['balance']['deleteMany']>
    >,

    delete: procedure
      .input($Schema.BalanceInputSchema.delete)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).balance.delete(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.BalanceInputSchema)['delete'],
      ReturnType<PrismaClient['balance']['delete']>
    >,

    findFirst: procedure
      .input($Schema.BalanceInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).balance.findFirst(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.BalanceInputSchema)['findFirst'],
      ReturnType<PrismaClient['balance']['findFirst']>
    >,

    findFirstOrThrow: procedure
      .input($Schema.BalanceInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).balance.findFirstOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.BalanceInputSchema)['findFirst'],
      ReturnType<PrismaClient['balance']['findFirstOrThrow']>
    >,

    findMany: procedure
      .input($Schema.BalanceInputSchema.findMany)
      .query(({ ctx, input }) => checkRead(db(ctx).balance.findMany(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.BalanceInputSchema)['findMany'],
      ReturnType<PrismaClient['balance']['findMany']>
    >,

    findUnique: procedure
      .input($Schema.BalanceInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).balance.findUnique(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.BalanceInputSchema)['findUnique'],
      ReturnType<PrismaClient['balance']['findUnique']>
    >,

    findUniqueOrThrow: procedure
      .input($Schema.BalanceInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).balance.findUniqueOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.BalanceInputSchema)['findUnique'],
      ReturnType<PrismaClient['balance']['findUniqueOrThrow']>
    >,

    groupBy: procedure
      .input($Schema.BalanceInputSchema.groupBy)
      .query(({ ctx, input }) => checkRead(db(ctx).balance.groupBy(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.BalanceInputSchema)['groupBy'],
      ReturnType<PrismaClient['balance']['groupBy']>
    >,

    updateMany: procedure
      .input($Schema.BalanceInputSchema.updateMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).balance.updateMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.BalanceInputSchema)['updateMany'],
      ReturnType<PrismaClient['balance']['updateMany']>
    >,

    update: procedure
      .input($Schema.BalanceInputSchema.update)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).balance.update(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.BalanceInputSchema)['update'],
      ReturnType<PrismaClient['balance']['update']>
    >,

    upsert: procedure
      .input($Schema.BalanceInputSchema.upsert)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).balance.upsert(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.BalanceInputSchema)['upsert'],
      ReturnType<PrismaClient['balance']['upsert']>
    >,

    count: procedure
      .input($Schema.BalanceInputSchema.count)
      .query(({ ctx, input }) => checkRead(db(ctx).balance.count(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.BalanceInputSchema)['count'],
      ReturnType<PrismaClient['balance']['count']>
    >,
  })
}
