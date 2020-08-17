import { useState } from "react"

export const useToggleTheme = () => {
  const [theme, setTheme] = useState(
    (typeof window !== "undefined" && window.localStorage.getItem("theme")) ||
      "dark"
  )

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
