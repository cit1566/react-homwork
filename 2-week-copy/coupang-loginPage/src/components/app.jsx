import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Component from '../pages/components.jsx'
import LoginPage from '../pages/coupang-login-page.jsx'
import '../styles/app.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/compo" element={<Component />} />
      </Routes>
      <nav>
        <Link to="/">로그인 페이지</Link>
        <Link to="/compo">컴포넌트 페이지 페이지</Link>
      </nav>
    </BrowserRouter>
  )
}
