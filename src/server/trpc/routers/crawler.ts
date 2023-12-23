import { z } from 'zod'
import { protectedProcedure, router } from '../trpc'
import { crawlPage } from '~/server/crawler'

export const appRouter = router({
  map: protectedProcedure
    .input(
      z.object({
        url: z.string().url(),
      })
    )
    .query(async ({ input }) => {
      const { url } = input || {}
      return {
        url,
      }
    }),
  crawl: protectedProcedure
    .input(
      z.object({
        url: z.string().url(),
      })
    )
    .mutation(async ({ input }) => {
      const { url } = input || {}
      await crawlPage([{ url }])

      return true
    }),
})
