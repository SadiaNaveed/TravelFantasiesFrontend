import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { CardLink } from "reactstrap";

import {
  Grid,
  Button,
  Typography,
  Box,
  makeStyles,
  CssBaseline,
} from "@material-ui/core";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardSubtitle,
} from "reactstrap";
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
import SingleComment from "./SingleComment";
import Comments from "./Comments";
import Axios from "axios";
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

class TourDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tour: [],
      guides: [],
      Image: " ",
      comments: [],
      ratings: 0,
    };
  }

  GuideDetail(guide) {
    //console.log(guide);
    this.props.setcurrentGuide(guide);
  }

  arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }

  componentDidMount() {
    //const { handle } = this.props.history.hotel
    const tourId = queryString.parse(this.props.history.location.search);
    const tourSearch = tourId.tour;
    Axios.post("http://localhost:4000/api/RequestGuide/tour", {
      tourId: tourId,
    })
      .then((res) => {
        console.log(res.data, "related guide");
        this.setState({ guides: res.data });
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(tourSearch);
    tourService
      .getSingleTour(tourSearch)
      .then((data) => {
        this.setState({ tour: data });
        this.setState({
          Image:
            "data:image/jpeg;base64," +
            this.arrayBufferToBase64(this.state.tour.Images.data.data),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  addGuide(tourId) {
    // console.log(tourId.tour, userService.getLoggedInUser()._id)
    Axios.post("http://localhost:4000/api/RequestGuide", {
      Tour_Id: tourId.tour,
      Guide_Id: userService.getLoggedInUser()._id,
      Status: false,
    })
      .then((res) => {
        alert("Guide Added successfllly!");
      })
      .catch((err) => {
        console.log("--error--", err);
      });
  }

  render() {
    const { tour, history } = this.props;
    console.log(this.props.history);
    // const classes = useStyles();
    return (
      <div style={{ marginTop: "10px", marginBottom: "400px" }}>
        <CssBaseline />
        {/* <AppBarComponenet /> */}
        <img
          src={this.state.Image}
          style={{
            position: "absolute",
            marginLeft: "1100px",
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
          {this.state.tour.TourName}
        </Typography>
        <Typography variant="h5" style={{ marginLeft: "20px" }}>
          {this.state.tour.Location}
        </Typography>

        <h2 style={{ marginTop: "100px", color: "#339ba5" }}>
          Overview of {this.state.tour.TourName}
        </h2>
        <Typography variant="h6" style={{ marginRight: "500px" }}>
          {this.state.tour.Description}
        </Typography>
        <h2 style={{ marginTop: "190px", color: "#339ba5" }}>
          Facilities of {this.state.tour.TourName}
        </h2>
        <Typography variant="h6" style={{ marginRight: "500px" }}>
          {this.state.tour.Facilities}
        </Typography>

        <Row style={{ marginTop: "10px", marginBottom: "400px" }}>
          <Col sm="4">
            <Card
              style={{
                position: "absolute",
                marginTop: "1px",
                marginLeft: "1100px",
                height: "400px",
                width: "350px",
                //backgroundColor: "#339ba5",
              }}
              body
              outline
              color="danger"
            >
              <CardBody>
                <CardTitle tag="h5"></CardTitle>
                <CardTitle tag="h3">Cost</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  {this.state.tour.Cost}
                </CardSubtitle>
                <CardTitle tag="h3">Days</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  {this.state.tour.no_of_days}days
                </CardSubtitle>
                <CardTitle tag="h5"></CardTitle>
                <CardTitle tag="h3">Persons</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  {" "}
                  {this.state.tour.Total_Seats}
                </CardSubtitle>
                <CardTitle tag="h5"></CardTitle>

                <Link to={"/book-tour"} style={{ textDecoration: "none" }}>
                  <Col col="3" md="12">
                    <Button
                      style={{
                        backgroundColor: "#e7e7e7",
                        color: "black",
                        marginLeft: "5px",
                        marginRight: "5px",
                      }}
                    >
                      Book Now
                    </Button>
                  </Col>
                </Link>

                <CardTitle tag="h5"></CardTitle>
                <div>
                  {/* <Link to={"/book-packages"} style={{ textDecoration: "none" }}> */}
                  <Col col="3" md="12">
                    <Button
                      onClick={() =>
                        this.addGuide(
                          queryString.parse(this.props.history.location.search)
                        )
                      }
                      style={{
                        backgroundColor: "#e7e7e7",
                        color: "black",
                        marginLeft: "5px",
                        marginRight: "5px",
                      }}
                    >
                      Add me as guide
                    </Button>
                  </Col>
                  {/* </Link> */}
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* <h2 style={{ marginLeft: "1100px", color: "#339ba5" }}>
        Cost 
        </h2>
        <Typography variant="h5" style={{ marginLeft: "1100px" }}>
          {this.state.tour.Cost}
        </Typography>
        <h2 style={{ marginLeft: "1100px", color: "#339ba5" }}>
        Days 
        </h2>
        <Typography variant="h5" style={{ marginLeft: "1100px" }}>
          {this.state.tour.no_of_days}days
        </Typography>
        <h2 style={{ marginLeft: "1100px", color: "#339ba5" }}>
        Persons 
        </h2>
        <Typography variant="h5" style={{ marginLeft: "1100px" }}>
          {this.state.tour.Total_Seats}
        </Typography>
         */}

        <h1 style={{ color: "#339ba5" }}>
          Reviews about {this.state.tour.TourName}
        </h1>
        <Comments tourId={this.state.tour._id} />

        <h1 style={{ color: "#339ba5", marginTop: "100px" }}>
          {" "}
          Give Your Raviews and Rate {this.state.tour.TourName}{" "}
        </h1>
        <SingleComment tourId={this.state.tour._id} />

        <h2>Related Guides</h2>

        {/* <div
          style={{
            alignSelf: "center",
            justifyContent: "space-around",
            marginRight: 30,
            marginLeft: 30,
          }}
        > */}
        {this.state.guides.map((guide, index) => {
          return (
            <row>
              <Col sm="4">
                <ScrollAnimation
                  animateIn="animate__fadeInLeft"
                  animateOut="animate__fadeOutLeft"
                >
                  <Card>
                    <CardBody>
                      <CardTitle tag="h5"> </CardTitle>
                      <CardSubtitle tag="h6" className="mb-2 text-muted">
                        Explore places with the help of guide
                      </CardSubtitle>
                    </CardBody>
                    <img
                      width="50%"
                      src={require("../../pic/user_male2-512.png")}
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardText>{guide.GuideName}</CardText>
                      {/* <CardLink>
                    <Link to={"/book-tour"} style={{ textDecoration: "none" }}>
                      Book Now
                    </Link>
                  </CardLink> */}
                      <CardLink>
                        <Link
                          to={"/GuideDetail"}
                          style={{ textDecoration: "none" }}
                        >
                          <Button
                            onClick={() => this.GuideDetail(guide)}
                            style={{ marginTop: 50 }}
                            outline
                            color="info"
                          >
                            Learn More
                          </Button>
                        </Link>
                      </CardLink>
                    </CardBody>
                  </Card>
                </ScrollAnimation>
              </Col>
            </row>
          );
        })}
        {/* </div> */}

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
export default withRouter(TourDetail);
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
