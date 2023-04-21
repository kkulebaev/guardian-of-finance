import { UploadFile } from 'antd/es/upload/interface'

export function checkUploadAvatar(file: UploadFile): [boolean, string] {
  const isJpg = file.type === 'image/jpeg'
  if (!isJpg) {
    return [true, 'You can only upload JPG file']
  }

  if (!file.size) {
    return [true, 'Unable to determine image size']
  }

  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    return [true, 'Image must smaller than 2MB']
  }

  return [false, '']
}
