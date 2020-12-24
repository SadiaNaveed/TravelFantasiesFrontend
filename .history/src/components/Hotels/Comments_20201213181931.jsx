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

  componentDidMount(props) {
    //const { handle } = this.props.history.hotel
    const _this = this;
    const hotelid = _this.props.hotelId;
    console.log(this.state.hotelId);
    //console.log(props.hotelId);
  }
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

  render() {
    return <div></div>;
  }
}

export default Comments;
