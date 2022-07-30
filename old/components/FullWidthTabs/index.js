import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@mui/core/styles';
import { Container, Tabs, Tab, Typography, Box} from '@mui/core';
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
    <Container disableGutters className={classes.root}>
      <Container disableGutters className={classes.appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="full width tabs example"
          TabIndicatorProps={{className: classes.tabIndicator}}
          className={classes.tabs}
        >
          <Tab className={classes.tab} label="Info" {...a11yProps(0)} />
          <Tab className={classes.tab} label="General" {...a11yProps(1)} />
          <Tab className={classes.tab} label="Design" {...a11yProps(2)} />
          <Tab className={classes.tab} label="Development" {...a11yProps(3)} />
          <Tab className={classes.tab} label="Voice Channels" {...a11yProps(4)} />
          <Tab className={classes.tab} label="Fun" {...a11yProps(5)} />
        </Tabs>
        <div className={classes.inactiveBorder}></div>
      </Container>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction} className={classes.tabpanel}>
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
        <TabPanel value={value} index={1} dir={theme.direction} className={classes.tabpanel}>
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
        <TabPanel value={value} index={2} dir={theme.direction} className={classes.tabpanel}>
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
        <TabPanel value={value} index={3} dir={theme.direction} className={classes.tabpanel}>
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
        <TabPanel value={value} index={4} dir={theme.direction} className={classes.tabpanel}>
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
        <TabPanel value={value} index={5} dir={theme.direction} className={classes.tabpanel}>
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
      </SwipeableViews>
    </Container>
  );
}