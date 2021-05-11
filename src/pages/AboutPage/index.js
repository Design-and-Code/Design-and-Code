import React from "react";
import {useHistory} from "react-router-dom";

//Importing Material UI stuff
import { makeStyles } from "@material-ui/core/styles";
import { ContainedButton, OutlinedButton } from "../../components/Buttons";

//Importing Components
import { Grid, Typography, Divider } from "@material-ui/core";
import heroIllustration from "../../assets/placeholders/Group 55.png";

import style from "./style";
import Member from "../../components/Member";
import aboutIllustration from '../../assets/illustrations/aboutIllustration.svg';
import image from '../../assets/placeholders/Rectangle 1035.png'

const useStyles = makeStyles(style);
function AboutPage() {
  const classes = useStyles(),
  history = useHistory();
  return( 
    <div className={classes.aboutPage}>
      
      {/* Hero Section */}
      <Grid container className={`${classes.section} ${classes.heroSection}`}>
        <div className={classes.heroSectionContent}>
          <Typography variant="h2" gutterBottom className={classes.title}>Our Mission</Typography>
          <Typography variant="h6" gutterBottom className={classes.description}>
              Design & Code is a global community on a mission to connect designers and developers to create a happy community eager to learn, innovate and grow together.
          </Typography>
        </div>
      </Grid>
      {/* Community Section */}
      <Grid
        container
        className={`${classes.section} ${classes.featuresSection}`}
      >
        <Grid
          container
        
        >
          <Typography variant="h2" gutterBottom className={classes.title}>Our Community</Typography>
          <Grid container xs={12} sm={6} className={classes.community_grid}>
            <div className={classes.community_grid1}>
              <Typography variant="h6" gutterBottom>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Typography>
              <Typography variant="h6" gutterBottom>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Typography>
            </div>            
          </Grid>
          <Grid container xs={12} sm={6}>
            <div className={classes.community_grid2}>
              <img src={aboutIllustration} className={classes.cgimage} alt="Hero "/>
            </div>
          </Grid>
        </Grid>
      </Grid>

      {/* Team Section */}

        <Grid
        container
        className={`${classes.section} ${classes.teamSection}`}
        spacing={4}
      >
          <Grid item xs={12}>
            <Typography variant="h2" gutterBottom className={classes.title}>Our Team</Typography>
            <Typography variant="subtitle1" className={classes.description} gutterBottom>
              Meet the spirited team that worked behind the scenes to establish this platform.
            </Typography>
          </Grid>
          <Grid item xs={12}><Divider className={classes.divider}/></Grid>
          <Member image={image} linkedIn="e" instagram="s" youtube="w" website="w"/>
          <Member image={image} linkedIn="e" instagram="s"/>
          <Member image={image} linkedIn="e" instagram="s"/>
          <Member image={image} linkedIn="e" instagram="s"/>
          <Member image={image} youtube="w" website="w"/>
          <Member image={image} linkedIn="e" instagram="s"/>
          <Grid item xs={12} className={classes.visitTeamsBtn}>
            <OutlinedButton
              size="large"
              onClick={() => history.push('/team')}
            >
              Show Entire Team
            </OutlinedButton>
          </Grid>
      </Grid>

       {/* Ready to start Journey section */}
       <Grid
        container
        className={`${classes.section} ${classes.journeySection}`}
      >
        <Typography variant="h3" gutterBottom className={classes.subtitle}>Ready to start your journey?</Typography>

        <ContainedButton
          size="large"
          href="https://discord.gg/druweDMn3s"
          target="_blank"
          className={classes.btn}
        >
          JOIN DISCORD
        </ContainedButton>
      </Grid>
    </div>
  );
}

export default AboutPage;
