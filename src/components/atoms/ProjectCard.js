import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Text, Title } from "./Typography"
import { SecondaryButton } from "./Button"
import SvgIcon from "./SvgIcon"

import { ArrowRight } from "@/icons"

const ProjectCard = ({ name, headline, slug, locale, icon }) => {
  return (
    <Card to={`/${locale}/projects/${slug}`}>
      <Content>
        <IconHeader>
          <Icon path={icon} />
          <TitleText color="primary">{name}</TitleText>
        </IconHeader>
        <Description color="bodyContrast">{headline}</Description>
        <LearnMoreButton
          color="primary"
          bg="toolbar"
          lower
          rightIcon={ArrowRight}
        >
          Learn More
        </LearnMoreButton>
      </Content>
    </Card>
  )
}

export default ProjectCard

const Card = styled(Link)`
  background-color: ${props => props.theme.colors.toolbar};
  border-radius: 1em;
  box-shadow: 0px 6px 5px -1px rgba(0, 0, 0, 0.25);
  padding: 0.5em 0.5em 1em 0.5em;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0.5em;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    text-align: center;
  }
`

const IconHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.5em;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: column;
    margin: 0;
  }
`
const Icon = styled(SvgIcon)`
  width: 2.25em;
  fill: ${props => props.theme.colors.primary};
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 3.5em;
    margin: 1em 0 0.25em 0;
  }
`

const TitleText = styled(Title)`
  margin-left: 0.25em;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin: 0;
  }
`

const Description = styled(Text)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 3em;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    height: 4.5em;
  }
`

const LearnMoreButton = styled(SecondaryButton)`
  align-self: flex-end;
  height: 2em;
  margin-top: 0.5em;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    border-radius: 0.5em;
    align-self: center;
  }
`
