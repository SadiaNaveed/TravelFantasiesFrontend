import React, { Component } from "react";

export class SingleComment extends Component {
  render() {
    return (
      <div>
        <form>
          <h1>Hello {this.state.username}</h1>
          <p>Enter your name:</p>
          <input type="text" onChange={this.myChangeHandler} />
        </form>
      </div>
    );
  }
}

export default SingleComment;
