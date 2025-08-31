import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import randomNum from '@/utils/random'
import wait from '@/utils/wait'
import './user-detail.css'

function UserDetail() {
  const { id } = useParams()
  const [loadings, setLoadings] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState({})
  useEffect(() => {
    const abortController = new AbortController()
    const fetchOptions = { signal: abortController.signal }

    setLoadings(true)
    async function fetchUser() {
      try {
        await wait(randomNum())

        const response = await fetch(
          `https://dummyjson.com/users/${id}`,
          fetchOptions
        )
        if (!response.ok && response.status === 404)
          throw new Error('해당 데이터를 불러올 수 없습니다.')

        const datas = await response.json()

        setData({ ...datas })
      } catch (error) {
        if (error.name === 'AbortError') return
        console.dir(error)
        setError(error.message)
      } finally {
        setLoadings(false)
      }
    }

    fetchUser()

    return () => {
      abortController.abort()
    }
  }, [])

  console.log({ ...data })

  const { address, city, country } = { ...data.address }

  if (error) {
    return (
      <div className="user-detail error">
        해당 데이터가 없습니다.
        <p>{error}</p>
      </div>
    )
  }

  if (loadings) {
    return (
      <div className="user-detail loading">
        <p>로딩 중 ...</p>
        <p>잠시만 기다려주세요.</p>
      </div>
    )
  }

  // 실제로는 API 호출 or props/context 등으로 유저 정보 가져오기
  // 여기서는 예시로만 표시
  return (
    <div className="user-detail">
      <h2>User Detail - ID: {id}</h2>
      <div className="detail-box">
        <img src={data.image} alt={`${data.firstName} ${data.lastName}`} />
        <ul>
          <li>
            <p>Name </p> {`${data.firstName} ${data.lastName}`}
          </li>
          <li>
            <p>Age </p> {data.age}
          </li>
          <li>
            <p>Birtdate </p> {data.birthDate}
          </li>
          <li>
            <p>Email </p> {data.email}
          </li>
          <li>
            <p>Phone </p> {data.phone}
          </li>
          <li>
            <p>주소</p>
            {`${country}, ${city}, ${address}`}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UserDetail
