import React from "react"

import styled from "styled-components"

import SvgIcon from "./SvgIcon"

import { card2 } from "theme/styles"
import { Search as SearchIcon } from "icons"
import { ButtonText, Text } from "./Typography"

export default ({ ...rest }) => {
  return (
    <Search {...rest}>
      <SvgIcon path={SearchIcon} size="1em" color="primary" />
      <ButtonText>Search</ButtonText>
    </Search>
  )
}

const Search = styled.div`
  ${card2}
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.1em;
  padding: 0.75em;

  ${ButtonText} {
    margin-left: 0.5em;
  }
`
