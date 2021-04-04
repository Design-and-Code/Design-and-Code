import React from "react";

//Importing Material UI stuff
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

//Importing Components
import { ContainedButton, OutlinedButton } from "../../components/Buttons";
import freeResources from "../../assets/illustrations/freeResources.svg";
import mentoring from "../../assets/illustrations/mentoring.svg";
import opportunities from "../../assets/illustrations/opportunities.svg";
import portfolioAndReviews from "../../assets/illustrations/portfolioAndReviews.svg";
import categoriesIllustration from "../../assets/illustrations/categoriesIllustration.svg";
import Feature from "../../components/Feature";

import style from "./style";

const useStyles = makeStyles(style);
function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.homePage}>
      {/* Hero Section */}
      <Grid container className={`${classes.section} ${classes.heroSection}`}>
        <div className={classes.heroSectionContent}>
          <div className={classes.title}>Design And Code</div>
          <div className={classes.description}>
            A place for Designers and Developers to Learn & Grow together.
          </div>
          <div className={classes.heroBtns}>
            <ContainedButton>JOIN US</ContainedButton>
            <OutlinedButton>ABOUT US</OutlinedButton>
          </div>
        </div>
      </Grid>
      {/* Features Section */}
      <Grid
        container
        className={`${classes.section} ${classes.featuresSection}`}
      >
        <Grid
          container
          className={classes.whatsInsideDesignAndCodeSectionContent}
        >
          <div className={classes.subtitle}>What's Inside Design And Code?</div>
          <div className={classes.description}>
            Design & Code is on a mission to conect and support Designers and
            Developers from around the world.
          </div>
          <Grid container xs={6}>
            <Feature
              image={mentoring}
              title={"Mentoring Students"}
              description={
                "Get connected with a mentor that will help you pave your career path"
              }
            />
            <Feature
              image={freeResources}
              title={"Free Resources"}
              description={
                "Get Free resources related to Designing and Development from the community."
              }
            />
          </Grid>
          <Grid container xs={6}>
            <Feature
              image={opportunities}
              title={"Opportunities"}
              description={
                "Get Internships and Job opportunities and gain experience while you learn."
              }
            />
            <Feature
              image={portfolioAndReviews}
              title={"Portfolio & Reviews"}
              description={
                "Get your portfolio and projects reviewed by Industry experts and mentors."
              }
            />
          </Grid>
        </Grid>
      </Grid>
      {/* Categoris Section */}
      <Grid
        container
        className={`${classes.section} ${classes.categoriesSection}`}
      >
        <Grid xs={6}>
          <div className={`${classes.subtitle} ${classes.textAlignLeft}`}>
            Categories
          </div>
          <div
            className={`${classes.description} ${classes.secondaryDesc} ${classes.textAlignLeft}`}
          >
            We have two main Categories: Designing and Development. Make sure
            you put a particular message in the respective Category (Read
            respective channel description to know more). Such as all Design
            oriented messages should be put under the appropriate channel in the
            Designing Category. Similarly, for Development related messages.
          </div>
        </Grid>
        <Grid xs={6}>
          <img src={categoriesIllustration} alt="Categories Illustration" />
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
