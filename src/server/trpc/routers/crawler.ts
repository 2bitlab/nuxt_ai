import { z } from 'zod'
import { publicProcedure, router } from '../trpc'
import { crawlPage } from '~/server/crawler'

export const appRouter = router({
  map: publicProcedure
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
  crawl: publicProcedure
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
