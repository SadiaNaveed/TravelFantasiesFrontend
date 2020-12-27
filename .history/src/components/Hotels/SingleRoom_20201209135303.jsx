import React, { Component } from "react";
import {
  Grid,
  Button,
  Typography,
  Box,
  makeStyles,
  createStyles,
} from "@material-ui/core";
// import hotelService from "../../services/HotelService";
import { useHistory, withRouter } from "react-router";
import { grey } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
//import userService from "../../services/UserService";
import HotelDetail from "./HotelDetail";
import HotelBooking from "./HotelBooking";
import roomCategoryService from "../../services/RoomCategoryService";
import queryString from "query-string";
import Modal from "@material-ui/core/Modal";
import { CloseOutlined } from "@material-ui/icons";
import userService from "../../services/UserService";

// const useStyles = makeStyles((theme) => ({
//   link: {
//     color: "#339ba5",
//     paddingRight: "2rem",
//     fontFamily: "Times New Roman",
//     //   fontDisplay: "swap",
//     fontStyle: "italic",
//     fontSize: 24,
//     fontWeight: 700,
//   },
// }));
const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

// const handleClick = () => {
//   <HotelBooking/>
// }

class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: "false",
      Category: [],
      // modalStyle: getModalStyle(),
      open: false,
      close: true,
    };
    //  this.onButtonClick = this.onButtonClick.bind(this);
    this.onViewButtonClick = this.onViewButtonClick.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.onBookingButtonClick = this.onBookingButtonClick.bind(this);
  }

  onViewButtonClick = () => {
    this.props.history.push({
      pathname: "/roomDetail",
      search:
        "&room=" +
        this.props.room._id +
        "&Category=" +
        this.props.room.Category,
    });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };
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
  handleClose = () => {
    this.setState({ open: false });
  };
  handleCloseClick = () => {
    this.setState({ close: false });
  };
  componentDidMount() {
    roomCategoryService
      .getSingleRoomCategory(this.props.room.Category)
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

  // const { room, history } = props;

  render() {
    const { room, history } = this.props;
    //  const classes = useStyles();

    return (
      <Box
        p="10px"
        bgcolor="#F0FFF0"
        height="180px"
        mx="30px"
        borderRadius="6px"
        margin="10px"
        marginBottom="70px"
        border="1px solid"
        borderColor="#C0C0C0"
      >
        <img
          src={this.props.room.Image}
          style={{
            position: "absolute",
            marginLeft: "10px",
            height: "150px",
            width: "210px",
            backgroundColor: grey[50],
          }}
          alt="room"
        />

        <Typography
          variant="h5"
          style={{ position: "absolute", marginLeft: "230px" }}
        >
          {this.state.Category.CategoryName}
        </Typography>

        <Typography
          variant="h5"
          style={{
            position: "absolute",
            marginLeft: "230px",
            marginTop: "50px",
          }}
        >
          {this.props.room.Description}
        </Typography>

        <Typography
          variant="h5"
          style={{ position: "absolute", marginLeft: "1100px" }}
        >
          {this.props.room.Cost} Per Night
        </Typography>

        {/* onClick={this.onButtonClick} */}

        <Button
          style={{
            backgroundColor: "#008CBA",
            position: "absolute",
            marginLeft: "1100px",
            marginTop: "60px",
          }}
          onClick={this.onViewButtonClick}
        >
          View Details
        </Button>
        <Button
          style={{
            backgroundColor: "#008CBA",
            position: "absolute",
            marginLeft: "1230px",
            marginTop: "60px",
          }}
          onClick={this.handleOpen}
        >
          Book Now
        </Button>
        {userService.getLoggedInUser() ? (
          this.onBookingButtonClick
        ) : (
          <Modal
            open={this.state.open}
            onClose={this.handleClose}
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
        )}
      </Box>
    );
  }
}
export default withRouter(SingleRoom);
