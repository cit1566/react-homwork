export function validateLoginEmail(email) {
  let errors
  if (!email) {
    errors = '이메일을 입력해주세요.'
  } else if (!email.includes('@')) {
    console.log(email)
    errors = '올바른 이메일 형식이 아닙니다.'
    return errors
  } else return null
}

export function validateLoginPassword(password) {
  let errors
  if (!password) {
    errors = '비밀번호를 입력해주세요.'
    return errors
  } else if (password.length < 8) {
    console.log(password)
    errors = '8자리 이상 입력해주세요.'
    return errors
  } else return null
}
