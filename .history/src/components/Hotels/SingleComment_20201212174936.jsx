import React, { Component } from "react";

export class SingleComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
    this.onBookingButtonClick = this.onBookingButtonClick.bind(this);
  }
  myChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  };
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
