import React, { useEffect, useState } from 'react'
import { notification } from 'antd'

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

  async function createOperations(operation: IOperation): Promise<void> {
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

  useEffect(() => {
    fetchOperations().then(data => setOperations(data))
  }, [])

  return (
    <div className="grid place-items-center">
      <AddOperationForm
        createOperation={createOperations}
        loading={loadingCreate}
      />
      <OperationTable dataSource={operations} loading={loadingData} />
    </div>
  )
}

export default Costs
