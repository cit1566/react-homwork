// import './demo'
import { createRoot } from 'react-dom/client'
import App from './components/app'
import './styles/main.css'

const container = document.getElementById('container')

if (!container)
  throw new Error('index.html에 #container 루트를 발견하지 못했습니다.')

const root = createRoot(container)

root.render(<App></App>)
