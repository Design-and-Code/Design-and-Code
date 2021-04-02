import React from "react";
import { Link } from "react-router-dom";

//Importing Material UI stuff
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

//Import Nav Routes Data
import routesData from "../../routes/routesData";

const useStyles = makeStyles((theme) => ({}));
function NavBar() {
  const classes = useStyles();

  React.useEffect(() => {
    routesData.map((i) => console.log(i));
  }, []);

  return (
    <Grid container>
      {routesData.map((data, index) => (
        <div key={`link-index-${index}`}>
          {data.showOnHeader && <Link to={data.pageURL}>{data.pageName}</Link>}
        </div>
      ))}
    </Grid>
  );
}

export default NavBar;
