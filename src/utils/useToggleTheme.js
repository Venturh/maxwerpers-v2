import { useState, useEffect } from "react"

const getLocalStorageTheme = () => {
  try {
    const localTheme = localStorage && localStorage.getItem("theme")
    if (localTheme && ["light", "dark"].includes(localTheme)) {
      return localTheme
    }
  } catch (err) {
    console.warn("Can’t access local storage:", err.message)
  }
}

export const useToggleTheme = () => {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if (theme === null) {
      setTheme(getLocalStorageTheme())
    }
  }, [theme])

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
