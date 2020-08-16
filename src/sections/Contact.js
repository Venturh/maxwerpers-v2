import React from "react"
import styled from "styled-components"

import { Section, PrimaryButton, Subheader, Text } from "atoms"

import { Chat } from "icons"
import { getColor } from "theme"
import { card2 } from "theme/styles"

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
  ${card2};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 0;
  height: 40vh;
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
