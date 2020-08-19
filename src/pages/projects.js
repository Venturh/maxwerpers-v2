import React from "react"
import styled from "styled-components"
import { useIntl } from "gatsby-plugin-intl"

import { BaseLayout } from "templates"
import { Header } from "atoms"

export default ({ id }) => {
  const intl = useIntl()

  return (
    <BaseLayout>
      <Wrapper id={id}>
        <Header text={intl.formatMessage({ id: "projects" })} />
      </Wrapper>
    </BaseLayout>
  )
}

const Wrapper = styled.main``
