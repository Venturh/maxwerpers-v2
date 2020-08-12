import React from "react"
import styled from "styled-components"

const Section = ({ id, refs, children, className }) => {
  return (
    <Wrapper className={className} id={id} ref={refs}>
      {children}
    </Wrapper>
  )
}

export default Section

const Wrapper = styled.section`
  min-height: 100vh;
  margin-bottom: 1em;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin: 0;
  }
`
