import React, { useState } from "react"
import styled from "styled-components"

import { FilterCard, Search as BasicSearch } from "atoms"

export default () => {
  const filters = ["React", "Vue", "Electron", "Gatsby", "TypeScript"]

  const [appliedFilters, setAppliedFilters] = useState([])
  console.log("appliedFilters", appliedFilters)

  const addFilter = name => {
    setAppliedFilters(appliedFilters => [...appliedFilters, name])
  }

  return (
    <Wrapper>
      <Search />
      <Filters>
        {filters.map(filter => (
          <FilterCard key={filter} name={filter} callback={addFilter} />
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
  display: grid;
  grid-template-columns: repeat(auto-fill, 45%);
  grid-gap: 0.25em;
`
