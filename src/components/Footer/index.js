import React from "react";

import style from "./style";

//Importing components
import { ContainedButton } from "../Buttons";

//Importing Material UI stuff
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Divider,
  Hidden,
  Typography,
} from "@material-ui/core";

//Importing assets
import brandingLogo from "../../assets/branding-logos/branding-transparent-logo.svg";
import emailIcon from "../../assets/social-icons/BgEmailIcon.svg";
import twitterIcon from "../../assets/social-icons/BgTwitterIcon.svg";
import linkedinIcon from "../../assets/social-icons/BgLinkedinIcon.svg";
import instagramIcon from "../../assets/social-icons/BgInstagramIcon.svg";
import githubIcon from "../../assets/social-icons/BgGithubIcon.svg";
import youtubeIcon from "../../assets/social-icons/BgYouTubeIcon.svg";

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
                <Typography variant="h4" className={classes.brandingTitle}>
                  Design And Code
                </Typography>
                <Typography
                  variant="subtitle1"
                  className={classes.brandingDesc}
                >
                  Connect, Collaborate, Comprehend
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item md={8} xs={12} className={classes.footerSectionGrid}>
            <Grid container className={classes.footerSectionContainer}>
              {/* <Grid item md={2} className={classes.footerSectionItem}> */}
              <Typography
                variant=""
                className={`${classes.footerSectionTitle} ${classes.footerSectionBorder}`}
              >
                Home
              </Typography>
              {/* </Grid> */}
              {/* <Grid item md={2} className={classes.footerSectionItem}> */}
              <Typography
                variant=""
                className={`${classes.footerSectionTitle} ${classes.footerSectionBorder}`}
              >
                About
              </Typography>
              {/* </Grid> */}
              {/* <Grid item md={2} className={classes.footerSectionItem}> */}
              <Typography
                variant=""
                className={`${classes.footerSectionTitle} ${classes.footerSectionBorder}`}
              >
                Events
              </Typography>
              {/* </Grid> */}
              {/* <Grid item md={2} className={classes.footerSectionItem}> */}
              <Typography
                variant=""
                className={`${classes.footerSectionTitle} ${classes.footerSectionBorder}`}
              >
                Team
              </Typography>
              {/* </Grid> */}
              {/* <Grid item md={2} className={classes.footerSectionItem}> */}
              <Typography variant="" className={classes.footerSectionTitle}>
                Contact
              </Typography>
              {/* </Grid> */}
            </Grid>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Grid container className={classes.footerEnd}>
          <Grid md={4}>
            <div className={classes.socialLinks}>
              <a href="mailto:designandcode.community@gmail.com">
                <img src={emailIcon} alt="Email icon" />
              </a>
              <a
                href="https://twitter.com/DesignandCode3"
                target="_blank"
                rel="noreferrer"
              >
                <img src={twitterIcon} alt="Twitter icon" />
              </a>
              <a
                href="https://www.linkedin.com/company/designandcode/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedinIcon} alt="Linkedin icon" />
              </a>
              <a
                href="https://www.instagram.com/designandcode.community/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagramIcon} alt="Instagram icon" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCd4E0oe8MtnZu_48WvYeLMw?sub_confirmation=1"
                target="_blank"
                rel="noreferrer"
              >
                <img src={youtubeIcon} alt="YouTube icon" />
              </a>
              <a
                href="https://github.com/Design-and-Code"
                target="_blank"
                rel="noreferrer"
              >
                <img src={githubIcon} alt="GitHub icon" />
              </a>
            </div>
          </Grid>
          <Grid md={4} xs={12}>
            <Typography variant="subtitle1" className={classes.footerLinks}>
              @Copyright {new Date().getFullYear()}. All rights reserved.
            </Typography>
          </Grid>
          <Hidden smDown>
            <Grid md={4} xs={2}>
              <Typography variant="subtitle1" className={classes.joinUsBtn}>
                <ContainedButton size="large">JOIN US</ContainedButton>
              </Typography>
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
