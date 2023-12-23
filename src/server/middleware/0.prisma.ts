import type { PrismaClient } from '@prisma/client'

import type { Session } from '@auth/core/types'
// eslint-disable-next-line import/named
import { getServerSession } from '#auth'
import {
  // getEnhancedPrisma,
  getPrisma,
} from '~/server/database'

import { getAuthOptions } from '~/server/auth'

declare module 'h3' {
  interface H3EventContext {
    prisma: PrismaClient
    session: Session | null
    user: Session['user'] | null
  }
}

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event, getAuthOptions())
  const { user } = session || {}

  const prisma = getPrisma()
  // if (user) {
  //   prisma = getEnhancedPrisma(user)
  // } else {
  //   prisma = getPrisma()
  // }

  event.context.session = session
  event.context.user = user || null
  event.context.prisma = prisma
})
