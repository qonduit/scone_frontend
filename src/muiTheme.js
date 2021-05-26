import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiTextField: {
      root: {
        width: "100% ",
        color: "white",
      },
    },
    MuiTextField: {
      root: {
        width: "100% ",
        color: "white",
      },
    },
    MuiOutlinedInput: {
      root: {
        color: "rgba(255, 255, 255, 0.87)",
      },
    },
    MuiInputLabel: {
      root: {
        color: "rgba(255, 255, 255, 0.87)",
      },
    },
    MuiSelect: {
      root: {
        color: "rgba(255, 255, 255, 0.87)",
      },
    },
  },
  card: {
    backgroundColor: "#3f3f3f",
  },
  palette: {
    primary: {
      light: "#ffff93",
      main: "#e6fb60",
      dark: "#b1c82a",
      contrastText: "#000000",
    },
    secondary: {
      light: "#e9e9e9",
      main: "#b7b7b7",
      dark: "#878787",
      contrastText: "#000000",
    },
  },
});

export default theme;
