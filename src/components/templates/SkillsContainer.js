import React from "react"
import styled from "styled-components"

import Skill from "../atoms/Skill"
import Typography from "../atoms/Typography"

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 25px 25px 0 0;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 35vw;
    height: 92.5vh;
  }
`

const Section = styled.div`
  text-align: center;
  margin-bottom: 10px;
`

const SectionTitle = styled(Typography)`
  margin-bottom: 10px;
`

const SectionSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 1em;
`

const SkillsContainer = allDataJson => {
  return (
    <Wrapper>
      {Object.keys(allDataJson.nodes[0]).map((section, index) => {
        return (
          <Section key={index}>
            <SectionTitle
              color="primaryContrast"
              fontSize="subtitle"
              text={section}
            />
            <SectionSkills>
              {allDataJson.nodes[0][section].map((skill, index) => (
                <Skill key={index} iconName={skill.name} icon={skill.path} />
              ))}
            </SectionSkills>
          </Section>
        )
      })}
    </Wrapper>
  )
}

export default SkillsContainer
