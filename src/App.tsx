import './App.css'
import AddOperationForm from './components/AddOperationForm'

function App() {
  return (
    <div className="grid place-items-center">
      <h2>Форма для добавления расходов за месяц</h2>
      <AddOperationForm />
    </div>
  )
}

export default App
