import {
  Button,
  CssBaseline,
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
import roomService from "../../../services/RoomService";
import queryString from "query-string";
import AppBarComponenet from "./AppBar";

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

class AllHotelsRooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: "",
      open: false,
      home: true,
      rooms: [],
      history: useHistory,
    };
    this.onViewButtonClick = this.onViewButtonClick.bind(this);
    this.arrayBufferToBase64 = this.arrayBufferToBase64.bind(this);
  }
  arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }
  componentDidMount() {
    const hotelId = queryString.parse(this.props.history.location.search);
    const hotelSearch = hotelId.hotel;
    console.log(hotelSearch);
    roomService
      .getRooms(this.props.page, this.props.perPage)
      .then((data) => {
        this.setState({ rooms: data });

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
      pathname: "/SingleRoomView",
      search: "?room=" + id,
    });
  };

  onDeleteButtonClick = (id) => {
    roomService
      .deleteRoom(id)
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
    //  const classes = useStyles();
    //  const { hotel } = this.props;
    // // const history = this.props.history;
    // console.log(this.props.history);
    // const history = useHistory;
    // console.log(history);
    return (
      <div style={{ marginTop: "120px", marginLeft: "250px", padding: "20px" }}>
        <h1>Hello Hotel Room</h1>
        {this.state.rooms.length == 0 ? (
          <p>Loading...</p>
        ) : (
          <div class="card">
            <header class="card-header">
              All <small class="text-muted"> Hotels</small>
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
                        <div class="d-inline">Room ID</div>
                      </th>
                      <th
                        class=""
                        style={{ verticalAlign: "middle", overflow: "hidden" }}
                      >
                        <div class="d-inline">Description</div>
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
                        <div class="d-inline"> Action</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody style={{ cursor: "pointer" }}>
                    {this.state.rooms.map((hotel, index) => (
                      <tr class="" tabIndex="0">
                        <td class="">{hotel._id}</td>
                        <td class="">{hotel.Description}</td>
                        <td class="">{hotel.Cost}</td>
                        <td>
                          {/* <Button onClick={() => this.onAllRoomsClick(hotel._id)}>
                          View Rooms{" "}
                        </Button>
                        <Button onClick={() => this.onAddRoomClick(hotel._id)}>
                          Add Room{" "}
                        </Button> */}
                        </td>
                        <td>
                          <Button
                            onClick={() => this.onViewButtonClick(hotel._id)}
                          >
                            <Visibility />
                          </Button>
                          <Button>
                            <Edit />{" "}
                          </Button>
                          <Button
                            onClick={() => this.onDeleteButtonClick(hotel._id)}
                          >
                            <Delete />{" "}
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
// export default withStyles(useStyles)(HomeFragment)
export default withRouter(AllHotelsRooms);
