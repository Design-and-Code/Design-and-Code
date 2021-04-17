import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import style from "./style";

//Importing Material UI stuff
import { makeStyles } from "@material-ui/core/styles";
import { MenuRounded } from "@material-ui/icons";
import {
  AppBar,
  Container,
  Grid,
  Hidden,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useScrollTrigger,
  Typography
} from "@material-ui/core";

//Import Nav Routes Data
import routesData from "../../routes/routesData";

//Importing assets
import brandingLogo from "../../assets/branding-logos/branding-transparent-logo.svg";

//Importing Components
import { ContainedButton } from "../Buttons";

import {darkTheme, createMuiTheme} from "../../theme";

const useStyles = makeStyles(style);
function NavBar(props) {
  const classes = useStyles();
  const history = useHistory();
  const { children, window } = props;
  const [pathname, setPathname] = useState(history.pathname),
    [drawerOpen, setDrawerOpen] = useState(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  useEffect(() => {
    setPathname(history.pathname);
    history.listen(() => {
      setPathname(history.pathname);
    });
  }, []);

  return (
    <>
      <AppBar 
        position="sticky" 
        className={classes.appBar} 
        style={trigger ? {
          background: `${createMuiTheme(darkTheme).palette.primary.main}7a`,
          backdropFilter: "blur(20px)",} : {
          background: `transparent`,
          backdropFilter: "none"}
        }
      >
        <Container className={classes.navBarBackground} maxWidth="lg">
          <Grid container className={classes.navBar}>
            <Grid container xs={1}>
              <img
                className={classes.brandingLogo}
                src={brandingLogo}
                alt="branding-logo"
              />
            </Grid>
            <Grid container xs={9}>
              <Hidden smDown>
                <div className={classes.navLinks}>
                  {routesData.map((data, index) => (
                    <div key={`link-index-${index}`}>
                      {data.showOnHeader && (
                        <Link
                          className={
                            data.pageURL !== pathname
                              ? classes.navLink
                              : classes.navLinkHighlighted
                          }
                          to={data.pageURL}
                        >
                          <Typography variant="subtitle1">{data.pageName}</Typography>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </Hidden>
            </Grid>

            <Grid container xs={2}>
              <div className={classes.joinDiscordBtn}>
                <Hidden smDown>
                  <ContainedButton
                    href="https://discord.gg/druweDMn3s"
                    target="_blank"
                  >
                    Join Discord
                  </ContainedButton>
                </Hidden>
                <Hidden smUp>
                  <IconButton
                    className={classes.menuBtn}
                    onClick={() => setDrawerOpen(!drawerOpen)}
                  >
                    <MenuRounded />
                  </IconButton>
                </Hidden>
              </div>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
      <Drawer
        anchor={"right"}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List className={classes.mobileNav}>
          <ListItem>
            <div className={classes.branding}>
              <div className={classes.brandingLogo}>
                <img src={brandingLogo} alt="branding-logo" />
              </div>
              <div className={classes.brandingInfo}>
                <Typography variant="h4" className={classes.brandingTitle}>Design And Code</Typography>
                <Typography variant="subtitle2" className={classes.brandingDesc}>
                  Connect, Collaborate, Comprehend
                </Typography>
              </div>
            </div>
          </ListItem>
          {routesData.map((data, index) => (
            <>
              {data.showOnHeader && (
                <>
                  <Link to={data.pageURL} className={classes.listItem}>
                    <ListItem button key={data.pageName}>
                      <div className={classes.listItemIcon}>{data.icon}</div>
                      <Typography variant="subtitle1">{data.pageName}</Typography>
                    </ListItem>
                  </Link>
                  <Divider className={classes.divider} />
                </>
              )}
            </>
          ))}
          <ListItem>
            <ContainedButton
              href="https://discord.gg/druweDMn3s"
              target="_blank"
              className={classes.mobileJoinDiscordBtn}
            >
              <Typography variant="h5">Join Discord</Typography>
            </ContainedButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default NavBar;
