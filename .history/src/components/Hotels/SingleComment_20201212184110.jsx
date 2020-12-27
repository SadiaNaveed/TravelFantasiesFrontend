import React, { Component } from "react";
import CommentsBlock from "simple-react-comments";
import userService from "../../services/UserService";
import user from "../../Asserts/userImage.jpg";
import { useHistory, withRouter } from "react-router";

import ReactStars from "react-rating-stars-component";

export class SingleComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      ratings: 0,
      comments: [
        {
          authorUrl: null,
          avatarUrl: <img src={user} alt="user" />,
          createdAt: new Date(),
          fullName: userService.getLoggedInUser().name,
          text: "snkn",
        },
        {
          authorUrl: null,
          avatarUrl: <img src={user} alt="user" />,
          createdAt: new Date(),
          fullName: userService.getLoggedInUser().name,
          text: "kmkmkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
        },
        {
          authorUrl: null,
          avatarUrl: <img src={user} alt="user" />,
          createdAt: new Date(),
          fullName: userService.getLoggedInUser().name,
          text: "sn,;,;,pkpkikn",
        },
      ],
      user: [],
    };
    this.myChangeHandler = this.myChangeHandler.bind(this);
    this.ratingChanged = this.ratingChanged.bind(this);
  }
  myChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  };
  ratingChanged(newRating) {
    console.log(newRating);
    this.setState({ ratings: newRating });
  }
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
        {/* <form>
          <h1>Hello {this.state.username}</h1>
          <p>Enter your name:</p>
          <input type="text" onChange={this.myChangeHandler} />
        </form> */}
        <h1 style={{ color: "#339ba5", marginTop: "300px" }}>
          Rate Us And Give Your Reviews
        </h1>
        <ReactStars
          count={5}
          onChange={this.ratingChanged}
          size={50}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
        />
        <CommentsBlock
          comments={this.state.comments}
          signinUrl={"/login"}
          isLoggedIn
          reactRouter // set to true if you are using react-router
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
