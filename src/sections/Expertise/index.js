import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

import { Subheader } from "@components/atoms/Typography"
import Skills from "./Skills"
import Experience from "./Experience"

const Expertise = ({ id, refs }) => {
  const { allSkillsYaml, allExperienceYaml } = useStaticQuery(graphql`
    query Skills {
      allSkillsYaml {
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
    <Wrapper id={id} ref={refs}>
      <Header>{intl.formatMessage({ id: "skills" })}</Header>
      <Content>
        <div>
          <DesktopHeader>{intl.formatMessage({ id: "skills" })}</DesktopHeader>
          <Skills {...allSkillsYaml} />
        </div>
        <div>
          <DesktopHeader>
            {intl.formatMessage({ id: "experience" })}
          </DesktopHeader>
          <Experience {...experienceByLanguage} />
        </div>
      </Content>
    </Wrapper>
  )
}

export default Expertise

const Wrapper = styled.div``

const Header = styled(Subheader)`
  margin: 7vh 0 ${props => props.theme.spacing.heading} 0;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: none;
  }
`

const Content = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
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
