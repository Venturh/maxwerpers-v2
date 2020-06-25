import React, { useState } from "react"

import Layout from "../components/templates/Layout"
import Seo from "../components/atoms/Seo"

const NotFoundPage = ({ data }) => {
  const [section, setSection] = useState("error")
  const sectionValue = { section, setSection }
  return (
    <Layout Layout section={sectionValue}>
      <Seo title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage
