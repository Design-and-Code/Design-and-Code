import React from "react";

//Importing Material UI stuff
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

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
          <Typography variant="h1" className={classes.title}>
            Design And Code
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            className={classes.description}
          >
            A place for Designers and Developers to Learn & Grow together.
          </Typography>
          <div className={classes.heroBtns}>
            <ContainedButton
              href="https://discord.gg/druweDMn3s"
              target="_blank"
              size="large"
            >
              JOIN US
            </ContainedButton>
            <OutlinedButton href="/about" size="large">
              ABOUT US
            </OutlinedButton>
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
          <Typography variant="h3" gutterBottom className={classes.subtitle}>
            What's Inside Design And Code?
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            Design & Code is on a mission to conect and support Designers and
            Developers from around the world.
          </Typography>
          <Grid container xs={12} sm={6}>
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
          <Grid container xs={12} sm={6}>
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
      {/* Categories Section */}
      <Grid container className={classes.section}>
        <Grid xs={12} sm={6} className={classes.categoriesSection}>
          <Typography
            variant="h3"
            className={`${classes.subtitle} ${classes.textAlignLeft}`}
          >
            Categories
          </Typography>
          <Typography
            variant="subtitle1"
            className={`${classes.description} ${classes.secondaryDesc} ${classes.textAlignLeft}`}
          >
            We have two main Categories: Designing and Development. Make sure
            you put a particular message in the respective Category (Read
            respective channel description to know more). Such as all Design
            oriented messages should be put under the appropriate channel in the
            Designing Category. Similarly, for Development related messages.
          </Typography>
        </Grid>
        <Grid container xs={12} sm={6}>
          <img
            src={categoriesIllustration}
            className={classes.categoriesIllustration}
            alt="Categories Illustration"
          />
        </Grid>
      </Grid>
      {/* Videos Section */}
      <Grid container className={`${classes.section} ${classes.videoSection}`}>
        <Grid container xs={12}>
          <iframe
            width="560"
            height="680"
            className={classes.video}
            src="https://www.youtube-nocookie.com/embed/Ky0xZH3W-n4?rel=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <Typography
            variant="subtitle1"
            className={`${classes.videoDesc} ${classes.secondaryDesc} ${classes.textAlignLeft}`}
          >
            Responsive Colors Landing Page, a project that we've been working on
            so that people can easily get inspiration about colors for their
            website. Very Easy to make. I would soon be making tutorials about
            Python and Java. If You have any problem in coding, be it web
            designing or algorithms, mention down in the comments down below.
            Filmed with Microsoft PowerPoint 2013 in built screen recorder at
            720p HD.
          </Typography>
        </Grid>
      </Grid>
      {/* Ready to start Journey section */}
      <Grid
        container
        className={`${classes.section} ${classes.journeySection}`}
      >
        <Typography variant="h3" gutterBottom className={classes.subtitle}>
          Ready to start your journey?
        </Typography>

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

export default HomePage;
