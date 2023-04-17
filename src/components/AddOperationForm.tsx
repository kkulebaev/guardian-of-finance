import type { Dayjs } from 'dayjs'
import React, { useEffect, useState } from 'react'
import {
  Button,
  type CheckboxOptionType,
  DatePicker,
  Form,
  InputNumber,
  Select,
} from 'antd'
import { USERS } from '../helpers'
import { getCategories } from '../api/services2/get-categories'
import {
  ICategories,
  ICategory,
  IOperation,
  IUser,
} from '../api/types/custom.types'

interface FormFields {
  month: Dayjs
  user: CheckboxOptionType
  category: CheckboxOptionType
  sum: number
}

interface AddOperationFormProps {
  createOperation: (operation: Omit<IOperation, 'id'>) => void
  loading?: boolean
}

function AddOperationForm({ createOperation, loading }: AddOperationFormProps) {
  const [month, setMonth] = useState<Dayjs | null>(null)
  const [user, setUser] = useState<number | null>(null)
  const [category, setCategory] = useState<ICategories | null>(null)
  const [sum, setSum] = useState(0)

  const [categories, setCategories] = useState<ICategories | null>(null)

  useEffect(() => {
    getCategories().then(res => {
      setCategories(res.data)
    })
  }, [])

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
      <Form.Item className="w-full" label="Month" name="month" colon={false}>
        <DatePicker
          className="w-full"
          picker="month"
          format="MMMM YYYY"
          value={month}
          allowClear={false}
          onChange={setMonth}
        />
      </Form.Item>
      <Form.Item className="w-full" label="Name" name="user" colon={false}>
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
        label="Category"
        name="category"
        colon={false}
      >
        <Select
          className="w-full"
          value={category}
          options={categories?.map(x => ({ value: x.id, label: x.label }))}
          labelInValue
          onChange={setCategory}
        />
      </Form.Item>
      <Form.Item className="w-full" label="Amount" name="sum" colon={false}>
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
