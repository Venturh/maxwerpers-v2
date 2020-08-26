import React from "react"
import styled from "styled-components"

import { Section, PrimaryButton, Subheader, Text } from "atoms"

import { Chat } from "icons"
import { getColor } from "theme"
import { card2 } from "theme/styles"
import { useIntl } from "gatsby-plugin-intl"

const Contact = ({ id }) => {
  const { formatMessage } = useIntl()
  return (
    <Wrapper id={id}>
      <Subheader>{formatMessage({ id: "contactH" })}</Subheader>
      <Text>{formatMessage({ id: "contactM" })}</Text>
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
  align-items: center;
  min-height: 0;
  padding: 2em 1em;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin-bottom: 10%;
  }

  ${Subheader} {
    text-align: center;
  }
  ${Text} {
    margin: 0.75em 0;
    @media (min-width: ${props => props.theme.breakpoints.lg}) {
      text-align: center;
    }
  }
`
const ChatButton = styled(PrimaryButton)`
  fill: ${getColor("primaryContrast")};
  align-self: center;
  width: 100%;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 12em;
  }
`
