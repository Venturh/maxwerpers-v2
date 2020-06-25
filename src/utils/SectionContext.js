import { createContext } from "react"

const SectionContext = createContext({
  section: "",
  setSection: () => null,
})
export default SectionContext
