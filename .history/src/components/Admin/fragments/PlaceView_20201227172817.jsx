import React, { Component } from "react";
import { Grid, Button, Typography, Box, makeStyles, CssBaseline } from "@material-ui/core";
import { useHistory, withRouter } from "react-router";
import { grey } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
import queryString from 'query-string';  
import placeService from "../../../services/PlaceService";
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


class PlaceView extends Component {
  constructor(props) {
        super(props);
      this.state = {
          place: [],
          Image: " ",

        }
    }

    arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };
     
  componentDidMount () {
    const placeId = queryString.parse(this.props.history.location.search);
    const placeSearch = placeId.place;
    console.log( placeSearch);
placeService
.getSinglePlace(placeSearch)
   .then((data) => {
       this.setState({ place: data });
       this.setState({
           Image: 'data:image/jpeg;base64,' + this.arrayBufferToBase64(this.state.place.Image.data.data)
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
               <img src={this.state.Image} style={{ position:"absolute",marginLeft: "1000px", height: "500px", width: "610px", backgroundColor: grey[50] }} alt="place" />
               <Typography variant='h4' style={{marginLeft:"20px", color:"#339ba5" , fontStyle:"bold"}}>
                    {this.state.place.place_name}
                </Typography>
                <Typography variant='h5' style={{marginLeft:"20px"}}>
                    {this.state.place.City}
                </Typography>
                <Typography variant='h6' style={{marginLeft:"20px"}}> Description
                    {this.state.place.Description}
                </Typography>
                

             </div>
                   
                    
   
            </div>
           
        );
    }
};
export default withRouter(PlaceView);
