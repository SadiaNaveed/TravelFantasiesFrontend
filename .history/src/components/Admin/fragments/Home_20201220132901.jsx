import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
});

class HomeFragment extends Component {
  constructor() {
    super();
    this.state = {
      render: "",
      open: false,
      home: true,
    };
    // this.handleHotelClick = this.handleHotelClick.bind(this);
  }

  render() {
    return (
      <div style={{ marginLeft: "250px", marginTop: "10px" }}>
        <h1>Hello Dashboard</h1>

        <div class="row">
          <div class="col-12 col-sm-6 col-md-4">
            <div class="text-white card bg-primary">
              <header class="card-header">No of Users</header>
              <div class="card-body">33</div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <div class="text-white card bg-success">
              <header class="card-header">Hotel Bookings</header>
              <div class="card-body">88</div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <div class="text-white card bg-info">
              <header class="card-header"> Tour Booking</header>
              <div class="card-body">77</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// export default withStyles(useStyles)(HomeFragment)
export default HomeFragment;
