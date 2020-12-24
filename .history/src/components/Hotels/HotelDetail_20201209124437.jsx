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
import HotelBooking from "./HotelBooking";
import queryString from "query-string";
// import { Comment, Icon } from 'semantic-ui-react'
import hotelService from "../../services/HotelService";
import ReactStars from "react-rating-stars-component";
import CommentsBlock from "simple-react-comments";
import AppBarComponenet from "../Admin/fragments/AppBar";
import { ThreeSixty } from "@material-ui/icons";
import roomService from "../../services/RoomService";
import SingleRoom from "./SingleRoom";

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

class HotelDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotel: [],
      Image: " ",
      comments: [],
      rooms: [],
      ratings: 0,
    };
    this.ratingChanged = this.ratingChanged.bind(this);
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

    roomService
      .getHotelRoom(hotelSearch)
      .then((data) => {
        this.setState({ rooms: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ratingChanged(newRating) {
    console.log(newRating);
    this.setState({ ratings: newRating });
  }
  render() {
    const { hotel, history } = this.props;
    console.log(this.props.history);
    // const classes = useStyles();
    return (
      <div
        style={{ marginTop: "10px", marginBottom: "400px", marginLeft: "0px" }}
      >
        <CssBaseline />
        {/* <AppBarComponenet /> */}
        <img
          src={this.state.Image}
          style={{
            position: "absolute",
            marginLeft: "1000px",
            height: "500px",
            width: "610px",
            backgroundColor: grey[50],
          }}
          alt="hotel"
        />

        <Typography
          variant="h4"
          style={{ marginLeft: "20px", color: "#339ba5", fontStyle: "bold" }}
        >
          {this.state.hotel.HotelName}
        </Typography>
        <Typography variant="h5" style={{ marginLeft: "20px" }}>
          {this.state.hotel.Location}
        </Typography>
        <Typography variant="h6" style={{ marginTop: "20px" }}>
          Ratings {this.state.hotel.Ratings}
        </Typography>
        <h2 style={{ marginTop: "100px", color: "#339ba5" }}>
          Overview of {this.state.hotel.HotelName}
        </h2>
        <Typography variant="h6" style={{ marginRight: "800px" }}>
          {this.state.hotel.Facilities}
        </Typography>
        <h2 style={{ marginTop: "190px", color: "#339ba5" }}>
          Facilities of {this.state.hotel.HotelName}
        </h2>
        <Typography variant="h6" style={{ marginRight: "800px" }}>
          {this.state.hotel.Facilities}
        </Typography>
        <h2 style={{ marginTop: "190px", color: "#339ba5" }}>
          Rooms of {this.state.hotel.HotelName}
        </h2>

        {this.state.rooms.map(
          (room, index) => (
            (room.Image =
              "data:image/jpeg;base64," +
              this.arrayBufferToBase64(room.Image.data.data)),
            (
              // console.log(hotel.Image),
              // <img src={hotel.Image} style={{height:"30px",width: "30px"}} alt='Helpful alt text'/>

              <SingleRoom key={index} room={room} />
            )
          )
        )}

        <h1 style={{ color: "#339ba5", marginTop: "300px" }}>
          {" "}
          Rate {this.state.hotel.HotelName}{" "}
        </h1>
        <ReactStars
          count={5}
          onChange={this.ratingChanged}
          size={50}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
        />
        <h1 style={{ color: "#339ba5" }}>
          Reviews about {this.state.hotel.HotelName}
        </h1>
        <CommentsBlock
          comments={this.state.comments}
          signinUrl={"/login"}
          isLoggedIn
          // reactRouter // set to true if you are using react-router
          onSubmit={(text) => {
            if (text.length > 0) {
              this.setState({
                comments: [
                  ...this.state.comments,
                  {
                    authorUrl: "mamskm",
                    avatarUrl: "mdkmsk",
                    createdAt: new Date(),
                    fullName: "Name",
                    text,
                  },
                ],
              });
              console.log("submit:", text);
            }
            //Hotel
          }}
        />

        {/* <Comment.Group>
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
  </Comment.Group> */}

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
        />
      </div>
    );
  }
}
export default withRouter(HotelDetail);
