import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './components/app'

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('app')
  ReactDOM.render(<App />, rootEl)
})
