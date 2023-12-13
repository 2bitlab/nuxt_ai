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
      .input($Schema.RolePermissionInputSchema.aggregate)
      .query(({ ctx, input }) => checkRead(db(ctx).rolePermission.aggregate(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.RolePermissionInputSchema)['aggregate'],
      ReturnType<PrismaClient['rolePermission']['aggregate']>
    >,

    createMany: procedure
      .input($Schema.RolePermissionInputSchema.createMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).rolePermission.createMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.RolePermissionInputSchema)['createMany'],
      ReturnType<PrismaClient['rolePermission']['createMany']>
    >,

    create: procedure
      .input($Schema.RolePermissionInputSchema.create)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).rolePermission.create(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.RolePermissionInputSchema)['create'],
      ReturnType<PrismaClient['rolePermission']['create']>
    >,

    deleteMany: procedure
      .input($Schema.RolePermissionInputSchema.deleteMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).rolePermission.deleteMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.RolePermissionInputSchema)['deleteMany'],
      ReturnType<PrismaClient['rolePermission']['deleteMany']>
    >,

    delete: procedure
      .input($Schema.RolePermissionInputSchema.delete)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).rolePermission.delete(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.RolePermissionInputSchema)['delete'],
      ReturnType<PrismaClient['rolePermission']['delete']>
    >,

    findFirst: procedure
      .input($Schema.RolePermissionInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).rolePermission.findFirst(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.RolePermissionInputSchema)['findFirst'],
      ReturnType<PrismaClient['rolePermission']['findFirst']>
    >,

    findFirstOrThrow: procedure
      .input($Schema.RolePermissionInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).rolePermission.findFirstOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.RolePermissionInputSchema)['findFirst'],
      ReturnType<PrismaClient['rolePermission']['findFirstOrThrow']>
    >,

    findMany: procedure
      .input($Schema.RolePermissionInputSchema.findMany)
      .query(({ ctx, input }) => checkRead(db(ctx).rolePermission.findMany(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.RolePermissionInputSchema)['findMany'],
      ReturnType<PrismaClient['rolePermission']['findMany']>
    >,

    findUnique: procedure
      .input($Schema.RolePermissionInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).rolePermission.findUnique(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.RolePermissionInputSchema)['findUnique'],
      ReturnType<PrismaClient['rolePermission']['findUnique']>
    >,

    findUniqueOrThrow: procedure
      .input($Schema.RolePermissionInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).rolePermission.findUniqueOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.RolePermissionInputSchema)['findUnique'],
      ReturnType<PrismaClient['rolePermission']['findUniqueOrThrow']>
    >,

    groupBy: procedure
      .input($Schema.RolePermissionInputSchema.groupBy)
      .query(({ ctx, input }) => checkRead(db(ctx).rolePermission.groupBy(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.RolePermissionInputSchema)['groupBy'],
      ReturnType<PrismaClient['rolePermission']['groupBy']>
    >,

    updateMany: procedure
      .input($Schema.RolePermissionInputSchema.updateMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).rolePermission.updateMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.RolePermissionInputSchema)['updateMany'],
      ReturnType<PrismaClient['rolePermission']['updateMany']>
    >,

    update: procedure
      .input($Schema.RolePermissionInputSchema.update)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).rolePermission.update(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.RolePermissionInputSchema)['update'],
      ReturnType<PrismaClient['rolePermission']['update']>
    >,

    upsert: procedure
      .input($Schema.RolePermissionInputSchema.upsert)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).rolePermission.upsert(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.RolePermissionInputSchema)['upsert'],
      ReturnType<PrismaClient['rolePermission']['upsert']>
    >,

    count: procedure
      .input($Schema.RolePermissionInputSchema.count)
      .query(({ ctx, input }) => checkRead(db(ctx).rolePermission.count(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.RolePermissionInputSchema)['count'],
      ReturnType<PrismaClient['rolePermission']['count']>
    >,
  })
}
