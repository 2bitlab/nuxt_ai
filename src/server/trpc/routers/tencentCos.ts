import { publicProcedure, router } from '../trpc'
import { getCredentialAuth } from '~/server/tencentCos'

export const appRouter = router({
  credential: publicProcedure.query(async () => {
    return await getCredentialAuth()
  }),
})
