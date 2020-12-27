import React, { Component } from "react";
import { Grid, Button, Typography, Box, makeStyles } from "@material-ui/core";
// import hotelService from "../../services/HotelService";
import { useHistory, withRouter } from "react-router";
import { grey } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
//import userService from "../../services/UserService";
import TourDetailPage from "./TourDetailPage";
import tourBooking from "../Bookings/BookTour";


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
// const handleClick = () => {
//   <HotelBooking/>
// }
class SingleTour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: "false",
    };
    //  this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick = () => {
    this.props.history.push({
      pathname: "/TourDetailPage",
      search: "?tour=" + this.props.tour._id,
    });
  };
 
  onBookingButtonClick = () => {
    this.props.history.push({
      pathname: "/book-tour",
      search: "?tour=" + this.props.tour._id,
    });
  };

  // const { hotel, history } = props;

  render() {
    const { hotel, history } = this.props;

    return (
      <Box
        p="10px"
        bgcolor="#F0FFF0"
        height="500px"
        mx="30px"
        borderRadius="6px"
        margin="10px"
        marginBottom="70px"
        border="1px solid"
        borderColor="#C0C0C0"
      >
        <img
          src={this.props.tour.Image}
          style={{
            marginLeft: "10px",
            height: "300px",
            width: "310px",
            backgroundColor: grey[50],
          }}
          alt="tour"
        />

        <Typography variant="h4">{this.props.tour.TourName}</Typography>
        <Typography variant="h5">
          Location {this.props.tour.Location}
        </Typography>
        <Typography variant="h6">Ratings {this.props.tour.Ratings}</Typography>
        {/* onClick={this.onButtonClick} */}

        <Button
         
          onClick={this.onButtonClick}
        >
          Learn More
        </Button>
        <Button
          onClick={this.onBookingButtonClick}
        >
          Book Now
        </Button>
      </Box>
    );
  }
}
export default withRouter(SingleTour);