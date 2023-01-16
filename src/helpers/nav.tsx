import { DesktopOutlined } from '@ant-design/icons'
import { MenuProps } from 'antd'

type MenuItem = Required<MenuProps>['items'][number]

export const NAV_ITEMS: MenuItem[] = [
  { label: 'Расходы', key: '1', icon: <DesktopOutlined /> },
]
