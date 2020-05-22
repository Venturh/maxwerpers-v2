import React from "react"
import styled from "styled-components"
import { Location } from "@styled-icons/icomoon/Location"

import Typography from "./Typography"

const Card = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.toolbar};
  box-shadow: 0px 6px 5px -1px rgba(0, 0, 0, 0.55);
  width: 80vw;
  height: 100px;
  border-radius: 1em;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 25vw;
    height: 12.5vh;
  }
`

const TypeTime = styled.div`
  display: flex;
  justify-content: space-between;
`

const Place = styled.div`
  display: flex;
  margin-top: 0.5em;
`

const TimeLineCard = ({ type, work, place, time }) => (
  <Card>
    <TypeTime>
      <Typography variant="p" color="primary" fontSize="caption" text={type} />
      <Typography variant="p" fontSize="caption" text={time} />
    </TypeTime>
    <Typography variant="p" fontSize="button" text={work} />
    <Place>
      <Location size={12} />
      <Typography variant="p" fontSize="caption" text={place} />
    </Place>
  </Card>
)

export default TimeLineCard
