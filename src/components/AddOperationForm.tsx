import React, { useState } from 'react'
import type { Dayjs } from 'dayjs'
import { Button, DatePicker, Form, InputNumber, Select } from 'antd'
import { useGetCategories } from '../api/services/use-get-categories'
import { ICategories, IOperation } from '../api/types/custom.types'
import { useGetUsers } from '../api/services/use-get-users'

interface FormFields {
  month: Dayjs
  userId: number
  categoryId: number
  amount: number
}

interface AddOperationFormProps {
  createOperation: (operation: IOperation) => void
  loading?: boolean
}

function AddOperationForm({ createOperation, loading }: AddOperationFormProps) {
  const [month, setMonth] = useState<Dayjs | null>(null)
  const [user, setUser] = useState<number | null>(null)
  const [category, setCategory] = useState<ICategories | null>(null)
  const [amount, setAmount] = useState(0)

  const { isLoading: isLoadingCats, data: categories } = useGetCategories()
  const { isLoading: isLoadingUsers, data: users } = useGetUsers()

  const amountHandler = (value: number | null) => {
    if (!value) return
    setAmount(value)
  }

  const formSubmitHandler = (operation: FormFields) => {
    createOperation({
      ...operation,
      month: operation.month.toISOString(),
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
      <Form.Item className="w-full" label="Name" name="user_id" colon={false}>
        <Select
          className="w-full"
          value={user}
          options={users?.map(x => ({ value: x.id, label: x.name }))}
          loading={isLoadingUsers}
          onChange={setUser}
        />
      </Form.Item>
      <Form.Item
        className="w-full"
        label="Category"
        name="category_id"
        colon={false}
      >
        <Select
          className="w-full"
          value={category}
          options={categories?.map(x => ({ value: x.id, label: x.label }))}
          loading={isLoadingCats}
          onChange={setCategory}
        />
      </Form.Item>
      <Form.Item className="w-full" label="Amount" name="amount" colon={false}>
        <InputNumber
          className="w-full"
          value={amount}
          step={1000}
          onChange={amountHandler}
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
