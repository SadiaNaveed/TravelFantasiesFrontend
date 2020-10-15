import { Grid } from "@material-ui/core";
import React from "react";
import AllCities from "./Places/AllCities";

const Itinerary = (props) => {
  return (
    <div style={{ marginTop: "1px" }}>
      <AllCities page={props.match.page} />
    </div>
  );
};

export default Itinerary;
