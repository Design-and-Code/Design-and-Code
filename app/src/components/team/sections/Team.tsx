import { Grid, Typography } from "@mui/material";
import { TEAM_INFO } from "~/lib/team";
import Links from "../Links";
import { TeamSectionWrapper } from "../styles";

interface IMemberProps {
    name: string;
    responsibility: string;
    aboutMe: string;
    emailId: string;
    linkedinUrl?: string;
    instagramUrl?: string;
    twitterUrl?: string;
    githubUrl?: string;
    websiteUrl?: string;
    image: string;
}

const Member: React.FC<IMemberProps> = (props) => {
  return (
    <>
      <div className={'infoHolder'}>
        <div className={'imageWrapper'}>
          <img className={'image'} src={props.image} alt="Member" />
        </div>
        <div className={'infoBox'}>
          <Typography variant="h5" className={'titlee'}>
            {props.name}
          </Typography>
          <Typography variant="subtitle1" className={'role'}>
            {props.responsibility}
          </Typography>
          <Typography variant="subtitle2" className={'descriptionn'}>
            {props.aboutMe}
          </Typography>
          <div style={{ display: "flex" }}>
            {/* <Links
              linkedIn={linkedinUrl}
              instagram={instagramUrl}
              youtube={youtube}
              website={website}
            /> */}
            <Links
              linkedIn={props.linkedinUrl as string}
              instagram={props.instagramUrl as string}
              twitter={props.twitterUrl as string}
              github={props.githubUrl as string}
              website={props.websiteUrl as string}
            />
          </div>
        </div>
      </div>
    </>
  )
}

const TeamSection = () => {
  return (
    <TeamSectionWrapper container spacing={4}>
        {TEAM_INFO.map((item, index) => (
          <Grid item className={'member'} xs={12} sm={6} md={4} key={index}>
            <Member {...item} />
          </Grid>
        ))}
    </TeamSectionWrapper>
  )
}

export default TeamSection;