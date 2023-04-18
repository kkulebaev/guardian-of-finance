import {
  BarChartOutlined,
  DollarCircleOutlined,
  LeftOutlined,
} from '@ant-design/icons'
import { MenuProps } from 'antd'
import { NavLink } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number]

export const enum NAV {
  dashboard = 'Dashboard',
  costs = 'Costs',
  logout = 'Logout',
}

// TODO: Типизировать роуты, чтобы label нельзя было ошибиться в NavLink to
export const NAV_ITEMS: MenuItem[] = [
  {
    title: NAV.dashboard,
    label: <NavLink to="/"> Dashboard </NavLink>,
    key: NAV.dashboard,
    icon: <BarChartOutlined />,
  },
  {
    title: NAV.costs,
    label: <NavLink to="/costs"> Costs </NavLink>,
    key: NAV.costs,
    icon: <DollarCircleOutlined />,
  },
  {
    title: NAV.logout,
    label: NAV.logout,
    key: NAV.logout,
    icon: <LeftOutlined />,
  },
]
