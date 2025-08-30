import { useEffect, useState } from 'react'
import wait from '../../utils/wait'
// import face1 from '@/face/face-01.svg'
import {
  face1,
  face2,
  face3,
  face4,
  face5,
  face6,
  face7,
  face8,
} from './fetch-users'
import './user-box.css'

export default function ShowProfileBox() {
  const [userList, setUserList] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    let ignor = false
    setLoading(true)
    fetch('https://dummyjson.com/users/?limit=8')
      .then(async (res) => {
        await wait(5)
        if (res.ok) return res.json()
        if (res.status === 404) throw new Error('해당 데이터가 없습니다.')
      })
      .then((data) => {
        const face = [face1, face2, face3, face4, face5, face6, face7, face8]

        let usersList = data.users.map(({ id, firstName, lastName, email }) => {
          return (
            <UserProfile
              id={id}
              firstName={firstName}
              lastName={lastName}
              email={email}
              image={face[id - 1]}
            ></UserProfile>
          )
        })
        // console.log(usersList)
        setUserList(usersList)
      })
      .catch((err) => {
        console.log('Error : ', err)
      })
      .finally(() => {
        setLoading(false)
      })

    return () => {
      // ignor = true
    }
  }, [])

  if (loading)
    return (
      <div className="profil-box loading">
        <p className="load">프로필을 불러오는 중 입니다.</p>
        <p className="load">로딩 중...</p>
      </div>
    )

  return (
    <div className="profile-box">
      <ul>{...userList}</ul>
    </div>
  )
}

// -----------------------------------------------------------------------
function UserProfile({ id, firstName, lastName, email, image }) {
  return (
    <li className="user-profile">
      <a href="/" key={id}>
        <img src={image} alt={firstName + ' ' + lastName} />
        <p className="user-name">{firstName + ' ' + lastName}</p>
        <p className="user-email">{email}</p>
      </a>
    </li>
  )
}
