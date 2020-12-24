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

        <div class="card">
          <header class="card-header">
            Users<small class="text-muted"> example</small>
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
                      <div class="d-inline">Name</div>
                    </th>
                    <th
                      class=""
                      style={{ verticalAlign: "middle", overflow: "hidden" }}
                    >
                      <div class="d-inline">Registered</div>
                    </th>
                    <th
                      class=""
                      style={{ verticalAlign: "middle", overflow: "hidden" }}
                    >
                      <div class="d-inline">Role</div>
                    </th>
                    <th
                      class=""
                      style={{ verticalAlign: "middle", overflow: "hidden" }}
                    >
                      <div class="d-inline">Status</div>
                    </th>
                  </tr>
                </thead>
                <tbody style={{ cursor: "pointer" }}>
                  <tr class="" tabIndex="0">
                    <td class="font-weight-bold">Hiroto Šimun</td>
                    <td class="">2018/01/21</td>
                    <td class="">Staff</td>
                    <td>
                      <span class="badge badge-success">Active</span>
                    </td>
                  </tr>
                  <tr class="" tabIndex="0">
                    <td class="font-weight-bold">Vishnu Serghei</td>
                    <td class="">2018/01/01</td>
                    <td class="">Member</td>
                    <td>
                      <span class="badge badge-success">Active</span>
                    </td>
                  </tr>
                  <tr class="" tabIndex="0">
                    <td class="font-weight-bold">Zbyněk Phoibos</td>
                    <td class="">2018/02/01</td>
                    <td class="">Staff</td>
                    <td>
                      <span class="badge badge-danger">Banned</span>
                    </td>
                  </tr>
                  <tr class="" tabIndex="0">
                    <td class="font-weight-bold">Aulus Agmundr</td>
                    <td class="">2018/01/01</td>
                    <td class="">Member</td>
                    <td>
                      <span class="badge badge-warning">Pending</span>
                    </td>
                  </tr>
                  <tr class="" tabIndex="0">
                    <td class="font-weight-bold">Ford Prefect</td>
                    <td class="">2001/05/25</td>
                    <td class="">Alien</td>
                    <td>
                      <span class="badge badge-primary">Don't panic!</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="card">
          <header class="card-header">
            Users<small class="text-muted"> example</small>
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
                      <div class="d-inline">Name</div>
                    </th>
                    <th
                      class=""
                      style={{ verticalAlign: "middle", overflow: "hidden" }}
                    >
                      <div class="d-inline">Registered</div>
                    </th>
                    <th
                      class=""
                      style={{ verticalAlign: "middle", overflow: "hidden" }}
                    >
                      <div class="d-inline">Role</div>
                    </th>
                    <th
                      class=""
                      style={{ verticalAlign: "middle", overflow: "hidden" }}
                    >
                      <div class="d-inline">Status</div>
                    </th>
                  </tr>
                </thead>
                <tbody style={{ cursor: "pointer" }}>
                  <tr class="" tabIndex="0">
                    <td class="font-weight-bold">Hiroto Šimun</td>
                    <td class="">2018/01/21</td>
                    <td class="">Staff</td>
                    <td>
                      <span class="badge badge-success">Active</span>
                    </td>
                  </tr>
                  <tr class="" tabIndex="0">
                    <td class="font-weight-bold">Vishnu Serghei</td>
                    <td class="">2018/01/01</td>
                    <td class="">Member</td>
                    <td>
                      <span class="badge badge-success">Active</span>
                    </td>
                  </tr>
                  <tr class="" tabIndex="0">
                    <td class="font-weight-bold">Zbyněk Phoibos</td>
                    <td class="">2018/02/01</td>
                    <td class="">Staff</td>
                    <td>
                      <span class="badge badge-danger">Banned</span>
                    </td>
                  </tr>
                  <tr class="" tabIndex="0">
                    <td class="font-weight-bold">Aulus Agmundr</td>
                    <td class="">2018/01/01</td>
                    <td class="">Member</td>
                    <td>
                      <span class="badge badge-warning">Pending</span>
                    </td>
                  </tr>
                  <tr class="" tabIndex="0">
                    <td class="font-weight-bold">Ford Prefect</td>
                    <td class="">2001/05/25</td>
                    <td class="">Alien</td>
                    <td>
                      <span class="badge badge-primary">Don't panic!</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="card">
          <header class="card-header">
            Users<small class="text-muted"> example</small>
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
                      <div class="d-inline">Name</div>
                    </th>
                    <th
                      class=""
                      style={{ verticalAlign: "middle", overflow: "hidden" }}
                    >
                      <div class="d-inline">Registered</div>
                    </th>
                    <th
                      class=""
                      style={{ verticalAlign: "middle", overflow: "hidden" }}
                    >
                      <div class="d-inline">Role</div>
                    </th>
                    <th
                      class=""
                      style={{ verticalAlign: "middle", overflow: "hidden" }}
                    >
                      <div class="d-inline">Status</div>
                    </th>
                  </tr>
                </thead>
                <tbody style={{ cursor: "pointer" }}>
                  <tr class="" tabIndex="0">
                    <td class="font-weight-bold">Hiroto Šimun</td>
                    <td class="">2018/01/21</td>
                    <td class="">Staff</td>
                    <td>
                      <span class="badge badge-success">Active</span>
                    </td>
                  </tr>
                  <tr class="" tabIndex="0">
                    <td class="font-weight-bold">Vishnu Serghei</td>
                    <td class="">2018/01/01</td>
                    <td class="">Member</td>
                    <td>
                      <span class="badge badge-success">Active</span>
                    </td>
                  </tr>
                  <tr class="" tabIndex="0">
                    <td class="font-weight-bold">Zbyněk Phoibos</td>
                    <td class="">2018/02/01</td>
                    <td class="">Staff</td>
                    <td>
                      <span class="badge badge-danger">Banned</span>
                    </td>
                  </tr>
                  <tr class="" tabIndex="0">
                    <td class="font-weight-bold">Aulus Agmundr</td>
                    <td class="">2018/01/01</td>
                    <td class="">Member</td>
                    <td>
                      <span class="badge badge-warning">Pending</span>
                    </td>
                  </tr>
                  <tr class="" tabIndex="0">
                    <td class="font-weight-bold">Ford Prefect</td>
                    <td class="">2001/05/25</td>
                    <td class="">Alien</td>
                    <td>
                      <span class="badge badge-primary">Don't panic!</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// export default withStyles(useStyles)(HomeFragment)
export default HomeFragment;
