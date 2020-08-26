import React from "react"
import { Seo } from "atoms"
import { BaseLayout } from "templates"
import { Start, Expertise, Contact } from "sections/portfolio"

const Portfolio = () => {
  return (
    <BaseLayout>
      <Seo title="Portfolio Max Werpers" />
      <Start id="start" />
      <Expertise id="skills" />
      <Contact id="contact" />
    </BaseLayout>
  )
}

export default Portfolio
