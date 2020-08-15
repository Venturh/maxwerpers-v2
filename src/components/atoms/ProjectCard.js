import React from "react"
import styled from "styled-components"
import { Link } from "gatsby-plugin-intl"

import { Caption, Text, Title } from "./Typography"
import SvgIcon from "./SvgIcon"
import { c2 } from "theme/styles"

const ProjectCard = ({ name, headline, slug, locale, icon }) => {
  return (
    <Card to={`/projects/${slug}`}>
      <SvgIcon
        style={{ padding: "0 1.5em" }}
        color="primary"
        height="2.5em"
        path={icon}
      />
      <CardInfo>
        <Caption>Open Source</Caption>
        <Title color="primary">{name}</Title>
        <Text color="bodyContrast">{headline}</Text>
      </CardInfo>
    </Card>
  )
}

export default ProjectCard

const Card = styled(Link)`
  ${c2};
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5em 0;
  :hover {
    transform: translateY(-1px);
  }
`
const CardInfo = styled.div`
  width: 60%;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: initial;
  }
`
