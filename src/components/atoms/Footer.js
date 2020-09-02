import React from "react"
import styled from "styled-components"
import { useIntl } from "gatsby-plugin-intl"

import { Text } from "./Typography"
import SvgIcon from "./SvgIcon"
import Link from "./Link"
import { IconOnlyButton } from "./Button"

import { getColor } from "theme"
import socials from "content/socials"
import { Love } from "icons"

const Footer = ({ ...rest }) => {
  const { formatMessage } = useIntl()
  return (
    <Wrapper {...rest}>
      <Credits>
        <Text style={{ display: "flex", alignItems: "center" }}>
          {formatMessage({ id: "footer1" })}
          <SvgIcon
            style={{ margin: "0 0.25em" }}
            height="1em"
            color="primary"
            path={Love}
          />
          {formatMessage({ id: "footer2" })}
        </Text>
        <Text>
          {formatMessage({ id: "footer3" })}
          <Link color="primary" underline="true" to="https://www.gatsbyjs.org/">
            Gatsby
          </Link>{" "}
          {formatMessage({ id: "footer4" })}
          <Link color="primary" underline="true" to="https://www.netlify.com/">
            Netlify.
          </Link>
        </Text>
      </Credits>
      <Socials>
        {socials.map(({ leftIcon, link }) => (
          <IconOnlyButton
            color="bodyContrast"
            iconSize="1.5em"
            key={link}
            to={link}
            leftIcon={leftIcon}
          ></IconOnlyButton>
        ))}
      </Socials>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  height: 8em;
  padding: 0 ${props => props.theme.spacing.mobile.sides};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid ${getColor("bodyTint")};

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2em ${props => props.theme.spacing.lg.sides};
  }
  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    padding: 2em ${props => props.theme.spacing.xl.sides};
  }
`

const Credits = styled.div`
  a {
    :hover {
      color: ${getColor("primaryGlow")};
    }
  }
`

const Socials = styled.div`
  width: 100%;
  display: flex;
  margin-top: 0.5em;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 20%;
    justify-content: space-between;
    margin-top: 0;
  }
`

export default Footer
