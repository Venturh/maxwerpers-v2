import React from "react"
import styled from "styled-components"
import { useIntl } from "gatsby-plugin-intl"

import { Title } from "@components/atoms/Typography"
import TimeLineCard from "@components/atoms/TimeLineCard"
import Shape from "@components/atoms/Shape"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.toolbar};
  border-radius: 0 0 25px 25px;
  padding-bottom: 1.75em;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin-top: ${props => props.theme.spacing.heading};
    width: 40vw;
    background-color: inherit;
  }
`

const Heading = styled(Title)`
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

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    grid-template-columns: repeat(1, minmax(100px, 25vw));
    grid-gap: 1.5em;
  }
`

const StyledTimelineCards = styled.div`
  display: flex;
  //line
  &:not(:last-child):before {
    content: "";
    position: relative;
    width: 2px;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 2px;
    top: 50%;
    margin: 1em 0.25em 0 0.25em;
  }

  &:last-child::before {
    content: "";
    position: relative;
    width: 2px;
    border-radius: 2px;
    top: 50%;
    margin: 1em 0.25em 0 0.25em;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    &:not(:last-child):before {
      width: 3px;
      top: 55%;
      margin: 1em 0em 0.5em 0em;
      right: 2em;
    }
    &:last-child::before {
      width: 3px;
      margin: 0;
    }
  }
`

const LineWrapper = styled.div`
  //circle
  span {
    align-self: center;
    position: relative;
    left: -9px;
    z-index: 1;
  }
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    span {
      position: relative;
      left: calc(-2em - 7.5px);
    }
  }
`

const StyledCircle = styled(Shape)`
  width: 9px;
  height: 9px;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 12.5px;
    height: 12.5px;
  }
`

const ExperienceContainer = experienceByLanguage => {
  const intl = useIntl()
  return (
    <Wrapper>
      <Heading text={intl.formatMessage({ id: "experience" })} />
      <LineWrapper>
        <Experiences>
          {Object.values(experienceByLanguage).map((experience, index) => (
            <StyledTimelineCards key={index}>
              <StyledCircle tbg="primary" borderRadius="100%" />
              <TimeLineCard {...experience} />
            </StyledTimelineCards>
          ))}
        </Experiences>
      </LineWrapper>
    </Wrapper>
  )
}

export default ExperienceContainer
