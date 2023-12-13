import OpenAI from 'openai'
import { OpenAIStream } from 'ai'
import { ChatCompletionMessageParam } from 'openai/resources/chat'
import { ConfigValueKey } from '@prisma/client'
import { getPrisma } from '~/server/database'

export default defineLazyEventHandler(async () => {
  const configValue = await getPrisma().configValue.findFirst({
    where: {
      key: ConfigValueKey.OPENAI_API_KEY,
    },
  })

  const { value } = configValue || {}
  const { apiKey, baseURL } = (value || {}) as any

  if (!apiKey) throw new Error('Missing OpenAI API key')
  const openai = new OpenAI({
    apiKey,
    baseURL,
  })

  return defineEventHandler(async (event) => {
    // Extract the `prompt` from the body of the request
    const { messages } = (await readBody(event)) as {
      messages: ChatCompletionMessageParam[]
    }

    // Ask OpenAI for a streaming chat completion given the prompt
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages: messages.map((message) => ({
        content: message.content,
        role: message.role,
      })),
      // httpAgent: ne
    })

    // Convert the response into a friendly text-stream
    return OpenAIStream(response)
  })
})
