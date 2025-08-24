import Logo from '../components/cupang-logo/logo'
import FormButton from '../components/form/button/button'
import FormCheckBox from '../components/form/checkbox/checkbox'
import FormInput from '../components/form/input/form-input'
import UiIcon, { IconSVG } from '../components/ui-icon/icon'

export default function CompoBox() {
  return (
    <div>
      <LogoBox></LogoBox>
      <IconBox></IconBox>
      <ButtonBox></ButtonBox>
      <InputBox></InputBox>
      <CheckBoxContainer></CheckBoxContainer>
    </div>
  )
}

function LogoBox() {
  return (
    <div>
      <Logo type="color"></Logo>
      <Logo type="mono"></Logo>
      <Logo type="black"></Logo>
    </div>
  )
}

function IconBox() {
  return (
    <div>
      <UiIcon type="letter"></UiIcon>
      <UiIcon type="lock"></UiIcon>
      <UiIcon type="show"></UiIcon>
      <UiIcon type="hide"></UiIcon>
    </div>
  )
}

function ButtonBox() {
  return (
    <div>
      <FormButton name="회원가입" mode="primary"></FormButton>
      <FormButton mode="primary" disabled></FormButton>
      <FormButton mode="secondary"></FormButton>
      <FormButton mode="secondary" disabled></FormButton>
    </div>
  )
}

function InputBox() {
  return (
    <div>
      <FormInput name="login-id"></FormInput>
      <FormInput name="login-password" type="password"></FormInput>
    </div>
  )
}

function CheckBoxContainer() {
  return (
    <div>
      <FormCheckBox></FormCheckBox>
      <FormCheckBox checked></FormCheckBox>
      <FormCheckBox disabled></FormCheckBox>
      <FormCheckBox disabled checked></FormCheckBox>
    </div>
  )
}
