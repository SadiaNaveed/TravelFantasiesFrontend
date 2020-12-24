import { Box } from "@material-ui/core";
import React, { Component } from "react";

export class AddComment extends Component {
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

  render() {
    return <h2>{this.props.Comment.Comment}</h2>;
  }
}

export default AddComment;
