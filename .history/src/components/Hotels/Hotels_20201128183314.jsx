import React, { Component, useCallback, useEffect } from "react";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import cover from "../hotelCover.jpg";
import hotelService from "../../services/HotelService";
import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";
import Autocomplete from '@material-ui/lab/Autocomplete';
import Sidebar from "../Sidebar";
import SearchIcon from "@material-ui/icons/Search";
import cover from "../../runnyrem-LfqmND-hym8-unsplash.jpg"
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  // Grid,
  // TextField,
} from "@material-ui/core";
import PlacesAutoComplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { fontSize } from "@material-ui/system";
import SingleHotel from "./SingleHotel";

const useStyles = theme => ({
      root: {
        display: "flex",
        marginTop: "50px",
      },
      card: {
        display: "flex",
      },
      details: {
        display: "flex",
        flexDirection: "column",
      },
      content: {
        flex: "1 0 auto",
      },
      media: {
        display: "flex",
        height: "10px",
        //  objectFit: "contain",
        alignItems: "left",
        width: "2500px",
      },
    });
 

class Hotels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Img: '',
      address: " ",
      hotels: [],
     
    };
  };

  arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };
  componentDidMount() {
     hotelService
        .getHotels(this.props.page, this.props.perPage)
        .then((data) => {
          this.setState({ hotels: data });

          // setTotal(data.total);
          // setPerPage(10);
        })
        .catch((err) => {
          console.log(err);
        });
}
    
  
  render() {
    
    //   const handleData = async () => { 
    // React.useEffect(getData, [1, 10]);
    //   }

    const handleChange = async (value) => {
      this.setState({ address: value });
    }
    const handleSelect = async (value) => {
      const results = await geocodeByAddress(value);
      const latLng = await getLatLng(results[0]);
      //console.log(results[0].formatted_address);
      // console.log(latLng.formatted_address);
      //infowindow.setContent(results[0].formatted_address);
      //console.log(results[0].formatted_address);
      //  setAddress(value);
      //setCoordinates(latLng);
      // console.log(latLng);
      // console.log(results);
    };
     const  classes  = useStyles();

    return (

      // <div className={classes.root}>
      <div >
        {/* <Grid
        container
        style={{
          marginBottom: "30px",
          marginTop: "40px",
        }}
      >
        <Grid item xs={12}>
          <img src={cover} width="100%" height="50%" alt="cover" />
        </Grid>
      </Grid> */}
        {/* <Card className={classes.card}>
          <div className={classes.content}>
            <CardContent className={classes.content}>
              <div style={{ position: "relative" , height:"500px"}}>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="https://unsplash.com/photos/LfqmND-hym8"
                />
                <div
                  style={{
                    position: "absolute",
                    color: "white",
                    top: "270px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <h3 style={{ textAlign: "center", fontSize: 50 }}>
                    Welcom To Our Hotels{" "}
                  </h3>
                  <h1 style={{ textAlign: "center", fontSize: 70 }}>
                    {" "}
                  Find The Hotels of Pakistan!{" "}
                  </h1>
        
                </div>
              </div>
            </CardContent>
          </div>
        </Card> */}
        <div>
          <h1 style={{ position: "absolute", left: "300px", top: "350px", color: "white", fontSize: 70 }}>Welcome To The Hotels of Pakistan! </h1>
          <h1 style={{position:"absolute",left:"420px", top:"420px",color:"white",fontSize:70}}>Find your Best Hotel Here! </h1>

          <img src={cover} style={{width:"100%", height:"700px"}}/>
        </div>
                  <Autocomplete
                    freeSolo
          id="free-solo-2-demo"
          width="50%"
                    disableClearable
                    options={this.state.hotels.map((option) => option.HotelName)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
                  <Button
                    variant="contained"
                    color="default"
                    style={{
                      float: "right",
                    }}
                    startIcon={<SearchIcon />}
                  >
                    Search
                </Button>
        {this.state.hotels.length == 0 ? (
          <p>There are no hotels</p>
        ) : (
            <Grid container spacing={3}>
              {/* var base64Flag = 'data:image/jpeg;base64,';
            this.state.hotel.map((hotel, index) => (
              this.setState({ Img: base64Flag +  this.arrayBufferToBase64(hotel.Image.data) })
          )) */}

              {/*            
   console.log(this.state.Img); */}
              {this.state.hotels.map((hotel, index) => (
                 hotel.Image = 'data:image/jpeg;base64,' + this.arrayBufferToBase64(hotel.Image.data.data),
                // console.log(hotel.Image),
               // <img src={hotel.Image} style={{height:"30px",width: "30px"}} alt='Helpful alt text'/>

                 <SingleHotel key={index} hotel={hotel} />
              ))}
            </Grid>

          )}
         
         
      </div>
    );
  };
}
export default withStyles(useStyles)(Hotels)
