import { BarChartOutlined, DollarCircleOutlined } from '@ant-design/icons'
import { MenuProps } from 'antd'
import { NavLink } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number]

const enum NAV {
  dashboard = '/',
  costs = '/costs',
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
]
