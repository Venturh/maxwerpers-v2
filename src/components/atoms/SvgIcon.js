import React from "react"
import { getColor } from "theme"
import styled from "styled-components"

const SvgIcon = ({ viewBox, path, ...rest }) => (
  <Icon viewBox={viewBox || "0 0 24 24"} {...rest}>
    <path d={path} />
  </Icon>
)

export default SvgIcon

const Icon = styled.svg`
  fill: ${p => getColor(p.color)};
  height: ${p => p.size};
`
