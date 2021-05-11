import React from "react";

//Importing Material UI stuff
import { makeStyles } from "@material-ui/core/styles";
import { ContainedButton} from "../../components/Buttons";

//Importing Components
import { Grid, Typography } from "@material-ui/core";
import heroIllustration from "../../assets/placeholders/Group 55.png";

import style from "./style";
import Member from "../../components/Member";
import image from '../../assets/placeholders/Rectangle 1035.png'

const useStyles = makeStyles(style);
function AboutPage() {
  const classes = useStyles();
  return( 
    <div className={classes.aboutPage}>
      
      {/* Hero Section */}
      <Grid container className={`${classes.section} ${classes.heroSection}`}>
        <div className={classes.heroSectionContent}>
          <Typography variant="h2" gutterBottom className={classes.title}>Our Mission</Typography>
          <Typography variant="subtitle1" gutterBottom className={classes.description}>
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
              <Typography variant="h5" gutterBottom>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Typography>
              <Typography variant="h5" gutterBottom>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Typography>
            </div>            
          </Grid>
          <Grid container xs={12} sm={6}>
            <div className={classes.community_grid2}>
              <img src={heroIllustration} className={classes.cgimage} alt="Hero "/>
            </div>
          </Grid>
        </Grid>
      </Grid>

      {/* Team Section */}

        <Grid
        container
        className={`${classes.section} ${classes.featuresSection}`}
      >
        <Grid
          container
          
        >
          <Typography variant="h2" gutterBottom className={classes.title}>Our Team</Typography>
          <Typography variant="subtitle1" className={classes.description2} gutterBottom>
            Meet the spirited team that worked behind the scenes to establish this platform.
          </Typography>
          
          <Grid container className={classes.member_grid} xs={12} md={4} sm={12} >
            <Member image={image} linkedIn="e" instagram="s" youtube="w" website="w"/>
            <Member image={image} linkedIn="e" instagram="s"/>
          </Grid>
          <Grid container className={classes.member_grid} xs={12} md={4} sm={12} >
            <Member image={image} linkedIn="e" instagram="s"/>
            <Member image={image} linkedIn="e" instagram="s"/>
          </Grid>
          <Grid container className={classes.member_grid} xs={12} md={4} sm={12} >
            <Member image={image} youtube="w" website="w"/>
            <Member image={image} linkedIn="e" instagram="s"/>
          </Grid>
          
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
        >
          JOIN DISCORD
        </ContainedButton>
      </Grid>
    </div>
  );
}

export default AboutPage;
