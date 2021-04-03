import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import style from "./style";

//Importing Material UI stuff
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

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
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    setPathname(window.location.pathname);
    history.listen(() => {
      setPathname(window.location.pathname);
    });
  }, []);

  return (
    <Grid container className={classes.navBar}>
      <Grid container xs={1}>
        <img
          className={classes.brandingLogo}
          src={brandingLogo}
          alt="branding-logo"
        />
      </Grid>

      <Grid container xs={9}>
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
      </Grid>

      <Grid container xs={2}>
        <ContainedButton href="https://discord.gg/druweDMn3s" target="_blank">
          Join Discord
        </ContainedButton>
      </Grid>
    </Grid>
  );
}

export default NavBar;
