import React from "react";

import { makeStyles } from "@material-ui/core/styles";

//Importing Components

import style from "./style";
import linkedInLogo from "/assets/social-icons/LinkedInIcon.svg";
import instagramLogo from "/assets/social-icons/InstagramIcon.svg";
import twitterLogo from "/assets/social-icons/TwitterIcon.svg";
import websiteLogo from "/assets/social-icons/WebsiteIcon.svg";
import githubLogo from "/assets/social-icons/GitHubIcon.svg";

const useStyles = makeStyles(style);

function Links({ linkedIn, instagram, twitter, github, website }) {
  const classes = useStyles();

  let icon = [linkedIn, instagram, twitter, github, website];
  let iconLogo = [linkedInLogo, instagramLogo, twitterLogo, githubLogo, websiteLogo];

  return (
    <div>
      {icon.map((iconLink, index) => {
        if (iconLink !== undefined) {
          return (
            <a href={iconLink} target="_blank" rel="noreferrer">
              <img src={iconLogo[index]} className={classes.link} alt="" />
            </a>
          );
        } else {
          return <></>;
        }
      })}
    </div>
  );
}

export default Links;
