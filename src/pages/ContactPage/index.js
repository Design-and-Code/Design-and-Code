import React from "react";

//Importing Material UI stuff
import { makeStyles } from "@material-ui/core/styles";
import { ContainedButton, OutlinedButton } from "../../components/Buttons";

//Importing Components
import { Grid, TextField, Typography, Card } from "@material-ui/core";

import style from "./style";
import SimpleAccordion from "../../components/Accordions";

const useStyles = makeStyles(style);
function ContactPage() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  return( 
    <div className={classes.contactPage}>
      
      {/* Hero Section */}
      <Grid container className={`${classes.section} ${classes.heroSection}`}>
        <div className={classes.heroSectionContent}>
          <Typography variant="h2" gutterBottom className={classes.title}>Contact Us</Typography>
          <Typography variant="h6" gutterBottom className={classes.description}>
              If you have any questions, we would love to hear from you. Feel free to write us at <a href="#" className={classes.link}>designandcode.community@gmail.com</a> and we'll get back to you
          </Typography>
        <Grid container className={classes.contactGrid}>
              <form className={classes.contactForm} noValidate autoComplete="off">   
                <TextField classes={{root: classes.textFieldOutline}} id="outlined-basic" variant="outlined" label="Name"  />
                <TextField classes={{root: classes.textFieldOutline}} id="outlined-basic" variant="outlined" label="Email"  />
                <TextField classes={{root: classes.textFieldOutline}} id="outlined-basic" variant="outlined" label="Subject"  />
                <TextField classes={{root: classes.textFieldOutline}} id="outlined-basic" variant="outlined" label="Message" multiline rows={4} />
                <ContainedButton
                  size="large"
                  className={classes.btn}
                >
                  SUBMIT
                </ContainedButton>
              </form>
        
              <div className={classes.options}>
                <Card className={classes.optionBlock}>
                  <Typography variant="h5" gutterBottom className={classes.optionTitle} >Suggestions/Contribute</Typography>
                  <Typography variant="subtitle1" gutterBottom className={classes.optionInfo}>If you have any suggestions or ideas that can help us to improve how UX Convo functions or operate, also if you can conduct design sessions, workshops, or meetups. Do write them to us.</Typography>
                  <OutlinedButton 
                    size="medium"
                    className={classes.btn}>
                    <Typography variant="h6">Contribute</Typography>
                  </OutlinedButton>
                </Card>
                <Card className={classes.optionBlock}>
                  <Typography variant="h5" gutterBottom className={classes.optionTitle}>Sponsor Us</Typography>
                  <Typography variant="subtitle1" gutterBottom className={classes.optionInfo}>If you have any suggestions or ideas that can help us to improve how UX Convo functions or operate, also if you can conduct design sessions, workshops, or meetups. Do write them to us.</Typography>
                  <OutlinedButton 
                    size="medium"
                    className={classes.btn}>
                    <Typography variant="h6">Sponsor Us</Typography>
                  </OutlinedButton>
                </Card>
              </div>
          </Grid>
        </div>
      </Grid>
      
      {/* FAQ Section */}
      <Grid
        container
        className={`${classes.section}`}
      >
        <Grid
          container
        >
          <Typography variant="h2" gutterBottom className={classes.title}>FAQ's</Typography>
          <Grid container xs={12} sm={6} className={classes.faq_grid}>
            <div className={classes.faq_grid1}>
              <SimpleAccordion index={0} expanded={expanded} setExpanded={setExpanded} title={'How do i join as mentor?'} description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}/>
              <SimpleAccordion index={1} expanded={expanded} setExpanded={setExpanded} title={'What benefits will i get after joining the community?'} description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}/>
              <SimpleAccordion index={2} expanded={expanded} setExpanded={setExpanded} title={'What benefits will i get after joining the community?'} description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}/>
            </div>            
          </Grid>
          <Grid container xs={12} sm={6} className={classes.faq_grid}>
            <div className={classes.faq_grid1}>
              <SimpleAccordion index={3} expanded={expanded} setExpanded={setExpanded} title={'Do i need to change my name?'} description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}/>
              <SimpleAccordion index={4} expanded={expanded} setExpanded={setExpanded} title={'How to contact any moderators regarding an issue?'} description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}/>
              <SimpleAccordion index={5} expanded={expanded} setExpanded={setExpanded} title={'How to contact any moderators regarding an issue?'} description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}/>
            </div>            
          </Grid>
        </Grid>
      </Grid>

      
      
    </div>
  );
}

export default ContactPage;
