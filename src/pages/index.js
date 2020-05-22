import React from "react"
import Seo from "../components/atoms/Seo"
import Layout from "../components/templates/Layout"
import Start from "../sections/Start"
import Projects from "../sections/Projects"
import Skills from "../sections/Skills"
import Blog from "../sections/Blog"

const Home = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Start />
      <Projects />
      <Skills />
      <Blog />
    </Layout>
  )
}

export default Home
