import React from 'react'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { IOperationDB } from '../api/types/custom.types'

interface OperationTableProps {
  dataSource: IOperationDB[]
  columns: ColumnsType<IOperationDB>
  loading?: boolean
}

function OperationTable({ dataSource, columns, loading }: OperationTableProps) {
  return (
    <Table
      className="w-full"
      columns={columns}
      dataSource={dataSource}
      rowKey="id"
      loading={loading}
    />
  )
}

OperationTable.defaultProps = {
  loading: false,
}

export default OperationTable
