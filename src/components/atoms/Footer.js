import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { Text } from "./Typography"
import { IconOnlyButton } from "./IconButton"
import SvgIcon from "./SvgIcon"
import { getColor } from "@/theme"
import socials from "@/content/socials"

import { Love } from "@/icons"

const Footer = () => {
  return (
    <Wrapper>
      <Credits>
        <Text style={{ display: "flex", alignItems: "center" }}>
          Coded with <LoveIcon path={Love} /> by Max Werpers.
        </Text>
        <Text>
          Build with <Link to="https://www.gatsbyjs.org/">GatsbyJs</Link> and
          hosted on <Link to="https://www.netlify.com/">Netlify.</Link>
        </Text>
      </Credits>
      <Socials>
        {socials.map(({ leftIcon, link }) => (
          <IconOnlyButton key={link} leftIcon={leftIcon} link={link} />
        ))}
      </Socials>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Credits = styled.div`
  a {
    color: ${getColor("primary")};
    :hover {
      color: ${getColor("primaryGlow")};
    }
  }
`

const LoveIcon = styled(SvgIcon)`
  fill: ${getColor("primary")};
  height: 1em;
  margin: 0 0.25em;
`

const Socials = styled.div`
  margin-top: 1em;
  display: flex;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin: 0;
  }
`

export default Footer
