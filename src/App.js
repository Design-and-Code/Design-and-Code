import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

// Importing Material UI Stuff
import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { darkTheme, createMuiTheme } from "./theme";

//Importing Components
import NavBar from "./components/NavBar";

//Importing Routes
import Routes from "./routes";

function App() {
  const [theme, setTheme] = useState(createMuiTheme(darkTheme));

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Container maxWidth="lg" disableGutters>
          <NavBar />
          <Routes />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
