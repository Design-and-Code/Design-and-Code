import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {Container, Tabs, Tab, Typography, Box} from "@material-ui/core";
import style from './style'
const useStyles = makeStyles(style);

function TabPanel(props) {
    const classes = useStyles();
    const { children, value, index, ...other } = props;
    return (
      <div className={classes.tabpanel} role="tabpanel" id={`vertical-tabpanel-${index}`}>
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
  };

  export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Container disableGutters>
      <div className={classes.root}>
        <div>
          <Typography variant="h4" className={classes.subject}>CATEGORY</Typography>
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
            color="primary"
            TabIndicatorProps={{className: classes.tabIndicator}}
          >
            <Tab label="Info" classes={{root: classes.tab, wrapper: classes.tabWrapper}} />
            <Tab label="General" classes={{root: classes.tab, wrapper: classes.tabWrapper}} />
            <Tab label="Design" classes={{root: classes.tab, wrapper: classes.tabWrapper}} />
            <Tab label="Development" classes={{root: classes.tab, wrapper: classes.tabWrapper}} />
            <Tab label="Voice Channels" classes={{root: classes.tab, wrapper: classes.tabWrapper}} />
            <Tab label="Fun" classes={{root: classes.tab, wrapper: classes.tabWrapper}} />
            <div className={classes.inactiveBorder}></div>
            
          </Tabs>
        </div>
        
        <div>
          <Typography variant="h4" className={classes.subject}>CHANNELS</Typography>
          
          <TabPanel value={value} index={0} className={classes.tabpanel}>
            <Typography variant="h5" gutterBottom>
              Welcome :
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              This is Info Bruh...
            </Typography>
            <Typography variant="h5" gutterBottom>
              About and Links:
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do 
            </Typography>
            <Typography variant="h5" gutterBottom>
              Rules:
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor
            do amet sintollit. Exercitation veniam consequat sunt nostrud
            </Typography>
            <Typography variant="h5" gutterBottom>
              Roles:
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mol
            </Typography>
            <Typography variant="h5" gutterBottom>
              Announcements:
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={1} className={classes.tabpanel}>
            <Typography variant="h5" gutterBottom>
              Welcome :
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              My name is General Khan
            </Typography>
            <Typography variant="h5" gutterBottom>
              About and Links:
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do 
            </Typography>
            <Typography variant="h5" gutterBottom>
              Rules:
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor
            do amet sintollit. Exercitation veniam consequat sunt nostrud
            </Typography>
            <Typography variant="h5" gutterBottom>
              Roles:
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mol
            </Typography>
            <Typography variant="h5" gutterBottom>
              Announcements:
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={2} className={classes.tabpanel}>
            <Typography variant="h5" gutterBottom>
              I am Design Bi*ch
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Amet minim mollit non deserunt ullamco est si
            </Typography>
            <Typography variant="h5" gutterBottom>
              About and Links:
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do 
            </Typography>
            <Typography variant="h5" gutterBottom>
              Rules:
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor
            do amet sintollit. Exercitation veniam consequat sunt nostrud
            </Typography>
            <Typography variant="h5" gutterBottom>
              Roles:
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mol
            </Typography>
            <Typography variant="h5" gutterBottom>
              Announcements:
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={3} className={classes.tabpanel}>
            <Typography variant="h5" gutterBottom>
              Welcome :
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Me Debhelopment
            </Typography>
            <Typography variant="h5" gutterBottom>
              About and Links:
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do 
            </Typography>
            <Typography variant="h5" gutterBottom>
              Rules:
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor
            do amet sintollit. Exercitation veniam consequat sunt nostrud
            </Typography>
            <Typography variant="h5" gutterBottom>
              Roles:
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mol
            </Typography>
            <Typography variant="h5" gutterBottom>
              Announcements:
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={4} className={classes.tabpanel}>
            <Typography variant="h5" gutterBottom>
              Welcome :
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Me hu bhoice channel
            </Typography>
            <Typography variant="h5" gutterBottom>
              About and Links:
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do 
            </Typography>
            <Typography variant="h5" gutterBottom>
              Rules:
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor
            do amet sintollit. Exercitation veniam consequat sunt nostrud
            </Typography>
            <Typography variant="h5" gutterBottom>
              Roles:
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mol
            </Typography>
            <Typography variant="h5" gutterBottom>
              Announcements:
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={5} className={classes.tabpanel}>
          <Typography variant="h5" gutterBottom>
            Welcome :
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Hahahahahahaa
          </Typography>
          <Typography variant="h5" gutterBottom>
            About and Links:
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do 
          </Typography>
          <Typography variant="h5" gutterBottom>
            Rules:
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor
          do amet sintollit. Exercitation veniam consequat sunt nostrud
          </Typography>
          <Typography variant="h5" gutterBottom>
            Roles:
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mol
          </Typography>
          <Typography variant="h5" gutterBottom>
            Announcements:
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </Typography>
        </TabPanel>
        </div>
      </div>
      </Container>
    );
  }