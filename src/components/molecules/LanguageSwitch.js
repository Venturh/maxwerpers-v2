import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { Language } from "@styled-icons/fa-solid/Language"
import { KeyboardArrowDown } from "@styled-icons/material-rounded/KeyboardArrowDown"
import { KeyboardArrowUp } from "@styled-icons/material-rounded/KeyboardArrowUp"
import { StyledIconBase } from "@styled-icons/styled-icon"

import DropDown from "../atoms/DropDown"
import { Text } from "../atoms/Typography"

const DropdownIcon = ({ open }) =>
  open ? <KeyboardArrowUp /> : <KeyboardArrowDown />

const Wrapper = styled.div`
  cursor: pointer;
`

const Display = styled.div`
  display: flex;
  align-items: center;
  ${StyledIconBase} {
    color: ${props => props.iconColor || "#5ea7f9"};
    width: ${props => props.iconSize || "1.8em"};
  }
`

const CurrentLanguage = styled(Text)`
  margin: 0 0.5em;
`

const LanguageSwitch = ({
  languages,
  currentLanguage,
  changeLanguage,
  space,
  fontSize,
  fontColor,
  iconColor,
  iconSize,
  iconLeft,
  iconRight,
  dropdownBackground,
  dropdownHoverColor,
}) => {
  const [open, setOpen] = useState(false)

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

  const change = item => {
    let lan

    languages.forEach(language => {
      if (item === language) {
        lan = language.toLowerCase().slice(0, 2)
        changeLanguage(lan)
      }
    })
  }
  return (
    <Wrapper
      ref={displayRef}
      onClick={() => {
        setOpen(!open)
      }}
    >
      <Display iconColor={iconColor} iconSize={iconSize}>
        <Language />
        <CurrentLanguage>{currentLanguage.toUpperCase()}</CurrentLanguage>
        <DropdownIcon
          open={open}
          onClick={() => {
            setOpen(!open)
          }}
        />
        {open ? (
          <div ref={dropdownRef}>
            <DropDown
              items={languages}
              getItem={change}
              space={space}
              backgroundColor={dropdownBackground}
              hoverColor={dropdownHoverColor}
              iconLeft={iconLeft}
              fontSize={fontSize}
              fontColor={fontColor}
            />
          </div>
        ) : null}
      </Display>
    </Wrapper>
  )
}

export default LanguageSwitch
