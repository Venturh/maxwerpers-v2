import React, { useState } from "react"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"

const TabsWrapper = styled.div`
  display: flex;
`

const StyledChild = styled.div`
  transition: border-bottom 0.2s cubic-bezier(1, 0, 0, 1);
  border-bottom: ${props =>
    props.value === props.tabPosition
      ? "3px solid " + (props.indicatorColor || "red")
      : ""};
  border-bottom-width: 1px;
  font-size: ${props => props.fontSize || "1rem"};
  font-weight: 500;
  color: ${props => props.textColor || "white"};
`

const StyledTab = styled.div`
  padding: 10px 10px;

  cursor: pointer;
`

export const Tabs = ({ children, indicatorColor, fontSize, textColor }) => {
  const [position, setTabPosition] = useState(0)

  const clicked = (index, label) => {
    if (label) {
      scrollTo("#" + label)
    }
    setTabPosition(index)
  }

  return (
    <TabsWrapper>
      {children.map((Child, index) => (
        <StyledChild
          fontSize={fontSize}
          textColor={textColor}
          indicatorColor={indicatorColor}
          value={index}
          tabPosition={position}
          key={index}
          onClick={() => {
            clicked(index, Child.props.label)
          }}
        >
          {Child}
        </StyledChild>
      ))}
    </TabsWrapper>
  )
}

export const Tab = ({ label }) => {
  return <StyledTab>{label}</StyledTab>
}
