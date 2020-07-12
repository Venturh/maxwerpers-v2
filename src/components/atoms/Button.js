import React from "react"
import styled from "styled-components"
import { color } from "styled-system"

import { ButtonText } from "./Typography"

const StyledButton = styled.button`
  ${color}
  outline: inherit;
  border-radius: ${props => (props.rounded ? "0.3em" : 0)};
  border: 1px solid ${props => props.theme.colors.primary};
  cursor: pointer;
  white-space: nowrap;
`

const Text = styled(ButtonText)`
  font-size: ${props =>
    props.large ? "0.9em" : props.theme.fontSizes.button || "0.75em"};
  ${color}
`

const Button = ({ children, link, large, ...props }) => (
  <StyledButton {...props}>
    <Text
      color={props.color}
      variant="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      large={large}
    >
      {children.toUpperCase()}
    </Text>
  </StyledButton>
)

const PrimaryButton = ({ children, ...rest }) => (
  <Button color="primaryContrast" bg="primary" rounded {...rest}>
    {children}
  </Button>
)

const SecondaryButton = ({ children, ...rest }) => {
  return (
    <Button color="primary" bg="body" rounded {...rest}>
      {children}
    </Button>
  )
}
export default Button
export { PrimaryButton, SecondaryButton }
