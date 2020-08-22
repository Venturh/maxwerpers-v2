import React from "react"
import styled from "styled-components"

import { Caption } from "./Typography"

import { getColor } from "theme"
import { card2 } from "theme/styles"

const Pill = ({ children, className }) => (
  <Wrapper className={className}>
    <Caption color="primary">{children}</Caption>
  </Wrapper>
)

export default Pill

const Wrapper = styled.div`
  ${card2}
  padding: 0.5em 1em;
`
