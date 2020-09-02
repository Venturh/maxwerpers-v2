import React from "react"
import styled from "styled-components"
import { Link } from "gatsby-plugin-intl"

import Typography from "./Typography"
import SvgIcon from "./SvgIcon"

import { getColor, fontSizes } from "theme"
import { card1 } from "theme/styles"

const StyledButton = styled.a`
  background: ${p => p.bg};
  display: flex;
  justify-content: ${p => (p.justify === "start" ? "flex-start" : "center")};
  align-items: center;
  padding: 0.5em 0.5em;
  border-radius: ${p => (p.rounded ? "0.5em" : 0)};
  cursor: pointer;

  :hover {
    transform: translateY(-1px);
  }
`

const Text = styled(Typography)`
  font-size: ${p => (p.fontSize ? fontSizes[p.fontSize] : fontSizes["sm"])};
  font-weight: 600;
  color: ${p => getColor(p.color)};
`

const Icon = styled(SvgIcon)`
  margin-right: ${p => (p.left ? "0.25em" : 0)};
  margin-left: ${p => (p.right ? "0.25em" : 0)};
`

const Button = ({
  children,
  text,
  link,
  color,
  lower,
  fontSize,
  navigate,
  rightIcon,
  leftIcon,
  iconSize,
  ...rest
}) => (
  <StyledButton
    as={navigate ? Link : link ? "a" : "button"}
    href={link}
    to={link}
    target="_blank"
    rel="noopener noreferrer"
    {...rest}
  >
    {leftIcon ? (
      <Icon
        path={leftIcon}
        color={color}
        left="true"
        size={iconSize || "1.5em"}
      />
    ) : null}
    {children ? (
      <Text color={color} fontSize={fontSize}>
        {lower ? children : children.toUpperCase()}
      </Text>
    ) : null}
    {rightIcon ? (
      <Icon
        path={rightIcon}
        color={color}
        right="true"
        size={iconSize || "1.5em"}
      />
    ) : null}
  </StyledButton>
)

export const PrimaryButton = styled(Button)`
  background: ${getColor("primary")};
  border-radius: 0.25em;
  border: inherit;
  ${Text} {
    color: ${getColor("primaryContrast")};
  }
`

export const SecondaryButton = styled(Button)`
  background: ${getColor("md")};
  border: 1px solid ${getColor("primary")};
  border-radius: 0.25em;
  ${Text} {
    color: ${getColor("primary")};
  }
`

export const TertiaryButton = styled(Button).attrs({
  justify: "start",
  lower: true,
  fontSize: "sm",
})`
  ${card1}
  fill: ${getColor("primary")};
  & > * {
    margin-left: 0.5em;
  }
  ${Text} {
    color: ${getColor("bodyContrast")};
  }
`

export const IconOnlyButton = styled(Button)`
  background: inherit;
  border: none;
  border-radius: 0.25em;
  padding: 0;
  box-shadow: unset;
  justify-content: center;
  color: ${p => getColor(p.color)};
  :hover {
    background-color: ${getColor("bodyGlow")};
  }
`

export default Button
