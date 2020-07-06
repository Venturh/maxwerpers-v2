import React, { useContext } from "react"
import styled from "styled-components"
import { useIntl, changeLocale } from "gatsby-plugin-intl"
import { useTheme } from "styled-components"
import { Language } from "@styled-icons/material/Language"
import { KeyboardArrowDown } from "@styled-icons/material-rounded/KeyboardArrowDown"
import { animateScroll as scroll, scroller } from "react-scroll"

import logoDark from "../../images/logo_dark.svg"
import logoLight from "../../images/logo_light.svg"
import ThemeToggle from "../atoms/ThemeToggle"
import { Tabs, Tab } from "../molecules/Tabs"
import LanguageSwitch from "../molecules/LanguageSwitch"
import ThemeContext from "../../utils/ThemeContext"

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6vh;
  padding: 0 var(--sides-padding-desktop);
  background-color: ${({ theme }) => theme.colors.body};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.75);
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    display: none;
  }
`

const Logo = styled.img`
  height: 4vh;
`

const NavItems = styled.div`
  display: flex;
  align-items: center;
`

const NavTool = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1em;
`

const Desktop = ({ navlinks }) => {
  const intl = useIntl()
  const l = ["Deutsch", "English", "Francais"]
  const theme = useTheme()
  const themeMode = useContext(ThemeContext)

  const scrollTo = label => {
    const options = {
      duration: 300,
      delay: 0,
      smooth: "easeInOutQuart",
    }
    if (label === "home") {
      scroll.scrollToTop(options)
    } else {
      scroller.scrollTo(label, options)
    }
  }
  return (
    <Nav>
      <Logo
        src={themeMode.theme === "dark" ? logoDark : logoLight}
        alt="logo-nav"
      />
      <NavItems>
        <Tabs
          indicatorColor={theme.colors.primary}
          textColor={theme.colors.bodyContrast}
          onClick={id => scrollTo(id)}
        >
          {navlinks.map((link, index) => {
            return (
              <Tab
                key={index}
                label={link.name.toUpperCase()}
                path={link.path}
              />
            )
          })}
        </Tabs>

        <NavTool>
          <LanguageSwitch
            changeLanguage={changeLocale}
            currentLanguage={intl.locale}
            languages={l}
            space={"6vh"}
            iconLeft={<Language />}
            iconRight={<KeyboardArrowDown />}
            iconColor={theme.colors.bodyContrast}
            iconSize="1em"
            fontSize="caption"
            dropdownBackground={theme.colors.bodyTint}
            dropdownHoverColor={theme.colors.toolbarBackground}
          ></LanguageSwitch>
          <ThemeToggle iconSize="1.25em" />
        </NavTool>
      </NavItems>
    </Nav>
  )
}

export default Desktop
