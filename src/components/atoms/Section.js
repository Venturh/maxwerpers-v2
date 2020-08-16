import React from "react"
import styled from "styled-components"
import { Element } from "react-scroll"

const Section = ({ id, children, className }) => {
  return (
    <Wrapper className={className} id={id} name={id}>
      {children}
    </Wrapper>
  )
}

export default Section

const Wrapper = styled(Element)`
  margin-bottom: 4em;
`
