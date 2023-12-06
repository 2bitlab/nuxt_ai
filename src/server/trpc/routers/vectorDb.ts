import { z } from 'zod'
import { publicProcedure, router } from '../trpc'
import { getVectorDb } from '~/server/database'

export const appRouter = router({
  database: router({
    list: publicProcedure.query(async () => {
      const res = await getVectorDb().listDatabase()
      const { databases, code, msg } = res || {}

      if (code !== 0) {
        console.error('getVectorDb().listDatabase error msg:', msg)
      }

      return databases || []
    }),
    create: publicProcedure
      .input(
        z.object({
          database: z.string(),
        })
      )
      .mutation(async ({ input }) => {
        const { database } = input || {}
        return await getVectorDb().createDatabase(database)
      }),
    drop: publicProcedure
      .input(
        z.object({
          database: z.string(),
        })
      )
      .mutation(async ({ input }) => {
        const { database } = input || {}
        return await getVectorDb().dropDatabase(database)
      }),
  }),
  collection: router({
    list: publicProcedure
      .input(
        z.object({
          database: z.string(),
        })
      )
      .query(async ({ input }) => {
        const { database } = input || {}
        const res = await getVectorDb().listCollection(database)
        const { collections, code, msg } = res || {}

        if (code !== 0) {
          console.error('getVectorDb().listDatabase error msg:', msg)
        }

        return collections || []
      }),
    create: publicProcedure
      .input(
        z.object({
          database: z.string(),
          collection: z.string(),
          replicaNum: z.number().default(0),
          shardNum: z.number().default(1),
          description: z.string().optional(),
          embedding: z
            .object({
              field: z.enum(['text']),
              vectorField: z.enum(['vector']),
              model: z.enum([
                'bge-base-zh', // 适用中文，768 维，推荐使用
                'm3e-base', // 适用中文，768 维
                'e5-large-v2', // 适用中文，1024 维
                'text2vec-large-chinese', // 适用中文，1024 维
                'multilingual-e5-base', // 适用于多种语言类型，768 维
              ]),
            })
            .optional(),
          indexes: z.array(
            z.object({
              fieldName: z.string(),
              fieldType: z.string(),
              indexType: z.string(),
              metricType: z.string().optional(),
              dimension: z.number().optional(),
              params: z
                .object({
                  M: z.number(),
                  efConstruction: z.number().optional(),
                  nlist: z.number().optional(),
                })
                .optional(),
            })
          ),
        })
      )
      .mutation(async ({ input }) => {
        return await getVectorDb().createCollection(input as any)
      }),
    drop: publicProcedure
      .input(
        z.object({
          database: z.string(),
          collection: z.string(),
        })
      )
      .mutation(async ({ input }) => {
        const { database, collection } = input || {}
        return await getVectorDb().dropCollection({
          database,
          collection,
        })
      }),
    truncate: publicProcedure
      .input(
        z.object({
          database: z.string(),
          collection: z.string(),
        })
      )
      .mutation(async ({ input }) => {
        const { database, collection } = input || {}
        return await getVectorDb().truncateCollection({
          database,
          collection,
        })
      }),
    describe: publicProcedure
      .input(
        z.object({
          database: z.string(),
          collection: z.string(),
        })
      )
      .mutation(async ({ input }) => {
        const { database, collection } = input || {}
        return await getVectorDb().describeCollection({
          database,
          collection,
        })
      }),
  }),
  document: router({
    query: publicProcedure
      .input(
        z.object({
          database: z.string(),
          collection: z.string(),
          readConsistency: z.enum(['strongConsistency', 'eventualConsistency']).optional(),
          query: z
            .object({
              documentIds: z.array(z.string()).optional(),
              retrieveVector: z.boolean().optional(),
              filter: z.string().optional(),
              limit: z.number().optional(),
              offset: z.number().optional(),
              outputFields: z.array(z.string()).optional(),
            })
            .optional(),
        })
      )
      .query(async ({ input }) => {
        return await getVectorDb().queryDocument(input as any)
      }),
    search: publicProcedure
      .input(
        z.object({
          database: z.string(),
          collection: z.string(),
          readConsistency: z.enum(['strongConsistency', 'eventualConsistency']).optional(),
          search: z
            .object({
              documentIds: z.array(z.string()).optional(),
              vectors: z.array(z.array(z.number())).optional(),
              embeddingItems: z.array(z.string()).optional(),
              params: z
                .object({
                  ef: z.number().optional(),
                  nprobe: z.number().optional(),
                })
                .optional(),

              retrieveVector: z.boolean().optional(),
              filter: z.string().optional(),
              limit: z.number().optional(),
              outputFields: z.array(z.string()).optional(),
            })
            .optional(),
        })
      )
      .query(async ({ input }) => {
        return await getVectorDb().searchDocument(input as any)
      }),
    delete: publicProcedure
      .input(
        z.object({
          database: z.string(),
          collection: z.string(),
          query: z.object({
            documentIds: z.array(z.string()).optional(),
            filter: z.string().optional(),
          }),
        })
      )
      .mutation(async ({ input }) => {
        return await getVectorDb().deleteDocument(input as any)
      }),
    upsert: publicProcedure
      .input(
        z.object({
          database: z.string(),
          collection: z.string(),
          buildIndex: z.boolean().optional(),
          documents: z.array(z.unknown()),
        })
      )
      .mutation(async ({ input }) => {
        return await getVectorDb().upsertDocument(input as any)
      }),
    update: publicProcedure
      .input(
        z.object({
          database: z.string(),
          collection: z.string(),
          query: z.object({
            documentIds: z.array(z.string()).optional(),
            filter: z.string().optional(),
          }),
          update: z.unknown(),
        })
      )
      .mutation(async ({ input }) => {
        return await getVectorDb().updateDocument(input as any)
      }),
  }),
  index: router({
    rebuild: publicProcedure
      .input(
        z.object({
          database: z.string(),
          collection: z.string().optional(),
          dropBeforeRebuild: z.boolean().optional(),
          throttle: z.number().optional(),
        })
      )
      .mutation(async ({ input }) => {
        return await getVectorDb().rebuildIndex(input as any)
      }),
  }),
})
