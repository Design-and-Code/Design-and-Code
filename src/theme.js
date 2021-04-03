import { createMuiTheme } from "@material-ui/core/styles";

const darkTheme = {
  palette: {
    primary: {
      main: "#171A1C",
      gradient1: "#39AFFD",
      gradient2: "#477FFF",
      mainGradient: "linear-gradient(to right, #39AFFD, #477FFF)",
    },
    secondary: {
      main: "#2C2F33",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#99AAB5",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: ["Poppins"].join(","),
  },
};

export { darkTheme, createMuiTheme };
