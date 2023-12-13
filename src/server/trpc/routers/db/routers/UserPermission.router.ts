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
      .input($Schema.UserPermissionInputSchema.aggregate)
      .query(({ ctx, input }) => checkRead(db(ctx).userPermission.aggregate(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.UserPermissionInputSchema)['aggregate'],
      ReturnType<PrismaClient['userPermission']['aggregate']>
    >,

    createMany: procedure
      .input($Schema.UserPermissionInputSchema.createMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).userPermission.createMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.UserPermissionInputSchema)['createMany'],
      ReturnType<PrismaClient['userPermission']['createMany']>
    >,

    create: procedure
      .input($Schema.UserPermissionInputSchema.create)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).userPermission.create(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.UserPermissionInputSchema)['create'],
      ReturnType<PrismaClient['userPermission']['create']>
    >,

    deleteMany: procedure
      .input($Schema.UserPermissionInputSchema.deleteMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).userPermission.deleteMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.UserPermissionInputSchema)['deleteMany'],
      ReturnType<PrismaClient['userPermission']['deleteMany']>
    >,

    delete: procedure
      .input($Schema.UserPermissionInputSchema.delete)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).userPermission.delete(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.UserPermissionInputSchema)['delete'],
      ReturnType<PrismaClient['userPermission']['delete']>
    >,

    findFirst: procedure
      .input($Schema.UserPermissionInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).userPermission.findFirst(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.UserPermissionInputSchema)['findFirst'],
      ReturnType<PrismaClient['userPermission']['findFirst']>
    >,

    findFirstOrThrow: procedure
      .input($Schema.UserPermissionInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).userPermission.findFirstOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.UserPermissionInputSchema)['findFirst'],
      ReturnType<PrismaClient['userPermission']['findFirstOrThrow']>
    >,

    findMany: procedure
      .input($Schema.UserPermissionInputSchema.findMany)
      .query(({ ctx, input }) => checkRead(db(ctx).userPermission.findMany(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.UserPermissionInputSchema)['findMany'],
      ReturnType<PrismaClient['userPermission']['findMany']>
    >,

    findUnique: procedure
      .input($Schema.UserPermissionInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).userPermission.findUnique(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.UserPermissionInputSchema)['findUnique'],
      ReturnType<PrismaClient['userPermission']['findUnique']>
    >,

    findUniqueOrThrow: procedure
      .input($Schema.UserPermissionInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).userPermission.findUniqueOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.UserPermissionInputSchema)['findUnique'],
      ReturnType<PrismaClient['userPermission']['findUniqueOrThrow']>
    >,

    groupBy: procedure
      .input($Schema.UserPermissionInputSchema.groupBy)
      .query(({ ctx, input }) => checkRead(db(ctx).userPermission.groupBy(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.UserPermissionInputSchema)['groupBy'],
      ReturnType<PrismaClient['userPermission']['groupBy']>
    >,

    updateMany: procedure
      .input($Schema.UserPermissionInputSchema.updateMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).userPermission.updateMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.UserPermissionInputSchema)['updateMany'],
      ReturnType<PrismaClient['userPermission']['updateMany']>
    >,

    update: procedure
      .input($Schema.UserPermissionInputSchema.update)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).userPermission.update(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.UserPermissionInputSchema)['update'],
      ReturnType<PrismaClient['userPermission']['update']>
    >,

    upsert: procedure
      .input($Schema.UserPermissionInputSchema.upsert)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).userPermission.upsert(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.UserPermissionInputSchema)['upsert'],
      ReturnType<PrismaClient['userPermission']['upsert']>
    >,

    count: procedure
      .input($Schema.UserPermissionInputSchema.count)
      .query(({ ctx, input }) => checkRead(db(ctx).userPermission.count(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.UserPermissionInputSchema)['count'],
      ReturnType<PrismaClient['userPermission']['count']>
    >,
  })
}
