import React, { useState } from 'react'
import AddOperationForm from '../components/AddOperationForm'
import { IOperation } from '../types'

function Main() {
  const [operations, setOperations] = useState<IOperation[]>([])

  return (
    <div className="grid place-items-center">
      <h2>Форма для добавления расходов за месяц</h2>
      <AddOperationForm
        createOperation={operation => setOperations([...operations, operation])}
      />
      <div>
        {operations.map(o => (
          <span key={o.userId + o.month + o.category}>{o.category}</span>
        ))}
      </div>
    </div>
  )
}

export default Main
