import { Grid } from "@material-ui/core";
import React from "react";
import AllCities from "./Places/AllCities";
import Map from "./Map";
import NearbyPlaces from "./Places/NearbyPlaces";
const Itinerary = (props) => {
  return (
    <div style={{ marginTop: "1px" }}>
      {/* <AllCities page={props.match.page} /> */}
      <NearbyPlaces />
      {/* // <Map /> */}
    </div>
  );
};

export default Itinerary;
