import React from "react"

import { BaseLayout } from "templates"
import { Seo } from "atoms"

const NotFoundPage = ({ data }) => {
  return (
    <BaseLayout>
      <Seo title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </BaseLayout>
  )
}

export default NotFoundPage
