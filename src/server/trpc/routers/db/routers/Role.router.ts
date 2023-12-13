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
      .input($Schema.RoleInputSchema.aggregate)
      .query(({ ctx, input }) => checkRead(db(ctx).role.aggregate(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.RoleInputSchema)['aggregate'],
      ReturnType<PrismaClient['role']['aggregate']>
    >,

    createMany: procedure
      .input($Schema.RoleInputSchema.createMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).role.createMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.RoleInputSchema)['createMany'],
      ReturnType<PrismaClient['role']['createMany']>
    >,

    create: procedure
      .input($Schema.RoleInputSchema.create)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).role.create(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.RoleInputSchema)['create'],
      ReturnType<PrismaClient['role']['create']>
    >,

    deleteMany: procedure
      .input($Schema.RoleInputSchema.deleteMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).role.deleteMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.RoleInputSchema)['deleteMany'],
      ReturnType<PrismaClient['role']['deleteMany']>
    >,

    delete: procedure
      .input($Schema.RoleInputSchema.delete)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).role.delete(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.RoleInputSchema)['delete'],
      ReturnType<PrismaClient['role']['delete']>
    >,

    findFirst: procedure
      .input($Schema.RoleInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).role.findFirst(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.RoleInputSchema)['findFirst'],
      ReturnType<PrismaClient['role']['findFirst']>
    >,

    findFirstOrThrow: procedure
      .input($Schema.RoleInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).role.findFirstOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.RoleInputSchema)['findFirst'],
      ReturnType<PrismaClient['role']['findFirstOrThrow']>
    >,

    findMany: procedure
      .input($Schema.RoleInputSchema.findMany)
      .query(({ ctx, input }) => checkRead(db(ctx).role.findMany(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.RoleInputSchema)['findMany'],
      ReturnType<PrismaClient['role']['findMany']>
    >,

    findUnique: procedure
      .input($Schema.RoleInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).role.findUnique(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.RoleInputSchema)['findUnique'],
      ReturnType<PrismaClient['role']['findUnique']>
    >,

    findUniqueOrThrow: procedure
      .input($Schema.RoleInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).role.findUniqueOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.RoleInputSchema)['findUnique'],
      ReturnType<PrismaClient['role']['findUniqueOrThrow']>
    >,

    groupBy: procedure
      .input($Schema.RoleInputSchema.groupBy)
      .query(({ ctx, input }) => checkRead(db(ctx).role.groupBy(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.RoleInputSchema)['groupBy'],
      ReturnType<PrismaClient['role']['groupBy']>
    >,

    updateMany: procedure
      .input($Schema.RoleInputSchema.updateMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).role.updateMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.RoleInputSchema)['updateMany'],
      ReturnType<PrismaClient['role']['updateMany']>
    >,

    update: procedure
      .input($Schema.RoleInputSchema.update)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).role.update(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.RoleInputSchema)['update'],
      ReturnType<PrismaClient['role']['update']>
    >,

    upsert: procedure
      .input($Schema.RoleInputSchema.upsert)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).role.upsert(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.RoleInputSchema)['upsert'],
      ReturnType<PrismaClient['role']['upsert']>
    >,

    count: procedure
      .input($Schema.RoleInputSchema.count)
      .query(({ ctx, input }) => checkRead(db(ctx).role.count(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.RoleInputSchema)['count'],
      ReturnType<PrismaClient['role']['count']>
    >,
  })
}
