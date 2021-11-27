import React from "react";

//Importing Material UI stuff
import { makeStyles } from "@material-ui/core/styles";
import { ContainedButton, OutlinedButton } from "../../components/Buttons";

//Importing Components
import { Grid, TextField, Typography, Card } from "@material-ui/core";

import style from "./style";
import ReadyToStart from "../../components/ReadyToStart";



const useStyles = makeStyles(style);
function ContactPage() {
  const classes = useStyles();

  return (
    <div className={classes.contactPage}>
      {/* Hero Section */}
      <Grid container className={`${classes.section} ${classes.heroSection}`}>
        <div className={classes.heroSectionContent}>
          <Typography variant="h2" gutterBottom className={classes.title}>
            Contact Us
          </Typography>
          <Typography variant="h6" gutterBottom className={classes.description}>
            If you have any questions, we would love to hear from you. Feel free
            to write us at{" "}
            <a href="#" className={classes.link}>
              designandcode.community@gmail.com
            </a>{" "}
            and we'll get back to you
          </Typography>
          <Grid container className={classes.contactGrid}>
            <form className={classes.contactForm} noValidate autoComplete="off">
              <TextField
                classes={{ root: classes.textFieldOutline }}
                id="outlined-basic"
                variant="outlined"
                label="Name"
              />
              <TextField
                classes={{ root: classes.textFieldOutline }}
                id="outlined-basic"
                variant="outlined"
                label="Email"
              />
              <TextField
                classes={{ root: classes.textFieldOutline }}
                id="outlined-basic"
                variant="outlined"
                label="Subject"
              />
              <TextField
                classes={{ root: classes.textFieldOutline }}
                id="outlined-basic"
                variant="outlined"
                label="Message"
                multiline
                rows={4}
              />
              <ContainedButton size="large" className={classes.btn}>
                SUBMIT
              </ContainedButton>
            </form>

            <div className={classes.options}>
              <Card className={classes.optionBlock}>
                <Typography
                  variant="h5"
                  gutterBottom
                  className={classes.optionTitle}
                >
                  Become our Community Partner
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  className={classes.optionInfo}
                >
                  If you have any suggestions or ideas that can help us to
                  improve how Design and Code functions or operate, also if you
                  can conduct design sessions, workshops, or meetups. Do write
                  them to us.
                </Typography>
                <OutlinedButton size="medium" className={classes.btn}>
                  <Typography variant="h6">Partner with us</Typography>
                </OutlinedButton>
              </Card>
              <Card className={classes.optionBlock}>
                <Typography
                  variant="h5"
                  gutterBottom
                  className={classes.optionTitle}
                >
                  Be our Sponsor
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  className={classes.optionInfo}
                >
                  If you have any suggestions or ideas that can help us to
                  improve how Design and Code functions or operate, also if you
                  can conduct design sessions, workshops, or meetups. Do write
                  them to us.
                </Typography>
                <OutlinedButton size="medium" className={classes.btn}>
                  <Typography variant="h6">Sponsor Us</Typography>
                </OutlinedButton>
              </Card>
            </div>
          </Grid>
        </div>
      </Grid>

      <ReadyToStart/>
    </div>
  );
}

export default ContactPage;
