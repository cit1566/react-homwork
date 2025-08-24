import './buttons.css'

/**
 *
 * @param {Object} props
 * @param {string} [props.name] 버튼에 넣을 원하는 이름을 작성해주세요 default = "로그인"
 * @param {string} props.mode 버튼의 종류를 선택해주세요 {primary : default, secondary}
 * @param {boolean} [props.disabled] 버튼의 접근 가능 여부
 * @returns
 */

export default function FormButton({
  name = '로그인',
  mode,
  disabled = false,
}) {
  return (
    <button
      className={
        mode === 'secondary' ? 'form-button secondary' : 'form-button primary'
      }
      type="submit"
      disabled={disabled}
    >
      {name}
    </button>
  )
}
