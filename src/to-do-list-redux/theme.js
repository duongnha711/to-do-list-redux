import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const primaryColor = "#283593";
const primaryDarkColor = "#001064";
const primaryLightColor = "#5f5fc4";
const secondaryColor = "#f57f17";
const secondaryDarkColor = "#bc5100";
const secondaryLightColor = "#ffb04c";

export {
  primaryColor,
  primaryDarkColor,
  primaryLightColor,
  secondaryColor,
  secondaryDarkColor,
  secondaryLightColor,
};

let theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      dark: primaryDarkColor,
      light: primaryLightColor,
    },
    secondary: {
      main: secondaryColor,
      dark: secondaryDarkColor,
      light: secondaryLightColor,
    },
    // text: {
    //   primary: "#ffffff",
    //   // secondary: "white",
    // },
  },
  typography: {
    h1: {
      fontSize: 40,
    },
    h2: {
      fontSize: 36,
    },
    h3: {
      fontSize: 24,
    },
    h4: {
      fontSize: 20,
    },
    h5: {
      fontSize: 16,
    },
    body: {
      fontSize: 16,
    },
  },
});

export const viceTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#e53935",
      dark: "#ab000d",
      light: "#ff6f60",
    },
  },
});

export default theme = responsiveFontSizes(theme);
