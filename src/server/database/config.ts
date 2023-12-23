import { ConfigValueKey } from '@prisma/client'

import { getPrisma, getRedis } from '~/server/database'

export const getConfig = async <T = any>(key: ConfigValueKey): Promise<T> => {
  const redis = await getRedis()

  let configValue: any = await redis.get(key)
  if (!configValue) {
    configValue = await getPrisma().configValue.findFirst({
      where: {
        key,
      },
    })
    await redis.set(key, configValue)
  }

  const { value } = configValue || {}

  return value as T
}

export const setConfig = async <T = any>(key: ConfigValueKey, value: T): Promise<T> => {
  const redis = await getRedis()

  const configValue = await getPrisma().configValue.upsert({
    where: {
      key,
    },
    update: {
      value,
    },
    create: {
      key,
      value,
    },
  })

  await redis.set(key, configValue)

  return value
}
