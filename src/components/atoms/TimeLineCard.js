import React from "react"
import styled from "styled-components"
import { Location } from "@styled-icons/icomoon/Location"

import Typography from "./Typography"

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
    width: 30vw;
    height: 15vh;
    :hover {
      transform: scale(1.1) translateY(-10px);
      cursor: default;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    width: 25vw;
    height: 10vh;
  }
`

const TypeTime = styled.div`
  display: flex;
  justify-content: space-between;
`

const Place = styled.div`
  display: flex;
  margin-top: 0.5em;
  align-items: center;
`

const TimeLineCard = ({ type, work, place, time }) => (
  <Card>
    <TypeTime>
      <Typography variant="p" color="primary" fontSize="caption" text={type} />
      <Typography variant="p" fontSize="caption" text={time} />
    </TypeTime>
    <Typography variant="p" fontSize="subbody" text={work} />
    <Place>
      <Location size={12} />
      <Typography
        style={{ marginLeft: "0.5em" }}
        variant="p"
        fontSize="caption"
        text={place}
      />
    </Place>
  </Card>
)

export default TimeLineCard
