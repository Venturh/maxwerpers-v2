import React from "react"
import styled from "styled-components"
import { navigate, useIntl } from "gatsby-plugin-intl"

import { IconOnlyButton, Subtitle, Text } from "atoms"

import { ArrowRightUp, Github } from "icons"
import { getColor } from "theme"

export default ({ projects, filter }) => {
  const { locale } = useIntl()
  const filteredProjects =
    filter.length !== 0
      ? projects.filter(p =>
          p.tech.some(({ text }) => filter.some(n => n === text))
        )
      : projects

  return (
    <List>
      <Table>
        <thead>
          <tr>
            <Subtitle as="th" color="primary">
              Name
            </Subtitle>
            <Subtitle as="th" className="hide-on-mobile" color="primary">
              Build with
            </Subtitle>

            <Subtitle as="th" className="hide-on-mobile" color="primary">
              Progress
            </Subtitle>

            <Subtitle as="th" color="primary">
              Year
            </Subtitle>

            <Subtitle as="th" color="primary">
              Links
            </Subtitle>
          </tr>
        </thead>
        <tbody>
          {filteredProjects.map(
            ({ name, year, tech, url, homepageUrl, slug, localizations }) => {
              const { progress } = localizations.find(
                project => project.locale === locale
              )
              console.log("localization", progress)
              return (
                <tr key={name} onClick={() => navigate(`/projects/${slug}`)}>
                  <Title>
                    <Subtitle>{name}</Subtitle>
                  </Title>
                  <Techs>
                    {tech.map(({ text }, i) => (
                      <span key={text}>
                        {text}
                        {i !== tech.length - 1 && <span> - </span>}
                      </span>
                    ))}
                  </Techs>
                  <Progress className="hide-on-mobile">
                    <Text>{progress}</Text>
                  </Progress>
                  <Year>{year}</Year>
                  <Links>
                    <IconOnlyButton
                      color="primary"
                      style={{ marginRight: "0.5em" }}
                      link={url}
                      iconsize="1.2em"
                      leftIcon={Github}
                    />
                    {homepageUrl ? (
                      <IconOnlyButton
                        color="primary"
                        leftIcon={ArrowRightUp}
                        iconsize="1.2em"
                        link={homepageUrl}
                      />
                    ) : null}
                  </Links>
                </tr>
              )
            }
          )}
        </tbody>
      </Table>
    </List>
  )
}

const List = styled.div`
  tbody tr {
    &:hover,
    &:focus {
      background-color: ${getColor("bodyGlow")};
      border-radius: 1em;
    }
  }
  th {
    text-align: left;
    padding: 0.25em 0.25em;
  }
  td {
    padding: 0.5em 0.5em;
    cursor: pointer;
  }
  .hide-on-mobile {
    display: none;
    @media (min-width: ${props => props.theme.breakpoints.md}) {
      display: table-cell;
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 80%;
  }
`
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`
const Title = styled.td`
  width: 60%;
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 20%;
  }
`
const Year = styled.td`
  width: 10%;
`

const Progress = styled.td`
  width: 20%;
`

const Techs = styled.td`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: inline;
    width: 35%;
  }
`
const Links = styled.td`
  display: flex;
`
