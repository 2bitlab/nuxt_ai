import { z } from 'zod'
import type { BalanceLog, PrismaClient } from '@prisma/client'

import { Prisma } from '@prisma/client'
import { protectedProcedure, router } from '../trpc'

const balanceLogSave = async ({
  prisma,
  willSave,
  userId,
}: {
  prisma: PrismaClient
  willSave: Partial<BalanceLog>
  userId: string
}) => {
  const balanceLog = await prisma.balanceLog.create({
    data: willSave as any,
  })

  const balance = await prisma.balance.upsert({
    where: {
      userId,
    },
    create: {
      userId,
      availableBalance: willSave.availableBalance,
      lockedBalance: willSave.lockedBalance,
      withdrawableBalance: willSave.withdrawableBalance,
      nonWithdrawableBalance: willSave.nonWithdrawableBalance,
      withdrawLockedBalance: willSave.withdrawLockedBalance,
    },
    update: {
      availableBalance: willSave.availableBalance,
      lockedBalance: willSave.lockedBalance,
      withdrawableBalance: willSave.withdrawableBalance,
      nonWithdrawableBalance: willSave.nonWithdrawableBalance,
      withdrawLockedBalance: willSave.withdrawLockedBalance,
    },
  })

  return {
    balanceLog,
    balance,
  }
}

const initBalanceLog = async ({
  prisma,
  userId,
  remark,
  creatorId,
}: {
  prisma: PrismaClient
  userId: string
  remark: string
  creatorId: string
}) => {
  const lastLog = await prisma.balanceLog.findFirst({
    where: {
      userId,
    },
    orderBy: [
      {
        createdAt: 'desc',
      },
    ],
  })

  const willSave: Partial<BalanceLog> = {
    userId,
    creatorId,
    remark,
  }

  if (lastLog) {
    willSave.preBalanceLogId = lastLog.id

    willSave.lockedBalanceBefore = lastLog.lockedBalance
    willSave.lockedBalance = lastLog.lockedBalance

    willSave.availableBalanceBefore = lastLog.availableBalance
    willSave.availableBalance = lastLog.availableBalance

    willSave.withdrawableBalanceBefore = lastLog.withdrawableBalance
    willSave.withdrawableBalance = lastLog.withdrawableBalance

    willSave.nonWithdrawableBalanceBefore = lastLog.nonWithdrawableBalance
    willSave.nonWithdrawableBalance = lastLog.nonWithdrawableBalance

    willSave.withdrawLockedBalance = lastLog.withdrawLockedBalance
    willSave.withdrawLockedBalanceBefore = lastLog.withdrawLockedBalance
  }

  return { willSave, lastLog }
}

export const appRouter = router({
  topUp: protectedProcedure
    .input(
      z.object({
        userId: z.string(),
        price: z.number(),
        remark: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { user, prisma } = ctx
      const { id = '' } = user || {}
      const { userId, price, remark = '' } = input || {}

      const { willSave, lastLog } = await initBalanceLog({ prisma, userId, remark, creatorId: id })

      willSave.availableBalanceChange = new Prisma.Decimal(price)
      willSave.withdrawableBalanceChange = new Prisma.Decimal(price)

      if (lastLog) {
        willSave.availableBalance = lastLog.availableBalance.plus(price)
        willSave.withdrawableBalance = lastLog.withdrawableBalance.plus(price)
      } else {
        willSave.availableBalance = new Prisma.Decimal(price)
      }

      return await balanceLogSave({
        prisma,
        userId,
        willSave,
      })
    }),
  giveAway: protectedProcedure
    .input(
      z.object({
        userId: z.string(),
        price: z.number(),
        remark: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { user, prisma } = ctx
      const { id = '' } = user || {}
      const { userId, price, remark = '' } = input || {}

      const { willSave, lastLog } = await initBalanceLog({ prisma, userId, remark, creatorId: id })
      willSave.availableBalanceChange = new Prisma.Decimal(price)
      willSave.nonWithdrawableBalanceChange = new Prisma.Decimal(price)

      if (lastLog) {
        willSave.availableBalance = lastLog.availableBalance.plus(price)
        willSave.nonWithdrawableBalance = lastLog.nonWithdrawableBalance.plus(price)
      } else {
        willSave.availableBalance = new Prisma.Decimal(price)
        willSave.nonWithdrawableBalance = new Prisma.Decimal(price)
      }

      return await balanceLogSave({
        prisma,
        userId,
        willSave,
      })
    }),
  pay: protectedProcedure
    .input(
      z.object({
        price: z.number().nonnegative(),
        remark: z.string(),
        log: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { user, prisma } = ctx
      const { id = '' } = user || {}
      const { price, remark, log } = input || {}

      const { willSave, lastLog } = await initBalanceLog({ prisma, userId: id, remark, creatorId: id })

      if (log) {
        willSave.log = JSON.parse(log)
      }

      let balance = new Prisma.Decimal(0).sub(price)

      if (lastLog) {
        balance = lastLog.availableBalance.sub(price)

        if (!balance.lt(0)) {
          let withdrawableBalance = lastLog.withdrawableBalance.sub(price)
          let nonWithdrawableBalance = lastLog.nonWithdrawableBalance

          let withdrawableBalanceChange = new Prisma.Decimal(price)
          let nonWithdrawableBalanceChange = new Prisma.Decimal(0)
          if (withdrawableBalance.lt(0)) {
            nonWithdrawableBalance = nonWithdrawableBalance.plus(withdrawableBalance)
            nonWithdrawableBalanceChange = withdrawableBalance

            withdrawableBalance = new Prisma.Decimal(0)

            withdrawableBalanceChange = lastLog.withdrawableBalance
          }
          willSave.lockedBalance = lastLog.lockedBalance.plus(price)
          willSave.lockedBalanceChange = new Prisma.Decimal(price)

          willSave.availableBalance = balance
          willSave.availableBalanceChange = new Prisma.Decimal(-price)

          willSave.withdrawableBalance = withdrawableBalance
          willSave.withdrawableBalanceChange = withdrawableBalanceChange

          willSave.nonWithdrawableBalance = nonWithdrawableBalance
          willSave.nonWithdrawableBalanceChange = nonWithdrawableBalanceChange
        }
      } else {
        throw new Error('没有溯源记录')
      }

      if (balance.lt(0)) {
        throw new Error('余额不足')
      }

      return await balanceLogSave({ prisma, willSave, userId: id })
    }),
  payConfirm: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { user, prisma } = ctx
      const { id = '' } = user || {}
      const { id: balanceLogId } = input || {}

      const balanceLog = await prisma.balanceLog.findFirst({
        where: {
          id: balanceLogId,
          userId: id,
        },
      })

      if (!balanceLog) {
        throw new Error('无效的记录')
      }

      const { willSave, lastLog } = await initBalanceLog({ prisma, userId: id, remark: '支付确认', creatorId: id })

      if (lastLog) {
        willSave.lockedBalance = lastLog.lockedBalance.sub(balanceLog.lockedBalanceChange)
        willSave.lockedBalanceChange = new Prisma.Decimal(-balanceLog.lockedBalanceChange)
      } else {
        throw new Error('没有溯源记录')
      }

      return await balanceLogSave({ prisma, willSave, userId: id })
    }),
  cancelPay: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        remark: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { user, prisma } = ctx
      const { id = '' } = user || {}
      const { id: balanceLogId, remark } = input || {}

      const balanceLog = await prisma.balanceLog.findFirst({
        where: {
          id: balanceLogId,
          userId: id,
        },
      })

      if (!balanceLog) {
        throw new Error('无效的记录')
      }

      const { willSave, lastLog } = await initBalanceLog({ prisma, userId: id, remark, creatorId: id })

      if (lastLog) {
        willSave.lockedBalance = lastLog.lockedBalance.sub(balanceLog.lockedBalanceChange)
        willSave.lockedBalanceChange = new Prisma.Decimal(-balanceLog.lockedBalanceChange)

        willSave.availableBalance = lastLog.availableBalance.plus(balanceLog.lockedBalanceChange)
        willSave.availableBalanceChange = balanceLog.lockedBalanceChange

        willSave.withdrawableBalance = lastLog.withdrawableBalance.plus(balanceLog.withdrawableBalanceChange)
        willSave.withdrawableBalanceChange = balanceLog.withdrawableBalanceChange

        willSave.nonWithdrawableBalance = lastLog.nonWithdrawableBalance.plus(balanceLog.nonWithdrawableBalanceChange)
        willSave.nonWithdrawableBalanceChange = balanceLog.nonWithdrawableBalanceChange
      } else {
        throw new Error('没有溯源记录')
      }
      return await balanceLogSave({ prisma, willSave, userId: id })
    }),
  applyWithdraw: protectedProcedure
    .input(
      z.object({
        price: z.number().nonnegative(),
        remark: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { user, prisma } = ctx
      const { id = '' } = user || {}
      const { price, remark = '申请提现' } = input || {}

      const { willSave, lastLog } = await initBalanceLog({ prisma, userId: id, remark, creatorId: id })

      let withdrawableBalance = new Prisma.Decimal(0).sub(price)

      if (lastLog) {
        withdrawableBalance = lastLog.withdrawableBalance.sub(price)

        if (!withdrawableBalance.lt(0)) {
          willSave.availableBalance = lastLog.availableBalance.sub(price)
          willSave.availableBalanceChange = new Prisma.Decimal(-price)

          willSave.withdrawableBalance = withdrawableBalance
          willSave.withdrawableBalanceChange = new Prisma.Decimal(-price)

          willSave.withdrawLockedBalance = lastLog.withdrawLockedBalance.plus(price)
          willSave.withdrawLockedBalanceChange = new Prisma.Decimal(price)
        }
      } else {
        throw new Error('没有溯源记录')
      }

      if (withdrawableBalance.lt(0)) {
        throw new Error('余额不足')
      }

      return await balanceLogSave({ prisma, willSave, userId: id })
    }),
  withdrawConfirm: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { user, prisma } = ctx
      const { id = '' } = user || {}
      const { id: balanceLogId } = input || {}

      const balanceLog = await prisma.balanceLog.findFirst({
        where: {
          id: balanceLogId,
          userId: id,
        },
      })

      if (!balanceLog) {
        throw new Error('无效的记录')
      }
      const { willSave, lastLog } = await initBalanceLog({ prisma, userId: id, remark: '提现操作完成', creatorId: id })

      if (lastLog) {
        willSave.withdrawLockedBalance = lastLog.withdrawLockedBalance.sub(balanceLog.withdrawLockedBalanceChange)
        willSave.withdrawLockedBalanceChange = new Prisma.Decimal(-balanceLog.withdrawLockedBalanceChange)
      } else {
        throw new Error('没有溯源记录')
      }

      return await balanceLogSave({ prisma, willSave, userId: id })
    }),
  cancelWithdraw: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { user, prisma } = ctx
      const { id = '' } = user || {}
      const { id: balanceLogId } = input || {}

      const balanceLog = await prisma.balanceLog.findFirst({
        where: {
          id: balanceLogId,
          userId: id,
        },
      })

      if (!balanceLog) {
        throw new Error('无效的记录')
      }

      const { willSave, lastLog } = await initBalanceLog({ prisma, userId: id, remark: '提现取消', creatorId: id })

      if (lastLog) {
        willSave.availableBalance = lastLog.availableBalance.plus(balanceLog.lockedBalanceChange)
        willSave.availableBalanceChange = balanceLog.lockedBalanceChange

        willSave.withdrawableBalance = lastLog.withdrawableBalance.plus(balanceLog.withdrawableBalanceChange)
        willSave.withdrawableBalanceChange = balanceLog.withdrawableBalanceChange

        willSave.withdrawLockedBalance = lastLog.withdrawLockedBalance.sub(balanceLog.withdrawLockedBalanceChange)
        willSave.withdrawLockedBalanceChange = new Prisma.Decimal(-balanceLog.withdrawLockedBalanceChange)
      } else {
        throw new Error('没有溯源记录')
      }

      return await balanceLogSave({ prisma, willSave, userId: id })
    }),
})
