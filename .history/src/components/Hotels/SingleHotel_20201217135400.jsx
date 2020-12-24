import React, { Component } from "react";
import { Grid, Button, Typography, Box, makeStyles } from "@material-ui/core";
// import hotelService from "../../services/HotelService";
import { useHistory, withRouter } from "react-router";
import { grey } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
//import userService from "../../services/UserService";
import HotelDetail from "./HotelDetail";
import HotelBooking from "./HotelBooking";
import HotelReviewService from "../../services/HotelReviewService";
import StarRatings from "react-star-ratings";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

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
class SingleHotel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: "false",
      Ratings: [],
    };
    //  this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick = () => {
    this.props.history.push({
      pathname: "/HotelDetail",
      search: "?hotel=" + this.props.hotel._id,
    });
  };
  onMapClick = () => {
    this.props.history.push({
      pathname: "/HotelMapView",
      search:
        "?hotel=" +
        this.props.hotel._id +
        "&lat=" +
        this.props.hotel.Latitude +
        "&lng=" +
        this.props.hotel.Longitude,
    });
  };
  onBookingButtonClick = () => {
    this.props.history.push({
      pathname: "/HotelBooking",
      search: "?hotel=" + this.props.hotel._id,
    });
  };

  // const { hotel, history } = props;
  componentDidMount() {
    HotelReviewService.getHotelRatings(this.props.hotel._id)
      .then((data) => {
        this.setState({ Ratings: data });
        console.log(this.state.Ratings);
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
        <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                  checkedIcon={<CheckBoxIcon fontSize="small" />}
                  // checked={this.state.state.checkedA}
                 // onChange={this.handleChange}
                  name="FreeWifi"
                />
              }
              label="Free Wifi"
            />
        <img
          src={this.props.hotel.Image}
          style={{
            marginLeft: "10px",
            height: "300px",
            width: "310px",
            backgroundColor: grey[50],
          }}
          alt="hotel"
        />

        <Typography variant="h4">{this.props.hotel.HotelName}</Typography>
        <Typography variant="h5">
          Location {this.props.hotel.Location}
        </Typography>
        <Typography variant="h6">
          {/* Ratings{" "} */}
          <StarRatings
            rating={
              this.state.Ratings.Average == null
                ? 0
                : this.state.Ratings.Average
            }
            starRatedColor="yellow"
            starDimension="40px"
            starSpacing="1px"
          />
          {/* //  {this.state.Ratings.Average == null ? 0 : this.state.Ratings.Average} */}
        </Typography>
        {/* onClick={this.onButtonClick} */}

        <Button
          style={{
            backgroundColor: "#e7e7e7",
            color: "black",
            marginLeft: "5px",
            marginRight: "5px",
          }}
          onClick={this.onButtonClick}
        >
          View Details
        </Button>
        <Button
          style={{ backgroundColor: "#008CBA" }}
          onClick={this.onMapClick}
        >
          View on Map
        </Button>
      </Box>
    );
  }
}
export default withRouter(SingleHotel);
