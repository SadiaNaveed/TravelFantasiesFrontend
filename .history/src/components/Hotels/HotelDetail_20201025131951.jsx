import React, { Component } from "react";
import { Grid, Button, Typography, Box, makeStyles } from "@material-ui/core";
// import hotelService from "../../services/HotelService";
import { useHistory, withRouter } from "react-router";
import { grey } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
//import userService from "../../services/UserService";
import HotelBooking from "./HotelBooking";
  
import hotelService from "../../services/HotelService";


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


class HotelDetail extends Component {
  constructor(props) {
        super(props);
      this.state = {
            hotel: []
        }
        //  this.onButtonClick = this.onButtonClick.bind(this);    
    }

//    onButtonClick = () => {
//     this.setState({
//       showComponent: true,
//     });
//   }
  const { hotel, history } = props;
     componentDidMount () {
         //const { handle } = this.props.history.hotel
         const { hotel } = this.props.history.location.search.hotel;
     hotelService
     .getSingleHotel({ hotel })
        .then((data) => {
          this.setState({ hotel: data });
        })
        .catch((err) => {
          console.log(err);
        });
    
//   }
    render() {
        const { hotel, history } = this.props;
console.log(this.props.history);
        // const classes = useStyles();

        return (
            <div style={{marginTop:"200px"}}> 
            <Box p="10px" bgcolor="#F0FFF0" height="500px" mx="30px" borderRadius="6px" margin="10px" marginBottom="70px" border="1px solid" borderColor="#C0C0C0">
                {/* <img src={this.props.history.hotel.Image} style={{ marginLeft: "10px", height: "300px", width: "310px", backgroundColor: grey[50] }} alt="hotel" /> */}
                <Typography variant='h4'>
                    {this.state.hotel.HotelName}
                </Typography>
                <Typography variant='h5'>
                    Location {this.state.hotel.Location}
                </Typography>
                <Typography variant='h6'>
                    Ratings {this.state.hotel.Ratings}
                </Typography>
                <Button style={{ backgroundColor: "#4CAF50" }}>
                    Book Now
       </Button>
                <Button style={{
                    backgroundColor: "#e7e7e7", color: "black", marginLeft: "5px",
                    marginRight: "5px"
                }}>
                    View Details
      </Button>
                <Button style={{ backgroundColor: "#008CBA" }}>
                    View on Map
      </Button>
            </Box>


   
            </div>
           
        );
    }
};
export default withRouter(HotelDetail);
