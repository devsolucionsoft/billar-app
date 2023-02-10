import { DefaultTheme } from "styled-components"

export type paletteTypes =
  | "ligth"
  | "dark"
  | "primary"
  | "secondary"
  | "tertiary"
  | "success"
  | "danger"
  | "default"

export const theme: DefaultTheme = {
  margin: {
    vertical: "1em",
    horizontal: "2em",
  },
  colors: {
    ligth: "#FFFFFF",
    dark: "#000000",
    primary: "#212832",
    secondary: "#005C51",
    tertiary: "#E4BC57",
    success: "#3EC84B",
    danger: "#D94848",
    default: "#343434",
  },
  sizes: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px",
  },
}

export const media = theme.sizes
