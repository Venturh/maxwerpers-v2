import React from "react"
import styled from "styled-components"
import { StyledIconBase } from "@styled-icons/styled-icon"
import { SubText } from "./Typography"

const Card = styled.a`
  width: ${props => props.width};
  height: ${props => props.height};
  display: flex;
  align-items: center;
  border-radius: 0.5em;
  padding: 1em;
  background: ${props => props.theme.colors.toolbar || "blue"};
  box-shadow: 0px 6px 5px -1px rgba(0, 0, 0, 0.25);
  transition: all 0.2s ease-in-out;
  ${StyledIconBase} {
    height: 2em;
    fill: ${props => props.theme.colors.primary};
    opacity: 100;
  }

  :hover {
    transform: scale(1.1);
  }
`

const Text = styled(SubText)`
  margin: 0 0.5em;
`

const IconButton = props => {
  return (
    <Card className={props.className} href={props.link} {...props}>
      {props.leftIcon ? <props.leftIcon /> : null}
      <Text>{props.text}</Text>
      {props.rightIcon ? <props.rightIcon /> : null}
    </Card>
  )
}

export default IconButton
