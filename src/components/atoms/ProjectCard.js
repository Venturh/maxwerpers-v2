import React from "react"
import styled from "styled-components"
import { Link } from "gatsby-plugin-intl"

import { Caption, Text, Title } from "./Typography"
import SvgIcon from "./SvgIcon"
import { getColor } from "theme"

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
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5em 0;
  background-color: ${getColor("body")};
  border-radius: 1em;
  box-shadow: 0px 6px 5px -1px rgba(0, 0, 0, 0.25);
  border: 0.1px solid ${getColor("bodyTint")};
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
