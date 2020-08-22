export const getColor = variant => props => props.theme.colors[variant]

export const fontSizes = {
  xs: "0.64em",
  sm: "0.8em",
  md: "1em",
  lg: "1.25em",
  title: "1.56em",
  subheader: "1.95em",
  header: "2.44em",
  "4xl": "3.05em",
  "5xl": "3.81em",
}

export const sizes = {
  navIcons: "1.3em",
}

export const spacing = {
  heading: "0.5em",
  nav: "3%",
  xl: {
    sides: "20%",
  },

  lg: {
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
    body: "#161821;",
    bodyContrast: "#FFFFFF",
    bodyTint: "#272932",
    bodyGlow: "#272932",
  },
  type: "dark",
  fontSizes,
  spacing,
  breakpoints,
  sizes,
}
