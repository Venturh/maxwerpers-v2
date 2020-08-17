import React, { createContext } from "react"
import { ThemeProvider } from "styled-components"

import { darkTheme, lightTheme } from "theme"
import { useToggleTheme } from "./useToggleTheme"

export default ({ children }) => {
  const [theme, toggleTheme] = useToggleTheme()
  const themeValue = { theme, toggleTheme }
  console.log("theme", theme)
  const themeMode = theme === "light" ? lightTheme : darkTheme

  return (
    <ThemeContext.Provider value={themeValue}>
      <ThemeProvider theme={themeMode}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
})
