import React from 'react'
import styles from './styles.modules.scss'
import './simple.scss'
import './a-css.css'
import { Button } from "antd"
import { FastBackwardOutlined } from "@ant-design/icons"

export function App() {
  return (
    <div className={styles.app}>
      Hello, App.{' '}
      <div className="internalDiv">
        some text here <span className="internalSpan">and in span</span>
      </div>
      <Button type="primary">Button</Button>
      <FastBackwardOutlined />
    </div>
  )
}

export default App
