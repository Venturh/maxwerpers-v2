import React from "react"
import styled from "styled-components"

const StyledDropDown = styled.div`
  position: absolute;
  top: ${props => props.space || "11vh"};
  transform: translateX(-100%);
  border-radius: 5%;
  background-color: ${props => props.backgroundColor || "#1E1E1E"};
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`

const StyledDropdownItem = styled.div`
  display: flex;

  align-items: center;
  margin-left: 0.8em;
  height: 50px;
  border-radius: 8px;
  transition: background 500ms;
  cursor: pointer;
  :hover {
    background-color: ${props => props.hoverColor || "#525357"};
  }
`

const ItemText = styled.p`
  font-size: ${props => props.fontSize || "1.125rem"};
`

const ItemIcon = styled.span`
  padding-right: 0.5em;
`

const DropDown = ({
  items,
  getItem,
  space,
  iconLeft,
  backgroundColor,
  hoverColor,
  fontSize,
  ...rest
}) => {
  const returnItem = item => {
    getItem(item)
  }
  return (
    <StyledDropDown backgroundColor={backgroundColor} space={space}>
      {items.map((item, index) => {
        return (
          <DropDownItem
            fontSize={fontSize}
            hoverColor={hoverColor}
            getItem={() => {
              returnItem(item)
            }}
            iconLeft={iconLeft}
            key={index}
          >
            {item}
          </DropDownItem>
        )
      })}
    </StyledDropDown>
  )
}

const DropDownItem = ({
  children,
  iconLeft,
  iconRight,
  getItem,
  hoverColor,
  fontSize,
}) => {
  return (
    <StyledDropdownItem hoverColor={hoverColor} onClick={getItem}>
      <ItemIcon>{iconLeft}</ItemIcon>
      <ItemText fontSize={fontSize}>{children}</ItemText>
      <ItemIcon>{iconRight}</ItemIcon>
    </StyledDropdownItem>
  )
}

export default DropDown
