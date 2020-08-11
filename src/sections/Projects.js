import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

import { Header, Title } from "@components/atoms/Typography"
import ProjectCard from "@components/atoms/ProjectCard"
import { PrimaryButton } from "@components/atoms/Button"

import { ArrowRightUp } from "@/icons"

const Projects = ({ id, refs }) => {
  const intl = useIntl()

  const { allProjectsYaml } = useStaticQuery(
    graphql`
      query AllProjectsQuery {
        allProjectsYaml {
          edges {
            node {
              name
              slug
              icon
              localizations {
                locale
                headline
              }
            }
          }
        }
      }
    `
  )
  return (
    <Wrapper id={id} ref={refs}>
      <Heading>
        <Header text={intl.formatMessage({ id: "projects" })} />
        <Title color="bodyContrast">
          {intl.formatMessage({ id: "projectsSub" })}
        </Title>
      </Heading>
      <Content>
        <Cards>
          {allProjectsYaml.edges.map(({ node }) => {
            const localization = node.localizations.find(
              ({ locale }) => locale === intl.locale
            )
            return <ProjectCard key={node.name} {...localization} {...node} />
          })}
        </Cards>
        <ShowMore rightIcon={ArrowRightUp} link="https://github.com/Venturh">
          {intl.formatMessage({ id: "showmore" })}
        </ShowMore>
      </Content>
    </Wrapper>
  )
}

export default Projects

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin-bottom: 10vh;
    min-height: 100vh;
  }
`

const Heading = styled.div`
  margin: 7vh 0 2em 0;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    text-align: center;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Cards = styled.div`
  display: grid;
  grid-template-columns: 100%;

  justify-content: center;
  gap: 1em;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 25%);
  }
`

const ShowMore = styled(PrimaryButton)`
  width: 100%;
  height: 2.5em;
  margin: 1em 0em;
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 90%;
  }
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 12%;
    margin: 1.5em 0em;
  }
`
