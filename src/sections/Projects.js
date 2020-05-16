import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import ProjectCard from "../components/ProjectCard"

const Wrapper = styled.div`
  height: 100%;
`

const Projects = ({ data }) => {
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
    <div>
      {githubData.data.user.pinnedItems.nodes.map((data, index) => {
        return <ProjectCard key={index} {...data} />
      })}
    </div>
  )
}

export default Projects
