import React, { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import Seo from "../components/atoms/Seo"
import Layout from "../components/templates/Layout"
import Start from "../sections/Start"
import Projects from "../sections/Projects"
import Skills from "../sections/Skills"
import About from "../sections/About"

const Portfolio = () => {
  const options = { rootMargin: "-100px 0px" }
  const [startRef, startInView, startEntry] = useInView(options)
  const [projectRef, projectInView, projectEntry] = useInView(options)
  const [skillRef, skillInView, skillEntry] = useInView(options)
  const [aboutRef, aboutInView, aboutEntry] = useInView(options)

  const [section, setSection] = useState("start")

  useEffect(() => {
    if (projectEntry && projectInView) {
      setSection(projectEntry.target.id)
    } else if (startEntry && startInView) {
      setSection(startEntry.target.id)
    } else if (skillEntry && skillInView) {
      setSection(skillEntry.target.id)
    } else if (aboutEntry && aboutInView) {
      setSection(aboutEntry.target.id)
    }
  }, [
    startInView,
    projectInView,
    skillInView,
    aboutInView,
    startEntry,
    projectEntry,
    skillEntry,
    aboutEntry,
  ])

  const sectionValue = { section, setSection }
  return (
    <Layout section={sectionValue}>
      <Seo title="Portfolio Max Werpers" />
      <Start id="start" refs={startRef} />
      <Projects id="projects" refs={projectRef} />
      <Skills id="skills" refs={skillRef} />
      <About id="about" refs={aboutRef} />
    </Layout>
  )
}

export default Portfolio
