import React, { useEffect, useState } from 'react'
import { Button, notification } from 'antd'
import { ColumnsType } from 'antd/es/table'
import * as dayjs from 'dayjs'

import AddOperationForm from '../components/AddOperationForm'
import OperationTable from '../components/OperationTable'
import { apiClient } from '../api'
import { IOperation, IOperationDB } from '../api/types/custom.types'
import { addOperation } from '../api/services2/add-operation'
import { getOperations } from '../api/services2/get-operations'

function Costs() {
  const [operations, setOperations] = useState<IOperationDB[] | null>(null)
  const [loadingData, setLoadingData] = useState(false)
  const [loadingCreate, setLoadingCreate] = useState(false)

  async function fetchOperations(): Promise<IOperationDB[] | null> {
    setLoadingData(true)

    try {
      const { data } = await getOperations()
      return data
    } catch (error) {
      notification.error({ message: 'Не удалось загрузить операции' })
      return []
    } finally {
      setLoadingData(false)
    }
  }

  async function createOperations(operation: IOperation): Promise<void> {
    setLoadingCreate(true)
    try {
      const { error } = await addOperation(operation)
      if (error) throw Error(error.message)

      notification.success({ message: 'Операция успешно добавлена' })
    } catch (error) {
      notification.error({ message: 'Ошибка при создании новой операции' })
    } finally {
      setLoadingCreate(false)
    }
  }

  async function deleteOperation(id: string) {
    try {
      await apiClient.costs.deleteOperation(id)
      notification.success({ message: 'Операция успешно удалена' })
      setOperations(operations?.filter(x => x.id !== id) ?? null)
    } catch (error) {
      notification.error({ message: 'Ошибка при удалении операции' })
    }
  }

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
      dataIndex: 'userId',
      align: 'center',
    },
    {
      title: 'Категория',
      dataIndex: 'categoryId',
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

  useEffect(() => {
    fetchOperations().then(data => setOperations(data))
  }, [])

  return (
    <div className="grid place-items-center">
      <AddOperationForm
        createOperation={createOperations}
        loading={loadingCreate}
      />
      <OperationTable
        dataSource={operations?.length ? operations : []}
        loading={loadingData}
        columns={OPERATION_COLS}
      />
    </div>
  )
}

export default Costs
