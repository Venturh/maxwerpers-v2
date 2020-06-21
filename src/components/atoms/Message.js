import React from "react"
import styled from "styled-components"
import Typography from "./Typography"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 25vw;
  height: 6vh;
  background-color: ${props => props.theme.colors.toolbar};
  border-radius: 0.5em;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`

const Message = ({ message }) => (
  <Wrapper>
    <Typography variant="p" fontSize="subbody" text={message} />
  </Wrapper>
)

export default Message
