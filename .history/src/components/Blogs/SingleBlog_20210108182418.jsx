import React, { Component } from "react";
import { Grid, Button, Typography, Box, makeStyles } from "@material-ui/core";
import { useHistory, withRouter } from "react-router";
import { grey } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
  


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

 class SingleBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: 'false',         
        };
    }

arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }

   onButtonClick = () => {
     this.props.history.push({
        pathname: '/BlogDetail',
       search: '?blog=' + this.props.blogs._id,
       
     })
     
   }

   
   render()

   {
       const { blog, history } = this.props;

    return (
      <Box p="10px"
      bgcolor="#F0FFF0"
      height="385px"
      mx="50px"
      borderRadius="6px"
      marginLeft="70px"
      marginTop="30px"
      marginBottom="30px"
      border="1px solid"
      borderColor="#C0C0C0"
      >
         {this.props.blogs.Image ? (
          ((this.props.blogs.Image =
            "data:image/jpeg;base64," +
            this.arrayBufferToBase64(this.props.blogs.Image.data.data)),
          (
            <div>
              <img
                src={this.props.blogs.Image}
                style={{
                  marginLeft: "10px",
                  height: "250px",
                  width: "230px",
                  backgroundColor: "blue",
                }}
                alt="blog"
              />
            </div>
          ))
        ) : (
          <p>No Image</p>
        )}
        <Typography variant="h5">Title {this.props.blogs.Title}</Typography>
        
        <Button
          style={{
            backgroundColor: "#008CBA",
            color: "black",
            marginLeft: "5px",
            marginRight: "5px",
          }}
          onClick={this.onButtonClick}
        >
          View More
        </Button>
      </Box>
    );
  }
}
export default withRouter(SingleBlog);