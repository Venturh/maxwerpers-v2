import React from "react"
import styled from "styled-components"
import { Link } from "gatsby-plugin-intl"

import { getColor } from "theme"

export default ({ to, children, nav, ...props }) => {
  if (nav)
    return (
      <NavLink activeClassName="active" to={to} {...props}>
        {children}
      </NavLink>
    )
  else
    return (
      <LinkOut href={to} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </LinkOut>
    )
}

const NavLink = styled(Link)`
  color: ${p => getColor(p.color)};
  text-decoration: ${p => (p.underline ? "underline" : "inherit")};
  & > * {
    color: ${p => getColor(p.color)};
  }
  &.active {
    color: ${p => getColor(p.activecolor)};
    & > * {
      color: ${p => getColor(p.activecolor)};
    }
  }
`

const LinkOut = styled.a`
  color: ${p => getColor(p.color)};
  text-decoration: ${p => (p.underline ? "underline" : "inherit")};
  cursor: pointer;
`
