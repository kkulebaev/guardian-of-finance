import React from 'react'
import { Table } from 'antd'
import { IOperation } from '../types'
import { OPERATION_COLS } from '../helpers'

interface OperationTableProps {
  dataSource: IOperation[]
}

function OperationTable({ dataSource }: OperationTableProps) {
  return (
    <Table
      className="w-full"
      columns={OPERATION_COLS}
      dataSource={dataSource}
    />
  )
}

export default OperationTable
