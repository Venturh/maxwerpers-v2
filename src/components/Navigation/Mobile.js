import React from "react"
import styled, { useTheme } from "styled-components"
import LanguageSwitch from "../Base/LanguageSwitch"
import ThemeToggle from "../ThemeToggle"
import { useIntl, changeLocale } from "gatsby-plugin-intl"
import { KeyboardArrowDown } from "@styled-icons/material-rounded/KeyboardArrowDown"
import { Language } from "@styled-icons/material/Language"

const Navigation = styled.nav`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

const Top = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.mobile.sides};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.75);
`

const TopItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Bottom = styled.div`
  position: fixed;
  overflow: hidden;
  bottom: 0;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
  background-color: ${({ theme }) => theme.colors.body};
  box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.75);
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const IconImage = styled.svg`
  fill: ${({ theme }) => theme.colors.primary};
  width: 24px;
  height: 24px;
`

const IconLink = styled.a`
  /* ... */
`

const Mobile = ({ navlinks }) => {
  const intl = useIntl()
  const l = ["Deutsch", "English", "Francais"]
  const theme = useTheme()
  return (
    <Navigation>
      <Top>
        <h5>Logo</h5>
        <TopItems>
          <LanguageSwitch
            changeLanguage={changeLocale}
            currentLanguage={intl.locale}
            languages={l}
            space={"6vh"}
            iconLeft={<Language />}
            iconRight={<KeyboardArrowDown />}
            iconSize="1em"
            iconColor={theme.colors.primary}
            fontSize="0.75em"
            dropdownBackground={theme.colors.bodyTint}
            dropdownHoverColor={theme.colors.toolbarBackground}
          />
          <ThemeToggle iconSize="1em" />
        </TopItems>
      </Top>
      <Bottom>
        {navlinks.map((link, index) => {
          return (
            <Item key={index}>
              <IconImage>
                <path d={link.icon} />
              </IconImage>
              <IconLink>{link.name}</IconLink>
            </Item>
          )
        })}
      </Bottom>
    </Navigation>
  )
}

export default Mobile
