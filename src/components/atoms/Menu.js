import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import { useIntl } from "gatsby-plugin-intl"
import { navigate } from "gatsby"
import { animateScroll as scroll, scroller } from "react-scroll"

import { SecondaryButton } from "./Button"
import SvgIcon from "./SvgIcon"
import { Menu1, Close } from "@/icons"

const Menu = ({ items, ...rest }) => {
  const intl = useIntl()
  const [isOpen, setisOpen] = useState(false)

  const scrollTo = label => {
    const options = {
      duration: 300,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -75,
    }
    navigate("/" + intl.locale + "/#" + label)
    if (label === "home") {
      scroll.scrollToTop(options)
    } else {
      scroller.scrollTo(label, options)
    }
    setisOpen(false)
  }

  return (
    <Wrapper {...rest}>
      <Burger
        onClick={() => {
          setisOpen(!isOpen)
        }}
        path={isOpen ? Close : Menu1}
      />
      <Content isOpen={isOpen}>
        <Nav>
          {items.map((link, index) => (
            <NavItem onClick={() => scrollTo(link.path, index)} key={index}>
              {link.name}
            </NavItem>
          ))}
        </Nav>
      </Content>
    </Wrapper>
  )
}

export default Menu

const scaleUp = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Burger = styled(SvgIcon)`
  cursor: pointer;
  justify-self: center;
  fill: ${props => props.theme.colors.bodyContrast};
  height: ${props => props.theme.sizes.navIcons};
  transition: all 2ms ease-out;
  animation: ${scaleUp} 0.1s cubic-bezier(0.455, 0.03, 0.515, 0.955);
`

const Content = styled.div`
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  position: fixed;
  top: 6vh;
  right: 0;
  height: 94vh;
  width: 100vw;
  z-index: 1;
  background: ${props => props.theme.colors.body};
  opacity: ${props => (props.isOpen ? 100 : 0)};
  transition: visibility 1s, opacity 0.5s ease;
`

const Nav = styled.nav`
  margin: 25vh 0;
  display: grid;
  grid-auto-columns: 20vw;
  grid-auto-rows: 10vh;
  justify-content: center;
`

const NavItem = styled(SecondaryButton)`
  min-width: 25vw;
  margin-top: 1em;
`
