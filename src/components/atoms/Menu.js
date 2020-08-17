import React, { useState } from "react"
import styled, { keyframes } from "styled-components"

import { SecondaryButton } from "./Button"
import SvgIcon from "./SvgIcon"
import Link from "./Link"

import { Menu1, Close } from "icons"

const Menu = ({ navlinks, hash, ...rest }) => {
  const [open, setOpen] = useState(false)

  return (
    <Wrapper {...rest}>
      <Burger
        onClick={() => {
          setOpen(!open)
        }}
        path={open ? Close : Menu1}
      />
      <Content open={open}>
        <Nav>
          {navlinks.map(link => (
            <NavItem key={link.name} {...link} nav>
              <SecondaryButton
                onClick={() => {
                  setOpen(!open)
                }}
              >
                {link.name}
              </SecondaryButton>
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
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`

const Content = styled.div`
  visibility: ${props => (props.open ? "visible" : "hidden")};
  position: fixed;
  top: 6vh;
  right: 0;
  height: 94vh;
  width: 100vw;
  z-index: 1;
  background: ${props => props.theme.colors.body};
  opacity: ${props => (props.open ? 100 : 0)};
  transition: visibility 1s, opacity 0.5s ease;
`

const Nav = styled.nav`
  margin: 25vh 0;
  display: grid;
  grid-auto-columns: 20vw;
  grid-auto-rows: 10vh;
  justify-content: center;
`

const NavItem = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${SecondaryButton} {
    width: 33vw;
  }
`
