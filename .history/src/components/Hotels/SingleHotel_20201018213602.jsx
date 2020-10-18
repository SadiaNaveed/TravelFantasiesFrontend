import React from "react";
import { Grid, Button } from "@material-ui/core";
import hotelService from "../../services/HotelService";
import { withRouter } from "react-router";
//import userService from "../../services/UserService";

const SingleProduct = (props) => {
  const { hotel, history } = props;
  return (
    <Grid item xs={4}>
      <h2>
        {hotel.Hotel_Name}
      </h2>     
      <img src={hotel.Image} style={{height:"130px",width: "130px"}}alt="hotel" />

      <hr />
    </Grid>
  );
};

export default withRouter(SingleProduct);
