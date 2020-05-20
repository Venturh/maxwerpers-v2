import React from "react"
import styled from "styled-components"
import Typography from "../atoms/Typography"
import TimeLineCard from "../atoms/TimeLineCard"
import Shape from "../atoms/Shape"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 0px 0px 25px 25px;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 35vw;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: inherit;
  }
`

const Header = styled(Typography)`
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: none;
  }
`

const Experiences = styled.div`
  display: grid;
  grid-gap: 1em;
`

const StyledTimelineCard = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: flex;
    //line
    &:not(:last-child):after {
      content: "";
      position: relative;
      width: 3px;
      background-color: ${props => props.theme.colors.secondary};
      top: 50%;
      margin-top: 15px;
      bottom: 0;
      left: 25.5%;
    }
  }
`

const LineWrapper = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: flex;
    //circle
    span {
      align-self: center;
      position: relative;
      left: calc(25% + 9px);
      z-index: 1;
    }
  }
`

const StyledCircle = styled(Shape)`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: block;
  }
`

const ExperienceContainer = experienceByLanguage => {
  return (
    <Wrapper>
      <Header color="toolbar" fontSize="title" variant="p" text="Experience" />
      <LineWrapper>
        <Experiences>
          {Object.values(experienceByLanguage).map((experience, index) => (
            <StyledTimelineCard key={index}>
              <TimeLineCard {...experience} />
              <StyledCircle
                bg="secondary"
                width={12.5}
                height={12.5}
                borderRadius="100%"
              />
            </StyledTimelineCard>
          ))}
        </Experiences>
      </LineWrapper>
    </Wrapper>
  )
}

export default ExperienceContainer
