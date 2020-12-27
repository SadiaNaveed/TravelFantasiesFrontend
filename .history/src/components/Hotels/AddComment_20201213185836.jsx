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
    return (
      <Box
        p="10px"
        bgcolor="#F0FFF0"
        height="500px"
        mx="30px"
        borderRadius="6px"
        margin="10px"
        marginBottom="70px"
        border="1px solid"
        borderColor="#C0C0C0"
      >
        {/* <h2>{this.props.Comment.UserId}</h2> */}
      </Box>
    );
  }
}

export default AddComment;
