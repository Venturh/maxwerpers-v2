import React from "react"
import styled from "styled-components"
import { useIntl } from "gatsby-plugin-intl"

import { BaseLayout } from "templates"
import { Header, Text, Title } from "atoms"

export default () => {
  const intl = useIntl()

  return (
    <BaseLayout small>
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

const Wrapper = styled.main``

const Description = styled.article`
  margin: 1em 0;
`

const Heading = styled(Header)``
