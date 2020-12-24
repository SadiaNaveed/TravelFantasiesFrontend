import React, { Component } from "react";
import CommentsBlock from "simple-react-comments";
import userService from "../../services/UserService";
import user from "../../Asserts/userImage.jpg";

export class SingleComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      comments: [],
      user: [],
    };
    this.myChangeHandler = this.myChangeHandler.bind(this);
  }
  myChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  };
  componentDidMount() {
    //const { handle } = this.props.history.hotel
    const userId = userService.getLoggedInUser()._id;
    userService
      .getSingleUser(userId)
      .then((data) => {
        this.setState({ user: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <form>
          <h1>Hello {this.state.username}</h1>
          <p>Enter your name:</p>
          <input type="text" onChange={this.myChangeHandler} />
        </form>
        <CommentsBlock
          comments={this.state.comments}
          signinUrl={"/login"}
          isLoggedIn
          // reactRouter // set to true if you are using react-router
          onSubmit={(text) => {
            if (text.length > 0) {
              this.setState({
                comments: [
                  ...this.state.comments,
                  {
                    authorUrl: null,
                    avatarUrl: <img src={user} alt="user" />,
                    createdAt: new Date(),
                    fullName: userService.getLoggedInUser().name,
                    text,
                  },
                ],
              });
              console.log("submit:", text);
            }
            //Hotel
          }}
        />
      </div>
    );
  }
}

export default SingleComment;
