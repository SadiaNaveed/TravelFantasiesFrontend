import React, { Component } from "react";

export class AddComment extends Component {
  render() {
    return <div>{this.props.comment.Comment}</div>;
  }
}

export default AddComment;
