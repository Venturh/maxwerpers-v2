import React from "react"
import styled from "styled-components"

import { ButtonText, Subtitle, Text } from "./Typography"
import { PrimaryButton, SecondaryButton } from "./Button"
import Shape from "./Shape"

import { Github } from "../../icons"
import { Star } from "@styled-icons/remix-line/Star"

const GithubCard = ({
  url,
  nameWithOwner,
  description,
  homepageUrl,
  primaryLanguage,
  stargazers,
  ...rest
}) => (
  <Card {...rest}>
    <Tag>
      <LanguageIndicator>
        <Shape
          bg={primaryLanguage.color}
          width={8}
          height={8}
          borderRadius="100%"
        />
        <ButtonText color="bodyContrast">{primaryLanguage.name}</ButtonText>
      </LanguageIndicator>
      <StarWrapper>
        <StyledStar />
        <ButtonText color="bodyContrast">{stargazers.totalCount}</ButtonText>
      </StarWrapper>
    </Tag>

    <Subtitle color="bodyContrast" fontWeight="bold">
      {nameWithOwner}
    </Subtitle>
    <StyledDescription text={description} />
    <ButtonWrapper>
      <PrimaryButton
        style={{ marginRight: "0.5em" }}
        link={url}
        iconsize="1.2em"
        leftIcon={Github}
      >
        Github
      </PrimaryButton>
      {homepageUrl ? (
        <SecondaryButton bg="toolbar" link={homepageUrl}>
          Live-Demo
        </SecondaryButton>
      ) : null}
    </ButtonWrapper>
  </Card>
)

export default GithubCard

const Card = styled.div`
  background-color: ${props => props.theme.colors.toolbar};
  border-radius: 1em;
  box-shadow: 0px 6px 5px -1px rgba(0, 0, 0, 0.25);
  padding: 1em;
  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    padding: 1.25em;
  }
`

const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LanguageIndicator = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 0.25rem;
  }
`

const StarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5em;
`

const StyledStar = styled(Star)`
  width: 1em;
  margin-right: 0.1em;
`

const StyledDescription = styled(Text)`
  overflow: hidden;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5em;
`
