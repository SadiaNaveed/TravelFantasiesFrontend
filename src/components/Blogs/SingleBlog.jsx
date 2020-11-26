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
        }
    }

   onButtonClick = () => {
     this.props.history.push({
        pathname: '/BlogDetail',
       search: '?blog=' + this.props.hotel._id,
       
     })
     
   }

   
   render()

   {
       const { blog, history } = this.props;

    return (
      <Box p="10px" bgcolor="#F0FFF0" height="500px" mx="30px" borderRadius="6px" margin="10px" marginBottom="70px" border="1px solid" borderColor="#C0C0C0">
        <img src={this.props.blog.Image} style={{ marginLeft: "10px", height: "300px", width: "310px", backgroundColor: grey[50] }} alt="hotel" />

        <Typography variant='h4'>
          {this.props.blog.Title}
        </Typography>
        <Typography variant='h5'>
          Location {this.props.blog.Link}
        </Typography>
        <Typography variant='h6'>
          Ratings {this.props.blog.Description}
        </Typography>
        
        <Button style={{
          backgroundColor: "#e7e7e7", color: "black", marginLeft: "5px",
          marginRight: "5px"
        }} onClick= {this.onButtonClick}
        >
          View Blog
      </Button>
      </Box>

  
    );
  }
};
export default withRouter(SingleBlog);