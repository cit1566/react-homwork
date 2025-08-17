# Stateless 컴포넌트 제작

## 폴더 구조
```bash
src
├── app.jsx
├── components
│ ├── index.js
│ ├── svg
│ │ ├── spinner
│ │ │ ├── spinner.css
│ │ │ └── spinner.jsx
│ │ └── svgfunction.jsx
│ └── uplode-button
│ ├── uploadBtn.css
│ └── uploadBtn.jsx
├── images
│ ├── check-mark.svg
│ ├── cross.svg
│ ├── not-allowed.svg
│ ├── react.svg
│ ├── spinner-animate.svg
│ └── up-arrow.svg
├── main.jsx
├── styles
│ └── index.css
└── utils
├── selectPath.js
├── svg.js
├── uploadBtnTypeFunc.js
└── utils.js
```

## main.jsx

- `App` 컴포넌트를 `container`에 연결

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import './styles/index.css'
```

기본적인 `React`와 `ReactDOM` API의 호출을 통해 ReactDOMRoot 생성 및 `render(container)` 사용하였습니다. 추가적으로 `mian.css`의 연결을 해줍니다.

## app.jsx

### `<App>`

- `main.jsx`에 전달될 컴포넌트 `<App>` 을 생성합니다.

```jsx
export default function App() {
  return (
    <section className="app-container">
      <h1>React Stateless Component</h1>
      <div>
        <h2>SVG Icon 정렬</h2>
        <SvgIcon></SvgIcon>
      </div>
      <div>
        <h2>Button Compo 정렬</h2>
        <UploadBtnbox></UploadBtnbox>
      </div>
    </section>
  )
}
```

SVG 컴포넌트와 버튼 컴포넌트들을 묶어주는 `app-container` 를 `main.jsx`에 전달합니다.

### `<SvgIcon>`

`<App>` 컴포넌트에 전달되는 SVG 모음 컴포넌트입니다.

```jsx
function SvgIcon() {
  return (
    <div className="svg-box">
      <SvgFun name="spinner" fill="#1684f3ff"></SvgFun>
      <SvgFun name="check-mark" fill="#0959"></SvgFun>
      <SvgFun name="cross"></SvgFun>
      <SvgFun name="not-allowed"></SvgFun>
      <SvgFun name="up-arrow"></SvgFun>
    </div>
  )
}
```

SvgIcon Component는 `<SvgFun>` 컴포넌트들의 묶음입니다.
`SvgFun` 컴포넌트는 `name`이라는 `props`을 이용하여, 총 5개의 `svg` 이미지가 렌더링 됩니다.
추가적으로 `size`, `fill` 이라는 선택적 속성을 줄 수 있습니다.

### `<UploadBtnBox>`

`<App>`에 전달되는 업로드 버튼 모음 컴포넌트입니다.

```jsx
function UploadBtnbox() {
  return (
    <div className="btn-box">
      <UploadBtn label="check-mark"></UploadBtn>
      <UploadBtn label="cross"></UploadBtn>
      <UploadBtn label="up-arrow"></UploadBtn>
      <UploadBtn label="not-allowed"></UploadBtn>
      <UploadBtn label="spinner"></UploadBtn>
    </div>
  )
}
```

`svg` 컴포넌트와 마찬가지로 `label`이라는 `props`를 이용하여, 각 컴포넌트의 이름과 `svg`가 결정됩니다.

## svgfunction.jsx

- `<SvgFun>` 컴포넌트를 생성합니다.
  필수 `props`는 `name`이며, `size`, `fill` 값도 받습니다.

`name`이 `spinner`인 경우 `<SpinnerIconFunc>` 을 반환합니다.

```jsx
return <SpinnerIconFunc size={size} fill={fill}></SpinnerIconFunc>
```

`selectPath()` 함수에 `name`을 전달하여 이름에 필요한 `path`의 `d`값을 반환받습니다.

```js
export default function selectPath(svgName) {
  switch (svgName) {
    case 'check-mark':
      return svgPath['check-mark']
    case 'cross':
      return svgPath.cross
    case 'not-allowed':
      return svgPath['not-allowed']
    case 'up-arrow':
      return svgPath['up-arrow']
  }
}
```

따라서 `props`에는 `path`가 없습니다.

## uploadBtn.jsx

`<SvgFun>` 을 포함한 `<button>` 컴포넌트입니다.

```jsx
export default function UploadBtn({
  label = 'check-mark',
  disabled = false,
  size = 20,
}) {
  if (label === 'not-allowed') {
    disabled = true
  }

  return (
    <button type="button" className="upload-btn" disabled={disabled}>
      <span className="upload-btn_label">{uploadBtnTypeFunc(label)}</span>
      <SvgFun name={label} size={size}></SvgFun>
    </button>
  )
}
```

`label`의 값을 `uploadBtnTypeFunc()`에 전달하여, 버튼의 이름을 반환받습니다.
