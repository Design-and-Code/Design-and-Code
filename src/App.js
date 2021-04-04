import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

// Importing Material UI Stuff
import { Container } from "@material-ui/core";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { darkTheme, createMuiTheme } from "./theme";

//Importing Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BackgroundBlur from "./components/BackgroundBlur";

//Importing Routes
import Routes from "./routes";

import style from "./style";

const useStyles = makeStyles(style);

function Content() {
  const classes = useStyles();
  const [theme, setTheme] = useState(createMuiTheme(darkTheme));

  return (
    <Router>
      <NavBar />
      <Container maxWidth="lg" disableGutters>
        <Routes />
      </Container>
      <Footer />
      <BackgroundBlur />
    </Router>
  );
}

function App() {
  const [theme, setTheme] = useState(createMuiTheme(darkTheme));

  return (
    <ThemeProvider theme={theme}>
      <Content />
    </ThemeProvider>
  );
}

export default App;
