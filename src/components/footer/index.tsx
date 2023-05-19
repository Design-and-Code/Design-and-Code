import { Container, Divider, Grid, Hidden, Typography } from "@mui/material";
import { FooterWrapper } from "./styles";
import { NAV_LINKS } from "../../lib/constants";

const brandingLogo = "/static/branding-logos/branding-transparent-logo.svg";
const emailIcon = "/static/social-icons/BgEmailIcon.svg";
const twitterIcon = "/static/social-icons/BgTwitterIcon.svg";
const linkedinIcon = "/static/social-icons/BgLinkedinIcon.svg";
const instagramIcon = "/static/social-icons/BgInstagramIcon.svg";
const githubIcon = "/static/social-icons/BgGithubIcon.svg";
const youtubeIcon = "/static/social-icons/BgYouTubeIcon.svg";

import Link from "next/link";
import { ContainedButton } from "../common/Button";
import Image from "next/image";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container maxWidth="lg">
        <Grid container className={"footerContent"}>
          <Grid item>
            <div className={"branding"}>
              <Image
                src={brandingLogo}
                className={"brandingLogo"}
                alt="branding-logo"
              />
              <div className={"brandingInfo"}>
                <Typography variant="h4" className={"brandingTitle"}>
                  Design And Code
                </Typography>
                <Typography variant="subtitle1" className={"brandingDesc"}>
                  Connect, Collaborate, Comprehend
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item className={"footerSectionGrid"}>
            <Grid container className={"footerSectionContainer"}>
              {NAV_LINKS.map((data, index) => {
                return (
                  <div key={`link-index-${index}`}>
                    <Link href={data.url}>
                      <Typography
                        variant="subtitle1"
                        className={`${"footerSectionTitle"} ${
                          index !== NAV_LINKS.length - 1 &&
                          "footerSectionBorder"
                        }`}
                      >
                        {data.label}
                      </Typography>
                    </Link>
                  </div>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
        <Divider className={"divider"} />
        <Grid container className={"footerEnd"}>
          <Grid item md={6}>
            <div className={"socialLinks"}>
              <a href="mailto:designandcode.community@gmail.com">
                <Image src={emailIcon} alt="Email icon" />
              </a>
              <a
                href="https://twitter.com/DesignandCode3"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={twitterIcon} alt="Twitter icon" />
              </a>
              <a
                href="https://www.linkedin.com/company/designandcode/"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={linkedinIcon} alt="Linkedin icon" />
              </a>
              <a
                href="https://www.instagram.com/designandcode.community/"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={instagramIcon} alt="Instagram icon" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCd4E0oe8MtnZu_48WvYeLMw?sub_confirmation=1"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={youtubeIcon} alt="YouTube icon" />
              </a>
              <a
                href="https://github.com/Design-and-Code"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={githubIcon} alt="GitHub icon" />
              </a>
            </div>
          </Grid>
          <Hidden smDown>
            <Grid item md={6} xs={2}>
              <Typography variant="subtitle1" className={"joinUsBtn"}>
                <ContainedButton
                  size="large"
                  href="https://discord.gg/gM3bG4rAU5"
                  // target="_blank"
                >
                  JOIN US
                </ContainedButton>
              </Typography>
            </Grid>
          </Hidden>
        </Grid>
        <Grid>
          <Typography variant="subtitle1" className={"footerLinks"}>
            @Copyright {new Date().getFullYear()}. All rights reserved.
          </Typography>
        </Grid>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
