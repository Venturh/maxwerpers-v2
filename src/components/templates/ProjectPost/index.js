import React from "react"
import { graphql } from "gatsby"

import { ProjectLayout } from "templates"
import Hero from "./Hero.js"

const ProjectPost = ({ pageContext, data }) => {
  const { projectsYaml } = data
  const localizations = projectsYaml.localizations.find(
    data => data.locale === pageContext.language
  )
  return (
    <ProjectLayout>
      <Hero
        project={projectsYaml}
        localizations={localizations}
        github={data.github.repository}
      />
    </ProjectLayout>
  )
}

export default ProjectPost

export const projectQuery = graphql`
  query SingleProjectQuery($slug: String!, $gitName: String!) {
    projectsYaml(slug: { eq: $slug }) {
      name
      gitName
      icon
      titleImage {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gif {
        publicURL
      }
      slug
      localizations {
        locale
        headline
        ideas {
          title
          text
        }
      }
      tech {
        icon
        text
      }
    }
    github {
      repository(name: $gitName, owner: "Venturh") {
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
`
