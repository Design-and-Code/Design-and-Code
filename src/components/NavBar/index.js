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
} from "@material-ui/core";

//Import Nav Routes Data
import routesData from "../../routes/routesData";

//Importing assets
import brandingLogo from "../../assets/branding-logos/branding-transparent-logo.svg";

//Importing Components
import { ContainedButton } from "../Buttons";

const useStyles = makeStyles(style);
function NavBar() {
  const classes = useStyles();
  const history = useHistory();
  const [pathname, setPathname] = useState(window.location.pathname),
    [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    setPathname(window.location.pathname);
    history.listen(() => {
      setPathname(window.location.pathname);
    });
  }, []);

  return (
    <>
      <AppBar position="sticky" className={classes.appBar}>
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
                          {data.pageName}
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
                <div className={classes.brandingTitle}>Design And Code</div>
                <div className={classes.brandingDesc}>
                  Connect, Collaborate, Comprehend
                </div>
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
                      <ListItemText primary={data.pageName} />
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
              Join Discord
            </ContainedButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default NavBar;
