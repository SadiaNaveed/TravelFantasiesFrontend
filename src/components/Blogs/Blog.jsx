import React, { Component, useCallback, useEffect } from "react";
import BlogService from "../../services/BlogService";
import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Sidebar from "../Sidebar";
import { Button, Card, CardContent, CardMedia, Grid } from "@material-ui/core";
import SingleBlog from "./SingleBlog";
import { UncontrolledCarousel } from "reactstrap";

const useStyles = (theme) => ({
  root: {
    display: "flex",
    marginTop: "50px",
  },
  card: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  media: {
    display: "flex",
    height: "10px",
    //  objectFit: "contain",
    alignItems: "left",
    width: "270px",
  },
});

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Media: "",
      Title:"",
      Description: " ",
      Blogs: [],
    };
  }

  arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }
  componentDidMount() {
    BlogService
      .getBlog(this.props.page, this.props.perPage)
      .then((data) => {
        this.setState({ Blogs: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const handleChange = async (value) => {
      this.setState({ city: value });
    };

    const classes = useStyles();
    const items = [
      {
        src: require("../../blog1.jpg"),
        height: "30 px",
        altText: "Slide 1",
        caption: "Starting from 200$",
        header: "Give a look on Blogs",
        key: "1",
      },

      {
        src: require("../../blog4.jpeg"),
        height: "30 px",
        altText: "Slide 3",
        caption: "Starting From 100$",
        header: "Hit The Road of Adventure With Friends ",
        key: "3",
      },
      {
        src: require("../../blog2.jpeg"),
        height: "30 px",
        altText: "Slide 2",
        caption: "Honeymoon Starting From 500$",
        header: "Spend Pleasure Time With Your Better Half",
        key: "2",
      },
    ];

    return (
      <div>
       <UncontrolledCarousel className="danger" items={items} />
        {this.state.blogs.length == 0 ? (
          <p>There are no Blogs</p>
        ) : (
          <Grid container spacing={4}>
            {this.state.blogs.map((blog, index) => (
              <SingleBlog key={index} Blog={blog} />
            ))}
          </Grid>
        )}
      </div>
    );
  }
}
export default withStyles(useStyles)(Blog);