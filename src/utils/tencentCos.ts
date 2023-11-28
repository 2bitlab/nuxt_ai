import COS from 'cos-js-sdk-v5'
import { v4 as uuidv4 } from 'uuid'

type Path = `/${string}`

let cos: COS

const getConfig = async () => {
  const configValue = await getTrpc().db.configValue.findFirst.query({
    where: {
      key: 'TENCENT_COS_UPLOAD',
    },
    select: {
      value: true,
    },
  })

  const { value } = configValue || {}
  const { Bucket, Region } = value || {}

  return {
    bucket: Bucket,
    region: Region,
    Bucket,
    Region,
  }
}

export const getTencentCos = () => {
  if (!cos) {
    cos = new COS({
      getAuthorization: (_, callback) => {
        getTrpc()
          .tencentCos.credential.query()
          .then((credential) => {
            console.log('credential', credential)

            callback(credential as any)
          })
      },
    })
  }

  return cos
}

const uploadFileByCos = (
  file: File,
  options: Partial<COS.UploadFileParams>,
  path: Path = '/'
): Promise<COS.UploadFileResult> => {
  return new Promise((resolve, reject) => {
    const props = {
      ...options,
      Body: file,
      Key: `data${path}${uuidv4()}__${file.name}`,
    } as COS.UploadFileParams

    getTencentCos().uploadFile(props, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

export const uploadFile = async (
  file: File,
  onProgress?: COS.UploadFileParams['onProgress'],
  path?: Path
): Promise<{
  url: string
  data: COS.UploadFileResult
}> => {
  const { Bucket, Region } = await getConfig()
  if (!Bucket || !Region) {
    throw new Error('configValueError')
  }

  const data = await uploadFileByCos(
    file,
    {
      Bucket,
      Region,
      onProgress,
    },
    path
  )

  let { Location: url } = data || {}
  if (!url.includes('http')) {
    url = `https://${url}`
  }

  return {
    data,
    url,
  }
}

const sliceUploadFileByCos = (
  file: File,
  options: Partial<COS.SliceUploadFileParams>,
  path: Path = '/'
): Promise<COS.SliceUploadFileResult> => {
  return new Promise((resolve, reject) => {
    const props = {
      ...options,
      Body: file,
      Key: `data${path}${uuidv4()}__${file.name}`,
    } as COS.SliceUploadFileParams

    getTencentCos().sliceUploadFile(props, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

export const sliceUploadFile = async (
  file: File,
  options: Partial<COS.SliceUploadFileParams>,
  path?: Path
): Promise<{
  data: COS.SliceUploadFileResult
  url: string
}> => {
  const { Bucket, Region } = await getConfig()
  if (!Bucket || !Region) {
    throw new Error('configValueError')
  }

  const data = await sliceUploadFileByCos(
    file,
    {
      Bucket,
      Region,
      // onTaskReady(taskId) {
      //   console.log('onTaskReady taskId', taskId)
      // },
      // onTaskStart(taskInfo) {
      //   console.log('onTaskStart taskInfo', taskInfo)
      // },
      // onHashProgress(progressData) {
      //   console.log('onHashProgress progressData', progressData)
      // },
      ...options,
    },
    path
  )

  let { Location: url } = data || {}
  if (!url.includes('http')) {
    url = `https://${url}`
  }

  return {
    data,
    url,
  }
}

const getFileNameByCosUrl = (url: string) => {
  const [host, uuidFileFullName] = url.split('/data/')

  const [uuidFileName, fileType] = uuidFileFullName.split('.')

  const [uuid, ...fileNameArr] = uuidFileName.split('__')
  const fileName = fileNameArr.join('')

  return {
    uuidFileName,
    uuidFileFullName,
    fileType,
    uuid,
    fileName,
    fileFullName: `${fileName}.${fileType}`,
    host,
  }
}

export const getCosJobInfoByRes = (data: any) => {
  const { Response } = data || {}
  const { JobsDetail } = Response || {}
  const { JobId: jobId, QueueId: queueId } = JobsDetail || {}

  return {
    jobId,
    queueId,
  }
}

const cosRequest = (params: Partial<COS.RequestParams>): Promise<COS.RequestResult> => {
  return new Promise((resolve, reject) => {
    getTencentCos().request(
      {
        Method: 'POST', // 固定值，必须
        ContentType: 'application/xml', // 固定值，必须
        ...params,
      },
      function (err, data) {
        if (err) {
          // 处理请求失败
          console.error(err)
          reject(err)
        } else {
          // 处理请求成功
          console.log('cosRequest data', data)
          resolve(data)
        }
      }
    )
  })
}

type GetBodyJsonFunc = (props: { Bucket: string; Region: string }) => any

const cosCi = async (
  getBodyJson: GetBodyJsonFunc,
  options?: {
    key: 'asr_jobs' | 'jobs'
  }
) => {
  const { Bucket, Region } = await getConfig()
  if (!Bucket || !Region) {
    throw new Error('configValueError')
  }

  const { key = `jobs` } = options || {}

  const host = `${Bucket}.ci.${Region}.myqcloud.com`
  const url = `https://${host}/${key}`

  const body = COS.util.json2xml(
    getBodyJson({
      Bucket,
      Region,
    })
  )

  return await cosRequest({
    Key: key, // 必须
    Url: url, // 请求的url，必须
    Body: body, // 请求体参数，必须
  })
}

const videoCodeMap = {
  p640: 't0e634622e8dfb49339ba478d60ddc7188', // H264-HLS-流畅
  p720: 't0fa5bdbf58bb348e88bf73fae5d674fdf', // H264-HLS-标清
  p1280: 't09d0f419921e44ed98190f355ec9fd629', // H264-HLS-高清
  p1920: 't080ae8a06f9074f3daa46201078f8d4b1', // H264-HLS-全高清
  p2048: 't0ab68939cef0f40d19c4a135df540239f', // H264-HLS-2K
  p3840: 't097d981567414454e99ae7eb7a9caf659', // H264-HLS-4K
}

type VideoCodeType = keyof typeof videoCodeMap

export const cosVideoTranscodeTask = async ({
  path,
  type = 'p640',
}: {
  path: string // 腾讯云cos文件地址
  type?: VideoCodeType
}) => {
  const { uuid, host } = getFileNameByCosUrl(path)

  const templateId = videoCodeMap[type] || videoCodeMap.p640

  const outputFilePath = `data/${uuid}/${uuidv4()}__transcode${type}`
  const outputUrl = `${host}/${outputFilePath}`

  // https://cloud.tencent.com/document/product/460/84790
  const data = await cosCi(
    ({
      Bucket, // 输出的存储桶
      Region, // 输出的存储桶的地域
    }) => ({
      Request: {
        // 创建任务的Tag：Transcode;是否必传：是
        Tag: 'Transcode',
        // 待操作的文件信息;是否必传：是
        Input: {
          // 文件路径;是否必传：是
          // Object: path,
          Url: path,
        },
        // 操作规则;是否必传：是
        Operation: {
          // TemplateId与Transcode 二选一传入
          // 转码模板 ID;是否必传：否，可通过控制台获取
          TemplateId: templateId,
          // TemplateId: 't1441225e5ed1f4bf2b9fe863178ce99f5', // 自适应 （需要自己创建）
          // 转码模板参数;是否必传：否
          // Transcode: {
          //   TimeInterval: {
          //     Start: 0,
          //     // 开始时间
          //     // [0 视频时长]
          //     // 单位为秒
          //     // 支持 float 格式，执行精度精确到毫秒

          //     Duration: 60,
          //     // 持续时间
          //     // [0 视频时长]
          //     // 单位为秒
          //     // 支持 float 格式，执行精度精确到毫秒
          //   },
          //   Container: {
          //     Format: 'hls', // 封装格式
          //     ClipConfig: {
          //       Duration: 5,
          //     },
          //   },
          //   Video: {
          //     Codec: 'H.264',
          //     // 编解码格式
          //     // H.264
          //     // H.265
          //     // VP8
          //     // VP9
          //     // AV1
          //     Width: '',
          //     // 宽
          //     // 值范围：[128, 4096]
          //     // 单位：px
          //     // 若只设置 Width 时，按照视频原始比例计算 Height
          //     // 必须为偶数
          //     Height: '',
          //     // 高
          //     // 值范围：[128, 4096]
          //     // 单位：px
          //     // 若只设置 Height 时，按照视频原始比例计算 Width
          //     // 必须为偶数
          //     Fps: '',
          //     // 帧率
          //     // 值范围：(0, 60]
          //     // 单位：fps
          //     Remove: false, // 是否删除视频流，取值 true或 false。
          //     Profile: 'high',
          //     // 编码级别
          //     // 仅H.264支持此参数
          //     // 支持 baseline、main、high、auto
          //     // 当 Pixfmt 为 auto 时，参数值将被设置为 auto
          //     // baseline：适合移动设备
          //     // main：适合标准分辨率设备
          //     // high：适合高分辨率设备
          //     Bitrate: '',
          //     // 视频输出文件的码率
          //     // 值范围：[10, 50000], 单位：Kbps
          //     // 设置为 auto 表示自适应码率
          //     Crf: '',
          //     // 码率-质量控制因子
          //     // 值范围：(0, 51]
          //     // 如果设置了 Crf，则 Bitrate 的设置失效
          //     // 当 Bitrate 为空时，默认为25
          //     Gop: '', // 关键帧间最大帧数，值范围：[1, 100000]
          //     Preset: '',
          //     // 视频算法器预置
          //     // H.264 支持该参数，取值 veryfast、fast、medium、slow、slower
          //     // VP8 支持该参数，取值 good、realtime
          //     // AV1 支持该参数，取值 universal、medium
          //     // H.265 和 VP9 不支持该参数
          //     Bufsize: '',
          //     // 缓冲区大小
          //     // 值范围：[1000, 128000]
          //     // 单位：Kb
          //     // Codec 为 VP8/VP9时不支持此参数
          //     Maxrate: '',
          //     // 视频码率峰值
          //     // 值范围：[10, 50000]
          //     // 单位：Kbps
          //     // Codec 为 VP8/VP9 时不支持此参数
          //     Pixfmt: '',
          //     // 视频颜色格式
          //     // H.264支持：yuv420p、yuv422p、yuv444p、yuvj420p、yuvj422p、yuvj444p、auto
          //     // H.265支持：yuv420p、yuv420p10le、auto
          //     // Codec 为 VP8/VP9/AV1 时不支持此参数
          //     LongShortMode: false,
          //     // 长短边自适应，取值 true或 false。Codec 为 VP8/VP9/AV1 时不支持此参数。
          //     Rotate: '',
          //     // 旋转角度
          //     // 值范围：[0, 360)
          //     // 单位：度
          //     Roi: '',
          //     // Roi 强度
          //     // 取值为 none、low、medium、high
          //     // Codec 为 VP8/VP9 时不支持此参数
          //     Crop: '',
          //     // 自由裁剪
          //     // 自定义裁切: width:height:left:top。示例:1280:800:0:140
          //     // width和height的值需要大于0，left和top的值需要大于等于0
          //     // Codec 为 H.265/AV1 时不支持此参数。
          //     // 开启自适应编码时, 不支持此参数。
          //     // 开启roi时, 不支持此参数。
          //     Interlaced: false,
          //     // 开启隔行扫描
          //     // false/true
          //     // Codec 为 H.265/AV1 时不支持此参数。
          //     // 开启自适应码率时, 不支持此参数。
          //     // 开启roi时, 不支持此参数。
          //   },
          //   Audio: {},
          //   TransConfig: {},
          //   AudioMix: {},
          //   AudioMixArray: {},
          // },
          // 水印模板 ID，可以传多个水印模板 ID，最多传3个;是否必传：否
          // WatermarkTemplateId: '',
          // 去除水印参数,  H265、AV1编码暂不支持该参数;是否必传：否
          // RemoveWatermark: {
          //   // 距离左上角原点 x 偏移，范围为[1, 4096];是否必传：是
          //   Dx: '',
          //   // 距离左上角原点 y 偏移，范围为[1, 4096];是否必传：是
          //   Dy: '',
          //   // 宽，范围为[1, 4096];是否必传：是
          //   Width: '',
          //   // 高，范围为[1, 4096];是否必传：是
          //   Height: '',
          // },
          // 字幕参数，H265、AV1编码和非mkv封装暂不支持该参数;是否必传：否
          // Subtitles: {
          //   // 字幕参数;是否必传：是
          //   Subtitle: {
          //     // 同 bucket 的字幕地址，需要 encode;是否必传：是
          //     Url: '',
          //   },
          // },
          // 结果输出配置;是否必传：是
          Output: {
            // 存储桶的地域;是否必传：是
            Region,
            // 存储结果的存储桶;是否必传：是
            Bucket,
            // 输出结果的文件名;是否必传：是
            Object: outputFilePath,
          },
          // 透传用户信息，可打印的 ASCII 码，长度不超过1024;是否必传：否
          // UserData: '',
          // // 任务优先级，级别限制：0 、1 、2 。级别越大任务优先级越高，默认为0;是否必传：否
          // JobLevel: '0',
        },
        // 任务所在的队列类型，限制为 SpeedTranscoding, 表示为开启倍速转码;是否必传：否
        QueueType: 'SpeedTranscoding',
        // 任务回调格式，JSON 或 XML，默认 XML，优先级高于队列的回调格式;是否必传：否
        // CallBackFormat: '',
        // // 任务回调类型，Url 或 TDMQ，默认 Url，优先级高于队列的回调类型;是否必传：否
        // CallBackType: 'Url',
        // // 任务回调地址，优先级高于队列的回调地址。设置为 no 时，表示队列的回调地址不产生回调;是否必传：否
        // CallBack: '',
      },
    })
  )

  const { jobId, queueId } = getCosJobInfoByRes(data)

  return {
    jobId,
    queueId,
    outputUrl,
    data,
  }
}

export const cosMulQualityVideoTranscodeTask = async ({
  path,
  types = ['p640', 'p720', 'p1280'],
}: {
  path: string // 腾讯云cos文件地址
  types?: VideoCodeType[]
}) => {
  const arr = await Promise.all(
    types.map((type) =>
      cosVideoTranscodeTask({
        path,
        type,
      })
    )
  )

  return types.reduce((obj, type, index) => {
    obj[type] = arr[index]

    return obj
  }, {} as any)
}

// https://cloud.tencent.com/document/product/460/89161
// 人声分离
export const cosVoiceSeparateTask = async ({
  path,
  audioMode = 'AudioAndBackground',
  channels = 1,
  bitrate = 128,
  samplerate = 44100,
  codec = 'mp3',
}: {
  path: string // 腾讯云cos文件地址
  audioMode?: 'IsAudio' | 'IsBackground' | 'AudioAndBackground' | 'MusicMode'

  //   输出音频
  // IsAudio：输出人声
  // IsBackground：输出背景声
  // AudioAndBackground：输出人声和背景声
  // MusicMode：输出人声、背景声、Bass声、鼓声
  channels?: 1 | 2 | 4 | 5 | 6 | 8
  // 声道数
  // 当 Codec 设置为 aac/flac，支持1、2、4、5、6、8
  // 当 Codec 设置为 mp3，支持1、2
  // 当 Codec 设置为 amr，只支持1
  // 当 Request.AudioMode 为 MusicMode 时，该参数无效

  bitrate?: number
  //   音频码率
  // 单位：Kbps
  // 值范围：[8，1000]
  // 当 Request.AudioMode 为 MusicMode 时，该参数无效

  samplerate?: 8000 | 11025 | 22050 | 32000 | 44100 | 48000 | 96000
  // 采样率
  // 单位：Hz
  // 可选 8000、11025、22050、32000、44100、48000、96000
  // 当 Codec 设置为 aac/flac 时，不支持 8000
  // 当 Codec 设置为 mp3 时，不支持 8000 和 96000
  // 当 Codec 设置为 amr 时，只支持 8000
  // 当 Request.AudioMode 为 MusicMode 时，该参数无效

  codec?: 'aac' | 'mp3' | 'flac' | 'amr'
  // 编解码格式，取值 aac、mp3、flac、amr。当 Request.AudioMode 为 MusicMode 时，仅支持 mp3、wav、acc
}) => {
  const { uuid, host } = getFileNameByCosUrl(path)

  const backgroundFilePath = `data/${uuid}/${uuidv4()}__voiceSeparateBackground.mp3`
  const audioFilePath = `data/${uuid}/${uuidv4()}__voiceSeparateAudio.mp3`

  const outputUrl = `${host}/${audioFilePath}`
  const backgroundVoiceFileUrl = `${host}/${backgroundFilePath}`

  const data = await cosCi(
    ({
      Bucket, // 输出的存储桶
      Region, // 输出的存储桶的地域
    }) => ({
      Request: {
        Tag: 'VoiceSeparate',
        Input: {
          // Object: path, // 文件名，取值为文件在当前存储桶中的完整名称
          Url: path,
        },
        Operation: {
          VoiceSeparate: {
            AudioMode: audioMode,
            AudioConfig: {
              Bitrate: bitrate,
              Channels: channels,
              Codec: codec,
              Samplerate: samplerate,
            },
          }, // 指定转码模板参数，非必须
          // TemplateId: 't1c322c75ff5cc43e0811b76e43d303d57', // 指定的模板 ID，必须
          // JobLevel: 0, // 任务优先级，级别限制：0 、1 、2。级别越大任务优先级越高，默认为0，非必须
          Output: {
            Bucket, // 输出的存储桶
            Region, // 输出的存储桶的地域
            Object: backgroundFilePath, // 输出的文件Key,背景音结果文件名，不能与 AuObject 同时为空
            AuObject: audioFilePath,
          },
        },
        // QueueId: '', // 任务所在的队列 ID，非必须
        // CallBackFormat: '', // 任务回调格式，JSON 或 XML，默认 XML，优先级高于队列的回调格式，非必须
        // CallBackType: '', // 任务回调类型，Url 或 TDMQ，默认 Url，优先级高于队列的回调类型，非必须
        // CallBack: '', // 任务回调地址，优先级高于队列的回调地址。设置为 no 时，表示队列的回调地址不产生回调，非必须
        // CallBackMqConfig: '', // 任务回调 TDMQ 配置，当 CallBackType 为 TDMQ 时必填，非必须
      },
    })
  )

  const { jobId, queueId } = getCosJobInfoByRes(data)

  return {
    jobId,
    queueId,
    outputUrl,
    data,
    backgroundVoiceFileUrl,
  }
}

// https://cloud.tencent.com/document/product/460/89163
// 语音提取
export const cosSpeechRecognitionTask = async ({
  path,
  engineModelType = '16k_zh_dialect',
  channelNum,
  filterDirty = 0,
  filterModal = 0,
  convertNumMode,
  flashAsr,
  resTextFormat,
  speakerNumber,
  filterPunc,
  firstChannelOnly,
  wordInfo,
}: {
  path: string // 腾讯云cos文件地址
  engineModelType?: '16k_zh_dialect' | '16k_zh-PY' // ｜ '16k_zh_video' | '16k_zh-PY'  // 引擎模型类型。
  //   引擎模型类型，分为电话场景和非电话场景。
  // 电话场景：
  // 8k_zh：电话 8k 中文普通话通用（可用于双声道音频）
  // 8k_zh_s：电话 8k 中文普通话话者分离（仅适用于单声道音频）
  // 8k_en：电话 8k 英语
  //  非电话场景：
  //  6k_zh：16k 中文普通话通用
  // 16k_zh_video：16k 音视频领域
  // 16k_en：16k 英语
  // 16k_ca：16k 粤语
  // 16k_ja：16k 日语
  // 16k_zh_edu：中文教育
  // 16k_en_edu：英文教育
  // 16k_zh_medical：医疗
  // 16k_th：泰语
  // 16k_zh_dialect：多方言，支持23种方言
  // 极速 ASR 支持8k_zh、16k_zh、16k_en、16k_zh_video、16k_zh_dialect、16k_ms（马来语）、16k_zh-PY（中英粤）

  resTextFormat?: 0 | 1 | 2 | 3 | 4 | 5
  //   识别结果返回形式：
  // 0：识别结果文本（含分段时间戳）
  // 1：词级别粒度的详细识别结果，不含标点，含语速值（词时间戳列表，一般用于生成字幕场景）
  // 2：词级别粒度的详细识别结果（包含标点、语速值）
  // 3：标点符号分段，包含每段时间戳，特别适用于字幕场景（包含词级时间、标点、语速值）
  // 仅支持非极速ASR

  // 注意：
  // 如果传入参数值4，需确保账号已购买语义分段资源包，或账号开启后付费；若当前账号已开启后付费功能，并传入参数值4，将自动计费
  // 如果传入参数值5，需确保账号已购买口语转书面语资源包，或账号开启后付费；若当前账号已开启后付费功能，并传入参数值5，将自动计费自动计费
  // 示例值：0
  channelNum?: 1 | 2
  //   语音声道数：
  // 1 表示单声道。EngineModelType为非电话场景仅支持单声道
  // 2 表示双声道（仅支持 8k_zh 引擎模型 双声道应分别对应通话双方）
  // 仅支持非极速ASR，为非极速ASR时，该参数必填

  filterDirty?: 0 | 1 | 2 // 是否过滤脏词（目前支持中文普通话引擎）。0：不过滤脏词。1：过滤脏词。2：将脏词替换为 * 。默认值为0。
  filterModal?: 0 | 1 | 2 // 是否过语气词（目前支持中文普通话引擎）。0：不过滤语气词。 1：部分过滤。 2：严格过滤 。默认值为 0。
  convertNumMode?: 0 | 1 | 3
  //   是否进行阿拉伯数字智能转换（目前支持中文普通话引擎）
  // 0：不转换，直接输出中文数字
  // 1：根据场景智能转换为阿拉伯数字
  // 3 ：打开数学相关数字转换
  // 仅支持非极速ASR

  speakerNumber?: 0 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  //   说话人分离人数（需配合开启说话人分离使用），取值范围：[0, 10]
  // 0 代表自动分离（目前仅支持≤6个人）
  // 1-10代表指定说话人数分离
  // 仅支持非极速ASR

  filterPunc?: 0 | 1 | 2
  //   是否过滤标点符号（目前支持中文普通话引擎）
  // 0：不过滤。
  // 1：过滤句末标点
  // 2：过滤所有标点

  flashAsr?: boolean // 开启极速ASR，取值 true/false

  firstChannelOnly?: 0 | 1
  //   是否识别首个声道
  // 0：识别所有声道
  // 1：识别首个声道
  // 仅支持极速ASR

  wordInfo?: 0 | 1 | 2
  //   是否显示词级别时间戳
  // 0：不显示
  // 1：显示，不包含标点时间戳
  // 2：显示，包含标点时间戳
  // 仅支持极速ASR
}) => {
  const { uuid, host } = getFileNameByCosUrl(path)

  const outputFilePath = `data/${uuid}/${uuidv4()}__speechRecognition.txt`
  const outputUrl = `${host}/${outputFilePath}`

  const speechRecognition: any = {
    EngineModelType: engineModelType, // 引擎模型类型
    FilterDirty: filterDirty, // 是否过滤脏词（目前支持中文普通话引擎）
    FilterModal: filterModal, // 是否过语气词（目前支持中文普通话引擎）

    OutputFileType: 'txt',
  }

  if (filterPunc !== undefined) speechRecognition.FilterModal = filterPunc

  if (flashAsr) {
    speechRecognition.FlashAsr = true
    speechRecognition.Format = 'mp3'
    // 极速ASR音频格式，支持 wav、pcm、ogg-opus、speex、silk、mp3、m4a、aac
    // 极速ASR时，该参数必填
    if (firstChannelOnly !== undefined) {
      speechRecognition.FirstChannelOnly = firstChannelOnly
    }
    if (wordInfo !== undefined) {
      speechRecognition.WordInfo = wordInfo
    }
  } else {
    speechRecognition.ChannelNum = channelNum ?? 1 // 语音声道数
    speechRecognition.ResTextFormat = resTextFormat ?? 0 // 识别结果返回形式

    speechRecognition.ConvertNumMode = convertNumMode ?? 0 // 是否进行阿拉伯数字智能转换（目前支持中文普通话引擎）

    speechRecognition.SpeakerNumber = speakerNumber ?? 0
  }

  const data = await cosCi(
    ({
      Bucket, // 输出的存储桶
      Region, // 输出的存储桶的地域
    }) => ({
      Request: {
        Tag: 'SpeechRecognition',
        Input: {
          // Object: path, /// 'ci/music.mp3', // 文件名，取值为文件在当前存储桶中的完整名称，与 Url 参数二选一
          Url: path, // 'http://examplebucket-1250000000.cos.ap-shanghai.myqcloud.com/music.mp3', // 文件的链接地址，与Object参数二选一
        },
        Operation: {
          // TemplateId: 't1552d57d742c24cde807c0f54bee336e8',
          SpeechRecognition: speechRecognition,
          Output: {
            Bucket, // 输出的存储桶
            Region, // 输出的存储桶的地域
            Object: outputFilePath, // 输出的文件 Key
          },
        },
        // QueueId: '', // 任务所在的队列 ID，非必须
        // CallBackFormat: '', // 任务回调格式，JSON 或 XML，默认 XML，优先级高于队列的回调格式，非必须
        // CallBackType: '', // 任务回调类型，Url 或 TDMQ，默认 Url，优先级高于队列的回调类型，非必须
        // CallBack: '', // 任务回调地址，优先级高于队列的回调地址。设置为 no 时，表示队列的回调地址不产生回调，非必须
        // CallBackMqConfig: '', // 任务回调 TDMQ 配置，当 CallBackType 为 TDMQ 时必填，非必须
      },
    }),
    { key: 'asr_jobs' }
  )

  const { jobId, queueId } = getCosJobInfoByRes(data)

  return {
    jobId,
    queueId,
    outputUrl,
    data,
  }
}

export const getCosJobDetail = async (jobId: string) => {
  const { Bucket, Region } = await getConfig()
  if (!Bucket || !Region) {
    throw new Error('configValueError')
  }

  const key = `jobs/${jobId}` // jobId: 需要查询的jobId;
  const host = `${Bucket}.ci.${Region}.myqcloud.com`
  const url = `https://${host}/${key}`

  return await cosRequest({
    Method: 'GET', // 固定值，必须
    ContentType: undefined,
    Key: key, // 必须
    Url: url, // 请求的url，必须
  })
}

export const searchCosMediaQueue = async (queueIds: string) => {
  const { Bucket, Region } = await getConfig()
  if (!Bucket || !Region) {
    throw new Error('configValueError')
  }

  const key = `queue`
  const host = `${Bucket}.ci.${Region}.myqcloud.com`
  const url = `https://${host}/${key}`

  return await cosRequest({
    Method: 'GET', // 固定值，必须
    ContentType: undefined,
    Key: key, // 必须
    Url: url, // 请求的url，必须
    Query: {
      // 队列 ID，支持搜索多个，以“,”符号分割字符串，最多填10个。;是否必传：否
      queueIds,
      // // 1. Active 表示队列内的作业会被媒体处理服务调度执行2. Paused 表示队列暂停，作业不再会被媒体处理调度执行，队列内的所有作业状态维持在暂停状态，已经执行中的任务不受影响;是否必传：否
      // state: '',
      // // 1. CateAll：所有类型2. Transcoding：媒体处理队列3. SpeedTranscoding：媒体处理倍速转码队列4. 默认为 Transcoding;是否必传：否
      // category: '',
      // // 第几页，默认值1;是否必传：否
      // pageNumber: '',
      // // 每页个数，默认值10;是否必传：否
      // pageSize: '',
    },
  })
}

export const cosVoiceSynthesis = async ({
  path,
  voiceType,
  volume,
  speed,
  emotion,
}: {
  path: string
  voiceType?: 'aixiaoxue' | 'aixiaoxing' | 'aixiaocheng' | 'aixiaolu' | 'aixiaodong' | 'aixiaoyang'
  // 音色，取值和限制介绍请见下表
  // https://cloud.tencent.com/document/product/460/84499#Request

  volume?: number // 音量，取值范围 [-10,10]
  speed?: number // 语速，取值范围 [50,200]
  emotion?: // 情绪，不同音色支持的情绪不同，详见下表
  | 'neutral' // 中性
    | 'arousal' // 兴奋
    | 'newscast' // 广播
    | 'customer-service' // 客服
    | 'story' // 故事
}) => {
  const isUrl = path.indexOf('http') === 0

  const fileId = uuidv4()
  const fileName = `${fileId}__voiceSynthesis.mp3`
  let outputFilePath = `data/${fileName}`
  let outputUrl = ''

  let inputType: 'Text' | 'Url/Text' = 'Text'

  if (isUrl) {
    const { uuid, host } = getFileNameByCosUrl(path)
    outputFilePath = `data/${uuid}/${fileName}`
    outputUrl = `${host}/${outputFilePath}`

    inputType = 'Url/Text'
  }

  const ttsTpl: any = {
    //   Mode: 'Asyc',
    // 处理模式
    // Asyc（异步合成）
    // Sync（同步合成）
    Codec: 'mp3',
    // 音频格式，支持 wav、mp3、pcm
    // 当 Mode= Sync 时，
    // 默认值为 wav
    // 当 Mode= Asyc 时，默认值为 pcm
  }

  if (voiceType !== undefined) {
    ttsTpl.VoiceType = voiceType
  }
  if (volume !== undefined) {
    ttsTpl.Volume = volume
  }
  if (speed !== undefined) {
    ttsTpl.Speed = speed
  }
  if (emotion !== undefined) {
    ttsTpl.Emotion = emotion
  }

  const data = await cosCi(
    ({
      Bucket, // 输出的存储桶
      Region, // 输出的存储桶的地域
    }) => {
      if (!outputUrl) {
        outputUrl = `https://${Bucket}.cos.${Region}.myqcloud.com/${outputFilePath}`
      }

      return {
        Request: {
          Tag: 'Tts',
          Operation: {
            // TemplateId: 't1552d57d742c24cde807c0f54bee336e8',
            TtsTpl: ttsTpl,
            TtsConfig: {
              // 输入类型，Url/Text;是否必传：是
              InputType: inputType,
              // 当 InputType 为 Url 时， 必须是合法的 COS 地址，文件必须是utf-8编码，且大小不超过 10M。如果合成方式为同步处理，则文件内容不超过 300 个 utf-8 字符；如果合成方式为异步处理，则文件内容不超过 10000 个 utf-8 字符。当 InputType 为 Text 时, 输入必须是 utf-8 字符, 且不超过 300 个字符。;是否必传：是
              Input: path,
            },

            Output: {
              Bucket, // 输出的存储桶
              Region, // 输出的存储桶的地域
              Object: outputFilePath, // 输出的文件 Key
            },
          },
          // QueueId: '', // 任务所在的队列 ID，非必须
          // CallBackFormat: '', // 任务回调格式，JSON 或 XML，默认 XML，优先级高于队列的回调格式，非必须
          // CallBackType: '', // 任务回调类型，Url 或 TDMQ，默认 Url，优先级高于队列的回调类型，非必须
          // CallBack: '', // 任务回调地址，优先级高于队列的回调地址。设置为 no 时，表示队列的回调地址不产生回调，非必须
          // CallBackMqConfig: '', // 任务回调 TDMQ 配置，当 CallBackType 为 TDMQ 时必填，非必须
        },
      }
    }
  )

  const { jobId, queueId } = getCosJobInfoByRes(data)

  return {
    jobId,
    queueId,
    outputUrl,
    data,
  }
}

export const cosOcrTask = async ({
  path,
  type,
  languageType,
}: {
  path: string
  type?:
    | 'general' // 表示通用印刷体识别
    | 'accurate' // 表示印刷体高精度版
    | 'efficient' // 表示印刷体精简版
    | 'fast' // 表示印刷体高速版
    | 'handwriting' // 表示手写体识别
  // ocr的识别类型，有效值为general，accurate，efficient，fast，handwriting。general表示通用印刷体识别；accurate表示印刷体高精度版；efficient表示印刷体精简版；fast表示印刷体高速版；handwriting表示手写体识别。默认值为general。;是否必传：否

  languageType?:
    | 'zh' // 中英混合
    | 'zh_rare' // 支持英文、数字、中文生僻字、繁体字，特殊符号等
    | 'auto' // 自动
    | 'mix' // 混合语种
  // type值为general时有效，表示识别语言类型。支持自动识别语言类型，同时支持自选语言种类，默认中英文混合(zh)，各种语言均支持与英文混合的文字识别。可选值：zh：中英混合zh_rare：支持英文、数字、中文生僻字、繁体字，特殊符号等auto：自动mix：混合语种jap：日语kor：韩语spa：西班牙语fre：法语ger：德语por：葡萄牙语vie：越语may：马来语rus：俄语ita：意大利语hol：荷兰语swe：瑞典语fin：芬兰语dan：丹麦语nor：挪威语hun：匈牙利语tha：泰语hi：印地语ara：阿拉伯语;是否必传：否
}) => {
  const { Bucket, Region } = await getConfig()
  if (!Bucket || !Region) {
    throw new Error('configValueError')
  }

  const data = await cosRequest({
    Method: 'GET', // 固定值，必须
    Bucket,
    Region,
    ContentType: undefined,
    Query: {
      // 数据万象处理能力，图片文字识别固定为OCR;是否必传：是
      'ci-process': 'OCR',
      // 您可以通过填写 detect-url 处理任意公网可访问的图片链接。不填写 detect-url 时，后台会默认处理 Key ，填写了 detect-url 时，后台会处理 detect-url 链接，无需再填写 Key。detect-url 示例：http://www.example.com/abc.jpg ，需要进行 UrlEncode，处理后为http%25253A%25252F%25252Fwww.example.com%25252Fabc.jpg;是否必传：否
      'detect-url': path,
      type,
      'language-type': languageType,
      // type值为general，fast时有效，表示是否开启PDF识别，有效值为true和false，默认值为false，开启后可同时支持图片和PDF的识别。;是否必传：否
      // ispdf: false,
      // // type值为general，fast时有效，表示需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且ispdf参数值为true时有效，默认值为1。;是否必传：否
      // // 'pdf-pagenumber': 0,
      // // type值为general，accurate时有效，表示识别后是否需要返回单字信息，有效值为true和false，默认为false;是否必传：否
      // isword: false,
      // // type值为handwriting时有效，表示是否开启单字的四点定位坐标输出，有效值为true和false，默认值为false。;是否必传：否
      // 'enable-word-polygon': false,
    },
  })

  return {
    data,
  }
}

// const cosVideoWorkflow = () => {
//   const { uuid, host } = getFileNameByCosUrl(path)

//   const outputFilePath = async`data/${uuid}/${uuidv4()}__speechRecognition.txt`
//   const outputUrl = `${host}/${outputFilePath}`

//   const data = await cosCi(
//     ({
//       Bucket, // 输出的存储桶
//       Region, // 输出的存储桶的地域
//     }) => ({
//       Request: {
//         Tag: 'SpeechRecognition',
//         Input: {
//           // Object: path, /// 'ci/music.mp3', // 文件名，取值为文件在当前存储桶中的完整名称，与 Url 参数二选一
//           Url: path, // 'http://examplebucket-1250000000.cos.ap-shanghai.myqcloud.com/music.mp3', // 文件的链接地址，与Object参数二选一
//         },
//         Operation: {
//           // TemplateId: 't1552d57d742c24cde807c0f54bee336e8',
//           SpeechRecognition: {
//             // FlashAsr: true,
//             EngineModelType: engineModelType, // 引擎模型类型
//             ChannelNum: channelNum, // 语音声道数
//             ResTextFormat: 3, // 识别结果返回形式
//             FilterDirty: filterDirty, // 是否过滤脏词（目前支持中文普通话引擎）
//             FilterModal: filterModal, // 是否过语气词（目前支持中文普通话引擎）
//             ConvertNumMode: convertNumMode, // 是否进行阿拉伯数字智能转换（目前支持中文普通话引擎）
//             OutputFileType: 'txt',
//           },
//           Output: {
//             Bucket, // 输出的存储桶
//             Region, // 输出的存储桶的地域
//             Object: outputFilePath, // 输出的文件 Key
//           },
//         },
//         // QueueId: '', // 任务所在的队列 ID，非必须
//         // CallBackFormat: '', // 任务回调格式，JSON 或 XML，默认 XML，优先级高于队列的回调格式，非必须
//         // CallBackType: '', // 任务回调类型，Url 或 TDMQ，默认 Url，优先级高于队列的回调类型，非必须
//         // CallBack: '', // 任务回调地址，优先级高于队列的回调地址。设置为 no 时，表示队列的回调地址不产生回调，非必须
//         // CallBackMqConfig: '', // 任务回调 TDMQ 配置，当 CallBackType 为 TDMQ 时必填，非必须
//       },
//     }),
//     { key: 'asr_jobs' }
//   )
// }

// 对于输入的视频文件进行截图和转码处理。视频转码后, 同时进行转封装处理和生成智能封面, 然后对生成的封面进行图片处理。
// <Request>
//     <MediaWorkflow>
//         <Name>workflow-1</Name>
//         <State>Active</State>
//         <Topology>
//             <Dependencies>
//                 <Start>Snapshot_1581665960536,Transcode_1581665960538</Start>
//                 <Snapshot_1581665960536>End</Snapshot_1581665960536>
//                 <Transcode_1581665960538>Segment_15816659605667,SmartCover_1581665960539</Transcode_1581665960538>
//                 <Segment_15816659605667>End</Segment_15816659605667>
//                 <SmartCover_1581665960539>PicProcess_15816659605668</SmartCover_1581665960539>
//                 <PicProcess_15816659605668>End</PicProcess_15816659605668>
//             </Dependencies>
//             <Nodes>
//                 <Start>
//                     <Type>Start</Type>
//                     <Input>
//                         <ObjectPrefix>input/workflow-1</ObjectPrefix>
//                         <NotifyConfig>
//                             <State>On</State>
//                             <Url>http://www.callback.com</Url>
//                             <Event>TaskFinish,WorkflowFinish</Event>
//                             <Type>Url</Type>
//                             <ResultFormat>JSON</ResultFormat>
//                         </NotifyConfig>
//                         <ExtFilter>
//                             <State>On</State>
//                             <Video>true</Video>
//                             <Audio>false</Audio>
//                             <Image>false</Image>
//                             <Custom>false</Custom>
//                             <AllFile>false</AllFile>
//                         </ExtFilter>
//                     </Input>
//                 </Start>
//                 <Snapshot_1581665960536>
//                     <Type>Snapshot</Type>
//                     <Operation>
//                         <TemplateId>t1460606b9752148c4ab182f55163ba7cd</TemplateId>
//                         <Output>
//                             <Region>ap-chongqing</Region>
//                             <Bucket>test-1234567890</Bucket>
//                             <Object>abc/${RunId}/snapshot-${number}.${Ext}</Object>
//                             <SpriteObject>abc/${RunId}/sprite-${number}.${Ext}</SpriteObject>
//                         </Output>
//                     </Operation>
//                 </Snapshot_1581665960536>
//                 <Transcode_1581665960538>
//                     <Type>Transcode</Type>
//                     <Operation>
//                         <TemplateId>t16e81a29fe48c4e23acefc247a7792b63</TemplateId>
//                         <Output>
//                             <Region>ap-chongqing</Region>
//                             <Bucket>test-1234567890</Bucket>
//                             <Object>bcd/${RunId}/trans.{Ext}</Object>
//                         </Output>
//                     </Operation>
//                 </Transcode_1581665960538>
//                 <Segment_15816659605667>
//                     <Type>Segment</Type>
//                     <Operation>
//                         <Segment>
//                             <Format>mkv</Format>
//                             <Duration>20</Duration>
//                         </Segment>
//                         <Output>
//                             <Region>ap-chongqing</Region>
//                             <Bucket>test-1234567890</Bucket>
//                             <Object>test-trans${Number}.{Ext}</Object>
//                         </Output>
//                     </Operation>
//                 </Segment_15816659605667>
//                 <SmartCover_1581665960539>
//                     <Type>SmartCover</Type>
//                     <Operation>
//                         <TemplateId>t16e81a29fe48c4e23acefc247a7792b63</TemplateId>
//                         <Output>
//                             <Region>ap-chongqing</Region>
//                             <Bucket>test-1234567890</Bucket>
//                             <Object>abc/${RunId}/cover-${Number}.{Ext}</Object>
//                         </Output>
//                     </Operation>
//                 </SmartCover_1581665960539>
//                 <PicProcess_15816659605668>
//                     <Type>PicProcess</Type>
//                     <Operation>
//                         <TemplateId>t1460606b9752148c4ab182f55163ba7cd</TemplateId>
//                         <Output>
//                             <Region>ap-chongqing</Region>
//                             <Bucket>test-1234567890</Bucket>
//                             <Object>bcd/${RunId}/pic.{Ext}</Object>
//                         </Output>
//                     </Operation>
//                 </PicProcess_15816659605668>
//             </Nodes>
//         </Topology>
//     </MediaWorkflow>
// </Request>
