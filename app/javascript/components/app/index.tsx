import React from 'react'
import styles from './styles.modules.scss'
import './simple.scss'
import './a-css.css'

export function App() {
  return <div className={styles.app}>
    Hello, App. <div className="internalDiv">some text here <span className="internalSpan">and in span</span></div>
  </div>
}

export default App
