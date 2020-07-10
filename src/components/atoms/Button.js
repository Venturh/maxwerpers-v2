import React from "react"
import styled from "styled-components"
import { color } from "styled-system"
import Typography from "./Typography"

const StyledButton = styled.button`
  ${color}
  
  border-radius: ${props => (props.rounded ? "0.25em" : 0)};
  border: inherit;
  cursor: pointer;
  white-space: nowrap;
`

const Text = styled.a`
  font-size: ${props => props.theme.fontSizes.button};
`

const Button = ({ children, link, ...props }) => (
  <StyledButton {...props}>
    <Text href={link}>{children.toUpperCase()}</Text>
  </StyledButton>
)

export default Button
