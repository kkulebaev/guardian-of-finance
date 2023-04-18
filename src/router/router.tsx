import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import DefaultLayout from '../layouts/DefaultLayout'
import Dashboard from '../pages/Dashboard'
import Costs from '../pages/Costs'
import EmptyLayout from '../layouts/EmptyLayout'
import Login from '../pages/Login'
import Registration from '../pages/Registration'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/costs" element={<Costs />} />
      </Route>
      <Route element={<EmptyLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Route>
    </Route>
  )
)
