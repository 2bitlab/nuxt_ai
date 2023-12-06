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
      .input($Schema.PageInputSchema.aggregate)
      .query(({ ctx, input }) => checkRead(db(ctx).page.aggregate(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.PageInputSchema)['aggregate'],
      ReturnType<PrismaClient['page']['aggregate']>
    >,

    createMany: procedure
      .input($Schema.PageInputSchema.createMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).page.createMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.PageInputSchema)['createMany'],
      ReturnType<PrismaClient['page']['createMany']>
    >,

    create: procedure
      .input($Schema.PageInputSchema.create)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).page.create(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.PageInputSchema)['create'],
      ReturnType<PrismaClient['page']['create']>
    >,

    deleteMany: procedure
      .input($Schema.PageInputSchema.deleteMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).page.deleteMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.PageInputSchema)['deleteMany'],
      ReturnType<PrismaClient['page']['deleteMany']>
    >,

    delete: procedure
      .input($Schema.PageInputSchema.delete)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).page.delete(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.PageInputSchema)['delete'],
      ReturnType<PrismaClient['page']['delete']>
    >,

    findFirst: procedure
      .input($Schema.PageInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).page.findFirst(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.PageInputSchema)['findFirst'],
      ReturnType<PrismaClient['page']['findFirst']>
    >,

    findFirstOrThrow: procedure
      .input($Schema.PageInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).page.findFirstOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.PageInputSchema)['findFirst'],
      ReturnType<PrismaClient['page']['findFirstOrThrow']>
    >,

    findMany: procedure
      .input($Schema.PageInputSchema.findMany)
      .query(({ ctx, input }) => checkRead(db(ctx).page.findMany(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.PageInputSchema)['findMany'],
      ReturnType<PrismaClient['page']['findMany']>
    >,

    findUnique: procedure
      .input($Schema.PageInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).page.findUnique(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.PageInputSchema)['findUnique'],
      ReturnType<PrismaClient['page']['findUnique']>
    >,

    findUniqueOrThrow: procedure
      .input($Schema.PageInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).page.findUniqueOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.PageInputSchema)['findUnique'],
      ReturnType<PrismaClient['page']['findUniqueOrThrow']>
    >,

    groupBy: procedure
      .input($Schema.PageInputSchema.groupBy)
      .query(({ ctx, input }) => checkRead(db(ctx).page.groupBy(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.PageInputSchema)['groupBy'],
      ReturnType<PrismaClient['page']['groupBy']>
    >,

    updateMany: procedure
      .input($Schema.PageInputSchema.updateMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).page.updateMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.PageInputSchema)['updateMany'],
      ReturnType<PrismaClient['page']['updateMany']>
    >,

    update: procedure
      .input($Schema.PageInputSchema.update)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).page.update(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.PageInputSchema)['update'],
      ReturnType<PrismaClient['page']['update']>
    >,

    upsert: procedure
      .input($Schema.PageInputSchema.upsert)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).page.upsert(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.PageInputSchema)['upsert'],
      ReturnType<PrismaClient['page']['upsert']>
    >,

    count: procedure
      .input($Schema.PageInputSchema.count)
      .query(({ ctx, input }) => checkRead(db(ctx).page.count(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.PageInputSchema)['count'],
      ReturnType<PrismaClient['page']['count']>
    >,
  })
}
