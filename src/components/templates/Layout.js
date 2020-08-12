import React from "react"
import { GlobalStyles } from "../../theme/GlobalStyles"
import styled, { ThemeProvider } from "styled-components"

import { useToggleTheme } from "../../utils/useToggleTheme"
import { darkTheme, lightTheme } from "@/theme/"
import ThemeContext from "../../utils/ThemeContext"
import Header from "../organisms/Header"
import Footer from "@components/atoms/Footer"

const MainWrapper = styled.main`
  position: relative;
  margin: ${props => props.theme.spacing.mobile.sides};
  margin-bottom: 0;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin: 0 ${props => props.theme.spacing.desktop.sides};
  }
`

const Content = styled.div``

const Layout = ({ children }) => {
  const [theme, toggleTheme] = useToggleTheme()

  const themeValue = { theme, toggleTheme }

  const themeMode = theme === "light" ? lightTheme : darkTheme
  return (
    <ThemeContext.Provider value={themeValue}>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Header />
        <MainWrapper>
          <Content>{children}</Content>
          <Footer />
        </MainWrapper>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default Layout
