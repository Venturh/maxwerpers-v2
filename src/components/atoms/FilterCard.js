import React, { useState } from "react"
import styled from "styled-components"
import { getColor } from "theme"
import { ButtonText } from "./Typography"

export default ({ name, callback }) => {
  const [selected, setSelected] = useState(false)

  const select = name => {
    setSelected(!selected)
    callback(name)
  }

  return (
    <Card selected={selected} onClick={() => select(name)}>
      <ButtonText>{name}</ButtonText>
    </Card>
  )
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  border-radius: 0.25em;
  border: ${p => (p.selected ? `1px solid ${p.theme.colors.primary}` : null)};
  padding: 0.5em;
`
