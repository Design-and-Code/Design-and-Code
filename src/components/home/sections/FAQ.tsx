import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";
import { AccordionWrapper, FAQWrapper } from "../styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { FAQ_DATA } from "~/lib/constants";

interface ISimpleAccordionProps {
  id: number | false;
  expanded: number | false;
  setExpanded: Dispatch<SetStateAction<number | false>>;
  title: string;
  description: string;
}

const SimpleAccordion: React.FC<ISimpleAccordionProps> = (props) => {
  const handleChange =
    (panel: number | false) =>
    (event: React.SyntheticEvent<Element, Event>, isExpanded: boolean) => {
      props.setExpanded(isExpanded ? panel : false);
    };

  return (
    <div data-aos="fade-up" data-aos-delay="500">
      <AccordionWrapper
        expanded={props.expanded === props.id}
        onChange={handleChange(props.id)}
      >
        <AccordionSummary
          expandIcon={
            props.expanded === props.id ? (
              <RemoveIcon />
            ) : (
              <AddIcon style={{ color: "#c0d5ff" }} />
            )
          }
          classes={{
            root: "icon",
            expanded: "icon",
          }}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={"heading"}>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ padding: 0 }}>
          <Typography className={"description"}>{props.description}</Typography>
        </AccordionDetails>
      </AccordionWrapper>
    </div>
  );
};

const FAQ = () => {
  const [expanded, setExpanded] = useState<number | false>(false);

  return (
    <FAQWrapper data-aos="fade-up" data-aos-delay="200">
      <Grid container>
        <Typography variant="h2" gutterBottom className={"title"}>
          FAQ&apos;s
        </Typography>
        <Grid container>
          {FAQ_DATA.map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              {item.map((faq) => (
                <SimpleAccordion
                  key={faq.id}
                  expanded={expanded}
                  setExpanded={setExpanded}
                  {...faq}
                />
              ))}
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/* <Grid container>
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
      </Grid> */}
    </FAQWrapper>
  );
};

export default FAQ;
