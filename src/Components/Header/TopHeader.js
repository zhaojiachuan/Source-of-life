import React, { useState, useCallback } from 'react'
import { Layout, Anchor, Calendar } from 'antd'
import '../index.scss'

const { Header } = Layout
export default function TopHeader(props) {
  const [full, setFull] = useState(false)

  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode)
  }

  const changeFull = useCallback(() => {
    if (full) {
      document.exitFullscreen()
    } else {
      if (document.fullscreenEnabled) {
        document.body?.requestFullscreen()
      }
    }
    setFull(!full)
  }, [full])

  return (
    <Anchor>
      <Header
        className="site-layout-background"
        style={{ padding: 0 }}
      ></Header>
    </Anchor>
  )
}
