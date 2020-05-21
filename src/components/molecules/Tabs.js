import React, { useState } from "react"
import styled from "styled-components"
import { animateScroll as scroll, scroller } from "react-scroll"

import Typography from "../atoms/Typography"

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

const StyledTab = styled(Typography)`
  padding: 10px 10px;

  cursor: pointer;
`

export const Tabs = ({ children, indicatorColor, fontSize, textColor }) => {
  const [position, setTabPosition] = useState(0)

  const clicked = (index, label) => {
    if (label) {
      scroller.scrollTo(label, {
        duration: 300,
        delay: 0,
        smooth: "easeInOutQuart",
      })
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
          onClick={() =>
            index === 0
              ? scroll.scrollToTop({
                  duration: 300,
                  delay: 0,
                  smooth: "easeInOutQuart",
                })
              : clicked(index, Child.props.path)
          }
        >
          {Child}
        </StyledChild>
      ))}
    </TabsWrapper>
  )
}

export const Tab = ({ label }) => {
  return <StyledTab fontSize="subbody">{label}</StyledTab>
}
