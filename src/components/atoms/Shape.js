import React from "react"
import styled from "styled-components"
import { getColor } from "../../theme/Theme"

export const StyledShape = styled.span`
  background: ${p => p.bg || getColor(p.tbg)};
  border-radius: ${p => p.borderRadius};
  height: ${p => p.height};
  width: ${p => p.width};
`
const Shape = props => {
  return <StyledShape {...props} />
}

export default Shape
