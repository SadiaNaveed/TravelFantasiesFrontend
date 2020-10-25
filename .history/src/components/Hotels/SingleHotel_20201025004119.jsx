import React from "react";
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
    constructor() {
        super();
        this.state = {
            showComponent: 'false',
            
        }
         this.onButtonClick = this.onButtonClick.bind(this);    
    }

  
   onButtonClick = () => {
    setShowComponent(true);
  }
  // const { hotel, history } = props;
  render(){
    return (
      <Box p="10px" bgcolor="#F0FFF0" height="500px" mx="30px" borderRadius="6px" margin="10px" marginBottom="70px" border="1px solid" borderColor="#C0C0C0">
        <img src={hotel.Image} style={{ marginLeft: "10px", height: "300px", width: "310px", backgroundColor: grey[50] }} alt="hotel" />

        <Typography variant='h4'>
          {hotel.HotelName}
        </Typography>
        <Typography variant='h5'>
          Location {hotel.Location}
        </Typography>
        <Typography variant='h6'>
          Ratings {hotel.Ratings}
        </Typography>
        <Button style={{ backgroundColor: "#4CAF50" }} onClick={onButtonClick}>
          Book Now
       </Button>
        {showComponent ? <HotelDetail hotel={hotel} /> : null}
        <Button style={{
          backgroundColor: "#e7e7e7", color: "black", marginLeft: "5px",
          marginRight: "5px"
        }}
          onClick={<HotelDetail />}>
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
