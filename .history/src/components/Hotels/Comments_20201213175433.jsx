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
    };
  }

  componentDidMount() {
    //const { handle } = this.props.history.hotel
    const hotelid = this.props.hotelId;
    console.log(hotelid);
    // HotelReviewService.getHotelReview(this.props.hotelId)
    //   .then((data) => {
    //     this.setState({ Comments: data });
    //     console.log(this.state.Comments);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  render() {
    return <div></div>;
  }
}

export default Comments;
