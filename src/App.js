import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

// Importing Material UI Stuff
import { CircularProgress, Container } from "@material-ui/core";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { darkTheme, createMuiTheme } from "./theme";

//Importing Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import arrowup from "./assets/social-icons/chevron-up.svg";
import BackgroundBlur from "./components/BackgroundBlur";

//Importing Routes
import Routes from "./routes";

import style from "./style";

function CustomScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const progressStyles = makeStyles({
    root: {
      color: "#3f9bfe",
    },
    scrollupBtn:{
      position: "fixed",
      bottom: "2rem",
      right: "2rem",
      zIndex: 20,
      borderRadius: "50%",
      backgroundColor: "#090B11",
      // boxShadow: "2px 2px 20px #000",
      width: "2.6rem",
      height: "2.6rem",
      cursor: "pointer",
      // display: !scrollProgress ? "none" : "block",
    },
    arrow: {
      color: "#3f9bfe",
      zIndex: 200,
      position: "absolute",
      top: 7,
      left: 8,
    }
  });

  const progressClasses = progressStyles();


  const progressBar = () => {
    const scrollTotal = document.documentElement.scrollTop;
    const heightWin = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scroll = Math.round(scrollTotal / heightWin * 100);

    setScrollProgress(scroll);
  };

  window.addEventListener("scroll", progressBar);



  return (
    scrollProgress ? 
    <div onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})} className={`${progressClasses.scrollupBtn} hover-detect`}>
      <CircularProgress thickness={2} classes={{
      root: progressClasses.root,
    }} variant="determinate" value={scrollProgress} />
    <img src={arrowup} className={progressClasses.arrow} alt="arrow up icon"/>
    </div>
    : null 
  )
}

const useStyles = makeStyles(style);

function Content() {
  const classes = useStyles();
  const [theme, setTheme] = useState(createMuiTheme(darkTheme));

  return (
    <Router>
      <NavBar />
      <Container maxWidth="lg">
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
      <CustomScrollProgress />
    </ThemeProvider>
  );
}

export default App;
