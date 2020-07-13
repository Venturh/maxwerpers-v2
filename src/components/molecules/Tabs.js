import React, { useState } from "react"
import styled from "styled-components"

import { Text } from "../atoms/Typography"

const TabsWrapper = styled.div`
  display: flex;
`

const StyledChild = styled.div`
  position: relative;
  font-size: ${props => props.fontSize || "1rem"};
  color: ${props => props.textColor || "white"};

  &::after {
    position: absolute;
    bottom: 0.25em;
    right: 25%;
    content: "";
    display: block;
    width: 50%;
    height: 0.25em;
    border-radius: 1em;
    background: ${props =>
      props.value === props.tabPosition ? props.indicatorColor : ""};
  }
`

const TabText = styled(Text)`
  padding: 10px 10px;
  cursor: pointer;
`

export const Tabs = ({
  children,
  indicatorColor,
  fontSize,
  textColor,
  onClick,
}) => {
  const [position, setTabPosition] = useState(0)

  const clickAction = (index, label, onClick) => {
    onClick(label)
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
          onClick={() => clickAction(index, Child.props.path, onClick)}
        >
          {Child}
        </StyledChild>
      ))}
    </TabsWrapper>
  )
}

export const Tab = ({ label }) => {
  return <TabText>{label}</TabText>
}
