import React, { Component } from "react";
import {
  Grid,
  Button,
  Typography,
  Box,
  makeStyles,
  CssBaseline,
} from "@material-ui/core";
// import hotelService from "../../services/HotelService";
import { useHistory, withRouter } from "react-router";
import { grey } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
//import userService from "../../services/UserService";
import queryString from "query-string";
// import { Comment, Icon } from 'semantic-ui-react'
import hotelService from "../../../services/HotelService";
import ReactStars from "react-rating-stars-component";
import CommentsBlock from "simple-react-comments";
import AppBarComponenet from "./AppBar";
import SidebarComponent from "./SidebarComponent";

const useStyles = makeStyles((theme) => ({
  link: {
    color: "#339ba5",
    paddingRight: "2rem",
    fontFamily: "Times New Roman",
    //   fontDisplay: "swap",
    fontStyle: "italic",
    fontSize: 24,
    fontWeight: 700,
  },
}));

class HotelView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotel: [],
      Image: " ",
      comments: [],
    };
    this.ratingChanged = this.ratingChanged.bind(this);
    this.onAddRoomClick = this.onAddRoomClick.bind(this);
  }

  //    onButtonClick = () => {
  //     this.setState({
  //       showComponent: true,
  //     });
  //   }
  // const { hotel, history } = props;
  arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }
  componentDidMount() {
    //const { handle } = this.props.history.hotel
    const hotelId = queryString.parse(this.props.history.location.search);
    const hotelSearch = hotelId.hotel;
    console.log(hotelSearch);
    hotelService
      .getSingleHotel(hotelSearch)
      .then((data) => {
        this.setState({ hotel: data });
        this.setState({
          Image:
            "data:image/jpeg;base64," +
            this.arrayBufferToBase64(this.state.hotel.Image.data.data),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ratingChanged(newRating) {
    console.log(newRating);
  }
  onAddRoomClick = (id) => {
    // let history = useHistory();
    this.props.history.push({
      pathname: "/AddRoom",
      search: "?hotel=" + id,
    });
  };
  render() {
    // console.log(this.props.history);
    // const classes = useStyles();
    return (
      <div style={{ marginLeft: "250px", marginTop: "90px" }}>
        <h1>All Hotels</h1>
        {/* {this.state.hotels.length == 0 ? (
          <p>There are no hotels</p>
        ) : ( */}
        {/* // <Grid container spacing={0}> */}
        {/* //  <SingleHotel key={index} hotel={hotel} /> */}
        {/*           
          //     component={Paper}
          //     style={{ marginBottom: "10px", marginTop: "40px" }}
          //   >
              /* <Table className={classes.table} aria-label="customized table">
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
                <TableBody> */}
        {/* {this.state.hotels.map(
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
        {/* <Button
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
                    ) */}
        {/* //</TableContainer>        )} */}
        {/* </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        )} */}
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
                      <div class="d-inline">Hotel Name</div>
                    </th>
                    <th
                      class=""
                      style={{ verticalAlign: "middle", overflow: "hidden" }}
                    >
                      <div class="d-inline">Location</div>
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
                    <th
                      class=""
                      style={{ verticalAlign: "middle", overflow: "hidden" }}
                    >
                      <div class="d-inline">Action</div>
                    </th>
                  </tr>
                </thead>
                <tbody style={{ cursor: "pointer" }}>
                  {this.state.hotels.map(
                    (hotel, index) => (
                      (hotel.Image =
                        "data:image/jpeg;base64," +
                        this.arrayBufferToBase64(hotel.Image.data.data)),
                      (
                        <tr class="" tabIndex="0">
                          <td class="font-weight-bold">{hotel.HotelName}</td>
                          <td class="">{hotel.Location}</td>
                          <td class="">{hotel.Cost}</td>
                          <td class="">{hotel.Contactno}</td>
                          <td>
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
                              onClick={() =>
                                this.onDeleteButtonClick(hotel._id)
                              }
                            >
                              <Delete />{" "}
                            </Button>
                          </td>
                        </tr>
                      )
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(HotelView);
