import React from "react"
import styled from "styled-components"

const Section = ({ id, children, className }) => {
  return (
    <Wrapper className={className} id={id}>
      {children}
    </Wrapper>
  )
}

export default Section

const Wrapper = styled.section`
  margin-bottom: 2em;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin: 0;
  }
`
