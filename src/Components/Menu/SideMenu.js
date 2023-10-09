import React, { useEffect, useState } from 'react'
import { UserOutlined, DownOutlined } from '@ant-design/icons'

import { Layout, Menu, Avatar, Dropdown, Space, Anchor } from 'antd'
import '../index.scss'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

const { Sider } = Layout

const SideMenu = (props) => {
  const [collapsed, setcollapsed] = useState(false)

  const changeRoute = (e) => {
    const path = e.key
    if (path === '1') {
      props.history.push(`index`)
    }
    if (path === '2') {
      props.history.push(`test`)
    }
  }

  return (
    <Anchor style={{ height: '100%' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          theme="light"
          mode="inline"
          onClick={(e) => {
            changeRoute(e)
          }}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: '1',
            },
            {
              key: '2',
              icon: <UserOutlined />,
              label: '2',
            },
          ]}
        />
      </Sider>
    </Anchor>
  )
}
export default withRouter(SideMenu)
