import React from "react"
import styled from "styled-components"
import { Location } from "@styled-icons/icomoon/Location"

import Typography from "./Typography"

const Card = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.toolbar};
  box-shadow: 0px 6px 5px -1px rgba(0, 0, 0, 0.55);
  width: 300px;
  height: 100px;
  border-radius: 1em;
  padding: 15px;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
  }
`

const TypeTime = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25em;
`

const Place = styled.div`
  position: absolute;
  bottom: 10px;
  display: flex;
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
