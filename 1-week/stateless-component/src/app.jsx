import SvgFun from './components/svg/svgfunction'
import UploadBtn from './components/uplode-button/uploadBtn'

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
