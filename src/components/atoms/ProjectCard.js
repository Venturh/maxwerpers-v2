import React from "react"
import styled from "styled-components"
import Typography from "./Typography"
import Button from "./Button"
import Shape from "./Shape"

export const Card = styled.div`
  background-color: ${props => props.theme.colors.toolbar};
  border-radius: 0.5em;
  padding: 1em;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: 0.5rem;
  }
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    padding: 1rem;
  }
`

export const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 0.25rem;
  }
`

const StyledDescription = styled(Typography)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 0.75em;
  Button {
    margin-right: 1em;
    padding-left: 1em;
    padding-right: 1em;
    min-width: 30%;
  }
`

export const TextWrapper = styled.div``

const ProjectCard = ({
  url,
  nameWithOwner,
  description,
  homepageUrl,
  primaryLanguage,
}) => {
  return (
    <Card>
      <TagWrapper>
        <Shape
          bg={primaryLanguage.color}
          width={10}
          height={10}
          borderRadius="100%"
        />
        <Typography
          variant="p"
          fontSize="button"
          fontWeight="400"
          text={primaryLanguage.name}
        />
      </TagWrapper>
      <TextWrapper>
        <Typography
          variant="p"
          fontWeight="bold"
          fontSize="subtitle"
          text={nameWithOwner}
        />
        <StyledDescription
          variant="p"
          fontSize="body"
          fontWeight="400"
          text={description}
        />
      </TextWrapper>
      <ButtonWrapper>
        <Button
          rounded
          bg="primary"
          color="primaryContrast"
          onClick={() => window.open(url)}
        >
          Link
        </Button>
        <Button
          rounded
          bg="secondary"
          color="secondaryContrast"
          onClick={() => window.open(homepageUrl)}
        >
          Live-Demo
        </Button>
      </ButtonWrapper>
    </Card>
  )
}

export default ProjectCard
