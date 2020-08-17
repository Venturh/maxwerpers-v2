import React from "react"
import styled from "styled-components"
import { useIntl } from "gatsby-plugin-intl"

import { Skill, Subtitle } from "atoms"

export default skills => {
  const { formatMessage } = useIntl()
  return (
    <Wrapper>
      {Object.keys(skills.nodes[0]).map((section, index) => (
        <Section key={index}>
          <SectionTitle>
            {formatMessage({ id: section.toLowerCase() })}
          </SectionTitle>
          <SectionSkills>
            {skills.nodes[0][section].map((skill, index) => (
              <Skill key={index} iconName={skill.name} icon={skill.path} />
            ))}
          </SectionSkills>
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

const SectionTitle = styled(Subtitle)`
  width: 33%;
`

const SectionSkills = styled.div`
  margin-top: 0.5em;
  display: grid;
  gap: 0.5em;
  grid-template-columns: repeat(auto-fit, 4.5em);
  grid-auto-rows: 4em;
`
