import React from "react"
import { ThemeProvider } from "utils"
import "fontsource-jost"

export const wrapPageElement = ({ element, props }) => (
  <ThemeProvider {...props}>{element}</ThemeProvider>
)
