import React from "react"
import styled from "styled-components"
import { color, space } from "styled-system"

const StyledButton = styled.button`
  ${color}
  ${space}
  padding: 10px;
  border-radius: ${props => (props.rounded ? "5px" : 0)};
  border: inherit;
  cursor: pointer;
`

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
)

export default Button
