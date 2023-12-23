import { z } from 'zod'
import { ConfigValueKey } from '@prisma/client'
import { createTransport } from 'nodemailer'
import { protectedProcedure, router } from '../trpc'

export const appRouter = router({
  send: protectedProcedure
    .input(
      z.object({
        to: z.string().email(),
        subject: z.string(),
        text: z.string(),
        html: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { prisma } = ctx
      const { to, subject, text, html } = input || {}

      const config = await prisma.configValue.findFirst({
        where: {
          key: ConfigValueKey.EMAIL_SMTP,
          creatorId: null,
        },
      })

      const { value } = config || {}
      const { host, port, user, pass, from } = (value || {}) as {
        host: string
        port: number
        user: string
        pass: string
        from: string
      }

      if (!(host && port && user && pass)) throw new Error('未配置邮件服务器')

      const transport = createTransport({
        host,
        port,
        auth: {
          user,
          pass,
        },
      })

      return await transport.sendMail({
        to,
        from,
        subject,
        text,
        html,
      })
    }),
})
