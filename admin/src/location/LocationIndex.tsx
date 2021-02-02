import * as React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import useBreadcrumbs from "../components/breadcrumbs/use-breadcrumbs";
import { LocationList } from "./LocationList";
import { CreateLocation } from "./CreateLocation";
import { Location } from "./Location";

export const LocationIndex = (): React.ReactElement => {
  useBreadcrumbs("/locations/", "Locations");

  return (
    <Switch>
      <PrivateRoute exact path={"/locations/"} component={LocationList} />
      <PrivateRoute path={"/locations/new"} component={CreateLocation} />
      <PrivateRoute path={"/locations/:id"} component={Location} />
    </Switch>
  );
};
