import React, { Component } from "react";

export class AddComment extends Component {
  render() {
    console.log(this.props.Comment.UserId);
    return (
      <div>
        <h2>{this.props.Comment.UserId}</h2>
        <h3>hhh</h3>
      </div>
    );
  }
}

export default AddComment;
