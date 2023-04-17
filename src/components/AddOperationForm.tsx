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
import { getCategories } from '../api/services/get-categories'
import { ICategories, IOperation, IUser } from '../api/types/custom.types'
import { getUsers } from '../api/services/get-users'

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
  const [category, setCategory] = useState<ICategories | null>(null)
  const [sum, setSum] = useState(0)

  const [categories, setCategories] = useState<ICategories | null>(null)
  const [users, setUsers] = useState<IUser[] | null>(null)

  useEffect(() => {
    getCategories().then(res => {
      setCategories(res.data)
    })

    getUsers().then(res => {
      setUsers(res.data)
    })
  }, [])

  const sumHandler = (value: number | null) => {
    if (!value) return
    setSum(value)
  }

  const formSubmitHandler = (operation: FormFields) => {
    createOperation({
      userId: operation.user.value as number,
      month: operation.month.toISOString(),
      categoryId: operation.category.value as number,
      amount: operation.sum,
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
          options={users?.map(x => ({ value: x.id, label: x.name }))}
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
