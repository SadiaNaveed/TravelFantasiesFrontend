import { Grid } from "@material-ui/core";
import React from "react";
import AllCities from "./Places/AllCities";
import Map from "./Map";
const Itinerary = (props) => {
  return (
    <div style={{ marginTop: "1px" }}>
      <AllCities page={props.match.page} />
      {/* // <Map /> */}
    </div>
  );
};

export default Itinerary;
