import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

import { BaseLayout } from "templates"
import { Header } from "atoms"
import { ProjectsList, ProjectsSearch } from "sections/projects"

export default ({ id, data }) => {
  const intl = useIntl()

  return (
    <BaseLayout>
      <Wrapper id={id}>
        {/* <Header text={intl.formatMessage({ id: "projects" })} /> */}
        <Content>
          <ProjectsSearch />
          <ProjectsList projects={data.allProjectsYaml.nodes} />
        </Content>
      </Wrapper>
    </BaseLayout>
  )
}

const Wrapper = styled.main``

const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const projecstQuery = graphql`
  query ProjectsQuery {
    allProjectsYaml {
      nodes {
        name
        year
        url
        homepageUrl
        tech {
          icon
          text
        }
      }
    }
  }
`
