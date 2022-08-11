import React from 'react';

//Importing Material UI stuff
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

//Importing Components
import { ContainedButton, OutlinedButton } from '../../components/Buttons';
import freeResources from '../../assets/illustrations/freeResources.png';
import mentoring from '../../assets/illustrations/mentoring.png';
import opportunities from '../../assets/illustrations/opportunities.png';
import portfolioAndReviews from '../../assets/illustrations/portfolioAndReviews.png';
import categoriesIllustration from '../../assets/illustrations/categoriesIllustration.svg';
import textChannelsIllustration from '../../assets/illustrations/textChannelsIllustration.png';
import voiceChannelsIllustration from '../../assets/illustrations/voiceChannelsIllustration.png';
import Feature from '../../components/Feature';

import style from './style';
import ReadyToStart from '../../components/ReadyToStart';
import FaqSection from '../../components/FAQ';

//Importing AOS
import * as AOS from 'aos';
import 'aos/dist/aos.css';
import partners from '../../components/PartnersAndSponsors/partners';
import Partner from '../../components/PartnersAndSponsors';
import { Link, NavLink } from 'react-router-dom';
AOS.init();

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
              href="https://discord.gg/gM3bG4rAU5"
              target="_blank"
              size="large"
            >
              JOIN DISCORD
            </ContainedButton>
            <OutlinedButton href="/about" size="large">
              PARTNERSHIP
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
          <Typography
            variant="h3"
            gutterBottom
            className={classes.subtitle}
            data-aos="fade-up"
          >
            What's Inside Design And Code?
          </Typography>
          {/* <Typography variant="subtitle1" className={classes.description}>
            Design & Code is on a mission to conect and support Designers and
            Developers from around the world.
          </Typography> */}
          <Grid container xs={12} sm={6}>
            <Feature
              image={mentoring}
              title={'Mentoring Students'}
              description={
                'Get connected with a mentor that will help you pave your career path'
              }
            />
            <Feature
              image={freeResources}
              title={'Free Resources'}
              description={
                'Get Free resources related to Designing and Development from the community.'
              }
            />
          </Grid>
          <Grid container xs={12} sm={6}>
            <Feature
              image={opportunities}
              title={'Opportunities'}
              description={
                'Get Internships and Job opportunities and gain experience while you learn.'
              }
            />
            <Feature
              image={portfolioAndReviews}
              title={'Portfolio & Reviews'}
              description={
                'Get your portfolio and projects reviewed by Industry experts and mentors.'
              }
            />
          </Grid>
        </Grid>
      </Grid>
      {/* Categories Section */}
      <Grid container className={classes.section}>
        <Grid xs={12} sm={6} className={classes.categoriesSection}>
          <div data-aos="fade-up">
            <Typography
              variant="h3"
              className={`${classes.subtitle} ${classes.textAlignLeft}`}
            >
              Text Channels
            </Typography>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <Typography
              variant="subtitle1"
              className={`${classes.description} ${classes.secondaryDesc} ${classes.textAlignLeft}`}
            >
              We have two main Categories: Designing and Development. Make sure
              you put a particular message in the respective Category (Read
              respective channel description to know more). Such as all Design
              oriented messages should be put under the appropriate channel in
              the Designing Category. Similarly, for Development related
              messages.
            </Typography>
          </div>
        </Grid>
        <Grid container xs={12} sm={6}>
          <div data-aos="fade-up" data-aos-delay="200">
            <img
              src={textChannelsIllustration}
              className={classes.categoriesIllustration}
              alt="Categories Illustration"
            />
          </div>
        </Grid>
      </Grid>
      <Grid container className={classes.section}>
        <Grid container xs={12} sm={6}>
          <div data-aos="fade-up" data-aos-delay="200">
            <img
              src={voiceChannelsIllustration}
              className={classes.categoriesIllustration}
              alt="Categories Illustration"
            />
          </div>
        </Grid>
        <Grid xs={12} sm={6} className={classes.categoriesSection}>
          <div data-aos="fade-up">
            <Typography
              variant="h3"
              className={`${classes.subtitle} ${classes.textAlignLeft}`}
            >
              Voice Channels
            </Typography>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <Typography
              variant="subtitle1"
              className={`${classes.description} ${classes.secondaryDesc} ${classes.textAlignLeft}`}
            >
              We have two main Categories: Designing and Development. Make sure
              you put a particular message in the respective Category (Read
              respective channel description to know more). Such as all Design
              oriented messages should be put under the appropriate channel in
              the Designing Category. Similarly, for Development related
              messages.
            </Typography>
          </div>
        </Grid>
      </Grid>
      {/* Partners and sponsors section*/}
      <Grid container className={`${classes.section}`}>
        <Typography variant="h2" gutterBottom className={classes.subtitle}>
          Our Partners
        </Typography>
        <Grid container spacing={2} className={classes.sponsors}>
          {partners.map((partner) => (
            <NavLink to={{ pathname: partner.href }} key={partner.id}>
              <Partner
                xs={6}
                sm={4}
                md={3}
                key={partner.id}
                image={partner.logo}
                name={partner.name}
              />
            </NavLink>
          ))}
        </Grid>
      </Grid>

      <FaqSection />
      <ReadyToStart />
    </div>
  );
}

export default HomePage;
