import type { Dayjs } from 'dayjs'
import React, { useState } from 'react'
import { Button, DatePicker, Form, InputNumber, Select } from 'antd'
import { CATEGORIES, USERS } from '../helpers'
import { Categories, IOperation } from '../types'

interface AddOperationFormProps {
  createOperation: (operation: IOperation) => void
}
function AddOperationForm({ createOperation }: AddOperationFormProps) {
  const [month, setMonth] = useState<Dayjs | null>(null)
  const [userId, setUserId] = useState<number | null>(null)
  const [category, setCategory] = useState<Categories>(Categories.rent)
  const [sum, setSum] = useState(0)

  const sumHandler = (value: number | null) => {
    if (!value) return
    setSum(value)
  }

  const formSubmitHandler = (operation: IOperation) => {
    createOperation(operation)
  }

  return (
    <Form className="max-w-5xl" layout="vertical" onFinish={formSubmitHandler}>
      <Form.Item label="Месяц" name="month" colon={false}>
        <DatePicker
          picker="month"
          format="MMMM YYYY"
          value={month}
          allowClear={false}
          onChange={setMonth}
        />
      </Form.Item>
      <Form.Item label="Имя" name="userId" colon={false}>
        <Select
          value={userId}
          options={USERS.map(x => ({ value: x.id, label: x.name }))}
          onChange={setUserId}
        />
      </Form.Item>
      <Form.Item label="Категория" name="category" colon={false}>
        <Select
          value={category}
          options={CATEGORIES.map(x => ({ value: x.id, label: x.label }))}
          onChange={setCategory}
        />
      </Form.Item>
      <Form.Item label="Сумма" name="sum" colon={false}>
        <InputNumber
          className="w-full"
          value={sum}
          step={1000}
          onChange={sumHandler}
        />
      </Form.Item>
      <Button htmlType="submit">Добавить</Button>
    </Form>
  )
}

export default AddOperationForm
