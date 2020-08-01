import * as React from "react"

const SvgIcon = ({ path, color, size, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    style={{
      height: size,
    }}
    {...rest}
  >
    <path fill={color} d={path} />
  </svg>
)

export default SvgIcon
