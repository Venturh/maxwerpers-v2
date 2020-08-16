import React from "react"
import styled from "styled-components"

import { Skill, Subtitle } from "atoms"
import { card1 } from "theme/styles"

export default skills => (
  <Wrapper>
    {Object.keys(skills.nodes[0]).map((section, index) => (
      <Section key={index}>
        <SectionTitle>{section}</SectionTitle>
        <SectionSkills>
          {skills.nodes[0][section].map((skill, index) => (
            <SectionSkill key={index} iconName={skill.name} icon={skill.path} />
          ))}
        </SectionSkills>
      </Section>
    ))}
  </Wrapper>
)

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
  grid-template-columns: repeat(auto-fit, 25%);
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(auto-fill, 20%);
  }
`

const SectionSkill = styled(Skill)`
  ${card1}
  padding:0.5em;
`
