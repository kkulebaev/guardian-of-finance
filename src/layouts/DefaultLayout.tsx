import { Layout, Menu } from 'antd'
import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { NAV_ITEMS } from '../helpers'
import AppLogo from '../components/AppLogo'
import { signOut } from '../api/services/auth/sign-out'
import { NAV } from '../helpers/nav'

const { Header, Content, Footer, Sider } = Layout

function DefaultLayout() {
  const [collapsed, setCollapsed] = useState(false)

  const navigate = useNavigate()

  async function onLogoutHandler({ key }: { key: string }) {
    if (key !== NAV.logout) return

    const { error } = await signOut()
    if (!error) {
      navigate({ pathname: '/login' })
    }
  }

  return (
    <Layout className="h-screen">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={value => setCollapsed(value)}
      >
        <AppLogo />
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={NAV_ITEMS}
          onClick={onLogoutHandler}
        />
      </Sider>
      <Layout>
        <Header />
        <Content className="p-10">
          <Outlet />
        </Content>

        <Footer className="text-center">
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default DefaultLayout
