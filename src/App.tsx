import { Route, Routes } from 'react-router-dom'

import DefaultLayout from './layouts/DefaultLayout'

import Login from './pages/Login'
import Main from './pages/Main'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/costs" element={<Main />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
