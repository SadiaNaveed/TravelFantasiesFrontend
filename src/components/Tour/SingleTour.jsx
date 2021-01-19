import React, { Component } from "react";
import {
  Grid,
  Button,
  Typography,
  Box,
  makeStyles,
  Card,
} from "@material-ui/core";
import {
  CardText,
  Row,
  Col,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";
// import hotelService from "../../services/HotelService";
import { useHistory, withRouter } from "react-router";
import { grey } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
//import userService from "../../services/UserService";
//import HotelDetail from "./HotelDetail";
//import HotelBooking from "./HotelBooking";
//import HotelReviewService from "../../services/HotelReviewService";
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
class SingleTour extends Component {
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
      pathname: "/TourDetail",
      search: "?tour=" + this.props.tour._id,
    });
  };
  // onMapClick = () => {
  //   this.props.history.push({
  //     pathname: "/TourMapView",
  //     search:
  //       "?tour=" +
  //       this.props.tour._id +
  //       "&lat=" +
  //       this.props.tour.Latitude +
  //       "&lng=" +
  //       this.props.tour.Longitude,
  //   });
  // };
  onBookingButtonClick = () => {
    this.props.history.push({
      pathname: "/TourBooking",
      search: "?tour=" + this.props.tour._id,
    });
  };

  // const { hotel, history } = props;
  componentDidMount() {
    // HotelReviewService.getHotelRatings(this.props.hotel._id)
    //   .then((data) => {
    //     this.setState({ Ratings: data });
    //     console.log(this.state.Ratings);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
  arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }
  render() {
    const { tour, history } = this.props;
    // hotel.Image =
    //   "data:image/jpeg;base64," +
    //   this.arrayBufferToBase64(hotel.Image.data.data);
    return (
      // <Card style={{ width: "18rem",  margin: "30px" }}>
      //   <img
      //     src={
      //       "data:image/jpeg;base64," +
      //       this.arrayBufferToBase64(tour.Images.data.data)
      //     }
      //     style={{ width: "300px", height: "300px" }}
      //   />
      //   <Card body="true">
      //     <Card title="true">{this.props.tour.TourName}</Card>
      //     <Card title="true">{this.props.tour.Location}</Card>
      //     <Card title="true">{this.props.tour.Description}</Card>
      //     <Card title="true">
      //       Ratings {this.props.tour.AvgRatings == null
      //         ? 0.0
      //         : this.props.tour.AvgRatings}
      //     </Card>
      //     <Card text="true">
      //       <StarRatings
      //         rating={
      //           this.props.tour.AvgRatings == null
      //             ? 0
      //             : this.props.tour.AvgRatings
      //         }
      //         starRatedColor="orange"
      //         starDimension="25px"
      //         starSpacing="0px"
      //       />
      //       (
      //       {this.props.tour.CountRatings == null
      //         ? 0
      //         : this.props.tour.CountRatings}
      //       )
      //     </Card>
         
      //     <Button
      //       style={{
      //         backgroundColor: "#e7e7e7",
      //         color: "black",
      //         marginLeft: "5px",
      //         marginRight: "5px",
      //       }}
      //       onClick={this.onButtonClick}
      //     >
      //       View Details
      //     </Button>
      //     {/* <Button
      //       style={{ backgroundColor: "#008CBA" }}
      //       onClick={this.onMapClick}
      //     >
      //       View on Map
      //     </Button> */}
      //   </Card>
      // </Card>

      //     {/* //  {this.state.Ratings.Average == null ? 0 : this.state.Ratings.Average} */}
      //   </Typography>
      //   {/* onClick={this.onButtonClick} */}

      // </Box>
      <div>
      
      <row>
        
          <ScrollAnimation
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOutLeft"
          >
<Card style={{ width: "18rem" , margin: "30px" }}>
              <CardBody>
                <CardTitle tag="h5">{this.props.tour.TourName}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Explore the City of Lights
                </CardSubtitle>
              </CardBody>
              
              <img
                 width="100%"
                 src={
                  "data:image/jpeg;base64," +
                  this.arrayBufferToBase64(tour.Images.data.data)
                  }
                  />
              <CardBody>
              <CardText>
                {this.props.tour.Location}
                </CardText>
                {/* <CardText>
                {this.props.tour.Description}
                </CardText> */}
                <CardText>
                Ratings {this.props.tour.AvgRatings == null
              ? 0.0
              : this.props.tour.AvgRatings}
                </CardText>
                <CardText>
                <StarRatings
              rating={
                this.props.tour.AvgRatings == null
                  ? 0
                  : this.props.tour.AvgRatings
              }
              starRatedColor="orange"
              starDimension="25px"
              starSpacing="0px"
            />
            (
            {this.props.tour.CountRatings == null
              ? 0
              : this.props.tour.CountRatings}
            )
                
                </CardText>

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
              </CardBody>
            </Card>

            </ScrollAnimation>

            </row>
      </div>


    );
  }
}
export default withRouter(SingleTour);






