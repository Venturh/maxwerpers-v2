import React from "react"
import styled from "styled-components"

import Typography from "./Typography"

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.toolbar};
  box-shadow: 0px 6px 5px -1px rgba(0, 0, 0, 0.55);
  width: 72px;
  height: 72px;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 85px;
    height: 80px;
  }
`

const Icon = styled.svg`
  fill: ${({ theme }) => theme.colors.primary};
  width: 2rem;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 2.5em;
  }
`

const StyledTypography = styled(Typography)`
  margin-top: 0.5em;
`

const Skill = ({ icon, iconName }) => (
  <Card>
    <Icon viewBox="0 0 24 24">
      <path d={icon} />
    </Icon>
    <StyledTypography variant="p" fontSize="caption" text={iconName} />
  </Card>
)

export default Skill
