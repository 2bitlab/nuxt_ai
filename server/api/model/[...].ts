// import { enhance } from '@zenstackhq/runtime'
import { createEventHandler } from '@zenstackhq/server/nuxt'
import { getPrisma } from '~/server/database'

// import { getServerSession } from '#auth'

export default createEventHandler({
  getPrisma: async (_event) => {
    return getPrisma()

    // const session = await getServerSession(event)

    // const { user } = session || {}
    // const { id } = user || {}

    // return enhance(getPrisma(), {
    //   user: id ? { id } : undefined,
    // })
  },
})
