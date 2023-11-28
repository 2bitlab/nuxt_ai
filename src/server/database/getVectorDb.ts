import { getPrisma } from './getPrisma'

import type { Collection } from '~/types/vectorDb'

interface VectorDbConfig {
  host: string
  account: string
  apiKey: string
}

interface BaseRes {
  code: number
  msg: string
}

const getConfig = async () => {
  const vectorDbConfigValue = await getPrisma().configValue.findFirst({
    where: {
      key: 'TENCENT_VECTOR_DB',
    },
    select: {
      value: true,
    },
  })

  const { value } = vectorDbConfigValue || {}
  return value as unknown as VectorDbConfig
}

class VectorDb {
  config: VectorDbConfig | undefined

  async init() {
    if (!this.config) {
      this.config = await getConfig()
    }
  }

  async fetch({ path, body, method = 'GET' }: { path: string; method?: 'GET' | 'POST'; body?: any }) {
    await this.init()
    if (!this.config) return

    const { host, account, apiKey } = this.config

    const authorization = `Bearer account=${account}&api_key=${apiKey}`
    const url = `${host}${path}`

    const props = {
      method,
      body,
      headers: {
        'Content-Type': 'application/json',
        Authorization: authorization,
      },
      ignoreResponseError: true,
    }
    let res
    try {
      res = await $fetch(url, props)
      return res
    } catch (error) {
      console.error('VectorDb fetch error', error)
      console.error('VectorDb fetch error res', res)
      console.error('VectorDb fetch error', url, JSON.stringify(props))
      return {
        code: 1,
        msg: `${error}`,
      }
    }
  }

  async createDatabase(database: string) {
    return await this.fetch({
      method: 'POST',
      path: '/database/create',
      body: {
        database,
      },
    })
  }

  async dropDatabase(database: string) {
    return await this.fetch({
      method: 'POST',
      path: '/database/drop',
      body: {
        database,
      },
    })
  }

  async listDatabase() {
    const res = await this.fetch({
      path: '/database/list',
    })

    return res as unknown as BaseRes & {
      databases: any[]
    }
  }

  // https://cloud.tencent.com/document/product/1709/95116
  async createCollection(body: Collection) {
    return await this.fetch({
      method: 'POST',
      path: '/collection/create',
      body,
    })
  }

  async listCollection(database: string) {
    const res = await this.fetch({
      method: 'POST',
      path: '/collection/list',
      body: {
        database,
      },
    })

    return res as unknown as BaseRes & {
      collections: any[]
    }
  }

  async dropCollection(body: { database: string; collection: string }) {
    return await this.fetch({
      method: 'POST',
      path: '/collection/drop',
      body,
    })
  }

  // 用于清空 Collection 中所有的数据与索引
  async truncateCollection(body: { database: string; collection: string }) {
    return await this.fetch({
      method: 'POST',
      path: '/collection/truncate',
      body,
    })
  }

  async describeCollection(body: { database: string; collection: string }) {
    return await this.fetch({
      method: 'POST',
      path: '/collection/describe',
      body,
    })
  }

  // 接口用于精确查找与查询条件完全匹配的向量
  async queryDocument(body: {
    database: string
    collection: string
    readConsistency?: // 读一致性要求
    | 'strongConsistency' // 强一致性
      | 'eventualConsistency' // 最终一致性
    query?: {
      documentIds?: string[]
      retrieveVector?: boolean // 标识是否需要返回检索结果的向量值
      filter?: string
      limit?: number
      offset?: number
      outputFields?: string[]
    }
  }) {
    return await this.fetch({
      method: 'POST',
      path: '/document/query',
      body,
    })
  }

  // 接口用于查找与给定查询向量相似的向量
  async searchDocument(body: {
    database: string
    collection: string
    readConsistency?: // 读一致性要求
    | 'strongConsistency' // 强一致性
      | 'eventualConsistency' // 最终一致性
    search?: {
      vectors?: number[][]
      documentIds?: string[]
      // vectors 与 documentIds 两个字段，只需配置其中一个即可
      embeddingItems?: string[] // 输入文本信息，用于检索与该文本信息相似的数据。

      params?: {
        // 索引类型不同，检索时，所需配置的参数不同
        ef?: number // HNSW 类型
        nprobe?: number // IVF 系列
      }
      filter?: string
      retrieveVector?: boolean // 标识是否需要返回检索结果的向量值
      limit?: number
      outputFields?: string[]
    }
  }) {
    return await this.fetch({
      method: 'POST',
      path: '/document/search',
      body,
    })
  }

  async upsertDocument(body: {
    database: string
    collection: string
    buildIndex?: boolean
    documents: (Record<string, any> & {
      id: string
      text?: string
      vector?: number[]
    })[]
  }) {
    return await this.fetch({
      method: 'POST',
      path: '/document/upsert',
      body,
    })
  }

  async updateDocument(body: {
    database: string
    collection: string
    query: {
      documentIds?: string[]
      filter?: string
    }
    update: Record<string, any> & {
      vector?: number[]
    }
  }) {
    return await this.fetch({
      method: 'POST',
      path: '/document/update',
      body,
    })
  }

  async deleteDocument(body: {
    database: string
    collection: string
    query: {
      documentIds?: string[]
      filter?: string
    }
  }) {
    return await this.fetch({
      method: 'POST',
      path: '/document/delete',
      body,
    })
  }

  async rebuildIndex(body: { database: string; collection?: string; dropBeforeRebuild?: boolean; throttle?: number }) {
    return await this.fetch({
      method: 'POST',
      path: '/index/rebuild ',
      body,
    })
  }
}

let vectorDb: VectorDb
export const getVectorDb = () => {
  if (!vectorDb) {
    vectorDb = new VectorDb()
  }
  return vectorDb
}
