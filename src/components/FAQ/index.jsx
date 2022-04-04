import React from 'react';
import SimpleAccordion from "../Accordions";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import style from './style';
const useStyles = makeStyles(style);
const FaqSection = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  return (
    <>
      {/* FAQ Section */}
      <div data-aos="fade-up" data-aos-delay="200">
      <Grid container className={`${classes.section}`}>
        <Grid container>
            <Typography variant="h2" gutterBottom className={classes.title}>
              FAQ's
            </Typography>
          <Grid container xs={12} sm={6} className={classes.faq_grid}>
            <div className={classes.faq_grid1}>
              <SimpleAccordion
                index={0}
                expanded={expanded}
                setExpanded={setExpanded}
                title={"How do i join as mentor?"}
                description={
                  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                }
              />
              <SimpleAccordion
                index={1}
                expanded={expanded}
                setExpanded={setExpanded}
                title={"What benefits will i get after joining the community?"}
                description={
                  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                }
              />
              <SimpleAccordion
                index={2}
                expanded={expanded}
                setExpanded={setExpanded}
                title={"What benefits will i get after joining the community?"}
                description={
                  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                }
              />
            </div>
          </Grid>
          <Grid container xs={12} sm={6} className={classes.faq_grid}>
            <div className={classes.faq_grid1}>
              <SimpleAccordion
                index={3}
                expanded={expanded}
                setExpanded={setExpanded}
                title={"Do i need to change my name?"}
                description={
                  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                }
              />
              <SimpleAccordion
                index={4}
                expanded={expanded}
                setExpanded={setExpanded}
                title={"How to contact any moderators regarding an issue?"}
                description={
                  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                }
              />
              <SimpleAccordion
                index={5}
                expanded={expanded}
                setExpanded={setExpanded}
                title={"How to contact any moderators regarding an issue?"}
                description={
                  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                }
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
      </div>
    </>
  )
}
export default FaqSection;