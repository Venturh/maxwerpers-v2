import React from "react"
import styled from "styled-components"

import Skill from "../atoms/Skill"
import Typography from "../atoms/Typography"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px 25px 0 0;
  padding-bottom: ${props => props.theme.spacing.heading};
  background-color: ${props => props.theme.colors.toolbar};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 35vw;
    border-radius: 25px;
    padding-bottom: 1.75em;
  }
`

const SectionTitle = styled(Typography)`
  text-align: center;
  margin: ${props => props.theme.spacing.heading} 0;
`

const SectionSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 1em;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    grid-gap: 1em 2em;
  }
`

const SkillsContainer = allDataJson => {
  return (
    <Wrapper>
      {Object.keys(allDataJson.nodes[0]).map((section, index) => {
        return (
          <div key={index}>
            <SectionTitle
              color="toolbarContrast"
              fontSize="subtitle"
              text={section.replace("_", " ")}
            />
            <SectionSkills>
              {allDataJson.nodes[0][section].map((skill, index) => (
                <Skill key={index} iconName={skill.name} icon={skill.path} />
              ))}
            </SectionSkills>
          </div>
        )
      })}
    </Wrapper>
  )
}

export default SkillsContainer
