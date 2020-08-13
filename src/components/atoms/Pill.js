import React from "react"
import styled from "styled-components"

import { getColor } from "theme"
import { ButtonText } from "./Typography"

const Pill = ({ children, className }) => (
  <Wrapper className={className}>
    <ButtonText>{children}</ButtonText>
  </Wrapper>
)

export default Pill

const Wrapper = styled.div`
  padding: 0.5em 1em;
  background: ${getColor("primaryContrast")};
  border-radius: 2em;

  ${ButtonText} {
    color: ${getColor("primary")};
  }
`
