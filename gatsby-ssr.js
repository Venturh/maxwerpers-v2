import React from "react"
import { ThemeProvider } from "utils"

export const wrapPageElement = ({ element, props }) => (
  <ThemeProvider {...props}>{element}</ThemeProvider>
)
