import type { Dayjs } from 'dayjs'
import React, { useState } from 'react'
import {
  Button,
  type CheckboxOptionType,
  DatePicker,
  Form,
  InputNumber,
  Select,
} from 'antd'
import { CATEGORIES, USERS } from '../helpers'
import { Categories, ICategory, IOperation, IUser } from '../types'

interface FormFields {
  month: Dayjs
  user: CheckboxOptionType
  category: CheckboxOptionType
  sum: number
}

interface AddOperationFormProps {
  createOperation: (operation: IOperation) => void
  loading?: boolean
}

function AddOperationForm({ createOperation, loading }: AddOperationFormProps) {
  const [month, setMonth] = useState<Dayjs | null>(null)
  const [user, setUser] = useState<number | null>(null)
  const [category, setCategory] = useState<Categories>(Categories.rent)
  const [sum, setSum] = useState(0)

  const sumHandler = (value: number | null) => {
    if (!value) return
    setSum(value)
  }

  const formSubmitHandler = (operation: FormFields) => {
    const selectedUser = {
      id: operation.user.value,
      name: operation.user.label,
    } as IUser

    const selectedCat = {
      id: operation.category.value,
      label: operation.category.label,
    } as ICategory

    createOperation({
      user: selectedUser,
      month: operation.month.toISOString(),
      category: selectedCat,
      sum: operation.sum,
    })
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
      <Form.Item className="w-full" label="Имя" name="user" colon={false}>
        <Select
          className="w-full"
          value={user}
          options={USERS.map(x => ({ value: x.id, label: x.name }))}
          labelInValue
          onChange={setUser}
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
          labelInValue
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
      <Button className="ml-auto" htmlType="submit" loading={loading}>
        Добавить
      </Button>
    </Form>
  )
}

AddOperationForm.defaultProps = {
  loading: false,
}

export default AddOperationForm
