// @ts-nocheck
import logoPath from './logo-path.json'

/**
 *
 * @param {Object} props
 * @param {string} props.type {color : default, mono, black}
 * @returns
 */

export default function Logo({ type = 'color' }) {
  let colorType = null

  switch (type) {
    case 'color':
      colorType = null
      break
    case 'mono':
      colorType = '#929292'
      break
    case 'black':
      colorType = '#111111'
      break
  }

  const logoArr = logoPath.map(({ key, fillRule, clipRule, d, fill }) => {
    return (
      <path
        key={key}
        fillRule={fillRule}
        clipRule={clipRule}
        d={d}
        fill={colorType ?? fill}
      ></path>
    )
  })

  return (
    <svg
      className="main-logo-svg"
      width="246"
      height="56"
      viewBox="0 0 246 56"
      fill="none"
      aria-label={`Coupang Logo ${type}`}
    >
      <g clipPath="url(#clip0_1_190)">{...logoArr}</g>
      <defs>
        <clipPath id="clip0_1_190">
          <rect width="246" height="56" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
