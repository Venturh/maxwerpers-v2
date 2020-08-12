import React, { useContext, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"
import styled from "styled-components"
import { useIntl, changeLocale } from "gatsby-plugin-intl"
import { navigate, Link as GLink } from "gatsby"
import { Link } from "react-scroll"

import ThemeToggle from "../atoms/ThemeToggle"
import LanguageSwitch from "../molecules/LanguageSwitch"
import Menu from "../atoms/Menu"
import ThemeContext from "@/utils/ThemeContext"

import { getColor } from "@/theme"
import logoDark from "@/images/logo_dark.svg"
import logoLight from "@/images/logo_light.svg"

const Header = () => {
  const intl = useIntl()
  const { allNavigationYaml } = useStaticQuery(
    graphql`
      query Navigation {
        allNavigationYaml {
          nodes {
            path
            localizations {
              locale
              name
            }
          }
        }
      }
    `
  )

  const languages = ["Deutsch", "English", "Francais"]
  const themeMode = useContext(ThemeContext)

  const navlinks = allNavigationYaml.nodes.map(({ localizations, path }) => ({
    name: localizations.find(local => local.locale === intl.locale).name,
    path,
  }))

  return (
    <Nav>
      <GLink to={`/${intl.locale}`}>
        <Logo
          src={themeMode.theme === "dark" ? logoDark : logoLight}
          alt="logo-nav"
        />
      </GLink>
      <NavItems>
        <NavLinks>
          {navlinks.map(link => (
            <NavLink key={link.name} {...link} />
          ))}
        </NavLinks>

        <NavTools>
          <LanguageSwitch
            changeLanguage={changeLocale}
            currentLanguage={intl.locale}
            languages={languages}
          />
          <ThemeToggle style={{ marginLeft: "0.5em", marginRight: "0.5em" }} />
          <MobileNav items={navlinks} />
        </NavTools>
      </NavItems>
    </Nav>
  )
}

const NavLink = ({ path, name }) => {
  const { pathname } = useLocation()
  const intl = useIntl()
  const [active, setActive] = useState(0)
  const click = label => {
    if (pathname.search("projects") !== -1)
      navigate("/" + intl.locale + "/#" + label)
  }
  return (
    <SLink
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
      onClick={() => click(path)}
    >
      {name}
    </SLink>
  )
}

export default Header

const Nav = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6vh;
  width: 100vw;
  top: 0;
  z-index: 1;
  padding: 0 var(--sides-padding-desktop);
  background-color: ${({ theme }) => theme.colors.body};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.75);
`

const Logo = styled.img`
  height: 4vh;
`

const NavItems = styled.ul`
  display: flex;
  align-items: center;
`
const NavLinks = styled.li`
  display: flex;
  cursor: pointer;
  & > * {
    margin-right: 1em;
  }
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`

const SLink = styled(Link)`
  font-size: 1.25em;
  color: ${p => (p.active ? getColor("primary") : "")};
`
const NavTools = styled.div`
  display: flex;
  align-items: center;
`

const MobileNav = styled(Menu)`
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`
