import React from "react"
import styled from "styled-components"

import { SvgIcon, Text } from "atoms"
import NavLink from "./NavLink"

import { getColor } from "theme"

const BottomNav = ({ navlinks }) => (
  <Wrapper>
    {navlinks.map(link => (
      <NavItem key={link.name} {...link} hash>
        <NavIcon path={link.icon} />
        <Text>{link.name}</Text>
      </NavItem>
    ))}
  </Wrapper>
)

export default BottomNav

const Wrapper = styled.ul`
  position: fixed;
  height: 3.5em;
  z-index: 1;
  bottom: 0em;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: ${getColor("body")};
  box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.75);
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`

const NavItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const NavIcon = styled(SvgIcon)`
  height: 2em;
`
