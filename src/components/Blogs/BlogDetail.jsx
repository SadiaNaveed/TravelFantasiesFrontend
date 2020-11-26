import React, { Component } from "react";
import { Grid, Button, Typography, Box, makeStyles, CssBaseline } from "@material-ui/core";
import { useHistory, withRouter } from "react-router";
import { grey } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
import queryString from 'query-string';  
import BlogService from "../../services/BlogService";
import AppBarComponenet from "../Admin/fragments/AppBar";



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
        title: [], 
        link: [],
        description: []

        }   
  }
  
    arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };
     componentDidMount () {
         //const { handle } = this.props.history.hotel
         const blogId = queryString.parse(this.props.history.location.search);
         const blogSearch = bloglId.blog;
         console.log( blogSearch);
     blogService
     .getSingleblog(blogSearch)
         
    };
  
    render() {
        const { blog, history } = this.props;
console.log(this.props.history);
        return (
          <div style={{ marginTop: "160px", marginBottom: "400px", marginLeft: "50px" }}> 
            <CssBaseline />
      <AppBarComponenet />
         <Typography variant='h4' style={{marginLeft:"20px", color:"#339ba5" , fontStyle:"bold"}}>
                    {this.state.blog.title}
                </Typography>
                <Typography variant='h5' style={{marginLeft:"20px"}}>
                    {this.state.blog.link}
                </Typography>
                <Typography variant='h6' style={{marginLeft:"20px"}}>
                    {this.state.blog.description}
                </Typography>
            </div>
           
        );
    }
};
export default withRouter(BlogDetail);