import React from "react"
import styled from "styled-components"
import { color, border, layout } from "styled-system"

export const StyledShape = styled.div`
  ${color}
  ${border}
  ${layout}
  z-index: -1;

`
const Shape = props => {
  return <StyledShape {...props} />
}

export default Shape
