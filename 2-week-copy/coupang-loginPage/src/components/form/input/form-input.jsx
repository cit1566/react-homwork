import { useState } from 'react'
import {
  validateLoginEmail,
  validateLoginPassword,
} from '../../../pages/validate'
import UiIcon from '../../ui-icon/icon'
import './form-input.css'

export default function FormInput({ name, type = 'email', validate }) {
  const [showHide, setShowHide] = useState(false)
  let afterUiIconType
  let beforUiIconType
  if (type === 'email') {
    beforUiIconType = 'letter'
    afterUiIconType = null
  } else {
    beforUiIconType = 'lock'
    showHide ? (afterUiIconType = 'hide') : (afterUiIconType = 'show')
  }

  const showHideToggle = () => {
    !showHide ? setShowHide(true) : setShowHide(false)
  }

  return (
    <div className="form-input">
      <label
        htmlFor={name}
        aria-label={type === 'email' ? 'Login ID' : 'Login Password'}
      >
        <UiIcon type={beforUiIconType}></UiIcon>
      </label>
      <input
        id={name}
        type={showHide ? 'text' : type}
        placeholder={type === 'email' ? '아이디(이메일)' : '비밀번호'}
        minLength={type === 'email' ? null : 8}
        onBlur={({ target }) => {
          const a = validate()
          a(target)
        }}
        required
      ></input>
      <UiIcon toggle={showHideToggle} type={afterUiIconType}></UiIcon>
    </div>
  )
}
