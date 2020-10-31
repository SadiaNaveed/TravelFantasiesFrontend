import React, { Component } from "react";
import { Grid, Button, Typography, Box, makeStyles, CssBaseline, List, ListItem, ListItemText } from "@material-ui/core";
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
               <img src={this.state.Image} style={{ position:"absolute",marginLeft: "10px", height: "300px", width: "510px", backgroundColor: grey[50] }} alt="hotel" /> 
            <Button
              style={{
                backgroundColor: "white", border: "2px solid #4CAF50", borderRadius: "12px", color: "#4CAF50", fontSize: "24px", position: "absolute", marginTop: "310px", marginLeft: "200px"
              }}
              onClick={() => this.onAddRoomClick(this.state.hotel._id)}
            >
Back
                 </Button>                     
                    <Typography variant='h4' style={{marginLeft:"700px", color:"#339ba5" , fontStyle:"bold" }}>
                        Description 
                </Typography>
                    <Typography variant='h5' style={{marginLeft:"750px", fontStyle:"bold" }}>
                      {this.state.hotel.Description}
                    </Typography>
                    <Typography variant='h4' style={{marginLeft:"700px", color:"#339ba5" , fontStyle:"bold" }}>
                        Total Number of Rooms 
                </Typography>
                <Typography variant='h5' style={{marginLeft:"750px"}}>
                    {this.state.hotel.NumberOfRooms}
                    </Typography>
                    <Typography variant='h4' style={{marginLeft:"700px", color:"#339ba5" , fontStyle:"bold" }}>
                        Cost of Room
                </Typography>
                <Typography variant='h5' style={{marginLeft:"750px"}}>
                     {this.state.hotel.Cost}
                </Typography>
                <Typography variant='h4' style={{marginLeft:"700px", color:"#339ba5" , fontStyle:"bold" }}>
                        Facilities of Room
                </Typography>
                    <Typography variant='h6' style={{marginLeft:"700px", color:"#339ba5" , fontStyle:"bold" }}>
                        <List>
                            <ListItem>
          
          <ListItemText primary={this.state.hotel.FreeWifi ? 'Free Wifi' : null} />
        </ListItem>
                     <ListItem>
          
          <ListItemText primary={this.state.hotel.AirConditioning ? 'Air Conditioning' : null} />
                            </ListItem>
          <ListItem>
          
          <ListItemText primary={this.state.hotel.BathTub ? 'Bath Tub' : null} />
                            </ListItem>
          <ListItem>
          
          <ListItemText primary={this.state.hotel.HairDryer ? 'Hair Dryer' : null} />
                            </ListItem>
          <ListItem>
          
          <ListItemText primary={this.state.hotel.InRoomIron ? 'In-Room Iron' : null} />
                            </ListItem>
          <ListItem>
          
          <ListItemText primary={this.state.hotel.PremiumCoffee ? 'Premium Coffee' : null}/>
                            </ListItem>
          <ListItem>
          
          <ListItemText primary={this.state.hotel.RoomFridge ? 'Room Fridge' : null} />
                            </ListItem>
          <ListItem>
          
          <ListItemText primary={this.state.hotel.RoomPurification ? 'Room Purification' : null} />
                            </ListItem>
          <ListItem>
          
          <ListItemText primary={this.state.hotel.Shower ? 'Shower' : null}/>
                            </ListItem>
          <ListItem>
          
          <ListItemText primary={this.state.hotel.Television ? 'Television' : null} />
                            </ListItem>
                            <ListItem>
          
          <ListItemText primary= {this.state.hotel.TeaMaker ? 'Tea Maker' : null}    />
                            </ListItem>
                        
                        
                        
                        
                        
                      </List>
                        
                </Typography>
               
                

             </div>
                   
                    
   
            </div>
           
        );
    }
};
export default withRouter(RoomView);
