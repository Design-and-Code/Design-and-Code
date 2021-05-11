import React,{useEffect,useState} from "react";

//Importing Material UI stuff
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

//Importing Components
import { ContainedButton, OutlinedButton } from "../../components/Buttons";
import freeResources from "../../assets/illustrations/freeResources.svg";
import mentoring from "../../assets/illustrations/mentoring.svg";
import opportunities from "../../assets/illustrations/opportunities.svg";
import portfolioAndReviews from "../../assets/illustrations/portfolioAndReviews.svg";
import categoriesIllustration from "../../assets/illustrations/categoriesIllustration.svg";
import Feature from "../../components/Feature";

import HeroImage from '../../assets/placeholders/Frame 21.png'
import style from "./style";
import Guideline from "../../components/Guideline";
import Bot from "../../components/Bot";
import VerticalTabs from "../../components/VerticalTabs";
import FullWidthTabs from "../../components/FullWidthTabs";

const useStyles = makeStyles(style);
function HowToUsePage() {
  const [IsDesktop, setIsDesktop] = useState(window.innerWidth > 900)
  console.log(window.innerWidth)
  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 900);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  const classes = useStyles();
  return (
    <div className={classes.homePage}>
      {/* Hero Section */}
      <Grid container className={`${classes.section} ${classes.heroSection}`}>
        <div className={classes.heroSectionContent}>
          <Typography variant="h2" gutterBottom className={classes.title}>Channels</Typography>
          {IsDesktop? <VerticalTabs /> : <FullWidthTabs/>}
        </div>
      </Grid>
      {/* Community Guidelines Section */}
      <Grid
        container
        className={`${classes.section} ${classes.Guidelines}`}
        spacing={4}
      >
        <Grid item xs={12}>
          <Typography variant="h2" gutterBottom className={classes.title1}>Community</Typography>
        </Grid>
        <Guideline number={1} description="Group Coaching Calls & Co-working sessions Group Coaching Calls & Co-working sessions" />
        <Guideline number={2} description="Group Coaching Calls & Co-working sessions Group Coaching Calls & Co-working sessions" />
        <Guideline number={3} description="Group Coaching Calls & Co-working sessions Group Coaching Calls & Co-working sessions" />
        <Guideline number={4} description="Group Coaching Calls & Co-working sessions Group Coaching Calls & Co-working sessions" />
        <Guideline number={5} description="Group Coaching Calls & Co-working sessions Group Coaching Calls & Co-working sessions" />
        <Guideline number={6} description="Group Coaching Calls & Co-working sessions Group Coaching Calls & Co-working sessions" />
        <Guideline number={7} description="Group Coaching Calls & Co-working sessions Group Coaching Calls & Co-working sessions" />
        <Guideline number={8} description="Group Coaching Calls & Co-working sessions Group Coaching Calls & Co-working sessions" />
        <Guideline number={9} description="Group Coaching Calls & Co-working sessions Group Coaching Calls & Co-working sessions" />
        <Guideline number={10} description="Group Coaching Calls & Co-working sessions Group Coaching Calls & Co-working sessions" />
      </Grid>
     
      {/* Bots Section */}
      <Grid
        container
        className={`${classes.section} ${classes.Guidelines}`}
        spacing={4}
      >
        <Grid xs={12} container item>
          <Typography variant="h2" gutterBottom className={classes.title1}>Bots</Typography>
        </Grid>
        <Bot number={1} description="Group Coaching Calls & Co-working sessions Group Coaching Calls & Co-working sessions" />
        <Bot number={2} description="Group Coaching Calls & Co-working sessions Group Coaching Calls & Co-working sessions" />
        <Bot number={6} description="Group Coaching Calls & Co-working sessions Group Coaching Calls & Co-working sessions" />
        <Bot number={7} description="Group Coaching Calls & Co-working sessions Group Coaching Calls & Co-working sessions" />  
      </Grid>
      
    </div>
  );
}

export default HowToUsePage;
