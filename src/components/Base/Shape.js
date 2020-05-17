import React from "react"
import styled from "styled-components"
import { color, border, layout } from "styled-system"

export const StyledShape = styled.div`
  ${color}
  ${border}
  ${layout}

`
const Shape = props => {
  return <StyledShape {...props} />
}

export default Shape
