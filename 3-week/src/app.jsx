import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import UserForm from './components/form/form'
import UserDetail from './components/user-detail/user-detail'
import ShowProfileBox from './components/user/user-profile'
// import RandomCountUp from './demo/app'

import './styles/profil-card.css'

export default function App() {
  return (
    <section className="profile-card-container">
      <h1>Profil Card</h1>
      <Router>
        <Routes>
          {/* 홈: 검색 + 리스트 */}
          <Route path="/" element={<Container />} />

          {/* 유저 상세 페이지 */}
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </Router>
    </section>
  )
}

function Container() {
  const [input, setInput] = useState(null)
  console.log(input)
  return (
    <div>
      <UserForm setInput={setInput}></UserForm>
      <p className="description">
        사용자의 이름을 검색하고 사용자의 정보를 확인하세요
      </p>
      <ShowProfileBox input={input}></ShowProfileBox>
    </div>
  )
}
