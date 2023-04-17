import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Input } from 'antd'
import AppLogo from '../components/AppLogo'
import { Credentials } from '../api/types/custom.types'
import { signIn } from '../api/services/auth/sign-in'

function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const onFinish = (creds: Credentials) => {
    setIsLoading(true)
    signIn(creds)
      .then(res => {
        if (!res.error) {
          navigate('/')
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      className="flex flex-col w-full max-w-xs"
      name="basic"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <AppLogo className="mb-4" />
      <Form.Item
        label="Логин"
        name="email"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Button
        className="ml-auto"
        type="dashed"
        htmlType="submit"
        loading={isLoading}
      >
        Войти
      </Button>
    </Form>
  )
}

export default Login
