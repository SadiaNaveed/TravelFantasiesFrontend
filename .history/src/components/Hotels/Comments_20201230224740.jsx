import { Box } from "@material-ui/core";
import { AddComment } from "@material-ui/icons";
import React, { Component } from "react";
import HotelReviewService from "../../services/HotelReviewService";
import SingleComment from "./SingleComment";
import StarReview from "./StarReview";
import starFull from "../../Asserts/star_full.png";
import starHalf from "../../Asserts/star_half.png";
import ReactStars from "react-rating-stars-component";
import StarRatings from "react-star-ratings";
import starEmpty from "../../Asserts/star_empty.png";

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
      starComponents: [],
    };
    this.starReview = this.starReview.bind(this);
  }

  componentWillReceiveProps(props) {
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
  starReview(index, rate) {
    console.log("in star review");
    var fullStar = Math.floor(rate);
    var noStar = Math.floor(5 - rate);
    var halfStar = 5 - fullStar - noStar;

    for (var i = 0; i < fullStar; i++) {
      this.state.starComponents.push(
        <img
          key={`full-${index}`}
          source={starFull}
          style={{
            width: 200,
            height: 200,
          }}
        />
      );
    }
  }
  render() {
    return (
      <div style={{ margin: "20px" }}>
        {this.state.Comments.length == 0 ? (
          <p>Be The First To Give Your Review</p>
        ) : (
          <div>
            {this.state.Comments.map((comment, index) => (
              <Box
                p="10px"
                bgcolor="#F0FFF0"
                mx="30px"
                borderRadius="6px"
                margin="10px"
                marginBottom="10px"
                border="0.5px solid"
                borderColor="grey"
                key={index}
              >
                <div>
                  <h4 style={{ color: "#339ba5", float: "left" }}>
                    {comment.Username}
                  </h4>
                  <small style={{ marginLeft: "30px" }}>{comment.Date}</small>
                  <StarRatings
                    rating={comment.Ratings}
                    starRatedColor="yellow"
                    starDimension="40px"
                    starSpacing="15px"
                    style={{ float: "left" }}
                  />

                  <p>{comment.Comment}</p>
                  {comment.Image
                    ? ((comment.Image =
                        "data:image/jpeg;base64," +
                        this.arrayBufferToBase64(comment.Image.data.data)),
                      (
                        <div>
                          <img
                            src={comment.Image}
                            style={{
                              marginLeft: "10px",
                              height: "300px",
                              width: "310px",
                              backgroundColor: "blue",
                            }}
                            alt="hotel"
                          />
                        </div>
                      ))
                    : null}
                </div>
              </Box>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Comments;
