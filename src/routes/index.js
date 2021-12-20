import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import routesData from "./routesData";
import ScrollToTop from "./ScrollToTop";

function Routes() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        {routesData.map((data, index) => (
          <Route
            key={`route-index-${index}`}
            exact
            path={data.pageURL}
            component={() => <>{data.component}</>}
          />
        ))}
        <Redirect to="/home" />
      </Switch>
    </>
  );
}

export default Routes;
