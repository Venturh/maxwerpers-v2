import React, { useContext } from "react"
import styled from "styled-components"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { useIntl } from "gatsby-plugin-intl"
import { ThemeContext } from "styled-components"

import { Subheader, Text, Subtitle, Title } from "@components/atoms/Typography"
import IconButton from "@components/atoms/IconButton"
import SvgIcon from "@components/atoms/SvgIcon"

import { Location, Github, LinkedIn, PlayStore, MailCheck } from "../icons"

const About = ({ id, refs }) => {
  const theme = useContext(ThemeContext)
  const intl = useIntl()

  const { avatar } = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "images/sections/avatar2.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Wrapper id={id} ref={refs}>
      <Heading text={intl.formatMessage({ id: "aboutMe" })} />

      <Content>
        <InformationWrapper>
          <Avatar fluid={avatar.childImageSharp.fluid} />
          <Subtitle>Max Werpers, 25</Subtitle>
          <LocationWrapper>
            <LocationIcon path={Location} />
            <Subtitle color="bgContrast">Wiesbaden, Germany</Subtitle>
          </LocationWrapper>
        </InformationWrapper>
        <Description>
          <DesktopHeader text={intl.formatMessage({ id: "aboutMe" })} />
          <Title>
            {intl.formatMessage({
              id: "aboutMeSub",
            })}
          </Title>
          <Text>{intl.formatMessage({ id: "aboutMeDesc" })}</Text>
          <Socials>
            <IconButton
              leftIcon={Github}
              link="https://github.com/Venturh"
              text="Venturh"
              color={theme.colors.secondaryRgba}
            />
            <IconButton
              leftIcon={LinkedIn}
              link="https://www.linkedin.com/in/max-werpers-9474251a5/"
              text="Max Werpers"
              color={theme.colors.secondaryRgba}
            />
            <IconButton
              leftIcon={PlayStore}
              link="https://play.google.com/store/apps/developer?id=Venturh"
              text="Venturh"
              color={theme.colors.secondaryRgba}
            />
          </Socials>
          <Mail
            leftIcon={MailCheck}
            link="mailto:contact@maxwerpers.me"
            text="contact@maxwerpers.me"
            color={theme.colors.secondaryRgba}
          />
        </Description>
      </Content>
    </Wrapper>
  )
}

export default About

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    height: 100vh;
  }
`

const Heading = styled(Subheader)`
  margin: 7vh 0 ${props => props.theme.spacing.heading} 0;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: none;
  }
`

const DesktopHeader = styled(Subheader)`
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
  height: 50vh;
`

const Avatar = styled(Img)`
  width: 40vh;
`

const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
`

const LocationIcon = styled(SvgIcon)`
  height: 1.25em;
  fill: ${props => props.theme.colors.primary};
  cursor: pointer;
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

const Socials = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 0.5em;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: flex;
    gap: 0;
    & > * {
      margin-right: 0.75em;
    }
  }
`

const Mail = styled(IconButton)`
  margin-top: 0.5em;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin-top: 1em;
    width: 60%;
  }
`
