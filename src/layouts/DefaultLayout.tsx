import { Layout, Menu } from 'antd'
import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { NAV_ITEMS } from '../helpers'
import TopBar from '../components/TopBar'

const { Header, Content, Footer, Sider } = Layout

function DefaultLayout() {
  const [collapsed, setCollapsed] = useState(false)

  const location = useLocation()

  return (
    <Layout className="h-screen">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={value => setCollapsed(value)}
      >
        <h1 className="text-white text-center p-2 text-3xl">LOGO</h1>
        <Menu
          selectedKeys={[location.pathname]}
          theme="dark"
          mode="inline"
          items={NAV_ITEMS}
        />
      </Sider>
      <Layout>
        <Header>
          <TopBar />
        </Header>
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
