import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ContainedButton } from "../../components/Buttons";
import style from "./style";

const useStyles = makeStyles(style);
const ReadyToStart = () => {
  const classes = useStyles();
  return (
    <>
      {/* Ready to start Journey section */}
      <Grid
        container
        className={`${classes.section} ${classes.journeySection}`}
      >
        <Grid container className={`${classes.journeyTextSection}`}>
          <Typography variant="h3" gutterBottom className={classes.subtitle}>
            Ready to start your journey?
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            className={`${classes.secondaryDesc} ${classes.textCenter}`}
          >
            Come connect, collaborate and accelerate your growth with folks from
            around the world!
          </Typography>
          <div data-aos="fade-up" data-aos-delay="200">
          <ContainedButton
            size="large"
            href="https://discord.gg/gM3bG4rAU5"
            target="_blank"
          >
            JOIN DISCORD
          </ContainedButton>
          </div>
        </Grid>
        <Grid container className={`${classes.journeyImageSection}`}>
          <Grid container className={classes.imgContainer}>
            <div className={classes.imgCenter}>
              <img
                alt=" "
                src="/TeamImages/Devraj Chatribin.jpeg"
                className={classes.imgSmall}
              />
            </div>
            <div className={classes.imgLeft}>
              <img
                alt=" "
                src="/TeamImages/Shriram Parab.jpeg"
                className={`${classes.imgMedium} ${classes.middleImage}`}
              />
            </div>
            <div className={classes.imgRight}>
              <img
                alt=" "
                src="/TeamImages/Nandani Paliwal.jpg"
                className={classes.imgBig}
              />
            </div>
          </Grid>
          <Grid container className={classes.imgContainer}>
            <div className={classes.imgCenter}>
              <img
                alt=" "
                src="/TeamImages/Falguni Sarkar.jpeg"
                className={classes.imgBig}
              />
            </div>
            <div className={classes.imgRight}>
              <img
                alt=" "
                src="/TeamImages/Macy So.JPG"
                className={`${classes.imgSmall} ${classes.middleImage}`}
              />
            </div>
            <div className={classes.imgLeft}>
              <img
                alt=" "
                src="/TeamImages/pratham krishna.jpg"
                className={classes.imgMedium}
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default ReadyToStart;
