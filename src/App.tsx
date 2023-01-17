import { Route, Routes } from 'react-router-dom'

import DefaultLayout from './layouts/DefaultLayout'

import Login from './pages/Login'
import Costs from './pages/Costs'
import Dashboard from './pages/Dashboard'
import EmptyLayout from './layouts/EmptyLayout'
import Registration from './pages/Registration'

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/costs" element={<Costs />} />
      </Route>
      <Route element={<EmptyLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Route>
    </Routes>
  )
}

export default App
