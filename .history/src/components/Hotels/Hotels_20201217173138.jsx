import React, { Component, useCallback, useEffect } from "react";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import cover from "../hotelCover.jpg";
import hotelService from "../../services/HotelService";
import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Sidebar from "../Sidebar";
import SearchIcon from "@material-ui/icons/Search";
import cover from "../../runnyrem-LfqmND-hym8-unsplash.jpg";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
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
import { UncontrolledCarousel } from "reactstrap";

const useStyles = (theme) => ({
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
      Img: "",
      address: " ",
      hotels: [],
      compare: [],
      floors: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }
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

  handleChange(event) {
    //this.setState({ address: value });
    // console.log(value);
    // console.log(event.target.name);
    // console.log(event.target.checked);
    // {
    //   event.target.checked == true &&
    //     this.setState({
    //       // ...this.state,
    //       [event.target.name]: event.target.checked,
    //     });
    // }
    // floors.push({ [event.target.name]: event.target.checked });
    // // Set state
    // this.setState({ floors });
    // console.log(event.target.name);
    // console.log(event.target.checked);
  }
  render() {
    //   const handleData = async () => {
    // React.useEffect(getData, [1, 10]);
    //   }

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
    const classes = useStyles();

    const items = [
      {
        src: require("../../Asserts/hotel1.jpg"),
        altText: "Slide 1",
        caption: "Starting from 200$",
        header: "Spend Great Time With Family With Our Family Package",
        key: "1",
      },

      {
        src: require("../../Asserts/hotel2.jpg"),
        altText: "Slide 3",
        caption: "Starting From 100$",
        header: "Hit The Road of Adventure With Friends ",
        key: "3",
      },
      {
        src: require("../../Asserts/hotel3.jpeg"),
        altText: "Slide 2",
        caption: "Honeymoon Starting From 500$",
        header: "Spend Pleasure Time With Your Better Half",
        key: "2",
      },
    ];
    let floors = [];

    return (
      // <div className={classes.root}>
      <div>
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
        {/* <div>
          <h1 style={{ position: "absolute", left: "300px", top: "350px", color: "white", fontSize: 70 }}>Welcome To The Hotels of Pakistan! </h1>
          <h1 style={{position:"absolute",left:"420px", top:"420px",color:"white",fontSize:70}}>Find your Best Hotel Here! </h1>

          <img src={cover} style={{width:"100%", height:"700px"}}/>
        </div> */}
        <UncontrolledCarousel className="danger" items={items} />

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
              InputProps={{ ...params.InputProps, type: "search" }}
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
        <Button
          variant="contained"
          color="default"
          style={{
            float: "Left",
          }}
          //  startIcon={<SearchIcon />}
        >
          Compare Hotels
        </Button>
        {this.state.hotels.length == 0 ? (
          <p>Loading...</p>
        ) : (
          <Grid container spacing={3}>
            {/* var base64Flag = 'data:image/jpeg;base64,';
            this.state.hotel.map((hotel, index) => (
              this.setState({ Img: base64Flag +  this.arrayBufferToBase64(hotel.Image.data) })
          )) */}

            {/*            
   console.log(this.state.Img); */}
            {/* {this.state.hotels.map(
              (hotel, index) =>
                this.setState(...this.state.floors, {
                  [hotel.HotelName]: false,
                }),
              console.log(this.state.floors)
            )} */}

            {this.state.hotels.map(
              (hotel, index) => (
                // this.setState(...this.state.floors, {
                //   [hotel.HotelName]: false,
                // }),
                (hotel.Image =
                  "data:image/jpeg;base64," +
                  this.arrayBufferToBase64(hotel.Image.data.data)),
                (
                  // console.log(hotel.Image),
                  // <img src={hotel.Image} style={{height:"30px",width: "30px"}} alt='Helpful alt text'/>

                  <SingleHotel
                    key={index}
                    hotel={hotel}
                    handle={(event) => {
                      // this.setState({
                      //   [event.target.name]: event.target.checked,
                      // });
                      const found = floors.findIndex(
                        (element) => element > [event.target.name]
                      );
                      console.log(found);
                      {
                        found != undefined ? 
                       newData = floors.slice(0); // copy
                        newData.splice(
                          this.state.activeBulletPointId,
                          0,
                          newBulletPoint
                        )

                        this.setState({
                          data: newData,
                        })
                       :(floors.push({
                        [event.target.name]: event.target.checked,
                      }))
             
            
                      }
                      // floors.push({
                      //   [event.target.name]: event.target.checked,
                      // });
                      console.log(floors);
                      // console.log(floors.slice(-1));

                      // // this.setState({ floors });
                      // console.log(event.target.name);
                      // console.log(event.target.checked);
                    }}
                  />
                )
              )
            )}
          </Grid>
        )}
      </div>
    );
  }
}
export default withStyles(useStyles)(Hotels);
