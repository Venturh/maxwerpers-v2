import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

import { Header } from "organisms"
import { Footer } from "atoms"

const BaseLayout = ({ children }) => {
  const { locale } = useIntl()
  const { allNavigationYaml } = useStaticQuery(
    graphql`
      query Navigation {
        allNavigationYaml {
          nodes {
            to
            localizations {
              locale
              name
            }
          }
        }
      }
    `
  )
  const navlinks = allNavigationYaml.nodes.map(
    ({ localizations, to, icon }) => ({
      name: localizations.find(local => local.locale === locale).name,
      to,
      icon,
    })
  )

  return (
    <Wrapper>
      <Header navlinks={navlinks} />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  )
}

export { BaseLayout }

const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Content = styled.main`
  padding: 3.5em ${p => p.theme.spacing.mobile.sides} 0
    ${p => p.theme.spacing.mobile.sides};
  flex: 1 0 auto;
  @media (min-width: ${p => p.theme.breakpoints.lg}) {
    margin: 0;
    padding: 3.5em ${p => p.theme.spacing.desktop.sides} 0
      ${p => p.theme.spacing.desktop.sides};
  }
`
