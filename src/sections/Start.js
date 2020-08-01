import React, { useContext } from "react"
import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import { scroller } from "react-scroll"

import ThemeContext from "../utils/ThemeContext"
import { PrimaryButton, SecondaryButton } from "../components/atoms/Button"
import { Subheader, Text, Subtitle } from "../components/atoms/Typography"
import Shape from "../components/atoms/Shape"
import Image from "../components/atoms/Image"
import Socials from "../components/atoms/Socials"

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 93vh;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: row-reverse;
    justify-content: space-evenly;
    align-items: center;
  }
`
const Shapes = styled.div`
  position: absolute;
  right: 0px;
  top: 8vh;
  display: flex;
  flex-direction: row-reverse;
  z-index: -1;
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

const Social = styled.div`
  display: flex;
  width: 25vw;
  height: 15vh;
  flex-direction: column;
  align-content: space-around;
  justify-content: space-around;
  position: absolute;
  left: 1vw;
  top: 10vh;
`

const Start = ({ id, refs }) => {
  const { theme } = useContext(ThemeContext)
  const intl = useIntl()

  return (
    <Wrapper id={id} ref={refs}>
      <Shapes>
        <Shape
          bg="primary"
          width={100}
          height={20}
          borderRadius="10px 0px 0px 10px"
        />
        <Shape bg="primary" width={20} height={20} borderRadius="100%" />
        <Shape bg="primary" width={20} height={20} borderRadius="100%" />
      </Shapes>
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
        <Social>
          <Socials />
        </Social>
      </InfoWrapper>
    </Wrapper>
  )
}

export default Start
