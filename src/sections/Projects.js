import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

import ProjectCard from "../components/atoms/ProjectCard"
import Typography from "../components/atoms/Typography"
import rocketDark from "../images/rocket_dark.svg"
import Button from "../components/atoms/Button"

const Wrapper = styled.section`
  height: 100%;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
`
const Cards = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1rem;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, auto);
    margin: auto 0;
  }
`

const Heading = styled(Typography)`
  margin: ${props => props.theme.spacing.heading} 0;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin: 6vh 0 ${props => props.theme.spacing.heading} 0;
  }
`

const Content = styled.div`
  display: flex;
  justify-content: space-around;
`

const Rocket = styled.img`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: block;
    height: 80vh;
  }
`

const CardsWrapper = styled.div`
  margin: auto 0;
`

const ShowMore = styled(Button)`
  width: 100%;
  margin: 1em 0.1em;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 10vw;
  }
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
      <Content>
        <CardsWrapper>
          <Cards>
            {githubData.data.user.pinnedItems.nodes.map((data, index) => {
              return <ProjectCard key={index} {...data} />
            })}
          </Cards>
          <ShowMore
            color="primaryContrast"
            bg="primary"
            rounded
            onClick={() => window.open("https://github.com/Venturh")}
          >
            {intl.formatMessage({ id: "showmore" })}
          </ShowMore>
        </CardsWrapper>

        <Rocket src={rocketDark} />
      </Content>
    </Wrapper>
  )
}

export default Projects
