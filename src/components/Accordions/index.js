import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import style from './style'

const useStyles = makeStyles(style)

export default function SimpleAccordion({index, expanded, setExpanded, title, description}) {
  const classes = useStyles();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      
      <Accordion classes={{
        root: classes.root
      }} expanded={expanded === index} onChange={handleChange(index)}>
        <AccordionSummary
          expandIcon={expanded === index ? <RemoveIcon />  : <AddIcon />}
          classes={{
            root: classes.heading,
            expandIcon: classes.icon
          }}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography className={classes.description}>
            {description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}