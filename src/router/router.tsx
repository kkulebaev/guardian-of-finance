import { createBrowserRouter } from 'react-router-dom'
import DefaultLayout from '../layouts/DefaultLayout'
import EmptyLayout from '../layouts/EmptyLayout'
import Login from '../pages/Login'
import Registration from '../pages/Registration'
import { MAIN_MENU, NAV_ITEMS } from './nav'

export const router = createBrowserRouter([
  {
    element: <DefaultLayout navItems={NAV_ITEMS} />,
    children: MAIN_MENU,
  },

  {
    element: <EmptyLayout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/registration',
        element: <Registration />,
      },
    ],
  },
])
