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
      .input($Schema.UserRoleInputSchema.aggregate)
      .query(({ ctx, input }) => checkRead(db(ctx).userRole.aggregate(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.UserRoleInputSchema)['aggregate'],
      ReturnType<PrismaClient['userRole']['aggregate']>
    >,

    createMany: procedure
      .input($Schema.UserRoleInputSchema.createMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).userRole.createMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.UserRoleInputSchema)['createMany'],
      ReturnType<PrismaClient['userRole']['createMany']>
    >,

    create: procedure
      .input($Schema.UserRoleInputSchema.create)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).userRole.create(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.UserRoleInputSchema)['create'],
      ReturnType<PrismaClient['userRole']['create']>
    >,

    deleteMany: procedure
      .input($Schema.UserRoleInputSchema.deleteMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).userRole.deleteMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.UserRoleInputSchema)['deleteMany'],
      ReturnType<PrismaClient['userRole']['deleteMany']>
    >,

    delete: procedure
      .input($Schema.UserRoleInputSchema.delete)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).userRole.delete(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.UserRoleInputSchema)['delete'],
      ReturnType<PrismaClient['userRole']['delete']>
    >,

    findFirst: procedure
      .input($Schema.UserRoleInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).userRole.findFirst(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.UserRoleInputSchema)['findFirst'],
      ReturnType<PrismaClient['userRole']['findFirst']>
    >,

    findFirstOrThrow: procedure
      .input($Schema.UserRoleInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).userRole.findFirstOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.UserRoleInputSchema)['findFirst'],
      ReturnType<PrismaClient['userRole']['findFirstOrThrow']>
    >,

    findMany: procedure
      .input($Schema.UserRoleInputSchema.findMany)
      .query(({ ctx, input }) => checkRead(db(ctx).userRole.findMany(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.UserRoleInputSchema)['findMany'],
      ReturnType<PrismaClient['userRole']['findMany']>
    >,

    findUnique: procedure
      .input($Schema.UserRoleInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).userRole.findUnique(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.UserRoleInputSchema)['findUnique'],
      ReturnType<PrismaClient['userRole']['findUnique']>
    >,

    findUniqueOrThrow: procedure
      .input($Schema.UserRoleInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).userRole.findUniqueOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.UserRoleInputSchema)['findUnique'],
      ReturnType<PrismaClient['userRole']['findUniqueOrThrow']>
    >,

    groupBy: procedure
      .input($Schema.UserRoleInputSchema.groupBy)
      .query(({ ctx, input }) => checkRead(db(ctx).userRole.groupBy(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.UserRoleInputSchema)['groupBy'],
      ReturnType<PrismaClient['userRole']['groupBy']>
    >,

    updateMany: procedure
      .input($Schema.UserRoleInputSchema.updateMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).userRole.updateMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.UserRoleInputSchema)['updateMany'],
      ReturnType<PrismaClient['userRole']['updateMany']>
    >,

    update: procedure
      .input($Schema.UserRoleInputSchema.update)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).userRole.update(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.UserRoleInputSchema)['update'],
      ReturnType<PrismaClient['userRole']['update']>
    >,

    upsert: procedure
      .input($Schema.UserRoleInputSchema.upsert)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).userRole.upsert(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.UserRoleInputSchema)['upsert'],
      ReturnType<PrismaClient['userRole']['upsert']>
    >,

    count: procedure
      .input($Schema.UserRoleInputSchema.count)
      .query(({ ctx, input }) => checkRead(db(ctx).userRole.count(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.UserRoleInputSchema)['count'],
      ReturnType<PrismaClient['userRole']['count']>
    >,
  })
}
