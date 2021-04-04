import { createMuiTheme } from "@material-ui/core/styles";

const darkTheme = {
  palette: {
    primary: {
      main: "#121415",
      blurColor: "rgb(64 113 222 / 67%)",
      gradient1: "#39AFFD",
      gradient2: "#477FFF",
      mainGradient: "linear-gradient(to right, #39AFFD, #477FFF)",
    },
    secondary: {
      main: "#0e10117a",
      darkGrey: "#4040407a",
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
