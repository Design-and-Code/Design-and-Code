import React from "react";
import { useHistory } from "react-router-dom";

//Importing Material UI stuff
import { makeStyles } from "@mui/core/styles";
import { ContainedButton, OutlinedButton } from "../../components/Buttons";

//Importing Components
import { Grid, Typography, Divider } from "@mui/core";
import heroIllustration from "../../assets/placeholders/Group 55.png";

import style from "./style";
import Member from "../../components/Member";
import aboutIllustration from "../../assets/illustrations/aboutIllustration.svg";
import image from "../../assets/placeholders/partner.png";
import Partner from "../../components/PartnersAndSponsors";
import ReadyToStart from "../../components/ReadyToStart";
import partners from "../../components/PartnersAndSponsors/partners";
import sponsors from "../../components/PartnersAndSponsors/sponsors";

const useStyles = makeStyles(style);
function AboutPage() {
  const classes = useStyles(),
    history = useHistory();
  return (
    <div className={classes.aboutPage}>
      {/* Hero Section */}
      <Grid container className={`${classes.section} ${classes.heroSection}`}>
        <div className={classes.heroSectionContent}>
          <Typography variant="h2" gutterBottom className={classes.title}>
            Our Mission
          </Typography>
          <Typography variant="h6" gutterBottom className={classes.description}>
            Design & Code is a global community on a mission to connect
            designers and developers to create a happy community eager to learn,
            innovate and grow together.
          </Typography>
        </div>
      </Grid>
      {/* Community Section */}
      <Grid
        container
        className={`${classes.section} ${classes.featuresSection}`}
      >
        <Grid container>
          <Typography variant="h2" gutterBottom className={classes.title}>
            Our Community
          </Typography>
          <Grid container xs={12} sm={6} className={classes.community_grid}>
            <div className={classes.community_grid1}>
              <Typography variant="h6" gutterBottom>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Typography>
            </div>
          </Grid>
          <Grid container xs={12} sm={6}>
            <div className={classes.community_grid2}>
              <img
                src={aboutIllustration}
                className={classes.cgimage}
                alt="Hero "
              />
            </div>
          </Grid>
        </Grid>
      </Grid>

      {/* Partners and sponsors section*/}
      <Grid container className={`${classes.section}`}>
        <Typography variant="h2" gutterBottom className={classes.subtitle}>
          Our Partners
        </Typography>
        <Grid 
          container 
          spacing={2} 
          className={classes.sponsors}
        >
          {partners.map(partner => (
            <Partner
              xs={6}
              sm={4}
              md={3}
              key={partner.id}
              image={partner.logo}
              name={partner.name}
            />
          ))}
        </Grid>
      </Grid>

      <Grid container className={`${classes.section}`}>
        <Typography variant="h2" gutterBottom className={classes.subtitle}>
          Our Sponsors
        </Typography>
        <Grid 
          container 
          spacing={2} 
          className={classes.sponsors}
        >
          {sponsors.map(sponsor => (
            <Partner
              xs={6}
              sm={4}
              md={3}
              key={sponsor.id}
              image={sponsor.logo}
              name={sponsor.name}
            />
          ))}
        </Grid>
      </Grid>
      {/* Ready to start Journey section */}
      <ReadyToStart/>
    </div>
  );
}

export default AboutPage;
