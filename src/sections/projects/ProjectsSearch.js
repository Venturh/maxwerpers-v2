import React, { useState } from "react"
import styled from "styled-components"

import { FilterCard, Search as BasicSearch } from "atoms"

export default ({ setFilters }) => {
  const filters = ["React", "Vue", "Electron", "Gatsby", "TypeScript"]

  return (
    <Wrapper>
      <Search />
      <Filters>
        {filters.map(filter => (
          <FilterCard
            key={filter}
            name={filter}
            callback={name => setFilters(name)}
          />
        ))}
      </Filters>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 20%;
  }
`

const Search = styled(BasicSearch)``
const Filters = styled.div`
  margin-top: 1em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20%, 45%));
  gap: 0.5em;
  justify-content: space-between;
`
