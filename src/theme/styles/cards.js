import { css } from "styled-components"
import { getColor } from ".."

export const card1 = css`
  min-height: 4em;
  background-color: ${getColor("body")};
  color: ${getColor("bodyContrast")};
  border-radius: 0.75em;
  box-shadow: 0px 6px 5px 2px rgba(0, 0, 0, 0.25);
`

export const card2 = css`
  background-color: ${getColor("body")};
  border-radius: 1em;
  border: 1px solid ${getColor("bodyTint")};
`
