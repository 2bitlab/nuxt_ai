import { protectedProcedure, router } from '../trpc'
import { createRouter } from './db/routers'
import { appRouter as tencentCos } from './tencentCos'
import { appRouter as password } from './password'
import { appRouter as redis } from './redis'
import { appRouter as vectorDb } from './vectorDb'
import { appRouter as crawler } from './crawler'
import { appRouter as balance } from './balance'

export const appRouter = router({
  db: createRouter(router, protectedProcedure),
  tencentCos,
  password,
  redis,
  vectorDb,
  crawler,
  balance,
})

// export type definition of API
export type AppRouter = typeof appRouter
