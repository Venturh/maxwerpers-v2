import React from "react"
import styled from "styled-components"
import { useIntl, changeLocale, Link as LLink } from "gatsby-plugin-intl"

import { ThemeToggle, Pill, Title, Menu } from "atoms"
import { LanguageSwitch } from "molecules"

import { getColor, getSpacing } from "theme"
import NavLink from "./NavLink"

const Header = ({ navlinks, hash }) => {
  const { locale, formatMessage } = useIntl()
  const languages = ["Deutsch", "English", "Francais"]

  return (
    <nav>
      <TopNav>
        <Left>
          <LLink to="/">
            <Logo>
              <Title color="primary">max</Title>
              <Title color="bodyContrast">werpers</Title>
            </Logo>
          </LLink>
          <InfoPill>{formatMessage({ id: "infoPill" })}</InfoPill>
        </Left>
        <NavItems>
          <NavLinks>
            {navlinks.map(link => (
              <NavLink key={link.name} hash={hash} {...link}>
                {link.name}
              </NavLink>
            ))}
          </NavLinks>
          <NavTools>
            <LanguageSwitch
              changeLanguage={changeLocale}
              currentLanguage={locale}
              languages={languages}
            />
            <ThemeToggle
              style={{ marginLeft: "0.5em", marginRight: "0.5em" }}
            />
          </NavTools>
          <Menu hash={hash} navlinks={navlinks} />
        </NavItems>
      </TopNav>
    </nav>
  )
}

export default Header

const TopNav = styled.ul`
  padding: 0 ${getSpacing("nav")};
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6vh;
  width: 100vw;
  background-color: ${getColor("body")};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.75);
`

const Left = styled.li`
  display: flex;
  align-items: center;
`

const InfoPill = styled(Pill)`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: inline;
    margin-left: 1em;
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
`

const NavItems = styled.ul`
  display: flex;
  align-items: center;
`
const NavLinks = styled.li`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
    cursor: pointer;
    & > * {
      margin-right: 1em;
    }
  }
`

const NavTools = styled.div`
  display: flex;
  align-items: center;
`
