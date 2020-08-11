import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { getColor } from "../../theme/Theme"
import { ButtonText } from "./Typography"
import SvgIcon from "./SvgIcon"

const StyledButton = styled.a`
  background: ${props => props.bg};
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
  color: ${props => props.color};
`

const Icon = styled(SvgIcon)`
  height: ${props => props.iconsize || "1.5em"};
  margin-right: ${props => (props.left ? "0.25em" : 0)};
  margin-left: ${props => (props.right ? "0.25em" : 0)};
  fill: ${props => props.theme.colors[props.color]};
`

const Button = ({
  children,
  link,
  large,
  color,
  lower,
  navigate,
  rightIcon,
  leftIcon,
  iconsize,
  ...rest
}) => (
  <StyledButton
    as={navigate ? Link : link ? "a" : "button"}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    {...rest}
  >
    {leftIcon ? (
      <Icon path={leftIcon} color={color} left="true" iconsize={iconsize} />
    ) : null}
    <Text color={color} large={large}>
      {lower ? children : children.toUpperCase()}
    </Text>
    {rightIcon ? <Icon path={rightIcon} color={color} right="true" /> : null}
  </StyledButton>
)

export const PrimaryButton = styled(Button)`
  background: ${getColor("primary")};
  border-radius: 0.25em;
  ${Text} {
    color: ${getColor("primaryContrast")};
  }
`

export const SecondaryButton = styled(Button)`
  background: ${getColor("body")};
  border-radius: 0.25em;
  ${Text} {
    color: ${getColor("primary")};
  }
`

export default Button
