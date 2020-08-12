import React from "react"
import styled from "styled-components"

import SvgIcon from "./SvgIcon"
import { SubText } from "./Typography"

const Card = styled.a`
  width: ${props => props.width};
  height: ${props => props.height};
  display: flex;
  align-items: center;
  border-radius: 0.5em;
  padding: 0.75em;
  background: ${props => props.theme.colors.toolbar || "blue"};
  box-shadow: 0px 6px 5px -1px rgba(0, 0, 0, 0.25);
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`

const Icon = styled(SvgIcon)`
  height: 2em;
  fill: ${props => props.theme.colors.primary};
`

const Text = styled(SubText)`
  margin: 0 0.5em;
`

const IconButton = ({ children, text, link, rightIcon, leftIcon, ...rest }) => {
  return (
    <Card href={link} target="_blank" rel="noopener noreferrer" {...rest}>
      {leftIcon ? <Icon path={leftIcon} /> : null}
      <Text>{text || children}</Text>
      {rightIcon ? <Icon path={rightIcon} /> : null}
    </Card>
  )
}

export const IconOnlyButton = styled(IconButton)`
  background: inherit;
  box-shadow: unset;
  justify-content: center;
  padding: 0;
  ${Icon} {
    height: 1.5em;
  }
`

export default IconButton
