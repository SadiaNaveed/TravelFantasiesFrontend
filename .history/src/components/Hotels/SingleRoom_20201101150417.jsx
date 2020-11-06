import React, { Component } from "react";
import { Grid, Button, Typography, Box, makeStyles } from "@material-ui/core";
// import hotelService from "../../services/HotelService";
import { useHistory, withRouter } from "react-router";
import { grey } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
//import userService from "../../services/UserService";
import HotelDetail from "./HotelDetail";
import HotelBooking from "./HotelBooking";
import roomCategoryService from "../../services/RoomCategoryService";
  


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
 class SingleRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showComponent: 'false',    
          Category: [],
        }
        //  this.onButtonClick = this.onButtonClick.bind(this);    
    }

   onButtonClick = () => {
     this.props.history.push({
        pathname: '/roomDetail',
       search: '?room=' + this.props.room._id,
       
     })
     
   }
   componentDidMount() {
     roomCategoryService
       .getSingleRoomCategory(this.props.room.Category)
       .then((data) => {
         this.setState({ Category: data });
         console.log(this.state.Category);
         // setTotal(data.total);
         // setPerPage(10);
       })
       .catch((err) => {
         console.log(err);
       });
   };
   
  // const { room, history } = props;

   render()

   {
       const { room, history } = this.props;

    return (
      <Box p="10px" bgcolor="#F0FFF0" height="500px" mx="30px" borderRadius="6px" margin="10px" marginBottom="70px" border="1px solid" borderColor="#C0C0C0">
        <Typography variant='h4'>
          {this.state.Category.CategoryName}
        </Typography>
        <img src={this.props.room.Image} style={{ marginLeft: "10px", height: "300px", width: "310px", backgroundColor: grey[50] }} alt="room" />

        <Typography variant='h4'>
          {this.props.room.Cost}
        </Typography>
       
        
      
        {/* onClick={this.onButtonClick} */}
        
        
        <Button style={{
          backgroundColor: "#e7e7e7", color: "black", marginLeft: "5px",
          marginRight: "5px"
        }} onClick= {this.onButtonClick}
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
export default withRouter(SingleRoom);
