import React, { useContext } from "react"
import styled, { useTheme } from "styled-components"
import { useIntl, changeLocale } from "gatsby-plugin-intl"
import { KeyboardArrowDown } from "@styled-icons/material-rounded/KeyboardArrowDown"
import { Language } from "@styled-icons/material/Language"

import logoDark from "../../images/logo_dark.svg"
import logoLight from "../../images/logo_light.svg"

import Menu from "../atoms/Menu"
import ThemeToggle from "../atoms/ThemeToggle"
import LanguageSwitch from "../molecules/LanguageSwitch"
import ThemeContext from "../../utils/ThemeContext"

const Navigation = styled.nav`
  position: fixed;
  z-index: 1;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.mobile.sides};
  background: ${props => props.theme.colors.body};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.75);
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: none;
  }
`

const Logo = styled.img`
  height: 3.8vh;
`

const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Mobile = ({ navlinks }) => {
  const intl = useIntl()
  const l = ["Deutsch", "English", "Francais"]
  const theme = useTheme()
  const themeMode = useContext(ThemeContext)

  return (
    <Navigation>
      <Logo
        src={themeMode.theme === "dark" ? logoDark : logoLight}
        alt="logo-nav"
      />
      <Items>
        <LanguageSwitch
          changeLanguage={changeLocale}
          currentLanguage={intl.locale}
          languages={l}
          space={"6vh"}
          iconLeft={<Language />}
          iconRight={<KeyboardArrowDown />}
          iconSize="1.25em"
          iconColor={theme.colors.bodyContrast}
          dropdownBackground={theme.colors.bodyTint}
          dropdownHoverColor={theme.colors.toolbarBackground}
        />
        <ThemeToggle iconSize="1.25em" />
        <Menu items={navlinks} />
      </Items>
    </Navigation>
  )
}

export default Mobile
