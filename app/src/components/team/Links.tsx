import React from "react";

//Importing Components
const linkedInLogo = "/static/social-icons/LinkedInIcon.svg";
const instagramLogo = "/static/social-icons/InstagramIcon.svg";
const twitterLogo = "/static/social-icons/TwitterIcon.svg";
const websiteLogo = "/static/social-icons/WebsiteIcon.svg";
const githubLogo = "/static/social-icons/GitHubIcon.svg";

interface ILinksProps {
  linkedIn: string,
  instagram: string,
  twitter: string,
  github: string,
  website: string
}

const Links: React.FC<ILinksProps> = (props) => {
  let icon = [props.linkedIn, props.instagram, props.twitter, props.github, props.website];
  let iconLogo = [linkedInLogo, instagramLogo, twitterLogo, githubLogo, websiteLogo];
  return (
    <div>
      {icon.map((iconLink, index) => {
        if (iconLink !== undefined) {
          return (
            <a href={iconLink} target="_blank" rel="noreferrer">
              <img src={iconLogo[index]} className={'link'} alt=" " />
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
