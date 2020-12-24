import React, { Component } from "react";

export class AddComment extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.comment.Comment}</h2>
      </div>
    );
  }
}

export default AddComment;
