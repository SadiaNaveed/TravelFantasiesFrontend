import { AddComment } from "@material-ui/icons";
import React, { Component } from "react";
import HotelReviewService from "../../services/HotelReviewService";

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
        {this.state.Comments.map(
          (comment, index) => (
            comment.Image &&
              (comment.Image =
                "data:image/jpeg;base64," +
                this.arrayBufferToBase64(comment.Image.data.data)),
            console.log(comment.Image),
            ((
              <img
                src={comment.Image}
                style={{ height: "30px", width: "30px" }}
                alt="Helpful alt text"
              />
            ),
            (<h5>{comment.Comment}</h5>))
            // (
            //   // console.log(comment.Comment),
            //
            // )
          )
        )}
      </div>
    );
  }
}

export default Comments;
