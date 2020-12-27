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
import update from "immutability-helper";
let data = [];
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
      value: "",
      inputValue: "",
    };
    this.handleCommentEdit = this.handleCommentEdit.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onCompareClick = this.onCompareClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
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
  onCompareClick() {
    data = [];
    console.log(data);
    window.location.reload(false);
  }
  handleCommentEdit(event) {
    var copyData = data;
    var newData;
    var commentIndex = copyData.findIndex(function (c) {
      console.log(c.Name);
      return c.Name == [event.target.name];
    });
    console.log(commentIndex);
    if (commentIndex === -1) {
      newData = { Name: event.target.name, Checked: event.target.checked };
      data.push(newData);
    } else {
      var updatedComment = update(copyData[commentIndex], {
        Checked: { $set: event.target.checked },
      });
      var newData = update(data, {
        $splice: [[commentIndex, 1, updatedComment]],
      });
      data = newData;
    }
    console.log(newData);
    console.log(data);

    // this.setState({ floors: newData });
    // console.log(this.state.floors);
  }
  onInputChange(event) {
    this.setState({ value: event.target.value });
  }
  handleCommentChange(event) {
    this.setState({ comment: event.target.value });
  }
  onButtonClick = () => {
    this.props.history.push({
      pathname: "/Compare",
      state: { detail: data },
    });
    // "/Compare",
    // { detail: data }
    // );
  };
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
    let unique;
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
          width="20%"
          // value={this.state.value}
          //onChange={this.onInputChange}
          //  disableClearable
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
          onClick={this.onButtonClick}
        >
          Compare Hotels
        </Button>
        <Button
          variant="contained"
          color="default"
          style={{
            float: "Left",
          }}
          onClick={this.onCompareClick}
        >
          Clear Compare Hotels
        </Button>
        <div class="row">
          <div class="col-md-12">
            <span class="heading">
              Filters <i class="fas fa-sliders-h CatFilter"></i>
            </span>
            <span id="div_sort" class="float-right mr-4 searchSort">
              Sort By
              <select id="cata_sort">
                <option
                  name="cata_sort"
                  data-filter-key="sort"
                  data-filter-value="most_relavant"
                  selected="selected"
                  value="most_relavant"
                >
                  Most Relavant
                </option>
                <option
                  name="cata_sort"
                  data-filter-key="sort"
                  data-filter-value="latest"
                  value="latest"
                >
                  Latest
                </option>
                <option
                  name="cata_sort"
                  data-filter-key="sort"
                  data-filter-value="popular"
                  value="popular"
                >
                  Popularity
                </option>
                <option
                  name="cata_sort"
                  data-filter-key="sort"
                  data-filter-value="highest_rated"
                  value="highest_rated"
                >
                  Highest Rated
                </option>
                <option
                  name="cata_sort"
                  data-filter-key="sort"
                  data-filter-value="high-to-low"
                  value="high-to-low"
                >
                  Price: High to Low
                </option>
                <option
                  name="cata_sort"
                  data-filter-key="sort"
                  data-filter-value="low-to-high"
                  value="low-to-high"
                >
                  Price: Low to High
                </option>
              </select>
            </span>
            <hr> </hr>
            </div>
          </div>
        </div>
        // {this.state.hotels.length == 0 ? (
        //   <p>Loading...</p>
        // ) : (
        //   <Grid container spacing={3}>
        //     {this.state.hotels.map(
        //       (hotel, index) => (
        //         (hotel.Image =
        //           "data:image/jpeg;base64," +
        //           this.arrayBufferToBase64(hotel.Image.data.data)),
        //         (
        //           <SingleHotel
        //             key={index}
        //             hotel={hotel}
        //             handle={this.handleCommentEdit}
        //           />
        //         )
        //       )
        //     )}
        //   </Grid>
        // )}
      </div>
    );
  }
}
export default withStyles(useStyles)(Hotels);
