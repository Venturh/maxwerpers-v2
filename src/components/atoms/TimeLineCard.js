import React from "react"
import styled from "styled-components"

import SvgIcon from "./SvgIcon"
import { ButtonText, Text } from "./Typography"

import { Location } from "../../icons"

const Card = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.toolbar};
  box-shadow: 0px 6px 5px -1px rgba(0, 0, 0, 0.25);
  width: 80vw;
  border-radius: 1em;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transition: all 0.2s ease-in-out;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 25vw;
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

const LocationIcon = styled(SvgIcon)`
  height: 0.75em;
  fill: ${props => props.theme.colors.toolbarContrast};
`

const TimeLineCard = ({ type, work, place, time }) => (
  <Card>
    <TypeTime>
      <ButtonText color="primary" text={type} />
      <ButtonText text={time} />
    </TypeTime>
    <Info text={work} />
    <Place>
      <LocationIcon path={Location} />
      <ButtonText style={{ marginLeft: "0.1em" }} text={place} />
    </Place>
  </Card>
)

export default TimeLineCard
