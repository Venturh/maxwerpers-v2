import React from "react"
import styled from "styled-components"

import { Text } from "./Typography"
import SvgIcon from "./SvgIcon"
import Link from "./Link"
import { getColor } from "theme"
import socials from "content/socials"

import { Love } from "@/icons"

const Footer = () => {
  return (
    <Wrapper>
      <Credits>
        <Text style={{ display: "flex", alignItems: "center" }}>
          Coded with <LoveIcon path={Love} /> by Max Werpers.
        </Text>
        <Text>
          Build with{" "}
          <Link color="primary" underline="true" to="https://www.gatsbyjs.org/">
            Gatsby{" "}
          </Link>
          and hosted on{" "}
          <Link color="primary" underline="true" to="https://www.netlify.com/">
            Netlify.
          </Link>
        </Text>
      </Credits>
      <Socials>
        {socials.map(({ leftIcon, link }) => (
          <Link key={link} to={link}>
            <Social color="primary" height="1.5em" path={leftIcon} />
          </Link>
        ))}
      </Socials>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  padding: 2em ${props => props.theme.spacing.mobile.sides};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2em ${props => props.theme.spacing.desktop.sides};
  }
`

const Credits = styled.div`
  a {
    :hover {
      color: ${getColor("primaryGlow")};
    }
  }
`

const LoveIcon = styled(SvgIcon)`
  fill: ${getColor("primary")};
  height: 1em;
`

const Socials = styled.div`
  width: 100%;
  display: flex;
  margin-top: 0.5em;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin-top: 0;
    width: 15%;
    justify-content: space-between;
  }
`

const Social = styled(SvgIcon)`
  margin-right: 0.5em;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin: 0 0 0 0.5em;
  }
`

export default Footer
