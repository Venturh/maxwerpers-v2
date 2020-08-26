import React from "react"
import styled from "styled-components"

import { Button, PrimaryButton, SecondaryButton } from "atoms"

import { Github } from "icons"

export default ({ projects }) => {
  return (
    <List>
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Build with</th>
            <th>Year</th>
            <th>Links</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(({ name, year, tech, url, homepageUrl }) => (
            <tr key={name}>
              <td>{name}</td>
              <Techs>
                {tech.map(({ text }) => (
                  <span key={text}>{text}</span>
                ))}
              </Techs>
              <td>{year}</td>
              <Links>
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
              </Links>
            </tr>
          ))}
        </tbody>
      </Table>
    </List>
  )
}

const List = styled.div``
const Table = styled.table``
const Techs = styled.td``
const Links = styled.td`
  display: flex;
  & > * {
    height: 2em;
  }
`
