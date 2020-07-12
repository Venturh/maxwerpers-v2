import React from "react"
import styled from "styled-components"
import { color, fontSize, fontWeight } from "styled-system"

const StyledTypography = styled.p`
  ${color}
  ${fontSize}
  ${fontWeight}
`

const Typography = ({ children, variant, text, ...props }) => (
  <StyledTypography as={variant} {...props}>
    {children || text}
  </StyledTypography>
)

const Caption = ({ text, color, ...rest }) => (
  <Typography
    color={color || "bodyContrast"}
    fontSize="caption"
    text={text}
    {...rest}
  />
)

const ButtonText = ({ text, color, ...rest }) => (
  <Typography
    color={color || "toolbar"}
    fontSize="button"
    text={text}
    {...rest}
  />
)

const SubText = ({ text, color, ...rest }) => (
  <Typography
    color={color || "bodyContrast"}
    fontSize="subbody"
    text={text}
    {...rest}
  />
)

const Text = ({ text, color, ...rest }) => (
  <Typography
    color={color || "bodyContrast"}
    fontSize="body"
    text={text}
    {...rest}
  />
)

const Subtitle = ({ text, color, ...rest }) => (
  <Typography
    color={color || "primary"}
    fontSize="subtitle"
    text={text}
    {...rest}
  />
)

const Title = ({ text, color, ...rest }) => (
  <Typography
    color={color || "primary"}
    fontSize="title"
    text={text}
    {...rest}
  />
)

const Subheader = ({ text, color, ...rest }) => (
  <Typography
    color={color || "primary"}
    fontSize="subheader"
    text={text}
    {...rest}
  />
)

export default Typography
export { Caption, ButtonText, SubText, Text, Subtitle, Title, Subheader }
