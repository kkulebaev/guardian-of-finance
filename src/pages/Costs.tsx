import React from 'react'
import { Button } from 'antd'
import { ColumnsType } from 'antd/es/table'
import * as dayjs from 'dayjs'

import AddOperationForm from '../components/AddOperationForm'
import OperationTable from '../components/OperationTable'
import { IOperationDB } from '../api/types/custom.types'
import { useGetOperations } from '../api/services/use-get-operations'
import { useDeleteOperation } from '../api/services/use-delete-operation'
import { useCreateOperations } from '../api/services/use-create-operations'

function Costs() {
  const { isLoading, data: operations } = useGetOperations()
  const { mutate: createOperation, isLoading: loadingCreate } =
    useCreateOperations()
  const { mutate: deleteOperation } = useDeleteOperation()

  const OPERATION_COLS: ColumnsType<IOperationDB> = [
    {
      title: 'Дата',
      dataIndex: 'month',
      align: 'center',
      width: 200,
      render: value => (value ? dayjs(value).format('MMMM') : null),
    },
    {
      title: 'Имя',
      dataIndex: ['users', 'name'],
      align: 'center',
    },
    {
      title: 'Категория',
      dataIndex: ['categories', 'label'],
      align: 'center',
    },
    {
      title: 'Сумма',
      dataIndex: 'amount',
      align: 'center',
      render: value => (value ? value.toLocaleString() : null),
    },
    {
      title: ' ',
      key: 'action',
      align: 'right',
      width: 100,
      render: (_, record) => (
        <Button danger onClick={() => deleteOperation(record.id)}>
          Удалить
        </Button>
      ),
    },
  ]

  return (
    <div className="grid place-items-center">
      <AddOperationForm
        createOperation={createOperation}
        loading={loadingCreate}
      />
      <OperationTable
        dataSource={operations?.length ? operations : []}
        loading={isLoading}
        columns={OPERATION_COLS}
      />
    </div>
  )
}

export default Costs
