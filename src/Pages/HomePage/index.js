import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import TopHeader from '../../Components/Header/TopHeader'
import SideMenu from '../../Components/Menu/SideMenu'
import { Layout } from 'antd'
import Login from '../Login'
import Index from '../Index'

const HomePage = () => {
  return (
    <Layout>
      <TopHeader></TopHeader>
      <Layout hasSider>
        <SideMenu></SideMenu>
        <Switch>
          <Route path="/index" component={Index} />
        </Switch>
      </Layout>
    </Layout>
  )
}

export default HomePage
