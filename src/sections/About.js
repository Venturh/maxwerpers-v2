import React, { useContext } from "react"
import styled from "styled-components"
import { StyledIconBase } from "@styled-icons/styled-icon"
import { LocationOn } from "@styled-icons/material/LocationOn"

import Typography from "../components/atoms/Typography"

import AboutDark from "../images/about_dark.svg"
import AboutLight from "../images/about_light.svg"
import ThemeContext from "../utils/ThemeContext"
import { useIntl } from "gatsby-plugin-intl"

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Heading = styled(Typography)`
  margin: ${props => props.theme.spacing.heading} 0;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin: ${props => props.theme.spacing.heading} 0
      ${props => props.theme.spacing.heading} 0;
  }
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`

const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const Image = styled.img`
  height: 25vh;
  margin-bottom: 1em;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    height: 40vh;
  }
`

const LocationWrapper = styled.div`
  display: flex;
  ${StyledIconBase} {
    width: 1em;
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
  }
`

const Description = styled.article`
  word-wrap: break-word;
  margin-top: 2vh;
  width: 90%;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin-left: 12vw;
    width: 33vw;
    margin-top: 0;
  }
`

const About = () => {
  const { theme } = useContext(ThemeContext)
  const intl = useIntl()
  return (
    <Wrapper id="about">
      <Heading
        color="bodyContrast"
        fontSize="subheader"
        variant="h1"
        text={intl.formatMessage({ id: "aboutMe" })}
      />

      <Content>
        <InformationWrapper>
          <Image src={theme === "light" ? AboutLight : AboutDark} alt="cover" />
          <Typography
            color="bodyContrast"
            fontSize="body"
            variant="span"
            text="Max Werpers, 25"
          />
          <LocationWrapper>
            <LocationOn />
            <Typography
              color="bodyContrast"
              fontSize="body"
              variant="span"
              text="Wiesbaden, Germany"
            />
          </LocationWrapper>
        </InformationWrapper>
        <Description>
          <Typography
            color="bodyContrast"
            fontSize="body"
            variant="p"
            text={intl.formatMessage({ id: "aboutMeDesc" })}
          />
        </Description>
      </Content>
    </Wrapper>
  )
}

export default About
