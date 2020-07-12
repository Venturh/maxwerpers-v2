import React, { useContext } from "react"
import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import { scroller } from "react-scroll"
import { StyledIconBase } from "@styled-icons/styled-icon"

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
  height: 100vh;

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
    height: 50vh;
  }
`

const InfoWrapper = styled.div`
  margin-top: 5%;
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
  display: none;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: flex;
    flex-direction: row;
    justify-content: start;
  }

  Button {
    @media (min-width: ${props => props.theme.breakpoints.lg}) {
      width: 12em;
      padding: 0.75em 0;
      margin: 0.5em 0.5em 0 0;
    }
  }
`

const Social = styled.div`
  display: flex;
  width: 50vw;
  justify-content: space-around;
  margin-top: 1em;
  ${StyledIconBase} {
    width: 2em;
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 25vw;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    height: 15vh;
    flex-direction: column;
    align-content: space-around;
    position: absolute;
    left: 1vw;
    top: 10vh;
  }
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
        {/* <Typography
          variant="span"
          fontSize="subbody"
          color={theme === "dark" ? "primary" : "bodyContrast"}
          text={intl.formatMessage({ id: "infoMessage" })}
        /> */}
        <ButtonGroup>
          <PrimaryButton
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
          </PrimaryButton>
          <SecondaryButton
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
          </SecondaryButton>
        </ButtonGroup>
        <Social>
          <Socials />
        </Social>
      </InfoWrapper>
    </Wrapper>
  )
}

export default Start
