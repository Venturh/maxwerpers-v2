import React from "react"
import styled from "styled-components"

import SvgIcon from "./SvgIcon"
import { SubText } from "./Typography"

import { card1 } from "theme/styles"

export default ({ icon, iconName, ...rest }) => (
  <Card {...rest}>
    <SvgIcon color="primary" height="1.75em" path={icon} />
    <SkillName>{iconName}</SkillName>
  </Card>
)

const Card = styled.div`
  ${card1};
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SkillName = styled(SubText)`
  padding-top: 8%;
`
