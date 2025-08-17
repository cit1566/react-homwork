import './spinner.css'

export default function SpinnerIconFunc({ size = 24, fill = '#525577' }) {
  return (
    <svg width={size} height={size} stroke={fill} viewBox="0 0 24 24">
      <g className="spinner_V8m1">
        <circle cx={12} cy={12} r="9.5" fill="none" strokeWidth={3} />
      </g>
    </svg>
  )
}
