import React from "react"
import { GlobalStyles } from "../theme/GlobalStyles"
import styled, { ThemeProvider } from "styled-components"
import Header from "./Header"
import { darkTheme, lightTheme } from "../theme/Theme"
import { useToggleTheme } from "../utils/useToggleTheme"
import ThemeContext from "../utils/ThemeContext"

const MainWrapper = styled.div`
  padding: ${props => props.theme.spacing.mobile.sides};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    padding: ${props => props.theme.spacing.desktop.sides};
  }
`

const Content = styled.div`
  padding: 0 var(--sides-padding-desktop);
  margin: 0 auto;
  max-width: 1400px;
`

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
        </MainWrapper>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default Layout
