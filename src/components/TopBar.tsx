import React from 'react'
import { Button } from 'antd'
import { ExportOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { signOut } from '../api/services/auth/sign-out'

function TopBar() {
  const navigate = useNavigate()

  const { mutate: onSignOutHandler, isLoading } = useMutation(signOut, {
    onSuccess: ({ error }) => {
      if (!error) {
        navigate({ pathname: '/login' })
      }
    },
  })

  return (
    <div className="flex justify-end gap-2 items-center h-full">
      <Button
        className="flex items-center text-indigo-100"
        type="link"
        size="large"
        icon={<ExportOutlined />}
        loading={isLoading}
        onClick={() => onSignOutHandler()}
      >
        Logout
      </Button>
    </div>
  )
}

export default TopBar
