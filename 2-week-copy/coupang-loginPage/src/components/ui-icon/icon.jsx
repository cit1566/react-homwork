// @ts-nocheck
import makeId from '@/utils/makeId'
import iconSvgData from './icon-path.json'
import './icon.css'

/**
 * @param {Object} props
 * @param {string} props.type {letter : default, lock, hide, show}
 * @param {Object} [props.toggle]
 * @returns
 */

export default function UiIcon({ type = 'letter', toggle }) {
  let shapeNum
  // shape props -> number 로 변형
  switch (type) {
    case 'letter':
      shapeNum = 0
      break
    case 'lock':
      shapeNum = 1
      break
    case 'hide':
      shapeNum = 2
      break
    case 'show':
      shapeNum = 3
      break
    default:
      return
  }

  if (shapeNum < 2) {
    return (
      <div
        key={'icon' + makeId()}
        className="ui-icon-box border front"
        tabIndex="-1"
        aria-hidden
      >
        <IconSVG shape={type} shapeNum={shapeNum}></IconSVG>
      </div>
    )
  } else if (shapeNum >= 2) {
    return (
      <button
        key={'icon' + makeId()}
        type="button"
        className="ui-icon-box back"
        onClick={toggle}
      >
        <IconSVG shape={type} shapeNum={shapeNum}></IconSVG>
      </button>
    )
  }
}

/**
 * @param {Object} props
 * @param {string} props.shape {letter : default, lock, hide, show}
 * @returns
 */
export function IconSVG({ shapeNum }) {
  let icon

  const id = makeId()

  if (shapeNum < 2) {
    icon = [
      <path
        // key={iconSvgData[shapeNum]?.keyA}
        key={'icon' + makeId()}
        d={iconSvgData[shapeNum]?.d2}
        fill={iconSvgData[shapeNum]?.fill}
      ></path>,
      <path
        // key={iconSvgData[shapeNum].keyB}
        key={'icon' + makeId()}
        fillRule={iconSvgData[shapeNum].fillRule}
        clipRule={iconSvgData[shapeNum].clicpRule}
        d={iconSvgData[shapeNum].d}
        fill={iconSvgData[shapeNum].fill}
      ></path>,
    ]
  } else {
    icon = [
      <title key={'icon' + makeId()}>{iconSvgData[shapeNum]?.title}</title>,
      <circle
        // key={iconSvgData[shapeNum].keyA}
        key={'icon' + makeId()}
        cx={iconSvgData[shapeNum].cx}
        cy={iconSvgData[shapeNum].cy}
        r={iconSvgData[shapeNum].r}
        fill={iconSvgData[shapeNum].fill}
      ></circle>,
      <path
        // key={iconSvgData[shapeNum].keyB}
        key={'icon' + makeId()}
        fillRule="evenodd"
        clipRule="evenodd"
        d={iconSvgData[shapeNum].d}
        fill="white"
      ></path>,
    ]
  }
  return (
    <svg
      key={'icon' + makeId()}
      width={iconSvgData[shapeNum].width}
      height={iconSvgData[shapeNum].height}
      viewBox={iconSvgData[shapeNum].viewBox}
      fill="none"
    >
      {icon}
    </svg>
  )
}
