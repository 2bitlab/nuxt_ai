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
      .input($Schema.SiteInputSchema.aggregate)
      .query(({ ctx, input }) => checkRead(db(ctx).site.aggregate(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.SiteInputSchema)['aggregate'],
      ReturnType<PrismaClient['site']['aggregate']>
    >,

    createMany: procedure
      .input($Schema.SiteInputSchema.createMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).site.createMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.SiteInputSchema)['createMany'],
      ReturnType<PrismaClient['site']['createMany']>
    >,

    create: procedure
      .input($Schema.SiteInputSchema.create)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).site.create(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.SiteInputSchema)['create'],
      ReturnType<PrismaClient['site']['create']>
    >,

    deleteMany: procedure
      .input($Schema.SiteInputSchema.deleteMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).site.deleteMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.SiteInputSchema)['deleteMany'],
      ReturnType<PrismaClient['site']['deleteMany']>
    >,

    delete: procedure
      .input($Schema.SiteInputSchema.delete)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).site.delete(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.SiteInputSchema)['delete'],
      ReturnType<PrismaClient['site']['delete']>
    >,

    findFirst: procedure
      .input($Schema.SiteInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).site.findFirst(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.SiteInputSchema)['findFirst'],
      ReturnType<PrismaClient['site']['findFirst']>
    >,

    findFirstOrThrow: procedure
      .input($Schema.SiteInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).site.findFirstOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.SiteInputSchema)['findFirst'],
      ReturnType<PrismaClient['site']['findFirstOrThrow']>
    >,

    findMany: procedure
      .input($Schema.SiteInputSchema.findMany)
      .query(({ ctx, input }) => checkRead(db(ctx).site.findMany(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.SiteInputSchema)['findMany'],
      ReturnType<PrismaClient['site']['findMany']>
    >,

    findUnique: procedure
      .input($Schema.SiteInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).site.findUnique(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.SiteInputSchema)['findUnique'],
      ReturnType<PrismaClient['site']['findUnique']>
    >,

    findUniqueOrThrow: procedure
      .input($Schema.SiteInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).site.findUniqueOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.SiteInputSchema)['findUnique'],
      ReturnType<PrismaClient['site']['findUniqueOrThrow']>
    >,

    groupBy: procedure
      .input($Schema.SiteInputSchema.groupBy)
      .query(({ ctx, input }) => checkRead(db(ctx).site.groupBy(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.SiteInputSchema)['groupBy'],
      ReturnType<PrismaClient['site']['groupBy']>
    >,

    updateMany: procedure
      .input($Schema.SiteInputSchema.updateMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).site.updateMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.SiteInputSchema)['updateMany'],
      ReturnType<PrismaClient['site']['updateMany']>
    >,

    update: procedure
      .input($Schema.SiteInputSchema.update)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).site.update(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.SiteInputSchema)['update'],
      ReturnType<PrismaClient['site']['update']>
    >,

    upsert: procedure
      .input($Schema.SiteInputSchema.upsert)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).site.upsert(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.SiteInputSchema)['upsert'],
      ReturnType<PrismaClient['site']['upsert']>
    >,

    count: procedure
      .input($Schema.SiteInputSchema.count)
      .query(({ ctx, input }) => checkRead(db(ctx).site.count(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.SiteInputSchema)['count'],
      ReturnType<PrismaClient['site']['count']>
    >,
  })
}
