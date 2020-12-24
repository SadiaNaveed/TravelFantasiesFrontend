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
      <div style={{ marginLeft: "300px", marginTop: "10px" }}>
        <h1>Hello Dashboard</h1>
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4">
            <div class="card card-accent-primary">
              <header class="card-header">Card with accent</header>
              <div class="card-body">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <div class="card card-accent-secondary">
              <header class="card-header">Card with accent</header>
              <div class="card-body">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <div class="card card-accent-success">
              <header class="card-header">Card with accent</header>
              <div class="card-body">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <div class="card card-accent-info">
              <header class="card-header">Card with accent</header>
              <div class="card-body">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <div class="card card-accent-warning">
              <header class="card-header">Card with accent</header>
              <div class="card-body">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <div class="card card-accent-danger">
              <header class="card-header">Card with accent</header>
              <div class="card-body">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// export default withStyles(useStyles)(HomeFragment)
export default HomeFragment;
