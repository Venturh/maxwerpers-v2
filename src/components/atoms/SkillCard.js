import React, { useState } from "react"

import styled from "styled-components"

import SvgIcon from "./SvgIcon"
import { Caption, Subtitle } from "./Typography"

import { ArrowDownS, ArrowUpS } from "icons"
import { card1 } from "theme/styles"
import { IconOnlyButton } from "./Button"

export default ({ title, skills }) => {
  const [open, setOpen] = useState(false)

  return (
    <Card toggle={open}>
      <Subtitle style={{ marginLeft: "1em" }}>{title}</Subtitle>
      <Skills toggle={open}>
        {skills.map(skill => (
          <Skill>
            <SvgIcon color="primary" size="1.5em" path={skill.path} />
            {open ? (
              <Caption style={{ paddingTop: "0.5em" }}>{skill.name}</Caption>
            ) : null}
          </Skill>
        ))}
      </Skills>
      <IconOnlyButton
        onClick={() => setOpen(!open)}
        leftIcon={open ? ArrowUpS : ArrowDownS}
        color="bodyContrast"
        size="2em"
      />
    </Card>
  )
}

const Card = styled.div`
  ${card1}
  display:flex;
  align-items: center;
  justify-content: space-between;
  height: ${p => (p.toggle ? "8em" : "4em")};
  transition: height 0.15s ease-out;
`

const Skills = styled.div`
  width: 60%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 3em);
  grid-template-rows: ${p => (p.toggle ? "auto" : "100%")};
  grid-auto-columns: 0;
  justify-content: flex-end;
  overflow: hidden;
  gap: 0.25em;
`

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
