import React from "react"
import Seo from "@components/atoms/Seo"
import { PortfolioLayout } from "templates"
import Start from "@/sections/Start"
import Expertise from "@/sections/Expertise"
import About from "@/sections/About"
import Contact from "../sections/Contact"

const Portfolio = () => {
  return (
    <PortfolioLayout>
      <Seo title="Portfolio Max Werpers" />
      <Start id="start" />
      {/* <Projects id="projects" /> */}
      <Expertise id="skills" />
      <About id="about" />
      <Contact id="contact" />
    </PortfolioLayout>
  )
}

export default Portfolio
