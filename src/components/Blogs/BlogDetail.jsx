import React, { Component } from "react";
import {
  Typography,
  makeStyles,
  CssBaseline,
} from "@material-ui/core";
import { useHistory, withRouter } from "react-router";
import { grey } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
import queryString from "query-string";
import blogService from "../../services/BlogService";
import ReactStars from "react-rating-stars-component";
//import CommentsBlock from "simple-react-comments";
import AppBarComponenet from "../Admin/fragments/AppBar";
import { ThreeSixty } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
  link: {
    color: "#339ba5",
    paddingRight: "2rem",
    fontFamily: "Times New Roman",
    //   fontDisplay: "swap",
    fontStyle: "italic",
    fontSize: 24,
    fontWeight: 700,
  },
}));

class BlogDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: [],
      Image: " ",
    };
  }

  arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }
  componentDidMount() {
    const blogId = queryString.parse(this.props.history.location.search);
    const blogSearch = blogId.blog;
    console.log(blogSearch);
    blogService
      .getSingleBlog(blogSearch)
      .then((data) => {
        this.setState({ blog: data });
        this.setState({
          Image:
            "data:image/jpeg;base64," +
            this.arrayBufferToBase64(this.state.blog.Image.data.data),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { blog, history } = this.props;
    console.log(this.props.history);
    return (
      <div style={{ marginTop: "10px", marginBottom: "400px" }}>
          <h1>
              hi
          </h1>
        {/* <CssBaseline />
        {/* <AppBarComponenet />
        <img
          src={this.state.Image}
          style={{
            position: "absolute",
            marginLeft: "900px",
            height: "500px",
            width: "400px",
            backgroundColor: grey[50],
          }}
          alt="blog"
        />

        <Typography
          variant="h4"
          style={{ marginLeft: "20px", color: "#339ba5", fontStyle: "bold" }}
        >
          {this.state.blog.Title}
        </Typography>
        <Typography variant="h5" style={{ marginLeft: "20px" }}>
          {this.state.blog.Description}
        </Typography> */}
        
      </div>
    );
  }
}
export default withRouter(BlogDetail);