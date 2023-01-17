import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Input } from 'antd'

function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const onFinish = (values: any) => {
    console.log('Success:', values)
    setIsLoading(true)
    setTimeout(() => {
      navigate('/')
      setIsLoading(false)
    }, 2000)
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
      <Form.Item
        label="Логин"
        name="username"
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
