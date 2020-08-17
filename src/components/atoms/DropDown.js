import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"

import { Text } from "./Typography"
import SvgIcon from "./SvgIcon"

import { ArrowUpS, ArrowDownS } from "icons"
import { card1 } from "theme/styles"

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
                <SvgIcon
                  style={{ paddingRight: "0.5em" }}
                  color="bodyContrast"
                  height="1.5em"
                  path={icon}
                />
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
  fill: ${props => props.theme.colors.bodyContrast};
`

const StyledDropDown = styled.div`
  ${card1};
  position: absolute;
  top: 6vh;
  transform: translateX(-80%);

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
