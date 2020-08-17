import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

import { GlobalStyles } from "theme/GlobalStyles"
import { Header } from "organisms"
import { Footer } from "atoms"

const BaseLayout = ({ children }) => {
  const { locale } = useIntl()
  const { allNavigationYaml } = useStaticQuery(
    graphql`
      query Navigation {
        allNavigationYaml {
          nodes {
            path
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
    ({ localizations, path, icon }) => ({
      name: localizations.find(local => local.locale === locale).name,
      path,
      icon,
    })
  )

  return (
    <Wrapper>
      <GlobalStyles />
      <Header navlinks={navlinks} />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  )
}

export { BaseLayout }

const Wrapper = styled.div``

const Content = styled.main`
  margin: 8vh ${props => props.theme.spacing.mobile.sides};
  margin-bottom: 0;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin: 8vh ${props => props.theme.spacing.desktop.sides};
  }
`
