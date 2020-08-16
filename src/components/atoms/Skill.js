import React from "react"
import styled from "styled-components"

import SvgIcon from "./SvgIcon"
import { SubText } from "./Typography"

export default ({ icon, iconName, ...rest }) => (
  <Card {...rest}>
    <SvgIcon color="primary" height="1.75em" path={icon} />
    <SkillName>{iconName}</SkillName>
  </Card>
)

const Card = styled.div`
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SkillName = styled(SubText)`
  padding-top: 8%;
`
