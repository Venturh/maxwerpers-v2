import React from "react"
import styled from "styled-components"

import SvgIcon from "./SvgIcon"
import { ButtonText } from "./Typography"

import { card2 } from "theme/styles"

export default ({ icon, iconName, ...rest }) => (
  <Card {...rest}>
    <SvgIcon color="primary" height="1.5em" path={icon} />
    <SkillName>{iconName}</SkillName>
  </Card>
)

const Card = styled.div`
  ${card2};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SkillName = styled(ButtonText)`
  padding-top: 5%;
`
