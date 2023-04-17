import {
  BarChartOutlined,
  DollarCircleOutlined,
  LeftOutlined,
} from '@ant-design/icons'
import { MenuProps } from 'antd'
import { NavLink } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number]

// TODO: Типизировать роуты, чтобы label нельзя было ошибиться в NavLink to
export const NAV_ITEMS: MenuItem[] = [
  {
    label: <NavLink to="/"> Dashboard </NavLink>,
    key: '1',
    icon: <BarChartOutlined />,
  },
  {
    label: <NavLink to="/costs"> Costs </NavLink>,
    key: '2',
    icon: <DollarCircleOutlined />,
  },
  {
    label: <NavLink to="/login"> Logout </NavLink>,
    key: '3',
    icon: <LeftOutlined />,
  },
]
