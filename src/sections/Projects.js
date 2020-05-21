import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

import ProjectCard from "../components/atoms/ProjectCard"
import Typography from "../components/atoms/Typography"

const Wrapper = styled.section`
  height: 100%;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }
`
const Cards = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 1rem;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, auto);
  }
`

const Heading = styled(Typography)`
  margin-bottom: ${props => props.theme.spacing.mobile.sides};
`

const Projects = () => {
  const intl = useIntl()
  const { githubData } = useStaticQuery(
    graphql`
      query ProjectQuery {
        githubData {
          data {
            user {
              pinnedItems {
                nodes {
                  url
                  nameWithOwner
                  description
                  homepageUrl
                  primaryLanguage {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <Wrapper id="projects">
      <Heading
        variant="h1"
        fontSize="subheader"
        text={intl.formatMessage({ id: "projects" })}
      />
      <Cards>
        {githubData.data.user.pinnedItems.nodes.map((data, index) => {
          return <ProjectCard key={index} {...data} />
        })}
      </Cards>
    </Wrapper>
  )
}

export default Projects
