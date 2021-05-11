import React,{useState, useEffect} from "react";

//Importing Material UI stuff
import { makeStyles } from "@material-ui/core/styles";
import { OutlinedButton } from "../../components/Buttons";

//Importing Components
import { Grid, Typography } from "@material-ui/core";


import style from "./style";
import Member from "../../components/Member";
import image from '../../assets/placeholders/Rectangle 1035.png'
import Links from '../../components/Links'
const useStyles = makeStyles(style);
function AboutPage() {
  const classes = useStyles();
  const [IsDesktop, setIsDesktop] = useState(window.innerWidth > 900)
  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 900);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return( 
    <div className={classes.teamPage}>
      
      {/* Hero Section */}
      <Grid container className={`${classes.section} ${classes.heroSection}`}>
        <div className={classes.heroSectionContent}>
          <Typography variant="h2" gutterBottom className={classes.title}>Our Team</Typography>
          <Typography variant="subtitle1" gutterBottom className={classes.description}>
                Meet the spirited team that worked behind the scenes to establish this platform.
          </Typography>
          <div className={classes.member}>
            <div className={IsDesktop ? classes.infoHolder : classes.infoHolder2}>
                <div className={classes.imageWrapper}>
                    <img className={ IsDesktop ? classes.image : classes.image2} src={image} alt="Member" />
                </div>
                <div className={classes.infoBox}>
                <Typography variant="h5" className={classes.title__color}>Devraj Chatribin</Typography>
                <Typography variant="h6" className={classes.role}>FOUNDER & DESIGN LEAD</Typography>
                <Typography variant="subtitle2" className={classes.description__color}>Web Developer | UI/UX Designer</Typography>
                <Typography variant="subtitle2" className={classes.description__color}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </Typography>
                <div style={{display:'flex'}}>
                    <Links linkedIn={''} instagram={''} youtube={''} website={''} />
                </div>
                </div>
            </div>
          </div>
        </div>
      </Grid>
    

      {/* Team Section */}

        <Grid
        container
        className={`${classes.section} ${classes.featuresSection}`}
      >
        <Grid
          container
          
        >
          <Grid container className={classes.member_grid} xs={12} md={4} sm={12} >
            <Member image={image} linkedIn="e" instagram="s" youtube="w" website="w"/>
            <Member image={image} linkedIn="e" instagram="s"/>
            <Member image={image} linkedIn="e" instagram="s"/>
          </Grid>
          <Grid container className={classes.member_grid} xs={12} md={4} sm={12} >
            <Member image={image} linkedIn="e" instagram="s"/>
            <Member image={image} linkedIn="e" instagram="s"/>
            <Member image={image} linkedIn="e" instagram="s"/>
          </Grid>
          <Grid container className={classes.member_grid} xs={12} md={4} sm={12} >
            <Member image={image} youtube="w" website="w"/>
            <Member image={image} linkedIn="e" instagram="s"/>
            <Member image={image} linkedIn="e" instagram="s"/>
          </Grid>
          
        </Grid>
      </Grid>

      <OutlinedButton size="large">ABOUT US</OutlinedButton>
    </div>
  );
}

export default AboutPage;
