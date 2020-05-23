import React from "react"
import styled from "styled-components"
import Typography from "../components/atoms/Typography"

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
`

const Header = styled(Typography)`
  margin: 6vh 0 ${props => props.theme.spacing.heading} 0;
`

const Content = styled.div``

const Blog = () => {
  return (
    <Wrapper id="blog">
      <Header
        color="bodyContrast"
        fontSize="subheader"
        variant="h1"
        text="Blog"
      />
      <Content>
        <Typography
          color="bodyContrast"
          fontSize="title"
          variant="h1"
          text="Comming soon"
        />
      </Content>
    </Wrapper>
  )
}

export default Blog
