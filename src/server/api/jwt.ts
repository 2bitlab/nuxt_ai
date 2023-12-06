// eslint-disable-next-line import/named
import { getServerSession, getServerToken } from '#auth'
import { getAuthOptions } from '~/server/auth'

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event, getAuthOptions())
  const jwt = await getServerToken(event, getAuthOptions())
  return { session, jwt }
})
