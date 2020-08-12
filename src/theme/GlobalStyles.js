import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  :root {
    --sides-padding-desktop: 3%;
    --sides-padding-mobile: 5%;
  }


  a {
    color: inherit;
    text-decoration: none;
  }

  /* CSS Reset */

  /* Box sizing rules */
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  /* Remove default padding */
  ol[class],
  ul[class] {
    padding: 0;
  }

  /* Remove default margin */
  blockquote,
  body,
  dd,
  dl,
  figcaption,
  figure,
  h1,
  h2,
  h3,
  h4,
  li,
  ol[class],
  p,
  ul[class] {
    margin: 0;
  }

  /* Set core body defaults */
  body {
    font-family: 'QuickSand', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.body};
    color:  ${({ theme }) => theme.colors.bodyContrast};
    transition: background 0.25s linear;
    font-size: 15px;
    @media (min-width: ${props => props.theme.breakpoints.lg}) {
      font-size: 17px;
    }
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img {
    display: block;
    max-width: 100%;
  }

  /* Natural flow and rhythm in articles by default */
  article > * + * {
    margin-top: 1em;
  }

  /* Inherit fonts for inputs and buttons */
  button,
  input,
  select,
  textarea {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
    }
  }
`
