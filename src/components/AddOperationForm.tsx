import type { Dayjs } from 'dayjs'
import React, { useState } from 'react'
import { Button, DatePicker, Form, InputNumber, Select } from 'antd'
import { CATEGORIES, USERS } from '../helpers'
import { Categories, IOperation } from '../types'

interface FormFields {
  month: Dayjs
  userId: number
  category: Categories
  sum: number
}

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

  const formSubmitHandler = (operation: FormFields) => {
    createOperation({ ...operation, month: operation.month.toISOString() })
  }

  return (
    <Form className="flex gap-4 w-full" onFinish={formSubmitHandler}>
      <Form.Item className="w-full" label="Месяц" name="month" colon={false}>
        <DatePicker
          className="w-full"
          picker="month"
          format="MMMM YYYY"
          value={month}
          allowClear={false}
          onChange={setMonth}
        />
      </Form.Item>
      <Form.Item className="w-full" label="Имя" name="userId" colon={false}>
        <Select
          className="w-full"
          value={userId}
          options={USERS.map(x => ({ value: x.id, label: x.name }))}
          onChange={setUserId}
        />
      </Form.Item>
      <Form.Item
        className="w-full"
        label="Категория"
        name="category"
        colon={false}
      >
        <Select
          className="w-full"
          value={category}
          options={CATEGORIES.map(x => ({ value: x.id, label: x.label }))}
          onChange={setCategory}
        />
      </Form.Item>
      <Form.Item className="w-full" label="Сумма" name="sum" colon={false}>
        <InputNumber
          className="w-full"
          value={sum}
          step={1000}
          onChange={sumHandler}
        />
      </Form.Item>
      <Button className="ml-auto" htmlType="submit">
        Добавить
      </Button>
    </Form>
  )
}

export default AddOperationForm
