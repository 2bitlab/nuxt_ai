import { protectedProcedure, router } from '../trpc'
import { createRouter } from './db/routers'
import { appRouter as tencentCos } from './tencentCos'
import { appRouter as password } from './password'
import { appRouter as redis } from './redis'
import { appRouter as vectorDb } from './vectorDb'
import { appRouter as crawler } from './crawler'
import { appRouter as balance } from './balance'
import { appRouter as email } from './email'

export const appRouter = router({
  db: createRouter(router, protectedProcedure),
  tencentCos,
  password,
  redis,
  vectorDb,
  crawler,
  balance,
  email,
})

// export type definition of API
export type AppRouter = typeof appRouter
