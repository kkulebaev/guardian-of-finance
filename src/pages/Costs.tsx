import React, { useEffect, useState } from 'react'
import { Button, notification } from 'antd'
import { ColumnsType } from 'antd/es/table'
import * as dayjs from 'dayjs'

import AddOperationForm from '../components/AddOperationForm'
import { IOperation } from '../types'
import OperationTable from '../components/OperationTable'
import { apiClient } from '../api'

function Costs() {
  const [operations, setOperations] = useState<IOperation[]>([])
  const [loadingData, setLoadingData] = useState(false)
  const [loadingCreate, setLoadingCreate] = useState(false)

  async function fetchOperations(): Promise<IOperation[]> {
    setLoadingData(true)

    try {
      const { data } = await apiClient.costs.getOperations()
      return data
    } catch (error) {
      notification.error({ message: 'Не удалось загрузить операции' })
      return []
    } finally {
      setLoadingData(false)
    }
  }

  async function createOperations(
    operation: Omit<IOperation, 'id'>
  ): Promise<void> {
    setLoadingCreate(true)
    try {
      const { data } = await apiClient.costs.addOperation(operation)
      notification.success({ message: 'Операция успешно добавлена' })
      setOperations([...operations, data])
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
      setOperations(operations.filter(x => x.id !== id))
    } catch (error) {
      notification.error({ message: 'Ошибка при удалении операции' })
    }
  }

  const OPERATION_COLS: ColumnsType<IOperation> = [
    {
      title: 'Дата',
      dataIndex: 'month',
      align: 'center',
      width: 200,
      render: value => (value ? dayjs(value).format('MMMM') : null),
    },
    {
      title: 'Имя',
      dataIndex: ['user', 'name'],
      align: 'center',
    },
    {
      title: 'Категория',
      dataIndex: ['category', 'label'],
      align: 'center',
    },
    {
      title: 'Сумма',
      dataIndex: 'sum',
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
        dataSource={operations}
        loading={loadingData}
        columns={OPERATION_COLS}
      />
    </div>
  )
}

export default Costs
