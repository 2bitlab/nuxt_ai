import COS from 'cos-js-sdk-v5'
import { v4 as uuidv4 } from 'uuid'
import { getCredentialAuth } from './getCredentialAuth'

let cos: COS

type Path = `/${string}`

export const getTencentCos = () => {
  if (!cos) {
    cos = new COS({
      getAuthorization: (_, callback) => {
        getCredentialAuth().then((credential) => {
          callback(credential as any)
        })
      },
    })
  }

  return cos
}

export const uploadFileByCos = (
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
