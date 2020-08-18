import React from "react"
import styled from "styled-components"
import { useIntl, changeLocale } from "gatsby-plugin-intl"

import { ThemeToggle, Pill, Title, Menu, Link, Text } from "atoms"
import { LanguageSwitch } from "molecules"

import { getColor, getSpacing } from "theme"

export default ({ navlinks, hash }) => {
  const { locale, formatMessage } = useIntl()
  const languages = ["Deutsch", "English"]

  return (
    <Nav>
      <Left>
        <Link nav to="/">
          <Logo>
            <Title color="primary">max</Title>
            <Title color="bodyContrast">werpers</Title>
          </Logo>
        </Link>
        <InfoPill>{formatMessage({ id: "infoPill" })}</InfoPill>
      </Left>
      <NavItems>
        <NavLinks>
          {navlinks.map(link => (
            <StyledLink
              nav
              color="bodyContrast"
              activecolor="primary"
              key={link.name}
              {...link}
            >
              <Text color="bodyContrast">{link.name}</Text>
            </StyledLink>
          ))}
        </NavLinks>
        <NavTools>
          <LanguageSwitch
            changeLanguage={changeLocale}
            currentLanguage={locale}
            languages={languages}
          />
          <ThemeToggle style={{ marginLeft: "0.5em", marginRight: "0.5em" }} />
        </NavTools>
        <Menu hash={hash} navlinks={navlinks} />
      </NavItems>
    </Nav>
  )
}

const Nav = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3em;
  background-color: ${getColor("body")};
  border-bottom: 1px solid ${getColor("bodyTint")};
  padding: 0 ${getSpacing("mobile", "sides")};
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    padding: 0 ${getSpacing("desktop", "sides")};
  }
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
      margin-right: 0.5em;
    }
  }
`

const StyledLink = styled(Link)`
  padding: 0.5em;
  border-radius: 0.25em;
  :hover {
    background-color: ${getColor("bodyGlow")};
  }
`

const NavTools = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5em;
`
