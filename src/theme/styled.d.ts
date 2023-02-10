// import original module declarations
import "styled-components"

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    margin: {
      vertical: string
      horizontal: string
    }
    colors: {
      ligth: string
      dark: string
      primary: string
      secondary: string
      tertiary: string
      success: string
      danger: string
      default: string
    }
    sizes: {
      xxl: string
      xl: string
      lg: string
      md: string
      sm: string
    }
  }
}
