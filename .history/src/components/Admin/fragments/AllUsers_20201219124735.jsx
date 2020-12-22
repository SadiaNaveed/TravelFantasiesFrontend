import {
  Button,
  Grid,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import hotelService from "../../../services/HotelService";
import Paper from "@material-ui/core/Paper";
import { Delete, Edit, Update, Visibility } from "@material-ui/icons";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const classes = makeStyles((theme) => ({
  heading: {
    color: "black",
    // marginTop: "40px",
    //paddingRight: "100px",
    // fontSize: "21",
    fontStyle: "italic",
    fontSize: 25,
    textAlign: "center",
  },
  table: {
    minWidth: 500,
  },
}));
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Name", "Nishat", "PC", "Serena"),
  createData("Location", "Lahore", "Lahore", "Lahore"),
  createData("Cost per Day", 262, 16.0, 24),
  createData(
    "Book Now",
    <button>Book Now</button>,
    <button>Book Now</button>,
    <button>Book Now</button>
  ),
];
class AllUsers extends Component {
  constructor() {
    super();
    this.state = {
      render: "",
      open: false,
      home: true,
      hotels: [],
    };
    // this.handleHotelClick = this.handleHotelClick.bind(this);
  }
  arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }
  // componentDidMount() {
  //   hotelService
  //     .getHotels(this.props.page, this.props.perPage)
  //     .then((data) => {
  //       this.setState({ hotels: data });

  //       // setTotal(data.total);
  //       // setPerPage(10);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  render() {
    //  const classes = useStyles();

    return (
      <div style={{ marginLeft: "250px", marginTop: "120px" }}>
        <h1>Hello All Users</h1>

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
                      style="vertical-align: middle; overflow: hidden;"
                    >
                      <div class="d-inline">Name</div>
                    </th>
                    <th
                      class=""
                      style="vertical-align: middle; overflow: hidden;"
                    >
                      <div class="d-inline">Registered</div>
                    </th>
                    <th
                      class=""
                      style="vertical-align: middle; overflow: hidden;"
                    >
                      <div class="d-inline">Role</div>
                    </th>
                    <th
                      class=""
                      style="vertical-align: middle; overflow: hidden;"
                    >
                      <div class="d-inline">Status</div>
                    </th>
                  </tr>
                </thead>
                <tbody style="cursor: pointer;">
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
export default AllUsers;
