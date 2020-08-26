import React from "react"
import styled from "styled-components"
import { useIntl } from "gatsby-plugin-intl"

import { SkillCard } from "atoms"

export default skills => {
  const { formatMessage } = useIntl()
  return (
    <Wrapper>
      {Object.keys(skills.nodes[0]).map(section => (
        <Section key={section}>
          <SkillCard
            title={formatMessage({ id: section.toLowerCase() })}
            skills={skills.nodes[0][section]}
          />
        </Section>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Section = styled.div`
  width: 100%;
  margin-bottom: 0.5em;
`
