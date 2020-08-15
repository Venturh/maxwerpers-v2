import React from "react"
import styled from "styled-components"

import { Section } from "atoms"
import { PrimaryButton } from "atoms"
import { Subheader, Text } from "atoms"

import { Chat } from "icons"
import { getColor } from "theme"

const Contact = ({ id }) => {
  return (
    <Wrapper id={id}>
      <Subheader>What are you working on?</Subheader>
      <Text>
        Let´s find a way how we can work together, I would love to help you.
      </Text>
      <ChatButton
        color="primaryContrast"
        leftIcon={Chat}
        link="mailto:contact@maxwerpers.me"
      >
        Chat
      </ChatButton>
    </Wrapper>
  )
}

export default Contact

const Wrapper = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 0;
  margin-top: 6vh;
  padding: 2em;
  height: 40vh;
  background-color: ${getColor("body")};
  border-radius: 1em;
  box-shadow: 0px 6px 5px -1px rgba(0, 0, 0, 0.25);
  border: 0.1px solid ${getColor("bodyTint")};
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin: 0;
    height: 33vh;
  }

  ${Subheader} {
    text-align: center;
  }
  ${Text} {
    @media (min-width: ${props => props.theme.breakpoints.lg}) {
      text-align: center;
    }
  }
`
const ChatButton = styled(PrimaryButton)`
  fill: ${getColor("toolbar")};
  align-self: center;
  width: 100%;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 12em;
  }
`
