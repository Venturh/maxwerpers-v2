export const getColor = variant => props => props.theme.colors[variant]

export const fontSizes = {
  xs: "0.69em",
  sm: "0.83em",
  md: "1em",
  lg: "1.2em",
  title: "1.44em",
  subheader: "1.73em",
  header: "2.07em",
  "4xl": "2.49em",
  "5xl": "2.99em",
}

export const sizes = {
  navIcons: "1.3em",
}

export const spacing = {
  heading: "0.5em",
  nav: "3%",
  desktop: {
    sides: "15%",
  },
  mobile: {
    sides: "5%",
  },
}

const breakpoints = {
  sm: "576px",
  md: "768px",
  lg: "1280px",
  xl: "1920px",
}
export const lightTheme = {
  colors: {
    primary: "#62ea8d",
    primaryGlow: "#58d37f",
    primaryContrast: "#292929",
    body: "#FFFFFF;",
    bodyContrast: "#292929",
    bodyTint: "#cccccc",
    bodyGlow: "#EDF2F7",
  },
  type: "light",
  fontSizes,
  spacing,
  breakpoints,
  sizes,
}

export const darkTheme = {
  colors: {
    primary: "#85EEA7",
    primaryContrast: "#292929",
    primaryGlow: "#b0fbbc",
    body: "#333333;",
    bodyContrast: "#E8E8E8",
    bodyTint: "#474747",
    bodyGlow: "#474747",
  },
  type: "dark",
  fontSizes,
  spacing,
  breakpoints,
  sizes,
}
