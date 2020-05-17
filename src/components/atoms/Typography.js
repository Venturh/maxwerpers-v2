import React from "react"
import styled from "styled-components"
import { color, fontSize, fontWeight } from "styled-system"

const StyledTypography = styled.p`
  ${color}
  ${fontSize}
  ${fontWeight}
`

const Typography = ({ children, variant, text, ...props }) => (
  <StyledTypography as={variant} {...props}>
    {children || text}
  </StyledTypography>
)

export default Typography
