import React from 'react';
import { makeStyles } from '@mui/core/styles';
import Accordion from '@mui/core/Accordion';
import AccordionSummary from '@mui/core/AccordionSummary';
import AccordionDetails from '@mui/core/AccordionDetails';
import Typography from '@mui/core/Typography';
import AddIcon from '@mui/icons/Add';
import RemoveIcon from '@mui/icons/Remove';
import style from './style'

const useStyles = makeStyles(style)

export default function SimpleAccordion({ index, expanded, setExpanded, title, description }) {
  const classes = useStyles();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <div data-aos="fade-up" data-aos-delay="500">

        <Accordion classes={{
          root: classes.root
        }} expanded={expanded === index} onChange={handleChange(index)}>
          <AccordionSummary
            expandIcon={expanded === index ? <RemoveIcon /> : <AddIcon />}
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
    </div>
  );
}