import React from "react";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import cover from "../hotelCover.jpg";
import hotelService from "../../services/HotelService";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Sidebar from "../Sidebar";
import SearchIcon from "@material-ui/icons/Search";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  // Grid,
  // TextField,
} from "@material-ui/core";
import PlacesAutoComplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { fontSize } from "@material-ui/system";
import SingleHotel from "./SingleHotel";

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      marginTop: "50px",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },

    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },

    divStyle: {
      display: "block",
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
      height: 500,
      //  objectFit: "contain",
      alignItems: "left",
      width: "2500px",
    },
  })
);

 const arrayBufferToBase64 = (buffer) => {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
};
const Hotels = (props) => {
  const [address, setAddress] = React.useState("");
  const [hotels, setHotels] = React.useState([]);
  const page = props.page ? props.page : 1;
  const [perPage, setPerPage] = React.useState(10);
  const [Img, setImg] = React.useState("");
  const classes = useStyles();
  
  const getData = () => {
    hotelService
      .getHotels(page, perPage)
      .then((data) => {
        var base64Flag = 'data:image/jpeg;base64,';
        var imageStr = this.arrayBufferToBase64(data.Image.data.data);
        this.setState({
          img: base64Flag + imageStr
            )
      };
        setHotels(data);
        // setTotal(data.total);
        setPerPage(10);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(getData, [page, perPage]);
  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    //console.log(results[0].formatted_address);
    // console.log(latLng.formatted_address);
    //infowindow.setContent(results[0].formatted_address);
    //console.log(results[0].formatted_address);
    setAddress(value);
    //setCoordinates(latLng);
    // console.log(latLng);
    // console.log(results);
  };
  return (
    // <div className={classes.root}>
    <div style={{ marginTop: "100px" }}>
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
      <Card className={classes.card}>
        <div className={classes.content}>
          <CardContent className={classes.content}>
            <div style={{ position: "relative" }}>
              <CardMedia
                component="img"
                className={classes.media}
                image="https://images.pexels.com/photos/573552/pexels-photo-573552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
              <div
                style={{
                  position: "absolute",
                  color: "white",
                  top: 8,
                  left: "34%",
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
                <PlacesAutoComplete
                  value={address}
                  onChange={setAddress}
                  onSelect={handleSelect}
                >
                  {({
                    getInputProps,
                    suggestions,
                    getSuggestionItemProps,
                    loading,
                  }) => (
                    <div style={{ marginTop: "100px" }}>
                      {/* <p>Latitude: {coordinates.lat}</p>
                      <p>Longitude: {coordinates.lng} </p> */}
                      <input
                        {...getInputProps({ placeholder: "Search Hotels" })}
                        style={{ width: "900px", height: "30px" }}
                      />
                      <div>
                        {loading ? <div>....Loading </div> : null}
                        {suggestions.map((suggestion) => {
                          const style = {
                            backgroundColor: suggestion.active
                              ? "#41b6e6"
                              : "black",
                          };
                          return (
                            <div
                              {...getSuggestionItemProps(suggestion, { style })}
                            >
                              {suggestion.description}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </PlacesAutoComplete>
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
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
      {hotels.length == 0 ? (
        <p>There are no hotels</p>
      ) : (
        <Grid container spacing={3}>
          {hotels.map((hotel, index) => (
            <SingleHotel key={index} hotel={hotel} />
          ))}
        </Grid>
      )}
      {/* <Sidebar> </Sidebar> */}
      {/*<main className={classes.content}>
        <div className={classes.toolbar} />
        <h1 style={{ textAlign: "center" }}> Hotels Of Pakistan </h1>

        <TextField style={{ position: "absolute", right: "0px" }}>
          {" "}
          Search Hotels{" "}
        </TextField>
        <hr></hr>

        <Grid container wrap="wrap" spacing={2}>
          <Grid item xs={3} className={classes.testimonials}>
            <h1 style={{ textAlign: "center", color: "black" }}>User</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, amet? Magni blanditiis ipsa sapiente rem eum fugiat!
              Esse laboriosam rem ipsum cupiditate, suscipit corrupti. Quidem
              sit rem unde quae sed. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Molestias, amet? Magni blanditiis ipsa sapiente
              rem eum fugiat! Esse laboriosam rem ipsum cupiditate, suscipit
              corrupti. Quidem sit rem unde quae sed.
            </p>
          </Grid>
          <Grid item xs={3} className={classes.testimonials}>
            <h1 style={{ textAlign: "center", color: "black" }}>User</h1>{" "}
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, amet? Magni blanditiis ipsa sapiente rem eum fugiat!
              Esse laboriosam rem ipsum cupiditate, suscipit corrupti. Quidem
              sit rem unde quae sed. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Molestias, amet? Magni blanditiis ipsa sapiente
              rem eum fugiat! Esse laboriosam rem ipsum cupiditate, suscipit
              corrupti. Quidem sit rem unde quae sed.
            </p>
          </Grid>
          <Grid item xs={3} className={classes.testimonials}>
            <h1 style={{ textAlign: "center", color: "black" }}>User</h1>{" "}
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, amet? Magni blanditiis ipsa sapiente rem eum fugiat!
              Esse laboriosam rem ipsum cupiditate, suscipit corrupti. Quidem
              sit rem unde quae sed. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Molestias, amet? Magni blanditiis ipsa sapiente
              rem eum fugiat! Esse laboriosam rem ipsum cupiditate, suscipit
              corrupti. Quidem sit rem unde quae sed.
            </p>
          </Grid>
          <Grid item xs={3} className={classes.testimonials}>
            <h1 style={{ textAlign: "center", color: "black" }}>User</h1>{" "}
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, amet? Magni blanditiis ipsa sapiente rem eum fugiat!
              Esse laboriosam rem ipsum cupiditate, suscipit corrupti. Quidem
              sit rem unde quae sed. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Molestias, amet? Magni blanditiis ipsa sapiente
              rem eum fugiat! Esse laboriosam rem ipsum cupiditate, suscipit
              corrupti. Quidem sit rem unde quae sed.
            </p>
          </Grid>
          <Grid item xs={3} className={classes.testimonials}>
            <h1 style={{ textAlign: "center", color: "black" }}>User</h1>{" "}
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, amet? Magni blanditiis ipsa sapiente rem eum fugiat!
              Esse laboriosam rem ipsum cupiditate, suscipit corrupti. Quidem
              sit rem unde quae sed. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Molestias, amet? Magni blanditiis ipsa sapiente
              rem eum fugiat! Esse laboriosam rem ipsum cupiditate, suscipit
              corrupti. Quidem sit rem unde quae sed.
            </p>
          </Grid>
          <Grid item xs={3} className={classes.testimonials}>
            <h1 style={{ textAlign: "center", color: "black" }}>User</h1>{" "}
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, amet? Magni blanditiis ipsa sapiente rem eum fugiat!
              Esse laboriosam rem ipsum cupiditate, suscipit corrupti. Quidem
              sit rem unde quae sed. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Molestias, amet? Magni blanditiis ipsa sapiente
              rem eum fugiat! Esse laboriosam rem ipsum cupiditate, suscipit
              corrupti. Quidem sit rem unde quae sed.
            </p>
          </Grid>
          <Grid item xs={3} className={classes.testimonials}>
            <h1 style={{ textAlign: "center", color: "black" }}>User</h1>{" "}
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, amet? Magni blanditiis ipsa sapiente rem eum fugiat!
              Esse laboriosam rem ipsum cupiditate, suscipit corrupti. Quidem
              sit rem unde quae sed. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Molestias, amet? Magni blanditiis ipsa sapiente
              rem eum fugiat! Esse laboriosam rem ipsum cupiditate, suscipit
              corrupti. Quidem sit rem unde quae sed.
            </p>
          </Grid>
        </Grid>
      </main> */}
    </div>
  );
};
export default Hotels;
