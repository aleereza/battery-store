import { red } from "@material-ui/core/colors"
import { createMuiTheme } from "@material-ui/core/styles"

import IranMarkerttf from "./IRANMarker.ttf"

const iranMarker = {
  fontFamily: "IranMarker",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: "normal",
  src: `
    url(${IranMarkerttf}) format('truetype')
  `,
}
// A custom theme for this app
const theme = createMuiTheme({
  direction: "rtl",
  typography: {
    fontFamily: ["IranMarker", "Tahoma"].join(","),
    fontSize: 14,
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [iranMarker],
      },
    },
  },
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
})

export default theme
