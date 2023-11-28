// 主键索引
// 每一个 Collection 必须指定主键索引和向量索引。具体信息，请参见Index。
export interface CollectionIdIndex {
  fieldName: 'id'
  fieldType: 'string'
  indexType: 'primaryKey'
}

// 向量索引
// 每一个 Collection 必须指定主键索引和向量索引。具体信息，请参Index。
export interface CollectionVectorIndex {
  fieldName: 'vector'
  fieldType: 'vector'
  indexType:
    | 'HNSW' // 暴力检索，召回率100%，但检索效率低。
    | 'flat' // 可通过参数调整召回率，检索效率高，但数据量大后写入效率会变低。具体测试数据，请参见性能白皮书的测试结果。
    | 'ivf_flat' // IVF 系列索引，适用于上亿规模的数据集，检索效率高，内存占用低，写入效率高。
    | 'ivf_pq'
    | 'ivf_sq4'
    | 'ivf_sq8'
    | 'ivf_sq16'
  dimension?: number
  metricType:
    | 'COSINE' // 余弦相似度（Cosine Similarity）算法，是一种常用的文本相似度计算方法。它通过计算两个向量在多维空间中的夹角余弦值来衡量它们的相似程度，所得值越大越与搜索值相似。
    | 'IP' // 全称为 Inner Product，是一种计算向量之间相似度的度量算法，它计算两个向量之间的点积（内积），所得值越大越与搜索值相似。
    | 'L2' // 全称是 Euclidean distance，指欧几里得距离，它计算向量之间的直线距离，所得的值越小，越与搜索值相似。L2在低维空间中表现良好，但是在高维空间中，由于维度灾难的影响，L2的效果会逐渐变差。

  params: // 索引类型 indexType 为 HNSW ，需配置如下参数
  | {
        M: number
        efConstruction: number
      }
    // 索引类型 indexType 为 IVF_FLAT、 IVF_PQ、 IVF_SQ4, IVF_SQ8, IVF_SQ16需配置如下参数
    | {
        M: number
        nlist: number
      }
}

// Filter 索引
export interface CollectionFilterIndex {
  fieldName: string
  fieldType: 'string' | 'uint64'
  indexType?: 'filter'
}

export type CollectionEmbeddingModel =
  | 'bge-base-zh' // 适用中文，768 维，推荐使用
  | 'm3e-base' // 适用中文，768 维
  | 'e5-large-v2' // 适用中文，1024 维
  | 'text2vec-large-chinese' // 适用中文，1024 维
  | 'multilingual-e5-base' // 适用于多种语言类型，768 维

export type CollectionIndex = CollectionIdIndex | CollectionVectorIndex | CollectionFilterIndex

export interface Collection {
  database: string
  collection: string
  replicaNum: number // 指定 Collection 的副本数。副本数是指每个主分片有多个相同的备份，用来容灾和负载均衡。

  shardNum: number // 指定 Collection 的分片数。分片是把大数据集切成多个子数据集。
  description?: string
  embedding?: {
    field?: 'text'
    vectorField?: 'vector'
    model?: CollectionEmbeddingModel
  }
  indexes?: Array<CollectionIndex>
}
