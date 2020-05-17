import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import ProjectCard from "../components/atoms/ProjectCard"

const Wrapper = styled.div`
  height: 100%;
  margin-bottom: 10vh;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    height: 100vh;
    margin-bottom: 0;
  }
`
const Cards = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 1rem;
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(2, auto);
  }
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, auto);
  }
`

const Projects = () => {
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
      <Cards>
        {githubData.data.user.pinnedItems.nodes.map((data, index) => {
          return <ProjectCard key={index} {...data} />
        })}
      </Cards>
    </Wrapper>
  )
}

export default Projects