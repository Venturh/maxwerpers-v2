import React from "react"
import styled from "styled-components"

import {
  IconOnlyButton,
  PrimaryButton,
  SecondaryButton,
  Subtitle,
  Text,
} from "atoms"

import { ArrowRightUp, Github } from "icons"

export default ({ projects, filter }) => {
  const filteredProjects = filter
    ? projects.filter(p => p.tech.some(({ text }) => text === filter))
    : projects

  return (
    <List>
      <Table>
        <thead>
          <tr>
            <th>
              <Subtitle color="primary">Title</Subtitle>
            </th>
            <th className="hide-on-mobile">
              <Subtitle color="primary">Build with</Subtitle>
            </th>
            <th>
              <Subtitle color="primary">Year</Subtitle>
            </th>
            <th>
              <Subtitle color="primary">Links</Subtitle>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredProjects.map(({ name, year, tech, url, homepageUrl }) => (
            <tr key={name}>
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
              <Year>{year}</Year>
              <Links>
                <DesktopLinks>
                  <PrimaryButton
                    style={{ marginRight: "0.5em" }}
                    link={url}
                    iconsize="1.2em"
                    leftIcon={Github}
                  >
                    Github
                  </PrimaryButton>
                  {homepageUrl ? (
                    <SecondaryButton bg="body" link={homepageUrl}>
                      Live-Demo
                    </SecondaryButton>
                  ) : null}
                </DesktopLinks>
                <MobileLinks>
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
                </MobileLinks>
              </Links>
            </tr>
          ))}
        </tbody>
      </Table>
    </List>
  )
}

const List = styled.div`
  th {
    text-align: left;
    padding: 0 0.25em;
  }
  td {
    padding: 0.25em 0.5em;
  }
  .hide-on-mobile {
    display: none;
    @media (min-width: ${props => props.theme.breakpoints.lg}) {
      display: inline;
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 70%;
  }
`
const Table = styled.table``
const Title = styled.td`
  width: 60%;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 30%;
  }
`
const Year = styled.td`
  width: 10%;
`
const Techs = styled.td`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: inline;
    width: 30%;
  }
`
const Links = styled.td``

const MobileLinks = styled.div`
  display: flex;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: none;
  }
`

const DesktopLinks = styled.div`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: flex;
    & > * {
      height: 1.5em;
      width: 6em;
    }
  }
`
