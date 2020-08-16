import React from "react"
import styled from "styled-components"
import { useIntl } from "gatsby-plugin-intl"

import { BaseLayout } from "templates"
import { Subheader, Text, Title } from "atoms"

export default ({ id }) => {
  const intl = useIntl()

  return (
    <BaseLayout>
      <Wrapper>
        <Heading text={intl.formatMessage({ id: "aboutMe" })} />
        <Description>
          <Title>
            {intl.formatMessage({
              id: "aboutMeSub",
            })}
          </Title>
          <Text>{intl.formatMessage({ id: "aboutMeDesc" })}</Text>
        </Description>
      </Wrapper>
    </BaseLayout>
  )
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
`

const Description = styled.article`
  margin: 1em 0;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: flex;
    flex-direction: column;
    width: 55%;
  }
`

const Heading = styled(Subheader)``
