import React from "react"
import Seo from "../components/atoms/Seo"
import Layout from "../components/templates/Layout"
import Start from "../sections/Start"
import Projects from "../sections/Projects"
import Skills from "../sections/Skills"
import Blog from "../sections/Blog"

const Portfolio = () => {
  return (
    <Layout>
      <Seo title="Portfolio Max Werpers" />
      <Start />
      <Projects />
      <Skills />
      <Blog />
    </Layout>
  )
}

export default Portfolio
