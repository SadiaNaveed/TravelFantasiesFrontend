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

class AllHotel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: "",
      open: false,
      home: true,
      hotels: [],
      // history: useHistory,
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
    //  const classes = useStyles();
    //  const { hotel } = this.props;
    // // const history = this.props.history;
    // console.log(this.props.history);
    // const history = useHistory;
    // console.log(history);
    return (
      <div style={{ marginLeft: "250px", marginTop: "120px" }}>
        <h1>Hello All Hotel</h1>
        {this.state.hotels.length == 0 ? (
          <p>There are no hotels</p>
        ) : (
          <Grid container spacing={0}>
            {/* //  <SingleHotel key={index} hotel={hotel} /> */}
            <TableContainer
              component={Paper}
              style={{ marginBottom: "10px", marginTop: "40px" }}
            >
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Hotel Name</StyledTableCell>
                    <StyledTableCell align="center">Location</StyledTableCell>
                    <StyledTableCell align="center">Cost</StyledTableCell>
                    <StyledTableCell align="center">
                      Contact Number
                    </StyledTableCell>
                    <StyledTableCell align="center">Room</StyledTableCell>
                    <StyledTableCell align="center">Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.hotels.map(
                    (hotel, index) => (
                      (hotel.Image =
                        "data:image/jpeg;base64," +
                        this.arrayBufferToBase64(hotel.Image.data.data)),
                      (
                        <StyledTableRow key={hotel._id}>
                          <StyledTableCell component="th" scope="row">
                            {hotel.HotelName}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {hotel.Location}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {hotel.Cost}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {hotel.Contactno}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <Button
                              onClick={() => this.onAllRoomsClick(hotel._id)}
                            >
                              View Rooms{" "}
                            </Button>
                            <Button
                              onClick={() => this.onAddRoomClick(hotel._id)}
                            >
                              Add Room{" "}
                            </Button>
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {/* onClick = {this.onViewButtonClick(hotel._id)} */}
                            {/*   */}
                            <Button
                              onClick={() => this.onViewButtonClick(hotel._id)}
                            >
                              <Visibility />
                            </Button>
                            <Button>
                              <Edit />{" "}
                            </Button>
                            <Button
                              onClick={() =>
                                this.onDeleteButtonClick(hotel._id)
                              }
                            >
                              <Delete />{" "}
                            </Button>
                          </StyledTableCell>
                        </StyledTableRow>
                      )
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        )}
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
export default withRouter(AllHotel);
