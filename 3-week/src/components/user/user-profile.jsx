import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import randomNum from '../../utils/random'
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

export default function ShowProfileBox({ input }) {
  const [userList, setUserList] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  useEffect(() => {
    console.log('로딩 시작!')

    setLoading(true)

    const abortController = new AbortController()

    fetch('https://dummyjson.com/users/?limit=20', {
      signal: abortController.signal,
    })
      .then(async (res) => {
        await wait(randomNum())
        if (res.ok) return res.json()
        if (res.status === 404) throw new Error('해당 데이터가 없습니다.')
      })
      .then((data) => {
        const face = [face1, face2, face3, face4, face5, face6, face7, face8]

        console.log(data.users)
        if (!input) {
          let usersList = data.users.map(
            ({ id, firstName, lastName, email, university, company, role }) => {
              return (
                <UserProfile
                  id={id}
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                  image={face[id % 8]}
                  university={university}
                  company={company.name}
                  role={role}
                ></UserProfile>
              )
            }
          )
          return usersList
        }

        const serchResults = data.users.filter((user) => {
          let firstName = user.firstName.toLowerCase()
          let lastName = user.lastName.toLowerCase()

          return (
            firstName.includes(input.toLowerCase()) ||
            lastName.includes(input.toLowerCase())
          )
        })

        if (serchResults.length === 0)
          throw new Error('검색하신 이름의 사용자가 없습니다.')

        const serchUserList = serchResults.map(
          ({ id, firstName, lastName, email, university, company, role }) => {
            return (
              <UserProfile
                id={id}
                firstName={firstName}
                lastName={lastName}
                email={email}
                image={face[id % 8]}
                university={university}
                company={company.name}
                role={role}
              ></UserProfile>
            )
          }
        )
        console.log(serchUserList)
        return serchUserList
      })
      .then((userList) => {
        setUserList(userList)
        setError(null)
      })
      .catch((err) => {
        if (err.name === 'AbortError') return
        console.log('Error : ', err)
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })

    return () => {
      abortController.abort()
    }
  }, [input])

  if (loading)
    return (
      <div className="profil-box loading">
        <p className="load">프로필을 불러오는 중 입니다.</p>
        <p className="load">로딩 중...</p>
      </div>
    )

  if (error) {
    return (
      <div className="profil-box error">
        <p className="error">{error}</p>
        {/* <p className="load">로딩 중...</p> */}
      </div>
    )
  }
  return (
    <div className="profile-box">
      <ul>{...userList}</ul>
    </div>
  )
}

// -----------------------------------------------------------------------
export function UserProfile({
  id,
  firstName,
  lastName,
  email,
  image,
  university,
  company,
  role,
}) {
  return (
    <li className="user-profile">
      <Link to={`/user/${id}`} key={id} title="moer show">
        <img src={image} alt={firstName + ' ' + lastName} />
        <p className="user-name">{firstName + ' ' + lastName}</p>
        <p className="user-email">{email}</p>
        <p className="user-university tag">{university}</p>
        <p className="user-company tag">{company}</p>
        <p className="tag">{role}</p>
      </Link>
    </li>
  )
}
