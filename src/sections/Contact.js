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
      <Text>Let´s talk ! Let me know how I can help you</Text>
      <ChatButton leftIcon={Chat} link="mailto:contact@maxwerpers.me">
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
  margin-bottom: 2em;
  padding: 2em;
  height: 40vh;
  border-radius: 1em;
  background: ${getColor("toolbar")};
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    height: 33vh;
    align-items: center;
  }
`
const ChatButton = styled(PrimaryButton)`
  fill: ${getColor("toolbar")};
`
