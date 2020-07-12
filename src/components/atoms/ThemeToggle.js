import React, { useContext, useState } from "react"
import styled, { keyframes } from "styled-components"
import { BrightnessHigh } from "@styled-icons/material/BrightnessHigh"
import { Brightness4 } from "@styled-icons/material-rounded/Brightness4"
import { StyledIconBase } from "@styled-icons/styled-icon"

import ThemeContext from "../../utils/ThemeContext"

const scaleUp = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`
const ToggleButton = styled.div`
  background: none;
  border: none;
  outline: 0;
  padding: 10px;
  cursor: pointer;
  ${StyledIconBase} {
    width: ${props => props.iconSize || "1.8em"};
    color: ${({ theme }) => theme.colors.bodyContrast};
    animation: ${props => (props.animate ? scaleUp : null)} 0.1s
      cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
`

const ThemeToggle = ({ iconSize }) => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [animate, setAnimate] = useState(false)
  return (
    <ToggleButton
      iconSize={iconSize}
      animate={animate}
      onClick={() => {
        setAnimate(true)
        toggleTheme()
      }}
    >
      {theme === "light" ? <Brightness4 /> : <BrightnessHigh />}
    </ToggleButton>
  )
}

export default ThemeToggle
