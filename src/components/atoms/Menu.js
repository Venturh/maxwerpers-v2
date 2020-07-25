import React, { useState } from "react"
import { animateScroll as scroll, scroller } from "react-scroll"
import styled, { keyframes } from "styled-components"
import { StyledIconBase } from "@styled-icons/styled-icon"
import { Menu3, Close } from "@styled-icons/remix-fill/"

import { SecondaryButton } from "./Button"

const scaleUp = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`

const Burger = styled.div`
  cursor: pointer;
  transition: all 2ms ease-out;
  ${StyledIconBase} {
    height: 1.5em;
    animation: ${scaleUp} 0.1s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
`

const Content = styled.div`
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  position: fixed;
  right: 0;
  height: 100vh;
  width: 100vw;
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

const Menu = ({ items }) => {
  const [isOpen, setisOpen] = useState(false)

  const scrollTo = (label, index) => {
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
    setisOpen(false)
  }

  return (
    <div>
      <MenuIcon isOpen={isOpen} setOpen={setisOpen} />
      <Content isOpen={isOpen}>
        <Nav>
          {items.map((link, index) => (
            <NavItem onClick={() => scrollTo(link.path, index)} key={index}>
              {link.name}
            </NavItem>
          ))}
        </Nav>
      </Content>
    </div>
  )
}

const MenuIcon = ({ setOpen, isOpen }) => (
  <Burger
    onClick={() => {
      setOpen(!isOpen)
    }}
  >
    {isOpen ? <Close /> : <Menu3 />}
  </Burger>
)

export default Menu
