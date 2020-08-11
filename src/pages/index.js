import React from "react"
import Seo from "@components/atoms/Seo"
import Layout from "@components/templates/Layout"
import Start from "@/sections/Start"
import Projects from "@/sections/Projects"
import Expertise from "@/sections/Expertise"
import About from "@/sections/About"

const Portfolio = () => {
  return (
    <Layout>
      <Seo title="Portfolio Max Werpers" />
      <Start id="start" />
      <Projects id="projects" />
      <Expertise id="skills" />
      <About id="about" />
    </Layout>
  )
}

export default Portfolio
