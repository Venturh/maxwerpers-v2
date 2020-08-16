import React from "react"
import styled from "styled-components"

import SvgIcon from "./SvgIcon"
import { ButtonText, Text } from "./Typography"

import { Location } from "icons"
import { card1 } from "theme/styles"

export default ({ type, work, place, time }) => (
  <Card>
    <TypeTime>
      <ButtonText color="primary" text={type} />
      <ButtonText text={time} />
    </TypeTime>
    <Info text={work} />
    <Place>
      <SvgIcon color="bodyContrast" height="0.75em" path={Location} />
      <ButtonText style={{ marginLeft: "0.1em" }} text={place} />
    </Place>
  </Card>
)

const Card = styled.div`
  ${card1}
  width: 100%;
  padding: 0.75em;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transition: all 0.2s ease-in-out;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    :hover {
      transform: scale(1.1) translateY(-10px);
      cursor: default;
    }
  }
`

const TypeTime = styled.div`
  display: flex;
  justify-content: space-between;
`

const Info = styled(Text)`
  margin-top: 0.5em;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin-top: 1em;
  }
`

const Place = styled.div`
  display: flex;
  margin-top: 0.5em;
  align-items: center;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    align-self: flex-end;
  }
`
