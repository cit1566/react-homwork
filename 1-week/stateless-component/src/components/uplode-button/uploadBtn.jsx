import SvgFun from '@/components/svg/svgfunction'
import { uploadBtnTypeFunc } from '@/utils/utils.js'
import './uploadBtn.css'

/**
 *
 * @param {Object} param
 * @param {string} param.label
 * @param {boolean} [param.disabled]
 * @param {number} [param.size]
 */
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
