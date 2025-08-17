import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import './styles/index.css'

console.log(App)

const container = document.getElementById('container')

if (!container)
  throw new Error('index.html에 #container의 위치가 확인되지 않습니다.')

const root = ReactDOM.createRoot(container)
root.render(<App></App>)
