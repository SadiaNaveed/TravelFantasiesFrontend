import React, { Component } from "react";
import { Grid, Button, Typography, Box, makeStyles, CssBaseline } from "@material-ui/core";
import { useHistory, withRouter } from "react-router";
import { grey } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
import queryString from 'query-string';  
// import { Comment, Icon } from 'semantic-ui-react'
import blogService from "../../../services/BlogService";
import AppBarComponenet from "./AppBar";



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


class BlogView extends Component {
  constructor(props) {
        super(props);
      this.state = {
          Blog: [],
          Image: " ",
          Title: " ",
          Description: " ",

        }

    }
    arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };
     componentDidMount () {
         //const { handle } = this.props.history.Blog
         const BlogId = queryString.parse(this.props.history.location.search);
         const BlogSearch = BlogId.Blog;
         console.log( BlogSearch);
     BlogService
     .getSingleBlog(BlogSearch)
        .then((data) => {
            this.setState({ Blog: data });
            this.setState({
                Image: 'data:image/jpeg;base64,' + this.arrayBufferToBase64(this.state.Blog.Image.data.data)
            });
        })
        .catch((err) => {
          console.log(err);
        });
         
    };
     
    render() {
        return (
          <div> 
            <CssBaseline />
      <AppBarComponenet />
            <div style={{ marginLeft: "50px", marginTop: "120px", marginBottom:"50px" }}>
               <img src={this.state.Image} style={{ position:"absolute",marginLeft: "1000px", height: "500px", width: "610px", backgroundColor: grey[50] }} alt="Blog" />   
                    <Typography variant='h4' style={{marginLeft:"20px", color:"#339ba5" , fontStyle:"bold"}}>
                    {this.state.Blog.Title}
                </Typography>
                <h2 style={{marginTop:"100px", color:"#339ba5"}}>Description {this.state.Blog.Title}</h2>
                <Typography variant='h6' style={{marginRight:"800px"}}>
                     {this.state.Blog.Description}
                </Typography>
                

             </div>
                    
   
            </div>
        );
    }
};
export default withRouter(BlogView);