import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import style from './style';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
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
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(style)


export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="full width tabs example"
        >
          <Tab label="Info" {...a11yProps(0)} />
          <Tab label="General" {...a11yProps(1)} />
          <Tab label="Design" {...a11yProps(2)} />
          <Tab label="Development" {...a11yProps(3)} />
          <Tab label="Voice Channels" {...a11yProps(4)} />
          <Tab label="Fun" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction} className={classes.tabpanel}>
          Info
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction} className={classes.tabpanel}>
          General
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction} className={classes.tabpanel}>
          Design
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Development
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Voice Channels
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Fun
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}