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
      .input($Schema.CompanyMemberInputSchema.aggregate)
      .query(({ ctx, input }) => checkRead(db(ctx).companyMember.aggregate(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.CompanyMemberInputSchema)['aggregate'],
      ReturnType<PrismaClient['companyMember']['aggregate']>
    >,

    createMany: procedure
      .input($Schema.CompanyMemberInputSchema.createMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).companyMember.createMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.CompanyMemberInputSchema)['createMany'],
      ReturnType<PrismaClient['companyMember']['createMany']>
    >,

    create: procedure
      .input($Schema.CompanyMemberInputSchema.create)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).companyMember.create(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.CompanyMemberInputSchema)['create'],
      ReturnType<PrismaClient['companyMember']['create']>
    >,

    deleteMany: procedure
      .input($Schema.CompanyMemberInputSchema.deleteMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).companyMember.deleteMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.CompanyMemberInputSchema)['deleteMany'],
      ReturnType<PrismaClient['companyMember']['deleteMany']>
    >,

    delete: procedure
      .input($Schema.CompanyMemberInputSchema.delete)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).companyMember.delete(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.CompanyMemberInputSchema)['delete'],
      ReturnType<PrismaClient['companyMember']['delete']>
    >,

    findFirst: procedure
      .input($Schema.CompanyMemberInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).companyMember.findFirst(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.CompanyMemberInputSchema)['findFirst'],
      ReturnType<PrismaClient['companyMember']['findFirst']>
    >,

    findFirstOrThrow: procedure
      .input($Schema.CompanyMemberInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).companyMember.findFirstOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.CompanyMemberInputSchema)['findFirst'],
      ReturnType<PrismaClient['companyMember']['findFirstOrThrow']>
    >,

    findMany: procedure
      .input($Schema.CompanyMemberInputSchema.findMany)
      .query(({ ctx, input }) => checkRead(db(ctx).companyMember.findMany(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.CompanyMemberInputSchema)['findMany'],
      ReturnType<PrismaClient['companyMember']['findMany']>
    >,

    findUnique: procedure
      .input($Schema.CompanyMemberInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).companyMember.findUnique(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.CompanyMemberInputSchema)['findUnique'],
      ReturnType<PrismaClient['companyMember']['findUnique']>
    >,

    findUniqueOrThrow: procedure
      .input($Schema.CompanyMemberInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).companyMember.findUniqueOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.CompanyMemberInputSchema)['findUnique'],
      ReturnType<PrismaClient['companyMember']['findUniqueOrThrow']>
    >,

    groupBy: procedure
      .input($Schema.CompanyMemberInputSchema.groupBy)
      .query(({ ctx, input }) => checkRead(db(ctx).companyMember.groupBy(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.CompanyMemberInputSchema)['groupBy'],
      ReturnType<PrismaClient['companyMember']['groupBy']>
    >,

    updateMany: procedure
      .input($Schema.CompanyMemberInputSchema.updateMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).companyMember.updateMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.CompanyMemberInputSchema)['updateMany'],
      ReturnType<PrismaClient['companyMember']['updateMany']>
    >,

    update: procedure
      .input($Schema.CompanyMemberInputSchema.update)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).companyMember.update(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.CompanyMemberInputSchema)['update'],
      ReturnType<PrismaClient['companyMember']['update']>
    >,

    upsert: procedure
      .input($Schema.CompanyMemberInputSchema.upsert)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).companyMember.upsert(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.CompanyMemberInputSchema)['upsert'],
      ReturnType<PrismaClient['companyMember']['upsert']>
    >,

    count: procedure
      .input($Schema.CompanyMemberInputSchema.count)
      .query(({ ctx, input }) => checkRead(db(ctx).companyMember.count(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.CompanyMemberInputSchema)['count'],
      ReturnType<PrismaClient['companyMember']['count']>
    >,
  })
}
