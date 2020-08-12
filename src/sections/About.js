import React from "react"
import styled from "styled-components"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { useIntl } from "gatsby-plugin-intl"

import Section from "@components/atoms/Section"
import { Subheader, Text, Subtitle, Title } from "@components/atoms/Typography"
import IconButton from "@components/atoms/IconButton"
import SvgIcon from "@components/atoms/SvgIcon"

import socials from "@/content/socials"
import { Location } from "@/icons"

const About = ({ id, refs }) => {
  const intl = useIntl()

  const { avatar } = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "images/sections/avatar.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
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
            {socials.map(social => (
              <IconButton key={social.link} {...social} />
            ))}
          </Socials>
        </Description>
      </Content>
    </Wrapper>
  )
}

export default About

const Wrapper = styled(Section)`
  display: flex;
  flex-direction: column;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    height: 80vh;
  }
`

const Heading = styled(Subheader)`
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: none;
  }
`

const DesktopHeader = styled(Subheader)`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: block;
    margin: ${props => props.theme.spacing.heading} 0;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    height: 100%;
    flex-direction: row;
  }
`

const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 2em;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    height: 50vh;
  }
`

const Avatar = styled(Img)`
  width: 30vh;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 40vh;
  }
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
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50vh;
    width: 33%;
    margin: 0 2em;
  }
`

const Socials = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 0.5em;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: flex;
    flex-wrap: wrap;
    & > * {
      flex-grow: 1;
      min-width: 25%;
    }
  }
`
