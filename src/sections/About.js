import React, { useContext } from "react"
import styled from "styled-components"
import { useIntl } from "gatsby-plugin-intl"
import { StyledIconBase } from "@styled-icons/styled-icon"
import { LocationOn } from "@styled-icons/material/LocationOn"

import ThemeContext from "../utils/ThemeContext"
import Typography from "../components/atoms/Typography"
import Image from "../components/atoms/Image"
import SocialCard from "../components/atoms/SocialCard"

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Heading = styled(Typography)`
  margin: ${props => props.theme.spacing.heading} 0;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: none;
  }
`

const DesktopHeader = styled(Typography)`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: block;
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

const Cover = styled(Image)`
  height: 25vh;
  margin-bottom: 1em;
  background: transparent;
  border-radius: 100%;
  box-shadow: 0px 6px 5px -1px rgba(0, 0, 0, 0.25);
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    height: 30vh;
  }
`

const LocationWrapper = styled.div`
  display: flex;
  ${StyledIconBase} {
    width: 1.5em;
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

const About = ({ id, refs }) => {
  const { theme } = useContext(ThemeContext)
  const intl = useIntl()
  return (
    <Wrapper id={id} ref={refs}>
      <Heading
        color="primary"
        fontSize="subheader"
        variant="p"
        text={intl.formatMessage({ id: "aboutMe" })}
      />

      <Content>
        <InformationWrapper>
          <Cover name={theme === "light" ? "about_light" : "about_dark"} />
          <Typography
            color="bodyContrast"
            fontSize="subtitle"
            variant="span"
            text="Max Werpers, 25"
          />
          <LocationWrapper>
            <LocationOn />
            <Typography
              color="bodyContrast"
              fontSize="subtitle"
              variant="span"
              text="Wiesbaden, Germany"
            />
          </LocationWrapper>
        </InformationWrapper>
        <Description>
          <DesktopHeader
            color="primary"
            fontSize="subheader"
            variant="p"
            text={intl.formatMessage({ id: "aboutMe" })}
          />
          <Typography
            color="bodyContrast"
            fontSize="title"
            variant="p"
            text="Student - Developer"
          />
          <Typography
            color="bodyContrast"
            fontSize="subtitle"
            variant="p"
            text={intl.formatMessage({ id: "aboutMeDesc" })}
          />
        </Description>
        <SocialCard />
      </Content>
    </Wrapper>
  )
}

export default About
