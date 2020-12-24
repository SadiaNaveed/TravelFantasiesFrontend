import React, { Component } from "react";
import CommentsBlock from "simple-react-comments";
import userService from "../../services/UserService";
import user from "../../Asserts/userImage.jpg";
import ReactStars from "react-rating-stars-component";
import hotelService from "../../services/HotelService";
import HotelReviewService from "../../services/HotelReviewService";

export class SingleComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      ratings: 0,
      selectedFile: [],
      comment: "",
      user: [],
    };
    this.myChangeHandler = this.myChangeHandler.bind(this);
    this.ratingChanged = this.ratingChanged.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
  }
  handleCommentChange(event) {
    this.setState({ comment: event.target.value });
  }
  myChangeHandler(event) {
    /// this.setState({ username: event.target.value });
    const hotelid = this.props.hotelId;
    console.log(hotelid);
    event.preventDefault();
    const formData = new FormData();
    formData.append("Ratings", this.state.ratings);
    formData.append("HotelId", hotelid);
    formData.append("Comment", this.state.comment);
    formData.append("Username", this.state.username);
    formData.append("UserId", this.state.user._id);

    formData.append("Date", new Date().toLocaleString());
    for (var x = 0; x < this.state.selectedFile.length; x++) {
      formData.append("file", this.state.selectedFile[x]);
    }
    console.log(this.state);
    console.log(formData);
    const data = this.state;
    HotelReviewService.addReview(formData)
      .then((response) => {
        alert(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  ratingChanged(newRating) {
    console.log(newRating);
    this.setState({ ratings: newRating });
  }
  onDrop(event) {
    this.setState({
      selectedFile: event.target.files,
    });
  }
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
    return (
      <div>
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

        {/* <CommentsBlock
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
              this.myChangeHandler();
            }
            //Hotel
          }}
        /> */}
        <form onSubmit={this.myChangeHandler} enctype="multipart/form-data">
          <input type="file" name="file" multiple onChange={this.onDrop} />
          <input type="text" onChange={this.handleCommentChange} />
          <button
            variant="contained"
            style={{
              color: "blue",
              position: "absolute",
              left: "50%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            Add Review{" "}
          </button>
        </form>
      </div>
    );
  }
}

export default SingleComment;
