import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { Language } from "@styled-icons/material/Language"
import { KeyboardArrowDown } from "@styled-icons/material-rounded/KeyboardArrowDown"
import { StyledIconBase } from "@styled-icons/styled-icon"
import DropDown from "./DropDown"

const StyledLanguageSwitch = styled.div`
  padding: 10px;
`

const Display = styled.div`
  display: flex;
  align-items: center;
  ${StyledIconBase} {
    color: ${props => props.iconColor || "#5ea7f9"};
    width: ${props => props.iconSize || "1.8em"};
  }
`
const StyledLanguageIcon = styled(Language)``

const StyledDropIcon = styled(KeyboardArrowDown)``

const CurrentLanguage = styled.p`
  font-size: ${props => props.fontSize || "1.125rem"};
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

  const node = useRef()
  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
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
    <StyledLanguageSwitch>
      <Display iconColor={iconColor} iconSize={iconSize}>
        <StyledLanguageIcon />
        <CurrentLanguage fontSize={fontSize}>
          {currentLanguage.toUpperCase()}
        </CurrentLanguage>
        <a>
          <StyledDropIcon
            onClick={() => {
              setOpen(!open)
            }}
          />
        </a>
        {open ? (
          <div ref={node}>
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
    </StyledLanguageSwitch>
  )
}

export default LanguageSwitch
