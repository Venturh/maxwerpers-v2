import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

import { BaseLayout } from "templates"
import { Header } from "atoms"
import { ProjectsList } from "sections/projects"

export default ({ id, data }) => {
  const intl = useIntl()

  return (
    <BaseLayout>
      <Wrapper id={id}>
        <Header text={intl.formatMessage({ id: "projects" })} />
        <ProjectsList projects={data.allProjectsYaml.nodes} />
      </Wrapper>
    </BaseLayout>
  )
}

const Wrapper = styled.main``

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
