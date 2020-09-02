import React from "react"
import styled from "styled-components"

import { FilterCard } from "atoms"

export default ({ setFilters }) => {
  const filters = ["React", "Vue", "Electron", "Gatsby", "TypeScript"]

  return (
    <Wrapper>
      <Filters>
        {filters.map(filter => (
          <FilterCard
            style={{ marginBottom: "0.5em" }}
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

const Filters = styled.div`
  margin-top: 1em;
  display: flex;
  flex-wrap: wrap;
`
