import { useState } from 'react'
import Logo from '@/components/cupang-logo/logo'
import FormButton from '@/components/form/button/button'
import FormCheckBox from '@/components/form/checkbox/checkbox'
import FormInput from '@/components/form/input/form-input'
import { validateLoginEmail, validateLoginPassword } from './validate'
import './login-form.css'
import './login-page.css'

export default function LoginPage() {
  return (
    <div className="login-page">
      <h1 className="sr-only">로그인 페이지</h1>
      <div className="login-compo">
        <a href="https://www.coupang.com/" className="main-logo-a">
          <Logo type="color" />
        </a>
        <LoginForm></LoginForm>
        <div className="copyright">©Coupang Corp. All rights reserved.</div>
      </div>
    </div>
  )
}

function LoginForm() {
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')

  const validate = () => {
    return (target) => {
      if (target.type === 'email') {
        const a = validateLoginEmail(target.value)
        setErrorEmail(a)
      } else if (target.type === 'password' || 'text') {
        const b = validateLoginPassword(target.value)
        setErrorPassword(b)
      }
    }
  }

  console.log(errorEmail, errorPassword)

  return (
    <form className="login-form" typeof="submit">
      <FormInput name="login-Id" type="email" validate={validate}></FormInput>
      <p className="id-error">{errorEmail === null ? null : errorEmail}</p>
      <FormInput
        name="login-Password"
        type="password"
        validate={validate}
      ></FormInput>
      <p className="password-error">
        {errorPassword === null ? null : errorPassword}
      </p>
      <div className="checkbox-findId">
        <FormCheckBox></FormCheckBox>
        <a href="/">
          아이디(이메일)/비밀번호 찾기
          <span>
            <svg width="11" height="18" viewBox="0 0 11 18" fill="none">
              <path d="M1.5 1L9.5 9L1.5 17" stroke="#0074E9" strokeWidth="2" />
            </svg>
          </span>
        </a>
      </div>
      <FormButton
        name="로그인"
        mode="primay"
        disabled={errorEmail === null && errorPassword === null ? false : true}
      ></FormButton>
      <div className="cross-line"></div>
      <FormButton name="회원가입" mode="secondary"></FormButton>
    </form>
  )
}
