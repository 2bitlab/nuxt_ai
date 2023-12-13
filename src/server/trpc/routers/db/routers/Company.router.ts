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
      .input($Schema.CompanyInputSchema.aggregate)
      .query(({ ctx, input }) => checkRead(db(ctx).company.aggregate(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.CompanyInputSchema)['aggregate'],
      ReturnType<PrismaClient['company']['aggregate']>
    >,

    createMany: procedure
      .input($Schema.CompanyInputSchema.createMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).company.createMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.CompanyInputSchema)['createMany'],
      ReturnType<PrismaClient['company']['createMany']>
    >,

    create: procedure
      .input($Schema.CompanyInputSchema.create)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).company.create(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.CompanyInputSchema)['create'],
      ReturnType<PrismaClient['company']['create']>
    >,

    deleteMany: procedure
      .input($Schema.CompanyInputSchema.deleteMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).company.deleteMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.CompanyInputSchema)['deleteMany'],
      ReturnType<PrismaClient['company']['deleteMany']>
    >,

    delete: procedure
      .input($Schema.CompanyInputSchema.delete)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).company.delete(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.CompanyInputSchema)['delete'],
      ReturnType<PrismaClient['company']['delete']>
    >,

    findFirst: procedure
      .input($Schema.CompanyInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).company.findFirst(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.CompanyInputSchema)['findFirst'],
      ReturnType<PrismaClient['company']['findFirst']>
    >,

    findFirstOrThrow: procedure
      .input($Schema.CompanyInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).company.findFirstOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.CompanyInputSchema)['findFirst'],
      ReturnType<PrismaClient['company']['findFirstOrThrow']>
    >,

    findMany: procedure
      .input($Schema.CompanyInputSchema.findMany)
      .query(({ ctx, input }) => checkRead(db(ctx).company.findMany(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.CompanyInputSchema)['findMany'],
      ReturnType<PrismaClient['company']['findMany']>
    >,

    findUnique: procedure
      .input($Schema.CompanyInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).company.findUnique(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.CompanyInputSchema)['findUnique'],
      ReturnType<PrismaClient['company']['findUnique']>
    >,

    findUniqueOrThrow: procedure
      .input($Schema.CompanyInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).company.findUniqueOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.CompanyInputSchema)['findUnique'],
      ReturnType<PrismaClient['company']['findUniqueOrThrow']>
    >,

    groupBy: procedure
      .input($Schema.CompanyInputSchema.groupBy)
      .query(({ ctx, input }) => checkRead(db(ctx).company.groupBy(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.CompanyInputSchema)['groupBy'],
      ReturnType<PrismaClient['company']['groupBy']>
    >,

    updateMany: procedure
      .input($Schema.CompanyInputSchema.updateMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).company.updateMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.CompanyInputSchema)['updateMany'],
      ReturnType<PrismaClient['company']['updateMany']>
    >,

    update: procedure
      .input($Schema.CompanyInputSchema.update)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).company.update(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.CompanyInputSchema)['update'],
      ReturnType<PrismaClient['company']['update']>
    >,

    upsert: procedure
      .input($Schema.CompanyInputSchema.upsert)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).company.upsert(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.CompanyInputSchema)['upsert'],
      ReturnType<PrismaClient['company']['upsert']>
    >,

    count: procedure
      .input($Schema.CompanyInputSchema.count)
      .query(({ ctx, input }) => checkRead(db(ctx).company.count(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.CompanyInputSchema)['count'],
      ReturnType<PrismaClient['company']['count']>
    >,
  })
}
