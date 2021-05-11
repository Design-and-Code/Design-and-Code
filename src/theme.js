import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme();

const darkTheme = {
  palette: {
    primary: {
      main: "#121415",
      blurColor: "rgb(64 113 222 / 67%)",
      backgroundBlurColor: "rgba(32, 38, 48, 0.5)",
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
      gradient: {
        color: "#FFFFFF",
        background: "linear-gradient(to right, #39AFFD, #477FFF)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
      }
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: ["Poppins"].join(","),
    h1: {
      overflow: "visible",
      fontSize: "6rem",
      fontWeight: 600,
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
      [theme.breakpoints.down("sm")]: {
        fontSize:  "4rem",
      },
    },
    h2: {
      fontSize: "3.75rem",      
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
      [theme.breakpoints.down("sm")]: {
        fontSize:  "2.50rem",
      },
    },
    h3: {
      fontSize: "3rem",      
      fontWeight: 500,
      lineHeight: 1.167,
      letterSpacing: "0em",
      [theme.breakpoints.down("sm")]: {
        fontSize:  "2rem",
      },
    },
    h4: {
      fontSize: "1.75rem",      
      fontWeight: 500,
      lineHeight: 1.235,
      letterSpacing: "0.00735em",
      [theme.breakpoints.down("sm")]: {
        fontSize:  "1.5rem",
      },
    },
    h5: {
      fontSize: "1.5rem",      
      fontWeight: 500,
      lineHeight: 1.334,
      letterSpacing: "0em",
      [theme.breakpoints.down("sm")]: {
        fontSize:  "1.25rem",
      },
    },
    h6: {
      fontSize: "1rem",      
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
      [theme.breakpoints.down("sm")]: {
        fontSize:  "1rem",
      },
    },
    subtitle1: {
      fontSize: "1rem",      
      fontWeight: 400,
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
      [theme.breakpoints.down("sm")]: {
        fontSize:  "0.875rem",
      },
    },
    subtitle2: {
      fontSize: "0.875rem",      
      fontWeight: 500,
      lineHeight: 1.57,
      letterSpacing: "0.00714em",
      [theme.breakpoints.down("sm")]: {
        fontSize:  "1rem",
      },
    },
    body1: {
      fontSize: "1rem",      
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
      [theme.breakpoints.down("sm")]: {
        fontSize:  "0.875rem",
      },
    },
    body2: {
      fontSize: "0.875rem",      
      fontWeight: 400,
      lineHeight: 1.43,
      letterSpacing: "0.01071em",
      [theme.breakpoints.down("sm")]: {
        fontSize:  "0.5rem",
      },
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "unset !important",
      [theme.breakpoints.down("sm")]: {
        fontSize:  "0.5rem",
      },
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: "400",
      lineHeight: "1.66",
      letterSpacing: "0.03333em",
      [theme.breakpoints.down("sm")]: {
        fontSize:  "0.25rem",
      },
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 2.66,
      letterSpacing: "0.08333em",
      textTransform: "uppercase",
      [theme.breakpoints.down("sm")]: {
        fontSize:  "0.25rem",
      },
    }
  },
  
};

export { darkTheme, createMuiTheme };
