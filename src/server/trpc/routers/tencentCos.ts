import { protectedProcedure, router } from '../trpc'
import { getCredentialAuth } from '~/server/tencentCos'

export const appRouter = router({
  credential: protectedProcedure.query(async () => {
    return await getCredentialAuth()
  }),
})
