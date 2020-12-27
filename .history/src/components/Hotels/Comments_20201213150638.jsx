import React, { Component } from "react";

export class Comments extends Component {
  componentDidMount() {
    //const { handle } = this.props.history.hotel
    const userId = userService.getLoggedInUser()._id;
    userService
      .getSingleUser(userId)
      .then((data) => {
        this.setState({ user: data });
        this.setState({ username: data.name });
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
