import './App.css'
import { Layout, Menu } from 'antd'
import React, { useState } from 'react'
import Main from './pages/Main'
import { NAV_ITEMS } from './helpers'

const { Header, Content, Footer, Sider } = Layout

function App() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout className="h-screen">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={value => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
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
          <Main />
        </Content>

        <Footer className="text-center">
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default App
