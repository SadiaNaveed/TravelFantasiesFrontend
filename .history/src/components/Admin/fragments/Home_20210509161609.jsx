import { withStyles, Button } from "@material-ui/core";
import React, { Component } from "react";
import userService from "../../../services/UserService";
import { Delete, Edit, Update, Visibility } from "@material-ui/icons";
import hotelService from "../../../services/HotelService";
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
      users: [],
      hotels: [],
    };
    // this.handleHotelClick = this.handleHotelClick.bind(this);
  }
  componentDidMount() {
    userService
      .getUsers(this.props.page, this.props.perPage)
      .then((data) => {
        this.setState({ users: data });

        // setTotal(data.total);
        // setPerPage(10);
      })
      .catch((err) => {
        console.log(err);
      });
    hotelService
      .getHotels(this.props.page, this.props.perPage)
      .then((data) => {
        this.setState({ hotels: data });

        // setTotal(data.total);
        // setPerPage(10);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
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
        <div style={{ marginTop: "90px" }}>
          <h1>All Users</h1>
          <div class="card">
            <header class="card-header">
              All <small class="text-muted"> Users</small>
            </header>
            <div class="card-body">
              <div></div>
              <div class="position-relative table-responsive">
                <table class="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th
                        class="font-weight-bold"
                        style={{ verticalAlign: "middle", overflow: "hidden" }}
                      >
                        <div class="d-inline">User Id</div>
                      </th>
                      <th
                        class=""
                        style={{ verticalAlign: "middle", overflow: "hidden" }}
                      >
                        <div class="d-inline">Username</div>
                      </th>
                      <th
                        class=""
                        style={{ verticalAlign: "middle", overflow: "hidden" }}
                      >
                        <div class="d-inline">Email</div>
                      </th>
                      <th
                        class=""
                        style={{ verticalAlign: "middle", overflow: "hidden" }}
                      >
                        <div class="d-inline">Role</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody style={{ cursor: "pointer" }}>
                    {this.state.users.map((hotel, index) => (
                      <tr class="" tabIndex="0">
                        <td class="font-weight-bold">{hotel._id}</td>
                        <td class="">{hotel.name}</td>
                        <td class="">{hotel.email}</td>
                        <td class="">{hotel.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
