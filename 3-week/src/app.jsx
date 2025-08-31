import { useState } from 'react'
import UserForm from './components/form/form'
import ShowProfileBox from './components/user/user-profile'
// import RandomCountUp from './demo/app'

import './styles/profil-card.css'

export default function App() {
  return (
    <section className="profile-card-container">
      <h1>Profil Card</h1>
      <Container></Container>
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
