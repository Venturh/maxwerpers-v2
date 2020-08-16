import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

import { Header } from "organisms"
import { Footer } from "atoms"

import { GlobalStyles } from "theme/GlobalStyles"
import { useToggleTheme } from "utils/useToggleTheme"
import { darkTheme, lightTheme } from "theme"
import ThemeContext from "utils/ThemeContext"

const Theme = ({ children }) => {
  const [theme, toggleTheme] = useToggleTheme()

  const themeValue = { theme, toggleTheme }

  const themeMode = theme === "light" ? lightTheme : darkTheme
  return (
    <ThemeContext.Provider value={themeValue}>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

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
    <Theme>
      <Wrapper>
        <Header navlinks={navlinks} />
        <Content>{children}</Content>
        <Footer />
      </Wrapper>
    </Theme>
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
