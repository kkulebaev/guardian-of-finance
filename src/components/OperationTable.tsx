import React from 'react'
import { Table } from 'antd'
import { v4 as uuidv4 } from 'uuid'
import { ColumnsType } from 'antd/es/table'

interface OperationTableProps<T> {
  dataSource: T[]
  columns: ColumnsType<T>
  loading?: boolean
}

function OperationTable<T extends object>({
  dataSource,
  columns,
  loading,
}: OperationTableProps<T>) {
  const getUniqRowKey = () => uuidv4()

  return (
    <Table
      className="w-full"
      columns={columns}
      dataSource={dataSource}
      rowKey={getUniqRowKey}
      loading={loading}
    />
  )
}

OperationTable.defaultProps = {
  loading: false,
}

export default OperationTable
