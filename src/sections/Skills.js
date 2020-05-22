import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

import Typography from "../components/atoms/Typography"
import SkillsContainer from "../components/templates/SkillsContainer"
import ExperienceContainer from "../components/templates/ExperienceContainer"

const Wrapper = styled.div``

const Header = styled(Typography)`
  margin: ${props => props.theme.spacing.heading} 0;
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

const DesktopHeader = styled(Typography)`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: block;
    text-align: center;
    margin: 6vh 0 ${props => props.theme.spacing.heading} 0;
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
          Software_Development {
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
  const intl = useIntl()
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
        text={intl.formatMessage({ id: "skills" })}
      />

      <Content>
        <div>
          <DesktopHeader
            color="bodyContrast"
            fontSize="subheader"
            variant="h1"
            text={intl.formatMessage({ id: "skills" })}
          />{" "}
          <SkillsContainer {...allDataJson} />
        </div>
        <div>
          <DesktopHeader
            color="bodyContrast"
            fontSize="subheader"
            variant="h1"
            text={intl.formatMessage({ id: "experience" })}
          />
          <ExperienceContainer {...experienceByLanguage} />
        </div>
      </Content>
    </Wrapper>
  )
}

export default Skills
