import React from "react"
import styled from "styled-components"

import {
  Header,
  PrimaryButton,
  ProjectCard,
  Section,
  Span,
  Subheader,
  Text,
  Subtitle,
  TertiaryButton,
} from "atoms"
import { useIntl } from "gatsby-plugin-intl"

import { useStaticQuery, graphql } from "gatsby"
import { ArrowRightS } from "icons"
import { getFontSize } from "theme"
import socials from "content/socials"
import { getColor } from "theme"

const Start = ({ id }) => {
  const { allProjectsYaml } = useStaticQuery(
    graphql`
      query AllProjectsQuery {
        allProjectsYaml(limit: 4) {
          edges {
            node {
              name
              slug
              icon
              localizations {
                locale
                headline
              }
            }
          }
        }
      }
    `
  )
  const { formatMessage, locale } = useIntl()
  return (
    <Section id={id}>
      <Hero>
        <TextWrapper>
          <Heading color="bodyContrast">
            {formatMessage({ id: "hey" })}{" "}
            <Span fontSize="header" color="primary">
              Max Werpers,
            </Span>
            <br />
            {formatMessage({ id: "whatS" })}
          </Heading>
          <Text>{formatMessage({ id: "whatL" })}</Text>
        </TextWrapper>
        <HeroImgContainer>
          {/* <HeroImg src={placeholder} alt="" /> */}
        </HeroImgContainer>
      </Hero>
      <Content>
        <Projects>
          <ProjectsHead>
            <Subheader> {formatMessage({ id: "projects" })}</Subheader>
            <PrimaryButton
              navigate
              link="/projects"
              rightIcon={ArrowRightS}
              lower
            >
              {formatMessage({ id: "showmore" })}
            </PrimaryButton>
          </ProjectsHead>
          <ProjectsCards>
            {allProjectsYaml.edges.map(({ node }) => {
              const localization = node.localizations.find(
                project => project.locale === locale
              )
              return <ProjectCard key={node.name} {...localization} {...node} />
            })}
          </ProjectsCards>
        </Projects>
        <SocialsBlog>
          <Socials>
            <Subheader>{formatMessage({ id: "socialsTitle" })}</Subheader>
            <SocialsCards>
              {socials.map(social => (
                <TertiaryButton key={social.link} {...social}>
                  {social.text}
                </TertiaryButton>
              ))}
            </SocialsCards>
          </Socials>
          <Blog>
            <Subheader>Blog</Subheader>
            <BlogCards>
              <Subtitle>{formatMessage({ id: "soon" })}</Subtitle>
            </BlogCards>
          </Blog>
        </SocialsBlog>
      </Content>
    </Section>
  )
}

export default Start

const Hero = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const TextWrapper = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 55%;
  }
`

const Heading = styled(Header)`
  margin-bottom: 0.5em;
  font-size: ${getFontSize("title")};
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    font-size: ${getFontSize("header")};
  }
`

const HeroImgContainer = styled.div`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: flex;
    justify-content: center;
    width: 40%;
  }
`

const HeroImg = styled.img`
  width: 100%;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 50%;
  }
`

const Content = styled.div`
  margin-top: 2em;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Projects = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 55%;
    margin-top: 0;
  }
`

const ProjectsHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ProjectsCards = styled.div`
  margin-top: 0.5em;
  display: grid;
  gap: 0.5em;
`

const SocialsBlog = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 40%;
  }
`

const Socials = styled.div`
  margin-top: 2em;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin-top: 0;
  }
`

const SocialsCards = styled.div`
  display: grid;
  gap: 0.5em;
  margin-top: 0.5em;
  @media (min-width: ${p => p.theme.breakpoints.lg}) {
    wdith: 80%;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(2, 3em);
  }
`

const Blog = styled.div`
  margin-top: 2em;
`

const BlogCards = styled.div``
