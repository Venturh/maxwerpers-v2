import React, { useContext } from "react"
import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import { scroller } from "react-scroll"
import { StyledIconBase } from "@styled-icons/styled-icon"
import { Linkedin, PlayStore, Github } from "@styled-icons/boxicons-logos/"

import coverDark from "../images/cover_dark.svg"
import coverLight from "../images/cover_light.svg"

import Button from "../components/atoms/Button"
import Typography from "../components/atoms/Typography"
import Shape from "../components/atoms/Shape"

import ThemeContext from "../utils/ThemeContext"

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 94vh;

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

const Cover = styled.img`
  height: 30vh;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    height: 60vh;
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
`

const StyledButton = styled(Button)`
  width: 50vw;
  margin-top: 0.5rem;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 12.5vw;
    margin-right: 0.5rem;
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
      <Cover src={theme === "light" ? coverLight : coverDark} alt="cover" />
      <InfoWrapper>
        <Typography
          variant="p"
          fontSize="subbody"
          color={theme === "dark" ? "secondary" : "bodyContrast"}
          text={intl.formatMessage({ id: "welcomeTitle" })}
        />
        <Typography
          variant="h3"
          fontSize="title"
          color="bodyContrast"
          text={intl.formatMessage({ id: "welcomeMsg" })}
        />
        <Typography
          variant="span"
          fontSize="body"
          color="bodyContrast"
          text={intl.formatMessage({ id: "welcomeSub" })}
        />
        <Typography
          variant="span"
          fontSize="subbody"
          color={theme === "dark" ? "primary" : "bodyContrast"}
          text={intl.formatMessage({ id: "infoMessage" })}
        />
        <ButtonGroup>
          <StyledButton
            color="primaryContrast"
            bg="primary"
            rounded
            onClick={() =>
              scroller.scrollTo("projects", {
                duration: 300,
                delay: 0,
                smooth: "easeInOutQuart",
              })
            }
          >
            {intl.formatMessage({ id: "projects" })}
          </StyledButton>
          <StyledButton
            color="secondaryContrast"
            bg="secondary"
            rounded
            onClick={() =>
              scroller.scrollTo("skills", {
                duration: 300,
                delay: 0,
                smooth: "easeInOutQuart",
              })
            }
          >
            {intl.formatMessage({ id: "experience" })}
          </StyledButton>
        </ButtonGroup>
        <Social>
          <Github onClick={() => window.open("https://github.com/Venturh")} />
          <PlayStore
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/developer?id=Venturh&hl=gsw"
              )
            }
          />
          <Linkedin
            onClick={() =>
              window.open("https://www.linkedin.com/in/max-werpers-9474251a5/")
            }
          />
        </Social>
      </InfoWrapper>
    </Wrapper>
  )
}

export default Start
