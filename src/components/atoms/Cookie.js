import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Cookies from "js-cookie"

import Typography from "./Typography"
import Button from "./Button"

const Wrapper = styled.div`
  width: 75vw;
  border-radius: 0.5em;
  background-color: ${props => props.theme.colors.toolbar};
  display: ${props => (props.show ? "block" : "none")};
  padding: 1px;
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 25vw;
  }
`

const StyledTypography = styled(Typography)`
  word-break: break-word;
  margin: 5% 0 0 5%;
  width: 75%;
`

const ButtonGroup = styled.div`
  margin-bottom: 5%;
  display: flex;
  justify-content: flex-end;
`
const StyledButton = styled(Button)`
  padding: 0.35em 1em;
  margin: 0.1em 0.5em;
`

const Cookie = ({
  cookiename,
  message,
  acceptMessage,
  declineMessage,
  accept,
  decline,
}) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (Cookies.get(cookiename) === undefined) {
      setShow(true)
    }
  }, [cookiename])

  const handleClick = type => {
    if (type === true) {
      Cookies.set(cookiename, accept)
    } else {
      Cookies.remove(cookiename)
    }
    setShow(false)
  }

  return (
    <Wrapper show={show}>
      <StyledTypography fontSize="button" text={message} />
      <ButtonGroup>
        <StyledButton bg="toolbar" rounded onClick={() => handleClick(false)}>
          {declineMessage}
        </StyledButton>
        <StyledButton
          bg="primary"
          color="primaryContrast"
          rounded
          onClick={() => handleClick(true)}
        >
          {acceptMessage}
        </StyledButton>
      </ButtonGroup>
    </Wrapper>
  )
}

export default Cookie
