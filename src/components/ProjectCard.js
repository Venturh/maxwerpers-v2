import React from "react"
import styled from "styled-components"
import Typography from "./Base/Typography"
import Button from "./Base/Button"
import Shape from "./Base/Shape"

export const Card = styled.div`
  background-color: ${props => props.theme.colors.toolbarBackground};
  border-radius: 0.25rem;
  padding: 1rem;
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: 0.5rem;
  }
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    padding: 2rem;
  }
`

export const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  h4 {
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
  margin-top: 1rem;
  Button {
    margin-right: 1rem;
    padding: 5px 10px 5px 10px;
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
          variant="h4"
          fontSize={{ xs: "mobile.xs", xl: "desktop.sm" }}
          text={primaryLanguage.name}
        />
      </TagWrapper>
      <TextWrapper>
        <Typography
          variant="h3"
          fontSize={{ xs: "mobile.xl", xl: "desktop.md" }}
          text={nameWithOwner}
        />
        <StyledDescription
          variant="h3"
          fontSize={{ xs: "mobile.sm", xl: "desktop.sm" }}
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
