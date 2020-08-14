import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { Subheader, Subtitle } from "@components/atoms/Typography"
import GithubCard from "@components/atoms/GithubCard"
import SvgIcon from "@components/atoms/SvgIcon"
import IconButton from "@components/atoms/IconButton"

import { ArrowDownS } from "@/icons"

const Hero = ({ project, localizations, github }) => {
  const { tech } = project
  return (
    <Wrapper>
      <HeroImgWrapperMobile>
        <HeroImg
          fluid={project.titleImage.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          alt=""
        />
      </HeroImgWrapperMobile>
      <Info>
        <InfoText>
          <HeadingWrapper>
            <Subheader>{project.name}</Subheader>
            <Icon path={project.icon} />
          </HeadingWrapper>
          <Description color="bodyContrast">
            {localizations.headline}
          </Description>
        </InfoText>
        <Github {...github} />
        <Techs>
          {tech.map(({ text, icon }) => (
            <IconButton key={text} leftIcon={icon}>
              {text}
            </IconButton>
          ))}
        </Techs>
      </Info>
      <HeroImgWrapperDesktop>
        <HeroImg
          fluid={project.titleImage.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          alt=""
        />
      </HeroImgWrapperDesktop>
      <ArrowDown path={ArrowDownS} />
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
  height: 100vh;
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
`

const Info = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
`

const InfoText = styled.div`
  margin-left: 0.75em;
`

const Icon = styled(SvgIcon)`
  width: 2.25em;
  margin-left: 1em;
  fill: ${props => props.theme.colors.primary};
`

const Description = styled(Subtitle)`
  margin: 0.5em 0;
  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    width: 90%;
  }
`

const Github = styled(GithubCard)`
  margin: 1em 0;
  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    width: 90%;
  }
`

const HeroImgWrapperMobile = styled.div`
  display: block;
  width: 100%;
  margin: 1em auto;
  overflow: hidden;
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`

const HeroImg = styled(Img)`
  width: 100vw;
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 40vw;
  }
`

const HeroImgWrapperDesktop = styled.div`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: block;
    width: 40vw;
  }
`

const Techs = styled.div`
  margin-top: 1em;
  display: grid;
  gap: 1em;

  grid-template-columns: repeat(auto-fill, 45%);

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    width: 90%;
    grid-template-columns: repeat(auto-fit, 30%);
  }
`

const ArrowDown = styled(SvgIcon)`
  display: none;
  /* @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: block;
    fill: ${props => props.theme.colors.primary};
    height: 2em;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 1.5em;
  } */
`
