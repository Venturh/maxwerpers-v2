import React from "react"
import styled from "styled-components"
import { color, fontSize, margin } from "styled-system"

const StyledTypography = styled.h1`
  ${color}
  ${fontSize}
`

const Typography = ({ children, variant, text, ...props }) => (
  <StyledTypography as={variant} {...props}>
    {children || text}
  </StyledTypography>
)

export default Typography
