import React from "react"
import styled from "styled-components"
import { StyledIconBase } from "@styled-icons/styled-icon"
import Typography from "./Typography"

const Card = styled.a`
  width: ${props => props.width};
  height: ${props => props.height};
  display: flex;
  align-items: center;
  border-radius: 0.5em;
  padding: 1em;
  background: ${props =>
    `rgba(${props.color[0]}, ${props.color[1]}, ${props.color[2]}, 0.1)` ||
    "blue"};
  ${StyledIconBase} {
    height: 2em;
    fill: ${props =>
      `rgba(${props.color[0]}, ${props.color[1]}, ${props.color[2]}, 1)`};
    opacity: 100;
  }
`

const Text = styled(Typography)`
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
