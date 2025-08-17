import { selectPath } from '@/utils/utils'
import SpinnerIconFunc from './spinner/spinner'

/**
 * @param {Object} props
 * @param {string} props.name SvgFun 아이콘 이름 {check-makr, cross, not-allowed, up-arrow, spinner}
 * @param {number} [props.size]
 * @param {string} [props.fill]
 */

export default function SvgFun({
  name = 'check-mark',
  size = 30,
  fill = '#525577',
}) {
  if (name === 'spinner') {
    return <SpinnerIconFunc size={size} fill={fill}></SpinnerIconFunc>
  }

  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 12 12">
      <path
        fill={fill}
        fill-rule="evenodd"
        d={selectPath(name)}
        clip-rule="evenodd"
      />
    </svg>
  )
}
