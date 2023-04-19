import React from 'react'
import { NavLink } from 'react-router-dom'
import { MenuProps } from 'antd'
import {
  BarChartOutlined,
  DollarCircleOutlined,
  IdcardOutlined,
} from '@ant-design/icons'

import Profile from '../pages/Profile'
import Dashboard from '../pages/Dashboard'
import Costs from '../pages/Costs'

export const MAIN_MENU = [
  {
    title: 'Profile',
    path: '/',
    element: <Profile />,
    icon: <IdcardOutlined />,
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    element: <Dashboard />,
    icon: <BarChartOutlined />,
  },
  {
    title: 'Costs',
    path: '/costs',
    element: <Costs />,
    icon: <DollarCircleOutlined />,
  },
]

export type MenuItem = Required<MenuProps>['items'][number]

// TODO: Типизировать роуты, чтобы label нельзя было ошибиться в NavLink to
export const NAV_ITEMS: MenuItem[] = MAIN_MENU.map(x => ({
  title: x.title,
  label: <NavLink to={x.path}> {x.title} </NavLink>,
  key: x.path,
  icon: x.icon,
}))
