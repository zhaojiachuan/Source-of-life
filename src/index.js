import React from 'react'
import { render } from 'react-dom'
import { message } from 'antd'
import Router from './router/index'
// import HomePage from './Pages/HomePage'

window.addEventListener('storage', (e) => {
  if (e.key) {
    setTimeout(() => {
      if (e.newValue !== e.oldValue) {
        message.error('当前账号信息已变更，请重新登录')
        window.location.hash = '#/login'
      }
    }, 500)
  }
})

// 自定义组件
function App() {
  return (
    <div>
      <Router />
    </div>
  )
}

render(<App />, document.getElementById('root'))
