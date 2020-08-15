import React from "react"
import styled from "styled-components"

import { ButtonText, Subtitle, Text } from "./Typography"
import { PrimaryButton, SecondaryButton } from "./Button"
import Shape from "./Shape"
import SvgIcon from "./SvgIcon"

import { Github, Star } from "icons"
import { c1 } from "theme/styles"

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
          width="0.5em"
          height="0.5em"
          borderRadius="100%"
        />
        <ButtonText color="bodyContrast">{primaryLanguage.name}</ButtonText>
      </LanguageIndicator>
      <StarWrapper>
        <StyledStar path={Star} />
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
  ${c1};
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

const StyledStar = styled(SvgIcon)`
  fill: ${props => props.theme.colors.bodyContrast};
  height: 0.8em;
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
