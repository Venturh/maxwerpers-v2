import React from "react"
import styled from "styled-components"
import { color } from "styled-system"

import { ButtonText } from "./Typography"

const StyledButton = styled.a`
  ${color}
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em 0.5em;
  min-width: 5em;
  border-radius: ${props => (props.rounded ? "0.3em" : 0)};
  border: 1px solid ${props => props.theme.colors.primary};
  cursor: pointer;
`

const Text = styled(ButtonText)`
  max-width: 20em;
  text-align: center;
  font-size: ${props =>
    props.large ? "0.9em" : props.theme.fontSizes.button || "0.75em"};
  ${color}
`

const Button = ({ children, link, large, color, ...rest }) => (
  <StyledButton href={link} target="_blank" rel="noopener noreferrer" {...rest}>
    <Text color={color} large={large}>
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
