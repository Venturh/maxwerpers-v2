import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import Button from "../components/Base/Button"
import styled from "styled-components"
import Typography from "../components/Base/Typography"
import cover_dark from "../images/landing_cover.svg"
import Shape from "../components/Base/Shape"

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 94vh;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: row-reverse;
    justify-content: space-evenly;
    align-items: center;
  }
`

const Shapes = styled.div`
  position: absolute;
  right: 0px;
  top: 10vh;
  display: flex;
  flex-direction: row-reverse;
`

const Cover = styled.img`
  height: 30vh;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    height: 60vh;
  }
`

const InfoWrapper = styled.div`
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin-top: 0;
    align-items: start;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: row;
    justify-content: start;
  }
`
export const StyledButton = styled(Button)`
  width: 50vw;
  margin-top: 0.5rem;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 12.5vw;
    margin-right: 0.5rem;
  }
`

const Start = () => {
  const intl = useIntl()
  return (
    <Wrapper>
      <Shapes>
        <Shape
          bg="primary"
          width={100}
          height={20}
          borderRadius="10px 0px 0px 10px"
        />
        <Shape bg="primary" width={20} height={20} borderRadius="100%" />
        <Shape bg="primary" width={20} height={20} borderRadius="100%" />
      </Shapes>
      <Cover src={cover_dark} />
      <InfoWrapper>
        <Typography
          variant="p"
          fontSize={{ xs: "mobile.xs", md: "desktop.xs" }}
          color="secondary"
          text={intl.formatMessage({ id: "welcomeTitle" })}
        />
        <Typography
          variant="h4"
          fontSize={{ xs: "mobile.xl", md: "desktop.lg" }}
          color="bodyContrast"
          text={intl.formatMessage({ id: "welcomeMsg" })}
        />
        <Typography
          variant="h4"
          fontSize={{ xs: "mobile.lg", md: "desktop.lg" }}
          color="bodyContrast"
          text={intl.formatMessage({ id: "welcomeSub" })}
        />
        <ButtonGroup>
          <StyledButton color="primaryContrast" bg="primary" rounded>
            Projekte
          </StyledButton>
          <StyledButton color="secondaryContrast" bg="secondary" rounded>
            Erfahrung
          </StyledButton>
        </ButtonGroup>
      </InfoWrapper>
    </Wrapper>
  )
}

export default Start
