import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"

import { Text } from "./Typography"
import SvgIcon from "./SvgIcon"

import { ArrowUpS, ArrowDownS } from "../../icons"

const DropDown = ({ items, getItem, icon, parentToggle }) => {
  const [open, setOpen] = useState(parentToggle)
  const dropdownRef = useRef()
  const displayRef = useRef()

  const handleClickOutside = e => {
    if (
      dropdownRef.current.contains(e.target) ||
      displayRef.current.contains(e.target)
    ) {
      return
    }
    setOpen(false)
  }

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open])

  useEffect(() => {
    setOpen(parentToggle)
  }, [parentToggle])

  return (
    <Wrapper ref={displayRef}>
      <DropdownIcon
        onClick={() => {
          setOpen(!open)
        }}
        path={open ? ArrowUpS : ArrowDownS}
      />
      {open ? (
        <StyledDropDown ref={dropdownRef}>
          {items.map(item => {
            return (
              <DropDownItem
                onClick={() => {
                  getItem(item)
                }}
                icon={icon}
                key={item}
              >
                <ItemIcon path={icon} />
                <Text>{item}</Text>
              </DropDownItem>
            )
          })}
        </StyledDropDown>
      ) : null}
    </Wrapper>
  )
}

export default DropDown

const Wrapper = styled.div`
  height: ${props => props.theme.sizes.navIcons};
  width: ${props => props.theme.sizes.navIcons};
`

const DropdownIcon = styled(SvgIcon)`
  height: ${props => props.theme.sizes.navIcons};
  fill: ${props => props.theme.colors.toolbarContrast};
`

const StyledDropDown = styled.div`
  position: absolute;
  top: 6vh;
  transform: translateX(-80%);
  border-radius: 5%;
  background-color: ${props => props.theme.colors.toolbar};
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 1;
`

const DropDownItem = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  border-radius: 8px;
  padding: 1em;
  transition: background 500ms;
  cursor: pointer;
  :hover {
    background-color: ${props => props.theme.colors.primary};
  }
`

const ItemIcon = styled(SvgIcon)`
  fill: ${props => props.theme.colors.bodyContrast};
  height: 1.5em;
  padding-right: 0.5em;
`
