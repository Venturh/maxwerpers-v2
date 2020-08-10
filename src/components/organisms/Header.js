import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { useIntl, changeLocale } from "gatsby-plugin-intl"
import { animateScroll as scroll, scroller } from "react-scroll"
import { Link, navigate } from "gatsby"

import { SubText } from "../atoms/Typography"
import ThemeToggle from "../atoms/ThemeToggle"
import LanguageSwitch from "../molecules/LanguageSwitch"
import Menu from "../atoms/Menu"
import ThemeContext from "../../utils/ThemeContext"

import logoDark from "../../images/logo_dark.svg"
import logoLight from "../../images/logo_light.svg"

const Header = () => {
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
  const intl = useIntl()
  const languages = ["Deutsch", "English", "Francais"]
  const themeMode = useContext(ThemeContext)
  const navlinks = allNavigationJson.nodes.filter(nodes =>
    nodes.lang.includes(intl.locale)
  )

  const scrollTo = label => {
    const options = {
      duration: 300,
      delay: 0,
      smooth: "easeInOutQuart",
    }
    navigate("/" + intl.locale + "/#" + label)
    if (label === "home") {
      scroll.scrollToTop(options)
    } else {
      scroller.scrollTo(label, options)
    }
  }

  return (
    <Nav>
      <Link to={`/${intl.locale}`}>
        <Logo
          src={themeMode.theme === "dark" ? logoDark : logoLight}
          alt="logo-nav"
        />
      </Link>
      <NavItems>
        <NavLinks>
          {navlinks.map(({ name, path }) => (
            <SubText onClick={() => scrollTo(path)} key={name}>
              {name.toUpperCase()}
            </SubText>
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
const NavTools = styled.div`
  display: flex;
  align-items: center;
`

const MobileNav = styled(Menu)`
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`
