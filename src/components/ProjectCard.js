import React from "react"
import styled from "styled-components"
import Typography from "./Base/Typography"
import Button from "./Base/Button"
import Shape from "./Base/Shape"

export const Card = styled.div``

export const LabelWrapper = styled.div`
  display: flex;
`

export const ButtonWrapper = styled.div`
  display: flex;
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
      <LabelWrapper>
        <Shape
          bg={primaryLanguage.color}
          width={10}
          height={10}
          borderRadius="100%"
        />
        <Typography text={primaryLanguage.name} />
      </LabelWrapper>
      <TextWrapper>
        <Typography text={nameWithOwner} />
        <Typography text={description} />
      </TextWrapper>
      <ButtonWrapper>
        <Button onClick={() => window.open(url)}>Link</Button>
        <Button onClick={() => window.open(homepageUrl)}>Live-Demo</Button>
      </ButtonWrapper>
    </Card>
  )
}

export default ProjectCard
