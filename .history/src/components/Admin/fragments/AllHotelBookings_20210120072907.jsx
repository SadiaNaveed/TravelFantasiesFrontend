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
import { useHistory, withRouter } from "react-router";
import hotelService from "../../../services/HotelService";
import Paper from "@material-ui/core/Paper";
import { Delete, Edit, Update, Visibility } from "@material-ui/icons";
import HotelBookingService from "../../../services/HotelBookingService";

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
    fontStyle: "italic",
    fontSize: 25,
    textAlign: "center",
  },
  table: {
    minWidth: 500,
  },
}));

class AllHotelBookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: "",
      open: false,
      home: true,
      Bookings: [],
    };
    this.onViewButtonClick = this.onViewButtonClick.bind(this);
    this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
  }
  arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }
  componentDidMount() {
    HotelBookingService.getHotelBookings(this.props.page, this.props.perPage)
      .then((data) => {
        this.setState({ Bookings: data });

        // setTotal(data.total);
        // setPerPage(10);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onViewButtonClick = (id) => {
    // let history = useHistory();
    this.props.history.push({
      pathname: "/HotelView",
      search: "?hotel=" + id,
    });
  };
  onDeleteButtonClick = (id) => {
    hotelService
      .deleteHotel(id)
      .then((response) => {
        alert(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  onAllRoomsClick = (id) => {
    // let history = useHistory();
    this.props.history.push({
      pathname: "/RoomsView",
      search: "?hotel=" + id,
    });
  };
  onAddRoomClick = (id) => {
    // let history = useHistory();
    this.props.history.push({
      pathname: "/AddRoom",
      search: "?hotel=" + id,
    });
  };
  render() {
    return (
      <div style={{ marginLeft: "250px", marginTop: "90px" }}>
        <h1>Hotels Bookings</h1>
        <div class="card">
          <header class="card-header">
            All <small class="text-muted">Hotels</small>
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
                      <div class="d-inline">Date Time</div>
                    </th>
                    <th
                      class=""
                      style={{ verticalAlign: "middle", overflow: "hidden" }}
                    >
                      <div class="d-inline">HotelId</div>
                    </th>
                    <th
                      class=""
                      style={{ verticalAlign: "middle", overflow: "hidden" }}
                    >
                      <div class="d-inline">Cost</div>
                    </th>
                    <th
                      class=""
                      style={{ verticalAlign: "middle", overflow: "hidden" }}
                    >
                      <div class="d-inline">Contact No</div>
                    </th>
                    <th
                      class=""
                      style={{ verticalAlign: "middle", overflow: "hidden" }}
                    >
                      <div class="d-inline">Room</div>
                    </th>
                  </tr>
                </thead>
                <tbody style={{ cursor: "pointer" }}>
                  {this.state.Bookings.map((hotel, index) => (
                    <tr class="" tabIndex="0">
                      <td class="font-weight-bold">{hotel.Booking_Date}</td>
                      <td class="">{hotel.Hotel_id}</td>
                      <td class="">{hotel.Cost}</td>
                      <td class="">{hotel.Contactno}</td>
                      <td class="">{hotel.No_of_Days}</td>
                      <td>
                        {/* <Button onClick={() => this.onAllRoomsClick(hotel._id)}>
                          View Rooms{" "}
                        </Button>
                        <Button onClick={() => this.onAddRoomClick(hotel._id)}>
                          Add Room{" "}
                        </Button> */}
                      </td>
                      <td>
                        {/* <Button
                          onClick={() => this.onViewButtonClick(hotel._id)}
                        >
                          <Visibility />
                        </Button> */}
                        {/* <Button>
                          <Edit />{" "}
                        </Button>
                        <Button
                          onClick={() => this.onDeleteButtonClick(hotel._id)}
                        >
                          <Delete />{" "}
                        </Button> */}
                      </td>
                    </tr>
                  ))}
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
export default withRouter(AllHotelBookings);
