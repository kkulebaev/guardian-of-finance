import { Layout, Menu } from 'antd'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

import { NAV_ITEMS } from '../helpers'
import AppLogo from '../components/AppLogo'

const { Header, Content, Footer, Sider } = Layout

function DefaultLayout() {
  const [collapsed, setCollapsed] = useState(false)

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
