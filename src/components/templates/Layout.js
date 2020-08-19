import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

import { Header } from "organisms"
import { Footer } from "atoms"
import { spacing } from "theme"

export const BaseLayout = ({ children, ...props }) => {
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
    <Wrapper {...props}>
      <Header navlinks={navlinks} />
      <Content {...props}>{children}</Content>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Content = styled.main`
  flex: 1 0 auto;
  padding: 3.5em ${spacing.mobile.sides};
  padding-bottom: 0;

  @media (min-width: ${p => p.theme.breakpoints.lg}) {
    margin: 0;
    padding: 5em ${p => (p.small ? "30%" : spacing.desktop.sides)};
    padding-bottom: 0;
  }
`
