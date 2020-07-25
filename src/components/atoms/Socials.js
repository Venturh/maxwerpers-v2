import React from "react"
import styled from "styled-components"
import { StyledIconBase } from "@styled-icons/styled-icon"
import { Linkedin, PlayStore, Github } from "@styled-icons/boxicons-logos/"

const StyledIcon = styled.a`
  width: 2em;
  ${StyledIconBase} {
    width: 2em;
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
  }
`

const Socials = () => {
  return (
    <React.Fragment>
      <StyledIcon aria-label="Github" href="https://github.com/Venturh">
        <Github />
      </StyledIcon>
      <StyledIcon
        aria-label="PlayStore"
        href="https://play.google.com/store/apps/developer?id=Venturh&hl=gsw"
      >
        <PlayStore />
      </StyledIcon>
      <StyledIcon
        aria-label="LinkedIn"
        href="https://www.linkedin.com/in/max-werpers-9474251a5/"
      >
        <Linkedin />
      </StyledIcon>
    </React.Fragment>
  )
}

export default Socials
