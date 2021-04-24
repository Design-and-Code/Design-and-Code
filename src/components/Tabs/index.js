import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import style from './style'
const useStyles = makeStyles(style);

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div role="tabpanel" id={`vertical-tabpanel-${index}`}>
        {value === index && (
          <Box p={3}>
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
      <>
      <div className={classes.main}>
        <Typography variant="h1" className={classes.subject}>CATEGORY</Typography>
        <Typography variant="h1" className={classes.subject}>CHANNELS</Typography>
      </div>
      <hr className={classes.divider}/>
      <div className={classes.root}>
        
        <Tabs
          orientation="vertical"
       
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
        
          <Tab label="Info" className={classes.tab}/>
          <Tab label="General" className={classes.tab}/>
          <Tab label="Design" className={classes.tab}/>
          <Tab label="Development" className={classes.tab}/>
          <Tab label="Voice Channels" className={classes.tab}/>
          <Tab label="Fun" className={classes.tab}/>
          
        </Tabs>
        
        <TabPanel value={value} index={0} className={classes.tabpanel}>
          <h1>s</h1>
          <h1>s</h1>
          <h1>s</h1>
          <h1>s</h1>
          <h1>s</h1>
          <h1>s</h1>
          <h1>s</h1>
          <h1>s</h1>
          <h1>s</h1>
          <h1>s</h1>
          <h1>s</h1>
          <h1>s</h1>
          <h1>s</h1>
          <h1>s</h1>
          <h1>s</h1>
          <h1>s</h1>
          <h1>s</h1>
          <h1>s</h1>
          <h1>s</h1>
          <h1>s</h1>
          <h1>s</h1>
          <h1>s</h1>
          <h1>s</h1>
          <h1>s</h1>
        </TabPanel>
        <TabPanel value={value} index={1} className={classes.tabpanel}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} className={classes.tabpanel}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3} className={classes.tabpanel}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4} className={classes.tabpanel}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5} className={classes.tabpanel}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6} className={classes.tabpanel}>
          Item Seven
        </TabPanel>
      </div>
      </>
    );
  }