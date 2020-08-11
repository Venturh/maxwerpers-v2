import React from "react"
import styled from "styled-components"

import Skill from "@components/atoms/Skill"
import { Subtitle } from "@components/atoms/Typography"

const SkillsContainer = skills => (
  <Wrapper>
    {Object.keys(skills.nodes[0]).map((section, index) => {
      return (
        <Section key={index}>
          <SectionTitle
            color="toolbarContrast"
            text={section.replace("_", " ")}
          />
          <SectionSkills>
            {skills.nodes[0][section].map((skill, index) => (
              <SectionSkill
                key={index}
                iconName={skill.name}
                icon={skill.path}
              />
            ))}
          </SectionSkills>
        </Section>
      )
    })}
  </Wrapper>
)

export default SkillsContainer

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
    margin-top: ${props => props.theme.spacing.heading};
    width: 35vw;
    border-radius: 1.5em;
    padding-bottom: 0.75em;
  }
`

const Section = styled.div``

const SectionTitle = styled(Subtitle)`
  width: 100%;
  text-align: center;
  margin: 0.75em 0;
  @media (min-width: ${props =>
      props.theme.breakpoints.lg}) and (max-width: ${props =>
      props.theme.breakpoints.xl}) {
    margin: 0.5em 0 0 0;
  }
`

const SectionSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 1em;

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    margin: 0 8em;
  }
`

const SectionSkill = styled(Skill)`
  margin: 0.5em;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin: 0.25em 0.25em;
  }
  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    margin: 0.25em 0.6em;
  }
`
