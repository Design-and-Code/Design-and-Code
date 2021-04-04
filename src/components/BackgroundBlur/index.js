import React, { useState, useEffect } from "react";
import style from "./style";

//Importing Material UI Stuff
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(style);

function BlurredCircle({ index }) {
  const classes = useStyles();
  return (
    <div
      className={classes.blurredCircle}
      style={{
        height: window.innerWidth / 6,
        width: window.innerWidth / 6,
        top: (window.innerWidth / 6) * index * 2,
        left: index % 2 === 0 ? "0" : window.innerWidth,
        transform: index % 2 !== 0 ? "translateX(-100%)" : "",
      }}
    ></div>
  );
}

function BackgroundBlur() {
  const classes = useStyles();

  const [noOfCircles, setNoOfCircles] = useState([]);

  useEffect(() => {
    setNoOfCircles(
      new Array(
        Math.floor(
          document.documentElement.scrollHeight / (window.innerWidth / 6)
        )
      ).fill("circle")
    );
  }, []);

  return (
    <div
      className={classes.backgroundBlur}
      style={{
        height: document.documentElement.scrollHeight,
      }}
    >
      {noOfCircles.map((item, index) => (
        <BlurredCircle key={`blurred-circle-${index}`} index={index} />
      ))}
    </div>
  );
}

export default BackgroundBlur;
