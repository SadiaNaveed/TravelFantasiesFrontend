import React, { Component } from "react";
import { Grid, Button, Typography, Box, makeStyles, CssBaseline } from "@material-ui/core";
import { useHistory, withRouter } from "react-router";
import { grey } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
import queryString from 'query-string';  
import placeService from "../../services/PlaceService";
import AppBarComponenet from "../Admin/fragments/AppBar";
//import SingleRoom from "./SingleRoom";



const useStyles = makeStyles((theme) => ({
  link: {
    color: "#339ba5",
    paddingRight: "2rem",
    fontFamily: "Times New Roman",
    fontStyle: "italic",
    fontSize: 24,
    fontWeight: 700,
  },
 
}));


class PlaceDetail extends Component {
  constructor(props) {
        super(props);
      this.state = {
        place: [],
          Image: " "

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
            this.setState({place : data });
            this.setState({
                Image: 'data:image/jpeg;base64,' + this.arrayBufferToBase64(this.state.place.Image.data.data)
            });
        })
        .catch((err) => {
          console.log(err);
        });
    
         
    };
  
    render() {
        const { place, history } = this.props;
console.log(this.props.history);
        // const classes = useStyles();
        return (
          <div style={{ marginTop: "10px", marginBottom: "400px", marginLeft: "50px" }}> 
            <CssBaseline />
      <AppBarComponenet />
                    <img src={this.state.Image} style={{ position:"absolute",marginLeft: "1000px", height: "500px", width: "610px", backgroundColor: grey[50] }} alt="place" /> 
               
            
                    <Typography variant='h4' style={{marginLeft:"20px", color:"#339ba5" , fontStyle:"bold"}}>
                    {this.state.place.place_name}
                </Typography>
                <Typography variant='h5' style={{marginLeft:"20px"}}>
                    {this.state.place.City}
                </Typography>
                <Typography variant='h7' style={{marginLeft:"20px"}}>
                    {this.state.place.Description}
                </Typography>  
            </div>
        );
    }
};
export default withRouter(PlaceDetail);