import React from 'react'
import { Table } from 'antd'
import { v4 as uuidv4 } from 'uuid'

import { IOperation } from '../types'
import { OPERATION_COLS } from '../helpers'

interface OperationTableProps {
  dataSource: IOperation[]
}

function OperationTable({ dataSource }: OperationTableProps) {
  const getUniqRowKey = () => uuidv4()

  return (
    <Table
      className="w-full"
      columns={OPERATION_COLS}
      dataSource={dataSource}
      rowKey={getUniqRowKey}
    />
  )
}

export default OperationTable
