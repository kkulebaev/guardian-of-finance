import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'

interface UploadButtonProps {
  loading: boolean
}

function UploadButton({ loading }: UploadButtonProps) {
  return (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="m-2">Upload</div>
    </div>
  )
}

export default UploadButton
