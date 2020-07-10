import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

import ProjectCard from "../components/atoms/ProjectCard"
import Typography from "../components/atoms/Typography"
import Button from "../components/atoms/Button"

const Wrapper = styled.section`
  height: 100%;
`

const Heading = styled(Typography)`
  margin: ${props => props.theme.spacing.heading} 0;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin: ${props => props.theme.spacing.heading} 0
      ${props => props.theme.spacing.heading} 0;
  }
`

const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Main = styled.div``

const Cards = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1rem;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(200px, 23vw));
    grid-gap: 2em;
  }
`

const ShowMore = styled(Button)`
  width: 100%;
  height: 2.5em;
  margin: 1em 0.1em;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 10vw;
  }
`

const Projects = ({ id, refs }) => {
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
                  stargazers {
                    totalCount
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
    <Wrapper id={id} ref={refs}>
      <Content>
        <Main>
          <Heading
            color="primary"
            fontSize="subheader"
            variant="p"
            text={intl.formatMessage({ id: "projects" })}
          />
          <Cards>
            {githubData.data.user.pinnedItems.nodes.map((data, index) => {
              return <ProjectCard key={index} {...data} />
            })}
          </Cards>
          <ShowMore
            color="primaryContrast"
            bg="primary"
            rounded
            link="https://github.com/Venturh"
          >
            {intl.formatMessage({ id: "showmore" })}
          </ShowMore>
        </Main>
      </Content>
    </Wrapper>
  )
}

export default Projects
