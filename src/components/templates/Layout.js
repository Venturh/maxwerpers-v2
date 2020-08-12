import React from "react"
import { GlobalStyles } from "../../theme/GlobalStyles"
import styled, { ThemeProvider } from "styled-components"

import { useToggleTheme } from "../../utils/useToggleTheme"
import { darkTheme, lightTheme } from "@/theme/"
import ThemeContext from "../../utils/ThemeContext"
import Header from "../organisms/Header"
import Footer from "@components/atoms/Footer"

const Wrapper = styled.div`
  position: relative;
`

const Content = styled.main`
  margin: ${props => props.theme.spacing.mobile.sides};
  margin-bottom: 0;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin: 0 ${props => props.theme.spacing.desktop.sides};
  }
`

const Layout = ({ children }) => {
  const [theme, toggleTheme] = useToggleTheme()

  const themeValue = { theme, toggleTheme }

  const themeMode = theme === "light" ? lightTheme : darkTheme
  return (
    <ThemeContext.Provider value={themeValue}>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Wrapper>
          <Header />
          <Content>
            {children}
            <Footer />
          </Content>
        </Wrapper>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default Layout
