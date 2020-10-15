import { Grid } from "@material-ui/core";
import React from "react";
import AllCities from "./Places/AllCities";

const Itinerary = (props) => {
  return (
    <div style={{ marginTop: "1px" }}>
      <Grid container>
        <Grid item xs={3}></Grid>
        <Grid item xs={9}>
          <AllCities page={props.match.page} />
        </Grid>
      </Grid>

      {/* */}
    </div>
  );
};

export default Itinerary;
