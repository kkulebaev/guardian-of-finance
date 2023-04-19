import { Layout, Menu, Typography } from 'antd'
import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import TopBar from '../components/TopBar'
import { MenuItem } from '../router/nav'

const { Header, Content, Footer, Sider } = Layout
const { Link } = Typography

interface DefaultLayoutProps {
  navItems: MenuItem[]
}

function DefaultLayout({ navItems }: DefaultLayoutProps) {
  const [collapsed, setCollapsed] = useState(false)

  const location = useLocation()

  return (
    <Layout className="h-screen">
      <Header>
        <TopBar />
      </Header>

      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={value => setCollapsed(value)}
        >
          <Menu
            selectedKeys={[location.pathname]}
            theme="dark"
            mode="inline"
            items={navItems}
          />
        </Sider>

        <Layout>
          <Content className="p-10">
            <Outlet />
          </Content>
          <Footer className="text-center">
            Created by&nbsp;
            <Link href="https://github.com/kkulebaev" target="_blank">
              @kkulebaev
            </Link>
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default DefaultLayout
