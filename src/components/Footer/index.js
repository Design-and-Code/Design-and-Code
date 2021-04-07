import React from "react";

import style from "./style";

//Importing components
import { ContainedButton } from "../Buttons";

//Importing Material UI stuff
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Divider, Hidden } from "@material-ui/core";

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
                <div className={classes.brandingTitle}>Design And Code</div>
                <div className={classes.brandingDesc}>
                  Connect, Collaborate, Comprehend
                </div>
              </div>
            </div>
            <div className={classes.getInTouch}>
              <div className={classes.getInTouchTitle}>Get in touch</div>
              <a
                className={classes.getInTouchEmailLink}
                href="mailto:designandcode.community@gmail.com"
              >
                designandcode.community@gmail.com
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
            <div className={classes.footerSectionTitle}>Home</div>
            <div className={classes.footerLinks}>
              <ul>
                <li>Main</li>
                <li>What We Offer</li>
                <li>Categories</li>
                <li>Video</li>
              </ul>
            </div>
          </Grid>

          <Grid item md={2} xs={6}>
            <div className={classes.footerSectionTitle}>About</div>
            <div className={classes.footerLinks}>
              <ul>
                <li>About Us</li>
                <li>Team</li>
              </ul>
            </div>
          </Grid>

          <Grid item md={2} xs={6}>
            <div className={classes.footerSectionTitle}>How To Use</div>
            <div className={classes.footerLinks}>
              <ul>
                <li>Rules</li>
                <li>Channels</li>
                <li>Bots</li>
              </ul>
            </div>
          </Grid>

          <Grid item md={2} xs={6}>
            <div className={classes.footerSectionTitle}>Support/Contact</div>
            <div className={classes.footerLinks}>
              <ul>
                <li>FAQ</li>
                <li>Contact</li>
              </ul>
            </div>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Grid container className={classes.footerEnd}>
          <Grid md={10} xs={12}>
            <div className={classes.footerLinks}>
              @Copyright {new Date().getFullYear()}. All rights reserved.
            </div>
          </Grid>
          <Hidden smDown>
            <Grid xs={2}>
              <div className={classes.joinUsBtn}>
                <ContainedButton size="large">JOIN US</ContainedButton>
              </div>
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
