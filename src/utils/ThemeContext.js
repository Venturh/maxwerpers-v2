import { createContext } from "react"

const ThemeContext = createContext({
  theme: "dark",
  setTheme: () => null,
})
export default ThemeContext
