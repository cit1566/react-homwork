# 3주차 과제 < Users Search List >

## 목표

- 데이터를 불러오고 데이터 사용 및 기능 구현을 한다.
- 검색 기능을 통해 유저 검색 기능을 구현한다.(Serch)
- 검색된 정보가 없을 시의 상황에 대한 안내 정보를 제공한다.(Error)
- 로딩 상태의 안내 정보를 제공한다.(Loading)

## App.jsx

### `<App>`

각 `User` 컴포넌트를 클릭할 경우 세부 사항들을 볼 수 있는 컴포넌트로 이동되도록 하기 위해 `react-router-dom`을 사용하였습니다.

```jsx
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
```

### `<Container>`

기본 라우트인 `Container` 컴포넌트에서 사용되는 상태는 `UserForm`에서 사용자의 검색값을 저장하고 있습니다.

```jsx
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
```

## form.jsx

### `<UserForm>`

`form`의 기본 작동은 방지된 상태입니다.
부모 컴포넌트로부터 받아온 `setInput`을 이용하여 사용자가 검색을 할 때 마다 `input`값을 저장합니다.

```jsx
export default function UserForm({ setInput }) {
  const inputElement = useRef(null)
  return (
    <form
      action="GET"
      className="form-box"
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <label htmlFor="serch-input">사용자 검색</label>
      <span>
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          ...
        </svg>
      </span>
      <input
        type="text"
        id="serch-input"
        ref={inputElement}
        placeholder="Sarch users"
        onChange={(e) => {
          setInput(e.target.value)
        }}
      />
    </form>
  )
}
```

![form 디자인](/3-week/public/form.png)

## user-profile.jsx

### `<ShowProfileBox>`

API를 이용하여 사용자의 데이터를 가져옵니다. 가져온 데이터를 `UserProfile` 컴포넌트에 전달합니다.

- 수업의 `데이터 가져오기` 단원을 공부하면서 `fetch`, `async` 등의 비동기 통신에 대해 연습이 더 필요로하다는 생각이 있었습니다. 때문에 `fetch` 및 `async` 를 활용하여 `Users`의 데이터를 이용하여 과제를 제작해보았습니다.
- 해당 API의 `Users.image`에는 사용자의 이미지가 아닌 도형 이미지가 있었기에 추가적으로 사용자의 프로필 이미지를 따로 연결했습니다. `src/face/`

활용된 API - [DummyJSON](https://dummyjson.com/docs/users)

```jsx
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
```

로딩 단계, 에러, 출력 상태를 구분하여 제작하였습니다.
![기본상태](/3-week/public/userProfiles.png)

- 각 `User`의 이름, 이메일 및 몇가지의 추가 정보를 제공합니다.
- 사용된 `User`의 `limit`은 20입니다.

![로딩상태](/3-week/public/loading.png)
로딩 상태입니다. 검색을 통해 사용자의 이름을 찾을 경우 잠시동안의 로딩이 있습니다 해당 기능은 야무쌤께서 제공해주신 `wait` 유틸 함수를 사용했습니다.

![에러상태](/3-week/public/error.png)
에러 상태시 검색한 내용이 없다는 문구를 출력합니다.

### `<UserProfile>`

`ShowProfileBox`에서 전달받은 데이터의 `prop`을 이용하여 화면에 전달해주는 프로필 컴포넌트입니다.

```jsx
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
```

## user-detail.jsx

### `<UserDetail>`

각 사용자의 컴포넌트를 클릭시 더 자세한 정보를 제공해주는 페이지로 이동이 됩니다.

![더 보기](/3-week/public/show-moer.png)

```jsx
export default function UserDetail() {
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
      <a href="http://localhost:3000">뒤로 가기</a>
    </div>
  )
}
```

해당 페이지에 진입 시 `/user/id`의 URL로 진입을 합니다.
![url](/3-week/public/url.png)
이후 해당 페이지에서 전달 받은 `id` 속성을 이용하여 해당 유저의 데이터를 다시한번 `fetch`합니다.

사용자의 이미지, 이름, 나이, 생년월일, 이메일, 전화번호, 주소 등을 전달해줍니다.
![유저 더보기](/3-week/public/user-detail.png)

실제 API에서 제공되는 `image` 데이터 및 추가 정보를 제공합니다.

## 제작 후기

기본적인 기능들을 구현하는 것이 목적이었습니다. 다만 제작을 하다보니 욕심이 생겨 디자인을 수정하고, 추가적인 기능들을 적용하다보니, 생각보다 더 많은 시간이 들어갔던 것 같습니다.
그래도 확실한 것은 `HTML`, `CSS`, `JavaScript` 를 이용하여 이와 같은 동적 웹을 제작한다면 이보다 훨씬 더 많은 시간과 노력을 투자애햐 한다는 걸 느낄 수 있었습니다.

### 아쉬운점

접근성의 개선이 필요한 부분이 많이 있습니다.

1. 사용자가 스크롤을 통해 하단으로 내려갈 경우 추가적인 로딩이 필요할 수 있습니다.
2. 사용자의 이미지가 총 8개 뿐이기에, 하단의 사용자 이미지가 8개의 이미지가 반복되어 나타납니다.
3. 각 카드컴포넌트가 누구를 가르키는지에 대한 스크린리더 접근성이 부족합니다.
4. 돋보기 이미지와 `input`의 연동이 되어있지 않아, 해당 아이콘을 클릭해도 input에 `focus`가 되지 못하고 있습니다.

추가적으로 항상 작업을 하다보면 순서 없이 작업이 진행되어, 각각의 컴포넌트 제작 및 디자인 기능 들에 따른 커밋을 잘 못하는 것 같습니다. 이러한 부분도 연습을 하며 이후 작업과정을 잘 볼 수 있도록 커밋을 하는 연습을 해야 할 것 같습니다.

### 수정

1. `UserProfile` 컴포넌트에 `aria-label`을 이용하여 각 컴포넌트의 사용자 이름을 제공해주었습니다.
2. 돋보기 아이콘을 담고있는 `span`을 `button`으로 변경하였습니다. 이후 이벤트를 연결하여 클릭시 `input`에 포커스가 되도록 구현하였습니다.
