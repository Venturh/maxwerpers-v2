import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useIntl } from "gatsby-plugin-intl"

import { Section, Subheader, Text, Subtitle, Title, SvgIcon } from "atoms"

import { Location } from "icons"

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
      <AvatarInfo>
        <Avatar fluid={avatar.childImageSharp.fluid} />
        <Subtitle>Max Werpers, 25</Subtitle>
        <LocationWrapper>
          <LocationIcon path={Location} />
          <Subtitle color="bgContrast">Wiesbaden, Germany</Subtitle>
        </LocationWrapper>
      </AvatarInfo>

      <Description>
        <DesktopHeader text={intl.formatMessage({ id: "aboutMe" })} />
        <Title>
          {intl.formatMessage({
            id: "aboutMeSub",
          })}
        </Title>
        <Text>{intl.formatMessage({ id: "aboutMeDesc" })}</Text>
      </Description>
    </Wrapper>
  )
}

export default About

const Wrapper = styled(Section)`
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
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
    margin-bottom: 0.5em;
  }
`

const AvatarInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin: 0 2em;
    height: 50vh;
    width: 25%;
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
  margin-top: 1em;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 75%;
    height: 50vh;
  }
`
