import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"
import Headroom from "react-headroom"

import Desktop from "./Desktop"
import Mobile from "./Mobile"

const Header = () => {
  const currentLanguage = useIntl().locale

  const { allNavigationJson } = useStaticQuery(
    graphql`
      query Navigation {
        allNavigationJson {
          nodes {
            name
            path
            icon
            lang
          }
        }
      }
    `
  )

  const headerByLanguage = allNavigationJson.nodes.filter(
    nodes => nodes.lang === currentLanguage
  )

  return (
    <header>
      <Headroom>
        <Desktop navlinks={headerByLanguage} />
      </Headroom>
      <Mobile navlinks={headerByLanguage} />
    </header>
  )
}

export default Header
