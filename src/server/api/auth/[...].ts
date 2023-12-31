// eslint-disable-next-line import/named
import { NuxtAuthHandler } from '#auth'
import { getAuthOptions } from '~/server/auth'

export default NuxtAuthHandler(getAuthOptions(), useRuntimeConfig())
