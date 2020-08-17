import React from "react"
import { ThemeProvider } from "utils"

import "content/fonts/font.css"

export const wrapPageElement = ({ element, props }) => (
  <ThemeProvider {...props}>{element}</ThemeProvider>
)
