import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

import { Header } from "organisms"
import { Footer } from "atoms"

import { GlobalStyles } from "theme/GlobalStyles"
import { useToggleTheme } from "utils/useToggleTheme"
import { darkTheme, lightTheme } from "theme/"
import ThemeContext from "utils/ThemeContext"

const Base = ({ children }) => {
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

const PortfolioLayout = ({ children }) => {
  const { locale } = useIntl()
  const { allNavigationYaml } = useStaticQuery(
    graphql`
      query Navigation {
        allNavigationYaml {
          nodes {
            path
            icon
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
    <Base>
      <Wrapper>
        <Header hash navlinks={navlinks} />
        <Content>
          {children}
          <Footer />
        </Content>
      </Wrapper>
    </Base>
  )
}

const ProjectLayout = ({ children }) => {
  const navlinks = [{ path: "/", name: "Portfolio" }]
  return (
    <Base>
      <Wrapper>
        <Header navlinks={navlinks} />
        <Content>
          {children}
          <Footer />
        </Content>
      </Wrapper>
    </Base>
  )
}

export { PortfolioLayout, ProjectLayout }

const Wrapper = styled.div`
  position: relative;
`

const Content = styled.main`
  margin: ${props => props.theme.spacing.mobile.sides};
  margin-bottom: 0;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin: 4em ${props => props.theme.spacing.desktop.sides};
  }
`
