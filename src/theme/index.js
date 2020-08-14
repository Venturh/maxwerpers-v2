export const getFromTheme = (type, variant) => props =>
  props.theme[type][variant]

export const getColor = variant => props => props.theme.colors[variant]

export const getFontSize = variant => props => props.theme.fontSizes[variant]

export const getSpacing = (variant, second) => props => {
  if (second) return props.theme.spacing[variant][second]
  else return props.theme.spacing[variant]
}

const fontSizes = {
  caption: "0.675em",
  button: "0.775em",
  subbody: "0.875em",
  body: "1em",
  subtitle: "1.25em",
  title: "1.5em",
  subheader: "2em",
  header: "3em",
}

const sizes = {
  navIcons: "1.3em",
}

const spacing = {
  heading: "0.5em",
  nav: "3%",
  desktop: {
    sides: "15vw",
  },
  mobile: {
    sides: "5vw",
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
    bodyTint: "#F4F2F7",
    toolbarContrast: "#1E1E1E",
    toolbar: "#FFFFFF",
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
    body: "#121212;",
    bodyContrast: "#f4f5f8",
    bodyTint: "#292929",
    toolbarContrast: "#f4f5f8",
    toolbar: "#1E1E1E",
  },
  type: "dark",
  fontSizes,
  spacing,
  breakpoints,
  sizes,
}
