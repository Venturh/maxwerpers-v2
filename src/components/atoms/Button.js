import React from "react"
import styled from "styled-components"
import { color } from "styled-system"
import Typography from "./Typography"

const StyledButton = styled.button`
  ${color}
  padding: 10px;
  border-radius: ${props => (props.rounded ? "5px" : 0)};
  border: inherit;
  cursor: pointer;
  white-space: nowrap;
`

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>
    <Typography
      fontSize="button"
      fontWeight="light"
      text={children.toUpperCase()}
    />
  </StyledButton>
)

export default Button
