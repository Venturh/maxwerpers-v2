import React from "react"
import Seo from "../components/atoms/Seo"
import Layout from "../components/templates/Layout"
import Start from "../sections/Start"
import Projects from "../sections/Projects"
import Skills from "../sections/Skills"

const Home = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <Start />
      <Projects />
      <Skills />
    </Layout>
  )
}

export default Home
