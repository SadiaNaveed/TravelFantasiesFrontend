import { Box } from "@material-ui/core";
import { AddComment } from "@material-ui/icons";
import React, { Component } from "react";
import HotelReviewService from "../../services/HotelReviewService";
import SingleComment from "./SingleComment";
import StarReview from "./StarReview";
import starFull from "../../Asserts/star_full.png";
import starHalf from "../../Asserts/star_half.png";
import starEmpty from "../../Asserts/star_empty.png";

const StarReview({ rate }) {
  var starComponents = [];
  var fullStar = Math.floor(rate);
  var noStar = Math.floor(5 - rate);
  var halfStar = 5 - fullStar - noStar;

  // Full Star
  for (var i = 0; i < fullStar; i++) {
    starComponents.push(
      <img
        key={`full-${i}`}
        source={starFull}
        resizeMode="cover"
        style={{
          width: 20,
          height: 20,
        }}
      />
    );
  }

  // Half Star
  for (var i = 0; i < halfStar; i++) {
    starComponents.push(
      <img
        key={`half-${i}`}
        source={starHalf}
        resizeMode="cover"
        style={{
          width: 20,
          height: 20,
        }}
      />
    );
  }

  // No Star
  for (var i = 0; i < noStar; i++) {
    starComponents.push(
      <img
        key={`empty-${i}`}
        source={starEmpty}
        resizeMode="cover"
        style={{
          width: 20,
          height: 20,
        }}
      />
    );
  }
}
export class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      ratings: 0,
      selectedFile: [],
      comment: "",
      Comments: [],
      user: [],
      hotelId: 0,
    };
  }

  // componentDidMount(props) {
  //   //const { handle } = this.props.history.hotel
  //   const _this = this;
  //   const hotelid = _this.props.hotelId;
  //   console.log(this.state.hotelId);
  //   //console.log(props.hotelId);
  // }
  componentWillReceiveProps(props) {
    // Update the chart with new data every time we receive props.
    this.setState({ hotelId: props.hotelId });
    console.log(this.state.hotelId);
    HotelReviewService.getHotelReview(this.props.hotelId)
      .then((data) => {
        this.setState({ Comments: data });
        console.log(this.state.Comments);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }
  render() {
    return (
      <div style={{ margin: "20px" }}>
        {this.state.Comments.map((comment, index) => (
          // comment.Image &&
          // (comment.Image =
          //   "data:image/jpeg;base64," +
          //   this.arrayBufferToBase64(comment.Image.data.data)),
          //   ((
          // <img
          //   src={comment.Image}
          //   style={{ height: "30px", width: "30px" }}
          //   alt="Helpful alt text"
          // />
          // ),
          // <AddComment key={index} Comment={comment} />
          // <h3>{comment.Comment}</h3>
          <Box>
            <div className="comment">
              <header className="clearfix">
                <h4>{comment.Username}</h4>
                <small>{comment.Date}</small>
              </header>
              <p>{comment.Comment}</p>
              <StarReview rate={comment.Ratings} />
            </div>
          </Box>
        ))}
        {/* <SingleComment hotelId={this.props.hotelId} /> */}
      </div>
    );
  }
}

export default Comments;
