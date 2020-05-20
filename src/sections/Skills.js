import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

import Typography from "../components/atoms/Typography"
import SkillsContainer from "../components/templates/SkillsContainer"
import ExperienceContainer from "../components/templates/ExperienceContainer"

const Wrapper = styled.div``

const Header = styled(Typography)`
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: none;
  }
`

const Content = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
  }
`

const DesktopHeaders = styled.div`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: flex;
    justify-content: space-between;
    h1:last-child {
      margin: 0 33vw;
    }
  }
`
const Skills = () => {
  const { allDataJson, allExperienceJson } = useStaticQuery(graphql`
    query Skills {
      allDataJson {
        nodes {
          Web {
            name
            path
          }
          Software {
            name
            path
          }
          Database {
            name
            path
          }
          Other {
            name
            path
          }
        }
      }
      allExperienceJson {
        nodes {
          type
          place
          work
          time
          lang
        }
      }
    }
  `)

  const currentLanguage = useIntl().locale
  const experienceByLanguage = allExperienceJson.nodes.filter(
    nodes => nodes.lang === currentLanguage
  )
  return (
    <Wrapper id="skills">
      <Header
        color="bodyContrast"
        fontSize="subheader"
        variant="h1"
        text="Skills"
      />
      <DesktopHeaders>
        <Typography
          color="bodyContrast"
          fontSize="subheader"
          variant="h1"
          text="Experience"
        />
        <Typography
          color="bodyContrast"
          fontSize="subheader"
          variant="h1"
          text="Skills"
        />
      </DesktopHeaders>
      <Content>
        <SkillsContainer {...allDataJson} />
        <ExperienceContainer {...experienceByLanguage} />
      </Content>
    </Wrapper>
  )
}

export default Skills
