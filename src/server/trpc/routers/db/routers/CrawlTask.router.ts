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
      .input($Schema.CrawlTaskInputSchema.aggregate)
      .query(({ ctx, input }) => checkRead(db(ctx).crawlTask.aggregate(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.CrawlTaskInputSchema)['aggregate'],
      ReturnType<PrismaClient['crawlTask']['aggregate']>
    >,

    createMany: procedure
      .input($Schema.CrawlTaskInputSchema.createMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).crawlTask.createMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.CrawlTaskInputSchema)['createMany'],
      ReturnType<PrismaClient['crawlTask']['createMany']>
    >,

    create: procedure
      .input($Schema.CrawlTaskInputSchema.create)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).crawlTask.create(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.CrawlTaskInputSchema)['create'],
      ReturnType<PrismaClient['crawlTask']['create']>
    >,

    deleteMany: procedure
      .input($Schema.CrawlTaskInputSchema.deleteMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).crawlTask.deleteMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.CrawlTaskInputSchema)['deleteMany'],
      ReturnType<PrismaClient['crawlTask']['deleteMany']>
    >,

    delete: procedure
      .input($Schema.CrawlTaskInputSchema.delete)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).crawlTask.delete(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.CrawlTaskInputSchema)['delete'],
      ReturnType<PrismaClient['crawlTask']['delete']>
    >,

    findFirst: procedure
      .input($Schema.CrawlTaskInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).crawlTask.findFirst(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.CrawlTaskInputSchema)['findFirst'],
      ReturnType<PrismaClient['crawlTask']['findFirst']>
    >,

    findFirstOrThrow: procedure
      .input($Schema.CrawlTaskInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).crawlTask.findFirstOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.CrawlTaskInputSchema)['findFirst'],
      ReturnType<PrismaClient['crawlTask']['findFirstOrThrow']>
    >,

    findMany: procedure
      .input($Schema.CrawlTaskInputSchema.findMany)
      .query(({ ctx, input }) => checkRead(db(ctx).crawlTask.findMany(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.CrawlTaskInputSchema)['findMany'],
      ReturnType<PrismaClient['crawlTask']['findMany']>
    >,

    findUnique: procedure
      .input($Schema.CrawlTaskInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).crawlTask.findUnique(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.CrawlTaskInputSchema)['findUnique'],
      ReturnType<PrismaClient['crawlTask']['findUnique']>
    >,

    findUniqueOrThrow: procedure
      .input($Schema.CrawlTaskInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).crawlTask.findUniqueOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.CrawlTaskInputSchema)['findUnique'],
      ReturnType<PrismaClient['crawlTask']['findUniqueOrThrow']>
    >,

    groupBy: procedure
      .input($Schema.CrawlTaskInputSchema.groupBy)
      .query(({ ctx, input }) => checkRead(db(ctx).crawlTask.groupBy(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.CrawlTaskInputSchema)['groupBy'],
      ReturnType<PrismaClient['crawlTask']['groupBy']>
    >,

    updateMany: procedure
      .input($Schema.CrawlTaskInputSchema.updateMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).crawlTask.updateMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.CrawlTaskInputSchema)['updateMany'],
      ReturnType<PrismaClient['crawlTask']['updateMany']>
    >,

    update: procedure
      .input($Schema.CrawlTaskInputSchema.update)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).crawlTask.update(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.CrawlTaskInputSchema)['update'],
      ReturnType<PrismaClient['crawlTask']['update']>
    >,

    upsert: procedure
      .input($Schema.CrawlTaskInputSchema.upsert)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).crawlTask.upsert(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.CrawlTaskInputSchema)['upsert'],
      ReturnType<PrismaClient['crawlTask']['upsert']>
    >,

    count: procedure
      .input($Schema.CrawlTaskInputSchema.count)
      .query(({ ctx, input }) => checkRead(db(ctx).crawlTask.count(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.CrawlTaskInputSchema)['count'],
      ReturnType<PrismaClient['crawlTask']['count']>
    >,
  })
}
