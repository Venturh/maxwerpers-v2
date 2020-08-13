import React, { useState } from "react"
import styled from "styled-components"
import { Link as LLink } from "gatsby-plugin-intl"
import { Link } from "react-scroll"

import { getColor } from "theme"

const NavLink = ({ path, children, className, hash }) => {
  const [active, setActive] = useState(0)
  if (hash) {
    return (
      <SLink
        className={className}
        key={path}
        active={active}
        to={path}
        spy
        smooth
        duration={400}
        onSetActive={() => {
          setActive(1)
        }}
        onSetInactive={() => {
          setActive(0)
        }}
      >
        {children}
      </SLink>
    )
  } else {
    return <NLink to={path}>{children}</NLink>
  }
}

export default NavLink

const SLink = styled(Link)`
  font-size: 1.25em;
  color: ${p => (p.active ? getColor("primary") : "")};
  & > * {
    color: ${p => (p.active ? getColor("primary") : "")};
    fill: ${p => (p.active ? getColor("primary") : getColor("bodyContrast"))};
  }
`

const NLink = styled(LLink)`
  font-size: 1.25em;
  color: ${getColor("bodyContrast")};
`
