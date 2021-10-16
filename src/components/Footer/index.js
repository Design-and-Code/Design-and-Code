import React from "react";

import style from "./style";

//Importing components
import { ContainedButton } from "../Buttons";

//Importing Material UI stuff
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Divider, Hidden, Typography } from "@material-ui/core";

//Importing assets
import brandingLogo from "../../assets/branding-logos/branding-transparent-logo.svg";
import linkedInIcon from "../../assets/social-icons/LinkedInIcon.svg";
import instagramIcon from "../../assets/social-icons/InstagramIcon.svg";
import youtubeIcon from "../../assets/social-icons/YouTubeIcon.svg";
import websiteIcon from "../../assets/social-icons/WebsiteIcon.svg";

const useStyles = makeStyles(style);
function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footerBackground}>
      <Container maxWidth="lg">
        <Grid container className={classes.footerContent}>
          <Grid item md={4} xs={12}>
            <div className={classes.branding}>
              <div className={classes.brandingLogo}>
                <img src={brandingLogo} alt="branding-logo" />
              </div>
              <div className={classes.brandingInfo}>
                <Typography variant="h4" className={classes.brandingTitle}>Design And Code</Typography>
                <Typography variant="subtitle1" className={classes.brandingDesc}>
                  Connect, Collaborate, Comprehend
                </Typography>
              </div>
            </div>
            <div className={classes.getInTouch}>
              <Typography variant="h6"className={classes.getInTouchTitle}>Get in touch</Typography>
              <a
                className={classes.getInTouchEmailLink}
                href="mailto:designandcode.community@gmail.com"
              >
                <Typography variant="h6">designandcode.community@gmail.com</Typography>
              </a>
            </div>
            <div className={classes.socialLinks}>
              <img src={linkedInIcon} alt="Linked in icon" />
              <img src={instagramIcon} alt="Instagram icon" />
              <img src={youtubeIcon} alt="YouTube icon" />
              <img src={websiteIcon} alt="Website icon" />
            </div>
          </Grid>
          <Grid item md={2} xs={6}>
            <Typography variant="h6" className={classes.footerSectionTitle}>Home</Typography>
            <div className={classes.footerLinks}>
              <ul>
                <li><Typography variant="subtitle1">Main</Typography></li>
                <li><Typography variant="subtitle1">What We Offer</Typography></li>
                <li><Typography variant="subtitle1">Categories</Typography></li>
                <li><Typography variant="subtitle1">Video</Typography></li>
              </ul>
            </div>
          </Grid>

          <Grid item md={2} xs={6}>
            <Typography variant="h6" className={classes.footerSectionTitle}>About</Typography>
            <div className={classes.footerLinks}>
              <ul>
                <li><Typography variant="subtitle1">About Us</Typography></li>
                <li><Typography variant="subtitle1">Team</Typography></li>
              </ul>
            </div>
          </Grid>

          <Grid item md={2} xs={6}>
            <Typography variant="h6" className={classes.footerSectionTitle}>How To Use</Typography>
            <div className={classes.footerLinks}>
              <ul>
                <li><Typography variant="subtitle1">Rules</Typography></li>
                <li><Typography variant="subtitle1">Channels</Typography></li>
                <li><Typography variant="subtitle1">Bots</Typography></li>
              </ul>
            </div>
          </Grid>

          <Grid item md={2} xs={6}>
            <Typography variant="h6" className={classes.footerSectionTitle}>Support/Contact</Typography>
            <div className={classes.footerLinks}>
              <ul>
                <li><Typography variant="subtitle1">FAQ</Typography></li>
                <li><Typography variant="subtitle1">Contact</Typography></li>
              </ul>
            </div>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Grid container className={classes.footerEnd}>
          <Grid md={10} xs={12}>
            <Typography variant="subtitle1" className={classes.footerLinks}>
              @Copyright {new Date().getFullYear()}. All rights reserved.
            </Typography>
          </Grid>
          <Hidden smDown>
            <Grid xs={2}>
              <Typography variant="subtitle1" className={classes.joinUsBtn}>
                <ContainedButton 
                  href="https://discord.gg/druweDMn3s"  target="_blank" size="large"> JOIN US
                </ContainedButton>
              </Typography>
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
