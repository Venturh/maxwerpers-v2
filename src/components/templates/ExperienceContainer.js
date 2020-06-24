import React from "react"
import styled from "styled-components"
import Typography from "../atoms/Typography"
import TimeLineCard from "../atoms/TimeLineCard"
import Shape from "../atoms/Shape"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.toolbar};
  border-radius: 0 0 25px 25px;
  padding-bottom: 1.75em;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin-top: 10%;
    width: 40vw;
    background-color: inherit;
  }
`

const Header = styled(Typography)`
  margin: ${props => props.theme.spacing.heading} 0;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: none;
  }
`

const Experiences = styled.div`
  display: grid;
  grid-gap: 1em;
  :last-child {
    margin-bottom: ${props => props.theme.spacing.heading};
  }
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(1, auto);
    grid-gap: 2em;
  }
`

const StyledTimelineCards = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: flex;
    //line
    &:not(:last-child):before {
      content: "";
      position: relative;
      width: 3px;
      background-color: ${props => props.theme.colors.primary};
      border-radius: 3px;
      top: 50%;
      margin-top: 2em;

      bottom: 0;
      right: 15.5%;
    }
    //no line on last child
    &:last-child::before {
      content: "";
      position: relative;
      width: 3px;
      top: 62%;
      bottom: 0;
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
      right: calc(15.5% + 7px);
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
      <Header
        color="toolbarContrast"
        fontSize="title"
        variant="p"
        text="Experience"
      />
      <LineWrapper>
        <Experiences>
          {Object.values(experienceByLanguage).map((experience, index) => (
            <StyledTimelineCards key={index}>
              <StyledCircle
                bg="primary"
                width={12.5}
                height={12.5}
                borderRadius="100%"
              />
              <TimeLineCard {...experience} />
            </StyledTimelineCards>
          ))}
        </Experiences>
      </LineWrapper>
    </Wrapper>
  )
}

export default ExperienceContainer
