import React, { createContext } from "react"
import { ThemeProvider } from "styled-components"

import { darkTheme, lightTheme } from "theme"
import { useToggleTheme } from "./useToggleTheme"
import { GlobalStyles } from "theme/GlobalStyles"

export default ({ children }) => {
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

export const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
})
