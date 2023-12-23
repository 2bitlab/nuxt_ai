import { z } from 'zod'
import { ConfigValueKey } from '@prisma/client'
import { protectedProcedure, router } from '../trpc'

type MsgType = 'text' | 'markdown'

interface Params {
  msgtype: MsgType
  markdown?: {
    content: string
    mentioned_mobile_list?: string[]
  }
  text?: {
    content: string
    mentioned_mobile_list?: string[]
  }
}

export const appRouter = router({
  send: protectedProcedure
    .input(
      z.object({
        content: z.string(),
        msgtype: z.enum(['text', 'markdown']),
        mentionedMobileList: z.array(z.string()),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { prisma } = ctx
      const { content, msgtype, mentionedMobileList } = input || {}

      const config = await prisma.configValue.findFirst({
        where: {
          key: ConfigValueKey.WORK_WECHAT_ROBOT_KEY,
          creatorId: null,
        },
      })

      const { value } = config || {}
      const { apiKey } = (value || {}) as {
        apiKey: string
      }

      if (!apiKey) throw new Error('未配置企业微信机器人key')

      const props: Params = {
        msgtype,
      }

      if (msgtype === 'text') {
        props.text = {
          content,
        }

        if (mentionedMobileList.length) {
          props.text.mentioned_mobile_list = mentionedMobileList
        }
      } else if (msgtype === 'markdown') {
        props.markdown = {
          content,
        }
        if (mentionedMobileList.length) {
          props.markdown.mentioned_mobile_list = mentionedMobileList
        }
      }

      return await $fetch(`https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: props,
      })
    }),
})
