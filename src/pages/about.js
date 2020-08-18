import React from "react"
import styled from "styled-components"
import { useIntl } from "gatsby-plugin-intl"

import { BaseLayout } from "templates"
import {
  Button,
  Header,
  PrimaryButton,
  SecondaryButton,
  Text,
  Title,
} from "atoms"

import cv from "content/downloads/cv.pdf"

export default () => {
  const intl = useIntl()
  return (
    <BaseLayout small>
      <Wrapper>
        <Header text={intl.formatMessage({ id: "aboutMe" })} />
        <Description>
          <Title>
            {intl.formatMessage({
              id: "aboutMeSub",
            })}
          </Title>
          <Text>{intl.formatMessage({ id: "aboutMeDesc" })}</Text>
        </Description>
        <CvButtons>
          <PrimaryButton link={cv}>View CV</PrimaryButton>
          <SecondaryButton link={cv} download="cv">
            Download CV
          </SecondaryButton>
        </CvButtons>
      </Wrapper>
    </BaseLayout>
  )
}

const Wrapper = styled.main``

const Description = styled.article`
  margin: 1em 0;
`
const CvButtons = styled.div`
  display: flex;
  ${PrimaryButton} {
    margin-right: 1em;
    min-width: 5em;
  }
`
