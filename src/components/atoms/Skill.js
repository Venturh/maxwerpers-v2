import React from "react"
import styled from "styled-components"

import Typography from "./Typography"

const Card = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.toolbar};
  box-shadow: 0px 6px 5px -1px rgba(0, 0, 0, 0.25);
  width: 72px;
  height: 72px;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    width: 92px;
    height: 92px;
  }
`

const Icon = styled.svg`
  fill: ${({ theme }) => theme.colors.primary};
  width: 2em;
  margin-bottom: 0.75em;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin-bottom: 0.5em;
  }
`

const StyledTypography = styled(Typography)`
  position: absolute;
  bottom: 0.5em;
`

const Skill = ({ icon, iconName }) => (
  <Card>
    <Icon viewBox="0 0 24 24">
      <path d={icon} />
    </Icon>
    <StyledTypography variant="p" fontSize="xs" text={iconName} />
  </Card>
)

export default Skill
