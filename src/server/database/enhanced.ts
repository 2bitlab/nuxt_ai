import { enhance } from '@zenstackhq/runtime'
import type { User } from '@prisma/client'
import { getPrisma } from './getPrisma'

/**
 * Get an authorization-enabled database client
 * @param ctx
 */
export const getEnhancedPrisma = (user: Partial<User>) => {
  return enhance(getPrisma(), { user })
}
