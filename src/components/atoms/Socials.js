import React from "react"
import { Linkedin, PlayStore, Github } from "@styled-icons/boxicons-logos/"
import styled from "styled-components"
const StyledIcon = styled.a`
  width: 2em;
`

const Socials = () => {
  return (
    <React.Fragment>
      <StyledIcon href="https://github.com/Venturh">
        <Github />
      </StyledIcon>
      <StyledIcon href="https://play.google.com/store/apps/developer?id=Venturh&hl=gsw">
        <PlayStore />
      </StyledIcon>
      <StyledIcon href="https://www.linkedin.com/in/max-werpers-9474251a5/">
        <Linkedin />
      </StyledIcon>
    </React.Fragment>
  )
}

export default Socials
