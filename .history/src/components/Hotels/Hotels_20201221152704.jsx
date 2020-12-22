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
import SearchBox from "./SearchBox";
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
      searchField: "",
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
        <SearchBox
          placeholder="Enter Hotel Name..."
          handleChange={(e) => console.log(e.target.value)}
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
        {/* <Button
          variant="contained"
          color="default"
          style={{
            float: "right",
          }}
          startIcon={<SearchIcon />}
        >
          Search
        </Button> */}
        <div class="row" style={{ marginTop: "80px" }}>
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
          </div>
        </div>
        <div class="row position-relative" id="divCatLogLeft">
          <div class="col-xl-2 divCatLogLeft">
            <div class="divSelectCat">
              <h5>
                <span style={{ fontSize: "1.1rem" }}> </span>
                <small id="clearfilter" class="dn float-right cursor-pointer">
                  Clear All
                </small>
              </h5>
              <ul id="chosen_list"></ul>
            </div>
            <div id="accordion" class="search_filter">
              <form id="catalog_form" method="post">
                <div class="card-header" id="headingFour">
                  <h5 class="mb-0">
                    <button
                      type="button"
                      class="btn btn-cat collapsed"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <i class="fa" aria-hidden="true"></i>
                      Price
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseFour"
                  class="collapse show"
                  aria-labelledby="headingFour"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <div class="custom-control custom-radio">
                      <input
                        data-filter-key="price"
                        data-filter-value="paid"
                        type="radio"
                        class="custom-control-input"
                        id="price_abs_pd"
                        name="cata_price"
                        value="paid"
                      />
                      <label class="custom-control-label" for="price_abs_pd">
                        <span class="divRateCat">
                          <span class="ml-2 font-weight-bold">Paid</span>
                        </span>
                      </label>
                    </div>
                    <div class="custom-control custom-radio">
                      <input
                        data-filter-key="price"
                        data-filter-value="free"
                        type="radio"
                        class="custom-control-input"
                        id="price_abs_fr"
                        name="cata_price"
                        value="free"
                      />
                      <label class="custom-control-label" for="price_abs_fr">
                        <span class="divRateCat">
                          <span class="ml-2 font-weight-bold">Free</span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header" id="headingFour">
                    <h5 class="mb-0">
                      <button
                        type="button"
                        class="btn btn-cat"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="true"
                        aria-controls="collapseThree"
                      >
                        <i class="fa" aria-hidden="true"></i>
                        Category
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseThree"
                    class="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <div class="custom-control custom-checkbox mb-2">
                        <input
                          data-filter-key="module"
                          data-filter-value="courses"
                          type="checkbox"
                          class="custom-control-input"
                          id="chk_courses"
                          value="courses"
                          name="cata_module[]"
                        />
                        <label class="custom-control-label" for="chk_courses">
                          Courses
                        </label>
                      </div>
                      <div class="custom-control custom-checkbox mb-2">
                        <input
                          data-filter-key="module"
                          data-filter-value="edegree"
                          type="checkbox"
                          class="custom-control-input"
                          id="chk_edegree"
                          value="edegree"
                          name="cata_module[]"
                        />
                        <label class="custom-control-label" for="chk_edegree">
                          Edegree
                        </label>
                      </div>
                      <div class="custom-control custom-checkbox mb-2">
                        <input
                          data-filter-key="module"
                          data-filter-value="paths"
                          type="checkbox"
                          class="custom-control-input"
                          id="chk_paths"
                          value="paths"
                          name="cata_module[]"
                        />
                        <label class="custom-control-label" for="chk_paths">
                          Paths
                        </label>
                      </div>
                      <div class="custom-control custom-checkbox mb-2">
                        <input
                          data-filter-key="module"
                          data-filter-value="bundle"
                          type="checkbox"
                          class="custom-control-input"
                          id="chk_bundle"
                          value="bundle"
                          name="cata_module[]"
                        />
                        <label class="custom-control-label" for="chk_bundle">
                          Bundle
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header" id="headingFour">
                    <h5 class="mb-0">
                      <button
                        type="button"
                        class="btn btn-cat"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="true"
                        aria-controls="collapseThree"
                      >
                        <i class="fa" aria-hidden="true"></i>
                        Level
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseThree"
                    class="collapse show"
                    aria-labelledby="headingFour"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <div class="custom-control custom-checkbox mb-2">
                        <input
                          data-filter-key="level"
                          data-filter-value="beginners"
                          type="checkbox"
                          class="custom-control-input"
                          id="chk_beg"
                          value="B"
                          name="cata_levels[]"
                        />
                        <label class="custom-control-label" for="chk_beg">
                          Beginners
                        </label>
                      </div>
                      <div class="custom-control custom-checkbox mb-2">
                        <input
                          data-filter-key="level"
                          data-filter-value="intermediate"
                          type="checkbox"
                          class="custom-control-input"
                          id="chk_int"
                          value="I"
                          name="cata_levels[]"
                        />
                        <label class="custom-control-label" for="chk_int">
                          Intermediate
                        </label>
                      </div>
                      <div class="custom-control custom-checkbox mb-2">
                        <input
                          data-filter-key="level"
                          data-filter-value="professional"
                          type="checkbox"
                          class="custom-control-input"
                          id="chk_prof"
                          value="P"
                          name="cata_levels[]"
                        />
                        <label class="custom-control-label" for="chk_prof">
                          Professional
                        </label>
                      </div>
                      <div class="custom-control custom-checkbox mb-2">
                        <input
                          data-filter-key="level"
                          data-filter-value="alllevels"
                          type="checkbox"
                          class="custom-control-input"
                          id="chk_all"
                          value="A"
                          name="cata_levels[]"
                        />
                        <label class="custom-control-label" for="chk_all">
                          All Levels
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card-header" id="headingFour">
                  <h5 class="mb-0">
                    <button
                      type="button"
                      class="btn btn-cat"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <i class="fa" aria-hidden="true"></i>
                      Price
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseFour"
                  class="collapse show"
                  aria-labelledby="headingFour"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <div class="customDiv">
                      <div class="custom-control custom-radio">
                        <input
                          data-filter-key="price"
                          data-filter-value="free"
                          type="radio"
                          class="custom-control-input"
                          id="freeCourses"
                          name="cata_price"
                          value="free"
                        />
                        <label class="custom-control-label" for="freeCourses">
                          <span class="">Free Courses</span>
                        </label>
                      </div>
                    </div>

                    <div class="customDiv">
                      <div class="custom-control custom-radio">
                        <input
                          data-filter-key="price"
                          data-filter-value="paid"
                          type="radio"
                          class="custom-control-input"
                          id="price_asc"
                          name="cata_price"
                          value="paid"
                        />
                        <label class="custom-control-label" for="price_asc">
                          <span class="">Paid Courses</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header" id="headingFive">
                    <h5 class="mb-0">
                      <button
                        type="button"
                        class="btn btn-cat collapsed"
                        data-toggle="collapse"
                        data-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        <i class="fa" aria-hidden="true"></i>
                        Rating
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseFive"
                    class="collapse"
                    aria-labelledby="headingFive"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <div class="customDiv">
                        <div class="custom-control custom-radio">
                          <input
                            data-filter-key="rating"
                            data-filter-value="4.5"
                            type="radio"
                            class="custom-control-input"
                            id="customRadio1"
                            name="cata_rating"
                            value="4.5"
                          />
                          <label
                            class="custom-control-label"
                            for="customRadio1"
                          >
                            <span class="divRateCat">
                              <span class="rating-stars">
                                <span style={{ width: "61.6px" }}></span>
                              </span>
                              <span class="ml-2">4.5 &amp; Up</span>
                            </span>
                          </label>
                        </div>
                      </div>
                      <div class="customDiv">
                        <div class="custom-control custom-radio">
                          <input
                            data-filter-key="rating"
                            data-filter-value="4"
                            type="radio"
                            class="custom-control-input"
                            id="customRadio2"
                            name="cata_rating"
                            value="4"
                          />
                          <label
                            class="custom-control-label"
                            for="customRadio2"
                          >
                            <span class="divRateCat">
                              <span class="rating-stars">
                                <span style={{ width: "57px" }}></span>
                              </span>
                              <span class="ml-2">4.0 &amp; Up</span>
                            </span>
                          </label>
                        </div>
                      </div>
                      <div class="customDiv">
                        <div class="custom-control custom-radio">
                          <input
                            data-filter-key="rating"
                            data-filter-value="3.5"
                            type="radio"
                            class="custom-control-input"
                            id="customRadio3"
                            name="cata_rating"
                            value="3.5"
                          />
                          <label
                            class="custom-control-label"
                            for="customRadio3"
                          >
                            <span class="divRateCat">
                              <span class="rating-stars">
                                <span style={{ width: "49px" }}></span>
                              </span>
                              <span class="ml-2"> 3.5 &amp; Up</span>
                            </span>
                          </label>
                        </div>
                      </div>
                      <div class="customDiv">
                        <div class="custom-control custom-radio">
                          <input
                            data-filter-key="rating"
                            data-filter-value="3"
                            type="radio"
                            class="custom-control-input"
                            id="customRadio4"
                            name="cata_rating"
                            value="3"
                          />
                          <label
                            class="custom-control-label"
                            for="customRadio4"
                          >
                            <span class="divRateCat">
                              <span class="rating-stars">
                                <span style={{ width: "42px" }}></span>
                              </span>
                              <span class="ml-2">3.0 &amp; Up</span>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingSix">
                    <h5 class="mb-0">
                      <button
                        type="button"
                        class="btn btn-cat collapsed"
                        data-toggle="collapse"
                        data-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        <i class="fa" aria-hidden="true"></i>
                        Video Duration
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseSix"
                    class="collapse"
                    aria-labelledby="headingSix"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <div class="custom-control custom-checkbox mb-2">
                        <input
                          data-filter-key="video_dur"
                          data-filter-value="0-2"
                          type="checkbox"
                          class="custom-control-input"
                          id="chk_2"
                          value="0-2"
                          name="video_duration[]"
                        />
                        <label class="custom-control-label" for="chk_2">
                          0-2 Hours
                        </label>
                        <span class="float-right catRgtTxt cata_filter_cnt"></span>
                      </div>
                      <div class="custom-control custom-checkbox mb-2">
                        <input
                          data-filter-key="video_dur"
                          data-filter-value="3-6"
                          type="checkbox"
                          class="custom-control-input"
                          id="chk_6"
                          value="3-6"
                          name="video_duration[]"
                        />
                        <label class="custom-control-label" for="chk_6">
                          3-6 Hours
                        </label>
                        <span class="float-right catRgtTxt cata_filter_cnt"></span>
                      </div>
                      <div class="custom-control custom-checkbox mb-2">
                        <input
                          data-filter-key="video_dur"
                          data-filter-value="7-16"
                          type="checkbox"
                          class="custom-control-input"
                          id="chk_16"
                          value="7-16"
                          name="video_duration[]"
                        />
                        <label class="custom-control-label" for="chk_16">
                          7-16 Hours
                        </label>
                        <span class="float-right catRgtTxt cata_filter_cnt"></span>
                      </div>
                      <div class="custom-control custom-checkbox mb-2">
                        <input
                          data-filter-key="video_dur"
                          data-filter-value="17"
                          type="checkbox"
                          class="custom-control-input"
                          id="chk_17"
                          value="17"
                          name="video_duration[]"
                        />
                        <label class="custom-control-label" for="chk_17">
                          17+ Hours
                        </label>
                        <span class="float-right catRgtTxt cata_filter_cnt"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="d-lg-none text-left mb-2 pt-2 border-top">
              <button class="btn btn-outLine" onclick="filterToggle();">
                Cancel
              </button>
              <button onclick="filter('mob_apply')" class="btn btn-main">
                Apply
              </button>
            </div>
          </div>
          <div class="col-xl-10 serach_pgn">
            {this.state.hotels.length == 0 ? (
              <p>Loading...</p>
            ) : (
              <Grid container spacing={3}>
                {this.state.hotels.map(
                  (hotel, index) => (
                    (hotel.Image =
                      "data:image/jpeg;base64," +
                      this.arrayBufferToBase64(hotel.Image.data.data)),
                    (
                      <SingleHotel
                        key={index}
                        hotel={hotel}
                        handle={this.handleCommentEdit}
                      />
                    )
                  )
                )}
              </Grid>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(useStyles)(Hotels);
