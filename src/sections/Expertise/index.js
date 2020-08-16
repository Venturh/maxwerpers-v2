import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

import { Section, Subheader } from "atoms"
import Skills from "./Skills"
import Experience from "./Experience"

export default ({ id }) => {
  const { allSkillsYaml, allExperienceYaml } = useStaticQuery(graphql`
    query Skills {
      allSkillsYaml {
        nodes {
          Frameworks {
            name
            path
          }

          Languages {
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
      allExperienceYaml {
        nodes {
          place
          localizations {
            locale
            time
            type
            work
          }
        }
      }
    }
  `)
  const intl = useIntl()

  const experienceByLanguage = allExperienceYaml.nodes.map(
    ({ place, localizations }) => {
      const { work, type, time } = localizations.find(
        local => local.locale === intl.locale
      )
      return {
        place,
        work,
        type,
        time,
      }
    }
  )

  return (
    <Wrapper id={id}>
      <Header>{intl.formatMessage({ id: "skills" })}</Header>
      <Content>
        <SkillsWrapper>
          <DesktopHeader>{intl.formatMessage({ id: "skills" })}</DesktopHeader>
          <Skills {...allSkillsYaml} />
        </SkillsWrapper>
        <ExperienceWrapper>
          <DesktopHeader>
            {intl.formatMessage({ id: "experience" })}
          </DesktopHeader>
          <Experience {...experienceByLanguage} />
        </ExperienceWrapper>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled(Section)``

const Header = styled(Subheader)`
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

const SkillsWrapper = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 40%;
  }
`

const ExperienceWrapper = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 55%;
  }
`

const DesktopHeader = styled(Subheader)`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin: 7vh 0 ${props => props.theme.spacing.heading} 0;
    display: block;
    text-align: center;
  }
`
