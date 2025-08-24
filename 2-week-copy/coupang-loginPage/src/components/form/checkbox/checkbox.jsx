import { useId, useState } from 'react'
import makeId from '@/utils/makeId'
import './checkbox.css'

export default function FormCheckBox({ checked = false, disabled = false }) {
  const [onChecked, setChecked] = useState(checked)

  let disabledValue = []
  if (disabled) {
    disabledValue = [{ disabled: true }, checked]
  } else if (checked) {
    disabledValue = [checked]
  }

  function inputId() {
    return useId()
  }

  const id = makeId()

  console.log(disabled)

  return (
    <label className="checkbox">
      <input
        type="checkbox"
        id={'input' + id}
        checked={onChecked}
        onChange={() => setChecked((prev) => !prev)}
        disabled={disabled}
      />
      자동 로그인
    </label>
  )
}
