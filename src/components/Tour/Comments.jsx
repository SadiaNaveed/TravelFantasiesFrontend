import { Box } from "@material-ui/core";
import { AddComment } from "@material-ui/icons";
import React, { Component } from "react";
import TourReviewService from "../../services/TourReviewService";
import SingleComment from "./SingleComment";
import StarReview from "./StarReview";
import starFull from "../../Asserts/star_full.png";
import starHalf from "../../Asserts/star_half.png";
import ReactStars from "react-rating-stars-component";
import StarRatings from "react-star-ratings";
import starEmpty from "../../Asserts/star_empty.png";
import { Container, Row, Col, Button, Card, CardTitle, CardText,CardBody, CardSubtitle,Badge} from "reactstrap";

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
      tourId: 0,
      starComponents: [],
    };
    this.starReview = this.starReview.bind(this);
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
    this.setState({ tourId: props.tourId });
    console.log(this.state.tourId);
    TourReviewService.getTourReview(this.props.tourId)
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

    // Full Star
    for (var i = 0; i < fullStar; i++) {
      this.state.starComponents.push(
        <img
          key={`full-${index}`}
          source={starFull}
          //resizemode="cover"
          style={{
            width: 200,
            height: 200,
          }}
        />
      );
    }
    // this.setState({ myArray: [...this.state.myArray, ...[1, 2, 3]] }); //another array

    // // Half Star
    // for (var i = 0; i < halfStar; i++) {
    //   this.state.starComponents.push(
    //     <img
    //       key={`half-${i}`}
    //       source={starHalf}
    //       //  resizeMode="cover"

    //       style={{
    //         width: 20,
    //         height: 20,
    //       }}
    //     />
    //   );
    // }

    // // No Star
    // for (var i = 0; i < noStar; i++) {
    //   this.state.starComponents.push(
    //     <img
    //       key={`empty-${i}`}
    //       source={starEmpty}
    //       //resizeMode="cover"
    //       style={{
    //         width: 20,
    //         height: 20,
    //       }}
    //     />
    //   );
    // }
    // console.log(this.state.starComponents);
  }
  render() {
    return (
      <div style={{ margin: "20px" }}>
        {this.state.Comments.length == 0 ? (
          <p>Be The First To Give Your Review</p>
        ) : (
          <div>
            {this.state.Comments.map((comment, index) => (
              <Box key={index}>
                <div>
                  <h4>{comment.Username}</h4>
                  <StarRatings
                    rating={comment.Ratings}
                    starRatedColor="yellow"
                    starDimension="40px"
                    starSpacing="15px"
                  />
                  <small>{comment.Date}</small>
                  {/* <Col>
                <textarea
                  name="Message"
                  id="reviewer-message"
                  rows="4"
                  placeholder="Your Message"
                  
                />
                </Col> */}
                <p>{comment.Comment}</p>
              
                  
                  {comment.Image ? (
                    ((comment.Image =
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
                          alt="tour"
                        />
                      </div>
                    ))
                  ) : (
                    <p>No Image</p>
                  )}
                  {/* {this.state.starComponents} */}
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