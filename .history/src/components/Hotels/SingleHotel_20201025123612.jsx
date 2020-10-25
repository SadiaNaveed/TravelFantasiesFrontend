import React, { Component } from "react";
import { Grid, Button, Typography, Box, makeStyles } from "@material-ui/core";
// import hotelService from "../../services/HotelService";
import { useHistory, withRouter } from "react-router";
import { grey } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
//import userService from "../../services/UserService";
import HotelDetail from "./HotelDetail";
import HotelBooking from "./HotelBooking";
  


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
// const handleClick = () => {
//   <HotelBooking/>
// }
 class SingleHotel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: 'false',         
        }
        //  this.onButtonClick = this.onButtonClick.bind(this);    
    }

   onButtonClick = () => {
     localStorage.setItem("pageData", this.props.hotel)
       // route to new page by changing window.location
     window.open("/HotelDetail", "_blank") //to open new page
  }
  // const { hotel, history } = props;
componentWillMount() {
  localStorage.pagedata= this.props.hotel;
  // set the data in state and use it through the component
  localStorage.removeItem("pagedata");
  // removing the data from localStorage.  Since if user clicks for another invoice it overrides this data
}
   render()

   {
       const { hotel, history } = this.props;

    return (
      <Box p="10px" bgcolor="#F0FFF0" height="500px" mx="30px" borderRadius="6px" margin="10px" marginBottom="70px" border="1px solid" borderColor="#C0C0C0">
        <img src={this.props.hotel.Image} style={{ marginLeft: "10px", height: "300px", width: "310px", backgroundColor: grey[50] }} alt="hotel" />

        <Typography variant='h4'>
          {this.props.hotel.HotelName}
        </Typography>
        <Typography variant='h5'>
          Location {this.props.hotel.Location}
        </Typography>
        <Typography variant='h6'>
          Ratings {this.props.hotel.Ratings}
        </Typography>
        {/* onClick={this.onButtonClick} */}
        
        <Button style={{ backgroundColor: "#4CAF50" }} onClick= {this.onButtonClick} >
          Book Now 
       </Button>
        <Button style={{
          backgroundColor: "#e7e7e7", color: "black", marginLeft: "5px",
          marginRight: "5px"
        }}
        >
          View Details
      </Button>
        <Button style={{ backgroundColor: "#008CBA" }}>
          View on Map
      </Button>
      </Box>


  
    );
  }
};
export default withRouter(SingleHotel);
