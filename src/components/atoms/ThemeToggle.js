import React, { useContext, useState } from "react"
import styled, { keyframes } from "styled-components"

import ThemeContext from "../../utils/ThemeContext"
import SvgIcon from "./SvgIcon"

import { BrightDay, BrightNight } from "../../icons"

const ThemeToggle = ({ ...rest }) => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [animate, setAnimate] = useState(false)
  return (
    <ToggleButton
      path={theme === "light" ? BrightNight : BrightDay}
      animate={animate ? 1 : 0}
      onClick={() => {
        setAnimate(true)
        toggleTheme()
      }}
      onAnimationEnd={() => {
        setAnimate(false)
      }}
      {...rest}
    />
  )
}

export default ThemeToggle

const scaleUp = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`

const ToggleButton = styled(SvgIcon)`
  cursor: pointer;
  height: ${props => props.theme.sizes.navIcons};
  fill: ${({ theme }) => theme.colors.bodyContrast};
  animation: ${props => (props.animate ? scaleUp : null)} 0.1s
    cubic-bezier(0.455, 0.03, 0.515, 0.955);
`
