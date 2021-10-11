import React from "react";

//Importing Material UI stuff
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import logo from "../../assets/image 25.png";
import { ContainedButton, OutlinedButton } from "../../components/Buttons";
import Card from "../../components/EventsCard"

import style from "./style";

const useStyles = makeStyles(style);

function EventsPage() {
  const classes = useStyles();
  return (
    <div className={classes.eventsPage}>
      {/* Haeder section */}
      <div className={classes.section}>
        <img src={logo} alt="Logo" className={classes.image} />
        <div>
          <Typography variant="h2" gutterBottom className={classes.title}>
            Our Events
          </Typography>
          <Typography variant="h6" gutterBottom className={classes.description}>
            We host workshops, work/study sessions, community hangouts and more!
          </Typography>
          <ContainedButton
            className={classes.button}
            href=""
            target="_blank"
            size="large"
          >
            Host With Us
          </ContainedButton>
        </div>
      </div>

      {/* Upcoming Events */}
      <Typography variant="h5" className={classes.subtitle}>
        Upcoming Events
      </Typography>
      <Card/>
    </div>
  );
}

export default EventsPage;
