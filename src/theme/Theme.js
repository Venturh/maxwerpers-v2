const fontSizes = {
  xs: "0.675em",
  caption: "0.675em",
  button: "0.775em",
  subbody: "0.875em",
  body: "1.1em",
  subtitle: "1.25em",
  title: "1.5em",
  subheader: "2em",
  header: "3em",
}

const spacing = {
  heading: "0.5em",
  desktop: {
    sides: "3%",
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
    primary: "#58E887 ",
    primaryContrast: "#292929",
    secondary: "#6C97C1",
    secondaryRgba: [133, 167, 223],
    secondaryContrast: "#292929",
    body: "#F4F2F7;",
    bodyContrast: "#292929",
    bodyTint: "F4F2F7",
    toolbarContrast: "#1E1E1E",
    toolbar: "#F1F1EF",
  },
  type: "light",
  fontSizes,
  spacing,
  breakpoints,
}

export const darkTheme = {
  colors: {
    primary: "#85EEA7",
    primaryContrast: "#292929",
    secondary: "#85a7df",
    secondaryRgba: [108, 151, 193],
    secondaryContrast: "#292929",
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
}
