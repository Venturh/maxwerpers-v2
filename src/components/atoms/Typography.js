import React from "react"
import styled from "styled-components"
import { getFontSize, getColor } from "theme"

const StyledTypography = styled.p`
  color: ${p => p.color};
  font-size: ${p => p.fontSize};
  font-weight: ${p => (p.bold ? 700 : 500)};
`

const Typography = ({ children, variant, text, ...props }) => (
  <StyledTypography as={variant} {...props}>
    {children || text}
  </StyledTypography>
)

const Caption = styled(Typography)`
  font-size: ${getFontSize("caption")};
  color: ${props => getColor(props.color || "bodyContrast")};
`

const ButtonText = styled(Typography)`
  font-size: ${getFontSize("button")};
  color: ${props => getColor(props.color || "bodyContrast")};
`

const SubText = styled(Typography)`
  font-size: ${getFontSize("subbody")};
  color: ${props => getColor(props.color || "bodyContrast")};
`

const Text = styled(Typography)`
  font-size: ${getFontSize("body")};
  color: ${props => getColor(props.color || "bodyContrast")};
`

const Subtitle = styled(Typography)`
  font-size: ${getFontSize("subtitle")};
  color: ${props => getColor(props.color || "bodyContrast")};
`

const Title = styled(Typography)`
  font-size: ${getFontSize("title")};
  color: ${props => getColor(props.color || "primary")};
`

const Subheader = styled(Typography)`
  text-align: center;
  font-size: ${getFontSize("subheader")};
  font-weight: 500;
  color: ${props => getColor(props.color || "primary")};
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    text-align: start;
  }
`

const Header = styled(Typography)`
  font-size: ${getFontSize("header")};
  font-weight: 700;
  color: ${props => getColor(props.color || "primary")};
`

const Span = styled.span`
  color: ${props => getColor(props.color || "bodyContrast")};
`

export default Typography
export {
  Caption,
  ButtonText,
  SubText,
  Text,
  Subtitle,
  Title,
  Subheader,
  Header,
  Span,
}
