import React from "react"
import styled from "styled-components"
import { fontSizes, getColor } from "theme"

const StyledTypography = styled.p`
  color: ${p => getColor(p.color)};
  font-size: ${p => fontSizes[p.fontSize] || p.fontSize};
  font-weight: ${p => p.fontWeight};
  white-space: pre-line;
`

const Typography = ({ children, variant, text, ...props }) => (
  <StyledTypography as={variant} {...props}>
    {children || text}
  </StyledTypography>
)

const Caption = styled(Typography)`
  font-size: ${fontSizes.xs};
  color: ${props => getColor(props.color || "bodyContrast")};
`

const ButtonText = styled(Typography)`
  font-size: ${fontSizes.sm};
  color: ${props => getColor(props.color || "bodyContrast")};
`

const Text = styled(Typography)`
  font-size: ${fontSizes.md};
  color: ${props => getColor(props.color || "bodyContrast")};
`

const Subtitle = styled(Typography).attrs({ variant: "h4" })`
  font-size: ${fontSizes.lg};
  font-weight: 400;
  color: ${props => getColor(props.color || "bodyContrast")};
`

const Title = styled(Typography).attrs({ variant: "h3" })`
  font-size: ${fontSizes["title"]};
  color: ${props => getColor(props.color || "primary")};
`

const Subheader = styled(Typography).attrs({ variant: "h2" })`
  text-align: center;
  font-size: ${fontSizes.subheader};
  font-weight: 400;
  color: ${props => getColor(props.color || "primary")};
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    text-align: start;
  }
`

const Header = styled(Typography).attrs({ variant: "h1" })`
  font-size: ${fontSizes.header};
  font-family: "Archivo";
  font-weight: 700;
  color: ${props => getColor(props.color || "primary")};
`

const Span = styled.span`
  color: ${props => getColor(props.color || "bodyContrast")};
`

export default Typography
export { Caption, ButtonText, Text, Subtitle, Title, Subheader, Header, Span }
