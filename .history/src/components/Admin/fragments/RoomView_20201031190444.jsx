import React, { Component } from "react";
import { Grid, Button, Typography, Box, makeStyles, CssBaseline } from "@material-ui/core";
// import hotelService from "../../services/HotelService";
import { useHistory, withRouter } from "react-router";
import { grey } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
//import userService from "../../services/UserService";
import queryString from 'query-string';  
// import { Comment, Icon } from 'semantic-ui-react'
import hotelService from "../../../services/HotelService";
import ReactStars from "react-rating-stars-component";
import CommentsBlock from 'simple-react-comments';
import AppBarComponenet from "./AppBar";
import SidebarComponent from "./SidebarComponent";
import roomService from "../../../services/RoomService";



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


class RoomView extends Component {
  constructor(props) {
        super(props);
      this.state = {
          hotel: [],
          Image: " ",
          comments: [],

        }
    this.ratingChanged = this.ratingChanged.bind(this);    
    this.onAddRoomClick = this.onAddRoomClick.bind(this);    

    }

//    onButtonClick = () => {
//     this.setState({
//       showComponent: true,
//     });
//   }
  // const { hotel, history } = props;
    arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };
     componentDidMount () {
         //const { handle } = this.props.history.hotel
         const hotelId = queryString.parse(this.props.history.location.search);
         const hotelSearch = hotelId.room;
         console.log( hotelSearch);
   roomService
     .getSingleRoom(hotelSearch)
        .then((data) => {
            this.setState({ hotel: data });
            this.setState({
                Image: 'data:image/jpeg;base64,' + this.arrayBufferToBase64(this.state.hotel.Image.data.data)
            });
        })
        .catch((err) => {
          console.log(err);
        });
         
    };
     
 ratingChanged(newRating) {
  console.log(newRating);
  };
  onAddRoomClick = (id) => {
    // let history = useHistory();
   this.props.history.push({
       pathname: '/AddRoom',
       search: '?hotel=' + id,
       
    }) 
   }
    render() {
// console.log(this.props.history);
        // const classes = useStyles();
        return (
          <div style={{marginBottom:"150px"}}> 
            <CssBaseline />
      <AppBarComponenet />
      {/* {home ? <HomeFragment /> : null}   */}
            {/* <SidebarComponent /> */}
            <div style={{ marginLeft: "50px", marginTop: "120px", marginBottom:"50px" }}>
               <img src={this.state.Image} style={{ position:"absolute",marginLeft: "10px", height: "300px", width: "610px", backgroundColor: grey[50] }} alt="hotel" /> 
            <Button
              style={{
                backgroundColor: "white", border: "2px solid #4CAF50", borderRadius: "12px", color: "#4CAF50", fontSize: "24px", position: "absolute", marginTop: "310px", marginLeft: "90px"
              }}
              onClick={() => this.onAddRoomClick(this.state.hotel._id)}
            >
Back
                 </Button>                     
                    <Typography variant='h4' style={{marginLeft:"600px", color:"#339ba5" , fontStyle:"bold" }}>
                    {this.state.hotel.Description}
                </Typography>
                <Typography variant='h5' style={{marginLeft:"900px"}}>
                    {this.state.hotel.NumberOfRooms}
                </Typography>
                <Typography variant='h6' style={{marginLeft:"900px"}}>
                    Ratings {this.state.hotel.Cost}
                </Typography>
                
                <h2 style={{marginTop:"100px", marginLeft:"900px", color:"#339ba5"}}>Facilities of Room</h2>
                {/* <Typography variant='h6' style={{marginRight:"800px"}}>
                     {this.state.hotel.Facilities}
                </Typography> */}
                

             </div>
                   
                    
   
            </div>
           
        );
    }
};
export default withRouter(RoomView);
