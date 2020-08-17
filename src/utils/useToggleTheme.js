import { useState } from "react"

export const useToggleTheme = () => {
  const localTheme = window.localStorage.getItem("theme")
  const [theme, setTheme] = useState(localTheme || "dark")

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark")
      setTheme("dark")
    } else {
      window.localStorage.setItem("theme", "light")
      setTheme("light")
    }
  }

  return [theme, toggleTheme]
}
