import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

//Importing Material UI stuff
import { makeStyles } from "@material-ui/core/styles";
import { OutlinedButton } from "../../components/Buttons";

//Importing Components
import { Grid, Typography } from "@material-ui/core";
import { teamInfo, developersInfo } from "../../teams";

import style from "./style";
import Member from "../../components/Member";
import image from "../../assets/placeholders/Rectangle 1035.png";
import Links from "../../components/Links";
import ReadyToStart from "../../components/ReadyToStart";
const useStyles = makeStyles(style);
function AboutPage() {
  const classes = useStyles(),
    history = useHistory();
  const [IsDesktop, setIsDesktop] = useState(window.innerWidth > 900);
  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 900);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <div className={classes.teamPage}>
      {/* Hero Section */}
      <Grid container className={`${classes.section} ${classes.heroSection}`}>
        <div className={classes.heroSectionContent}>
          <Typography variant="h2" gutterBottom className={classes.title}>
            Our Team
          </Typography>
          <Typography variant="h6" gutterBottom className={classes.description}>
            Meet the spirited team that worked behind the scenes to establish
            this platform.
          </Typography>
          <div className={classes.member}>
            <div className={classes.infoHolder}>
              <div className={classes.imageWrapper}>
                <img
                  className={classes.image}
                  src="/TeamImages/Devraj Chatribin.jpeg"
                  alt="Member"
                />
              </div>
              <div className={classes.infoBox}>
                <Typography variant="h5" className={classes.title__color}>
                  Devraj Chatribin
                </Typography>
                <Typography variant="h6" className={classes.role}>
                  FOUNDER & DESIGN LEAD
                </Typography>
                <Typography
                  variant="subtitle2"
                  className={classes.description__color}
                >
                  Web Developer | UI/UX Designer
                </Typography>
                <Typography
                  variant="subtitle2"
                  className={`${classes.foundDesc} ${classes.description__color}`}
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet. Amet minim
                  mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  Velit officia consequat duis enim velit mollit. Exercitation
                  veniam consequat sunt nostrud amet.
                </Typography>
                <div>
                  <Links
                    linkedIn={"https://www.linkedin.com/in/devraj-chatribin/"}
                    instagram={"https://www.instagram.com/designfordev/"}
                    twitter={"https://twitter.com/devrajchatribin"}
                    github={"https://github.com/DevrajDC"}
                    website={"https://devrajchatribin.co/"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Grid>

      {/* Team Section */}

      <Grid
        container
        className={`${classes.section} ${classes.featuresSection}`}
        spacing={4}
      >
        {teamInfo.map((item, index) => {
          return <Member {...item} />;
        })}
      </Grid>

      {/* Developer Section */}

      <Typography variant="h3" gutterBottom className={classes.title}>
        Developers
      </Typography>
      <Typography variant="h6" gutterBottom className={classes.description}>
        Meet the spirited team that worked behind the scenes to establish this
        platform.
      </Typography>

      <Grid
        container
        className={`${classes.section} ${classes.featuresSection}`}
        spacing={4}
      >
        {developersInfo.map((item, index) => {
          return <Member {...item} />;
        })}
      </Grid>
      <ReadyToStart/>
    </div>
  );
}

export default AboutPage;
