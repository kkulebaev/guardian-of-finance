import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { Button, Form, Input, notification } from 'antd'
import AppLogo from '../components/AppLogo'
import { signIn } from '../api/services/auth/sign-in'

function Login() {
  const navigate = useNavigate()

  const { mutate: onSignInHandler, isLoading } = useMutation(signIn, {
    onSuccess: ({ error }) => {
      if (!error) {
        navigate({ pathname: '/' })
      } else {
        notification.error({ message: error.message })
      }
    },
  })

  return (
    <Form
      className="flex flex-col w-full max-w-xs"
      name="basic"
      layout="vertical"
      onFinish={onSignInHandler}
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
