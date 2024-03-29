import { useEffect, useState } from 'react'
import { Avatar, notification, Upload } from 'antd'
import type { UploadChangeParam } from 'antd/es/upload'
import { UploadFile } from 'antd/es/upload/interface'
import { getAvatar, JPG_EXT } from '../api/services/profile/get-avatar'
import UploadButton from './UploadButton'
import { postAvatar } from '../api/services/profile/post-avatar'
import { checkUploadAvatar } from '../utils/check-upload-avatar'

interface ProfileAvatarProps {
  userId: string
}

function ProfileAvatar({ userId }: ProfileAvatarProps) {
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState<string>()

  async function uploadAvatar(file: UploadFile) {
    if (!file.originFileObj) return

    setLoading(true)
    const { error } = await postAvatar(userId, file.originFileObj)
    if (!error) {
      setImageUrl(URL.createObjectURL(file.originFileObj))
    }
    setLoading(false)
  }

  async function handleChange(info: UploadChangeParam) {
    const file = info.fileList[0]

    const [isCorrect, errorMsg] = checkUploadAvatar(file)
    if (isCorrect || !file.originFileObj) {
      const message = errorMsg ?? 'Error'
      notification.error({ message })
      return
    }

    await uploadAvatar(file)
  }

  useEffect(() => {
    // TODO: Исправить скачивание аватарки каждый раз
    function downloadAvatar() {
      setLoading(true)
      getAvatar(userId)
        .then(url => {
          setImageUrl(url)
        })
        .catch(e => {
          if (e instanceof Error) notification.error({ message: e.message })
        })
        .finally(() => {
          setLoading(false)
        })
    }

    downloadAvatar()
  }, [userId])

  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      accept={JPG_EXT}
      maxCount={1}
      showUploadList={false}
      beforeUpload={() => false}
      onChange={handleChange}
    >
      <div className="flex justify-center items-center w-72 h-72">
        {!loading && imageUrl ? (
          <Avatar src={imageUrl} size={280} shape="square" alt="avatar" />
        ) : (
          <UploadButton loading={loading} />
        )}
      </div>
    </Upload>
  )
}

export default ProfileAvatar
