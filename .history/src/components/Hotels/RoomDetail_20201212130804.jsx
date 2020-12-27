import React, { Component } from "react";
import {
  Grid,
  Button,
  Typography,
  Box,
  makeStyles,
  CssBaseline,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Modal,
} from "@material-ui/core";
// import hotelService from "../../services/HotelService";
import { useHistory, withRouter } from "react-router";
import { grey } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
//import userService from "../../services/UserService";
import queryString from "query-string";
// import { Comment, Icon } from 'semantic-ui-react'
import roomService from "../../services/RoomService";
import { StarBorder } from "@material-ui/icons";
import roomCategoryService from "../../services/RoomCategoryService";
import userService from "../../services/UserService";

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

class RoomDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotel: [],
      Image: " ",
      comments: [],
      Category: [],
      open: true,
    };
    this.ratingChanged = this.ratingChanged.bind(this);
    //this.onAddRoomClick = this.onAddRoomClick.bind(this);
    this.onBookingButtonClick = this.onBookingButtonClick.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
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
    const hotelSearch = hotelId.room;
    console.log(hotelSearch);
    const categorySearch = hotelId.Category;
    console.log(categorySearch);
    roomService
      .getSingleRoom(hotelSearch)
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

    roomCategoryService
      .getSingleRoomCategory(categorySearch)
      .then((data) => {
        this.setState({ Category: data });
        console.log(this.state.Category);
        // setTotal(data.total);
        // setPerPage(10);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  onBookingButtonClick = () => {
    const hotelId = queryString.parse(this.props.history.location.search);
    const roomSearch = hotelId.room;
    console.log(roomSearch);
    const categorySearch = hotelId.Category;
    console.log(categorySearch);
    this.props.history.push({
      pathname: "/HotelBooking",
      search:
        "?Category=" +
        categorySearch +
        "&room=" +
        roomSearch +
        "&hotel=" +
        this.state.hotel.HotelId,
    });
  };

  ratingChanged(newRating) {
    console.log(newRating);
  }
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
    <Modal>
      <Modal></Modal>
  };

  render() {
    // console.log(this.props.history);
    // const classes = useStyles();
    return (
      <div>
        {/* {home ? <HomeFragment /> : null}   */}
        {/* <SidebarComponent /> */}
        <div
          style={{
            marginLeft: "50px",
            marginTop: "100px",
            marginBottom: "50px",
          }}
        >
          <img
            src={this.state.Image}
            style={{
              position: "absolute",
              marginLeft: "10px",
              height: "300px",
              width: "510px",
              backgroundColor: grey[50],
            }}
            alt="hotel"
          />
          <Button
            style={{
              backgroundColor: "white",
              border: "2px solid #4CAF50",
              borderRadius: "12px",
              color: "#4CAF50",
              fontSize: "24px",
              position: "absolute",
              marginTop: "310px",
              marginLeft: "70px",
            }}
            onClick={
              userService.getLoggedInUser() ? (
                this.onBookingButtonClick
              ) : (
                <Modal
                  open={true}
                  // onClose={this.handleClose}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                >
                  <div
                    style={{
                      marginTop: "200px",
                      marginLeft: "550px",
                      transform: "400px",
                      backgroundColor: "white",
                      width: "400px",
                      height: "200px",
                      borderRadius: "40px",
                      padding: "10px",
                    }}
                  >
                    <h2
                      id="simple-modal-title"
                      style={{ color: "red", marginLeft: "60px" }}
                    >
                      PLEASE LOG IN
                    </h2>

                    <p id="simple-modal-description">
                      You Can't Do Booking Without Login\Register
                    </p>
                    <p className="forgot-password text-middle">
                      <a href="/login">SignIn Here</a>
                    </p>
                  </div>
                </Modal>
              )
            }
          >
            Book Now
          </Button>

          <Button
            style={{
              backgroundColor: "white",
              border: "2px solid #4CAF50",
              borderRadius: "12px",
              color: "#4CAF50",
              fontSize: "24px",
              position: "absolute",
              marginTop: "310px",
              marginLeft: "230px",
            }}
          >
            Back
          </Button>
          <Typography
            variant="h4"
            style={{ marginLeft: "700px", color: "#339ba5", fontStyle: "bold" }}
          >
            Description
          </Typography>
          <Typography
            variant="h5"
            style={{ marginLeft: "750px", fontStyle: "bold" }}
          >
            {this.state.hotel.Description}
          </Typography>
          <Typography
            variant="h4"
            style={{ marginLeft: "700px", color: "#339ba5", fontStyle: "bold" }}
          >
            Total Number of Rooms
          </Typography>
          <Typography variant="h5" style={{ marginLeft: "750px" }}>
            {this.state.hotel.NumberOfRooms}
          </Typography>
          <Typography
            variant="h4"
            style={{ marginLeft: "700px", color: "#339ba5", fontStyle: "bold" }}
          >
            Cost of Room (Per Night)
          </Typography>
          <Typography variant="h5" style={{ marginLeft: "750px" }}>
            {this.state.hotel.Cost}
          </Typography>
          <Typography
            variant="h4"
            style={{ marginLeft: "700px", color: "#339ba5", fontStyle: "bold" }}
          >
            Facilities of Room
          </Typography>
          <Typography variant="h6" style={{ marginLeft: "700px" }}>
            <List component="div" disablePadding>
              {this.state.hotel.FreeWifi && (
                <ListItem>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Free Wifi" />
                </ListItem>
              )}

              {this.state.hotel.AirConditioning && (
                <ListItem>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Air Conditioning" />
                </ListItem>
              )}
              {this.state.hotel.BathTub && (
                <ListItem>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Bath Tub" />
                </ListItem>
              )}
              {this.state.hotel.HairDryer && (
                <ListItem>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Hair Dryer" />
                </ListItem>
              )}
              {this.state.hotel.InRoomIron && (
                <ListItem>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="In-Room Iron" />
                </ListItem>
              )}
              {this.state.hotel.PremiumCoffee && (
                <ListItem>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Premium Coffee" />
                </ListItem>
              )}

              {this.state.hotel.RoomFridge && (
                <ListItem>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Room Fridge" />
                </ListItem>
              )}
              {this.state.hotel.RoomPurification && (
                <ListItem>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Room Purification" />
                </ListItem>
              )}
              {this.state.hotel.Shower && (
                <ListItem>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Shower" />
                </ListItem>
              )}
              {this.state.hotel.Television && (
                <ListItem>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Television" />
                </ListItem>
              )}
              {this.state.hotel.TeaMaker && (
                <ListItem>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Tea Maker" />
                </ListItem>
              )}
            </List>
          </Typography>
        </div>
      </div>
    );
  }
}
export default withRouter(RoomDetail);
