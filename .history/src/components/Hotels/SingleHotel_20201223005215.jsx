import React, { Component } from "react";
import {
  Grid,
  Button,
  Typography,
  Box,
  makeStyles,
  Card,
} from "@material-ui/core";
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
    hotel.Image =
      "data:image/jpeg;base64," +
      this.arrayBufferToBase64(hotel.Image.data.data);
    return (
      <Card style={{ width: "18rem", margin: "30px" }}>
        {/* <img
          src={this.props.hotel.Image}
          style={{ width: "300px", height: "300px" }}
        /> */}
        <Card body="true">
          <Card title="true">{this.props.hotel.HotelName}</Card>
          <Card title="true">{this.props.hotel.Location}</Card>
          <Card text="true">
            <StarRatings
              rating={
                this.state.Ratings.Average == null
                  ? 0
                  : this.state.Ratings.Average
              }
              starRatedColor="orange"
              starDimension="25px"
              starSpacing="0px"
            />
            ({this.state.Ratings.noOfReviews})
          </Card>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                  checkedIcon={<CheckBoxIcon fontSize="small" />}
                  // checked={this.state.state.checkedA}
                  onChange={this.props.handle}
                  name={this.props.hotel.HotelName}
                />
              }
              label="Add To Compare"
            />
          </FormGroup>
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
        </Card>
      </Card>

      //     {/* //  {this.state.Ratings.Average == null ? 0 : this.state.Ratings.Average} */}
      //   </Typography>
      //   {/* onClick={this.onButtonClick} */}

      // </Box>
    );
  }
}
export default withRouter(SingleHotel);
