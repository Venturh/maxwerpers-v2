import React from "react"

const SvgIcon = ({ viewBox, path, color, size, ...rest }) => (
  <svg
    viewBox={viewBox || "0 0 24 24"}
    style={{
      height: size,
    }}
    {...rest}
  >
    <path fill={color} d={path} />
  </svg>
)

export default SvgIcon
