import React, { Component } from "react";
import {
  Grid,
  Button,
  Typography,
  Box,
  makeStyles,
  CssBaseline,
} from "@material-ui/core";
import tourService from "../../services/TourService";
import { useHistory, withRouter } from "react-router";
import { grey } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
//import userService from "../../services/UserService";
import HotelBooking from "../Hotels/HotelBooking";
import queryString from "query-string";
// import { Comment, Icon } from 'semantic-ui-react'
import hotelService from "../../services/HotelService";
import ReactStars from "react-rating-stars-component";
import CommentsBlock from "simple-react-comments";
import AppBarComponenet from "../Admin/fragments/AppBar";
import { ThreeSixty } from "@material-ui/icons";
//import roomService from "../../services/RoomService";
//import SingleRoom from "./SingleRoom";
import SingleComment from "../Hotels/SingleComment";
import Comments from "../Hotels/Comments";

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

class TourDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tour: [],
      Image: " ",
      comments: [],
      rooms: [],
      ratings: 0,
    };
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
    const tourId = queryString.parse(this.props.history.location.search);
    const tourSearch = tourId.hotel;
    console.log(tourSearch);
    tourService
      .getSingleTour(tourSearch)
      .then((data) => {
        this.setState({ tour: data });
        this.setState({
          Image:
            "data:image/jpeg;base64," +
            this.arrayBufferToBase64(this.state.tour.Image.data.data),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { tour, history } = this.props;
    console.log(this.props.history);
    // const classes = useStyles();
    return (
      <div style={{ marginTop: "10px", marginBottom: "400px" }}>
        {/* <CssBaseline /> */}
        {/* <AppBarComponenet /> */}
        <img
          src={this.state.Image}
          style={{
            position: "absolute",
            marginLeft: "900px",
            height: "500px",
            width: "400px",
            backgroundColor: grey[50],
          }}
          alt="tour"
        />

        <Typography
          variant="h4"
          style={{ marginLeft: "20px", color: "#339ba5", fontStyle: "bold" }}
        >
          {this.state.tour.Title}
        </Typography>
        <Typography variant="h5" style={{ marginLeft: "20px" }}>
          {this.state.tour.Location}
        </Typography>
        <Typography variant="h6" style={{ marginTop: "20px" }}>
          Ratings {this.state.tour.Ratings}
        </Typography>
        <h2 style={{ marginTop: "100px", color: "#339ba5" }}>
          Overview of {this.state.tour.Title}
        </h2>
        <Typography variant="h6" style={{ marginRight: "500px" }}>
          {this.state.tour.Facilities}
        </Typography>
        <h2 style={{ marginTop: "190px", color: "#339ba5" }}>
          Facilities of {this.state.tour.Title}
        </h2>

        <h1 style={{ color: "#339ba5" }}>
          Reviews about {this.state.tour.Title}
        </h1>
        <Comments tourId={this.state.tour._id} />

        <h1 style={{ color: "#339ba5", marginTop: "100px" }}>
          {" "}
          Give Your Raviews and Rate {this.state.tour.Title}{" "}
        </h1>
        <SingleComment tourId={this.state.tour._id} />

        {/*
        <h2>Related Hotesls</h2>
         <img
          src={this.state.Image}
          style={{
            position: "absolute",
            marginLeft: "0px",
            marginBottom: "60px",
            height: "250px",
            width: "300px",
            backgroundColor: grey[50],
          }}
          alt="hotel"
        />
        <img
          src={this.state.Image}
          style={{
            position: "absolute",
            marginLeft: "400px",
            marginBottom: "60px",
            height: "250px",
            width: "300px",
            backgroundColor: grey[50],
          }}
          alt="hotel"
        />
        <img
          src={this.state.Image}
          style={{
            position: "absolute",
            marginLeft: "800px",
            marginBottom: "60px",
            height: "250px",
            width: "300px",
            backgroundColor: grey[50],
          }}
          alt="hotel"
        />
        <img
          src={this.state.Image}
          style={{
            position: "absolute",
            marginLeft: "1200px",
            marginBottom: "60px",
            height: "250px",
            width: "300px",
            backgroundColor: grey[50],
          }}
          alt="hotel"
        /> */}
      </div>
    );
  }
}
export default withRouter(TourDetailPage);
{
  /* <Comment.Group>
    <Comment>
      <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />
      <Comment.Content>
        <Comment.Author>Stevie Feliciano</Comment.Author>
        <Comment.Metadata>
          <div>2 days ago</div>
          <div>
            <Icon name='star' />5 Faves
          </div>
        </Comment.Metadata>
        <Comment.Text>
          Hey guys, I hope this example comment is helping you read this
          documentation.
        </Comment.Text>
      </Comment.Content>
    </Comment>
  </Comment.Group> */
}
