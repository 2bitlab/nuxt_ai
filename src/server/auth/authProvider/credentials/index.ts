import Provider from '@auth/core/providers/credentials'

import type { Session } from '@auth/core/types'

import { checkPassword } from './password'
import { getPrisma } from '~/server/database'

type AuthorizeReturn =
  | Session['user']
  // & Pick<JWT, "access_token" | "refresh_token" | "expires_at">
  | null

const checkUserPassword = async (email: string, password: string): Promise<AuthorizeReturn> => {
  const maybeUser = await getPrisma().user.findFirst({
    where: {
      email,
    },
  })

  const errorMsg = '用户不存在或密码错误'

  if (!maybeUser) {
    throw new Error(errorMsg)
  }

  if (!maybeUser.password) {
    throw new Error(errorMsg)
  }

  const isPass = checkPassword(email, password, maybeUser.password)
  if (!isPass) {
    throw new Error(errorMsg)
  }

  const user: AuthorizeReturn = {
    id: maybeUser.id,
    email: maybeUser.email,
    image: maybeUser.image,
    name: maybeUser.name,
    // roles: [],
    // permissions: [],
  }

  return user
}

export const getProvider = () => {
  return Provider({
    // 登录按钮显示 (e.g. "Sign in with Credentials")
    name: 'Credentials',
    // credentials 用于配置登录页面的表单
    credentials: {
      email: {
        // label: "邮箱",
        type: 'text',
        // placeholder: "请输入邮箱",
      },
      password: {
        // label: "密码",
        type: 'password',
        // placeholder: "请输入密码",
      },
    },
    authorize: async (credentials) => {
      const { email, password } = credentials || {}
      console.error('Credentials authorize email', email, 'password', password)
      try {
        const user = await checkUserPassword(email as string, password as string)
        return user
      } catch (error) {
        console.error('Credentials getProvider error', error)
        return null
      }
    },
  })
}
