import { BarChartOutlined, DollarCircleOutlined } from '@ant-design/icons'
import { MenuProps } from 'antd'
import { NavLink } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number]

// TODO: Типизировать роуты, чтобы label нельзя было ошибиться в NavLink to
export const NAV_ITEMS: MenuItem[] = [
  {
    label: <NavLink to="/"> Дашбоард </NavLink>,
    key: '1',
    icon: <BarChartOutlined />,
  },
  {
    label: <NavLink to="/costs"> Расходы </NavLink>,
    key: '2',
    icon: <DollarCircleOutlined />,
  },
]
