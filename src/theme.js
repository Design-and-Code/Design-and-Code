import { createMuiTheme } from "@material-ui/core/styles";

const darkTheme = {
  palette: {
    primary: {
      main: "#121415",
      bubbleColor: "rgba(64, 68, 83, 0.47)",
      gradient1: "#39AFFD",
      gradient2: "#477FFF",
      mainGradient: "linear-gradient(to right, #39AFFD, #477FFF)",
    },
    secondary: {
      main: "#23272A",
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
