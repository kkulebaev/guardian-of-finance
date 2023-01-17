import React from 'react'
import { Table } from 'antd'
import { v4 as uuidv4 } from 'uuid'

import { IOperation } from '../types'
import { OPERATION_COLS } from '../helpers'

interface OperationTableProps {
  dataSource: IOperation[]
  loading?: boolean
}

function OperationTable({ dataSource, loading }: OperationTableProps) {
  const getUniqRowKey = () => uuidv4()

  return (
    <Table
      className="w-full"
      columns={OPERATION_COLS}
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
