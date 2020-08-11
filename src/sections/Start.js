import React, { useContext } from "react"
import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import { scroller } from "react-scroll"

import ThemeContext from "../utils/ThemeContext"
import { PrimaryButton, SecondaryButton } from "../components/atoms/Button"
import { Subheader, Text, Subtitle } from "../components/atoms/Typography"
import Image from "../components/atoms/Image"

const Start = ({ id, refs }) => {
  const { theme } = useContext(ThemeContext)
  const intl = useIntl()

  return (
    <Wrapper id={id} ref={refs}>
      <Cover name={theme === "light" ? "cover_light" : "cover_dark"} />
      <InfoWrapper>
        <Text color="bodyContrast">
          {intl.formatMessage({ id: "welcomeTitle" })}
        </Text>
        <Subheader color="primary">
          {intl.formatMessage({ id: "welcomeMsg" })}
        </Subheader>
        <Subtitle color="bodyContrast">
          {intl.formatMessage({ id: "welcomeSub" })}
        </Subtitle>
        <ButtonGroup>
          <StyledPrimary
            large={true}
            onClick={() =>
              scroller.scrollTo("projects", {
                duration: 300,
                delay: 0,
                smooth: "easeInOutQuart",
              })
            }
          >
            {intl.formatMessage({ id: "projects" })}
          </StyledPrimary>
          <StyledSecondary
            large
            onClick={() =>
              scroller.scrollTo("skills", {
                duration: 300,
                delay: 0,
                smooth: "easeInOutQuart",
              })
            }
          >
            {intl.formatMessage({ id: "experience" })}
          </StyledSecondary>
        </ButtonGroup>
      </InfoWrapper>
    </Wrapper>
  )
}

export default Start

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: row-reverse;
    justify-content: space-evenly;
    align-items: center;
  }
`

const Cover = styled(Image)`
  height: 30vh;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin-top: 0;
    height: 50vh;
  }
`

const InfoWrapper = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin-top: 0;
    align-items: start;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: flex;
    flex-direction: row;
    justify-content: start;
  }
`

const StyledPrimary = styled(PrimaryButton)`
  width: 9em;
  height: 3em;
  margin: 1em 0;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 12em;
    padding: 0.75em 0;
    margin: 0.5em 0.5em 0 0;
  }
`

const StyledSecondary = styled(SecondaryButton)`
  width: 9em;
  height: 3em;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 12em;
    padding: 0.75em 0;
    margin: 0.5em 0.5em 0 0;
  }
`
