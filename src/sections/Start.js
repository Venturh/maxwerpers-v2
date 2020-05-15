import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import Button from "../components/Base/Button"
import styled from "styled-components"
import Typography from "../components/Base/Typography"
import cover_dark from "../images/landing_cover_dark.svg"
import Shape from "../components/Base/Shape"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Shapes = styled.div`
  position: absolute;
  right: 0px;
  top: 10vh;
  display: flex;
  flex-direction: row-reverse;
`

const Cover = styled.img`
  margin-top: 30%;
  height: 30vh;
`

const InfoWrapper = styled.div`
  margin-top: 15%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`

export const TextTitle = styled.h5`
  color: ${props => props.theme.primaryColor};
`
export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`
export const StyledButton = styled(Button)`
  min-width: 40vw;
  margin-top: 0.5rem;
`

const Start = () => {
  const intl = useIntl()
  return (
    <Wrapper>
      <Shapes>
        <Shape
          type="rectangle"
          bg="primary"
          width={100}
          height={20}
          borderRadius="10px 0px 0px 10px"
        />
        <Shape
          type="rectangle"
          bg="primary"
          width={20}
          height={20}
          borderRadius="100%"
        />
        <Shape
          type="rectangle"
          bg="primary"
          width={20}
          height={20}
          borderRadius="100%"
        />
      </Shapes>
      <Cover src={cover_dark} />
      <InfoWrapper>
        <Typography
          variant="p"
          fontSize="xs"
          color="secondary"
          text={intl.formatMessage({ id: "welcomeTitle" })}
        />
        <Typography
          variant="p"
          fontSize="lg"
          color="bodyContrast"
          text={intl.formatMessage({ id: "welcomeMsg" })}
        />
        <Typography
          variant="p"
          fontSize="lg"
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
