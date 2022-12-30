import React, { useState } from 'react'
import AddOperationForm from '../components/AddOperationForm'
import { IOperation } from '../types'
import OperationTable from '../components/OperationTable'

function Main() {
  const [operations, setOperations] = useState<IOperation[]>([])

  return (
    <div className="grid place-items-center">
      <AddOperationForm
        createOperation={operation => setOperations([...operations, operation])}
      />
      <OperationTable dataSource={operations} />
    </div>
  )
}

export default Main
