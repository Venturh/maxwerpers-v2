import React from "react"
import styled from "styled-components"
import { color } from "styled-system"

import { ButtonText } from "./Typography"

const StyledButton = styled.button`
  ${color}
  border-radius: ${props => (props.rounded ? "0.25em" : 0)};
  border: inherit;
  cursor: pointer;
  white-space: nowrap;
`

const Text = styled(ButtonText)`
  font-size: ${props => props.theme.fontSizes.button};
`

const Button = ({ children, link, ...props }) => (
  <StyledButton {...props}>
    <Text
      color="primaryContrast"
      variant="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children.toUpperCase()}
    </Text>
  </StyledButton>
)

export default Button
