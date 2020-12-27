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
        {/* <Button
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
        <Button
          variant="contained"
          color="default"
          style={{
            float: "right",
          }}
          startIcon={<SearchIcon />}
        >
          Search
        </Button> */}
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
            <ul
              class="col-md-12 searchcatLogthumb clearfix"
              style={{
                marginTop: "20px",
                paddingLeft: "27px",
                listStyleType: "none",
              }}
            >
              <li>
                <div class="searchResultSection row">
                  <div class="searchLeftImg col-4 col-sm-3">
                    <a
                      style={{ color: "#293F4F" }}
                      href="https://www.eduonix.com/master-nodejs-a-practical-approach-to-node-js"
                    >
                      <amp-img
                        src="https://cdn.eduonix.com/assets/images/thumb_img/2020030311422911731.png"
                        alt="Banner"
                        height="80"
                        width="125"
                        layout="responsive"
                        style={{ borderRadius: "6px" }}
                        class="i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-built i-amphtml-layout"
                        i-amphtml-layout="responsive"
                      >
                        <i-amphtml-sizer
                          slot="i-amphtml-svc"
                          style={{ paddingTop: "64%" }}
                        ></i-amphtml-sizer>
                        <img
                          decoding="async"
                          alt="Banner"
                          src="https://cdn.eduonix.com/assets/images/thumb_img/2020030311422911731.png"
                          class="i-amphtml-fill-content i-amphtml-replaced-content"
                        />
                      </amp-img>
                    </a>
                  </div>
                  <div class="searchResultMiddle col-8 col-sm-9">
                    <div class="searchResultProjectName">
                      <a
                        style={{ color: "#293F4F" }}
                        href="https://www.eduonix.com/master-nodejs-a-practical-approach-to-node-js"
                      >
                        Master NodeJs : A Practical Approach To Node JS{" "}
                      </a>
                    </div>
                    <div class="Description">From No Node to Know Node </div>

                    <div class="searchResultProjectDate">
                      <i class="fas fa-clock"></i> 6.31 Hours
                      <i class="fas fa-play-circle lectureIcon"> </i> 98
                      Lectures
                    </div>

                    <div id="11731" class="clearfix">
                      <span class="rateWrap">
                        <span class="rating">
                          <span class="rating-stars">
                            <span style={{ width: "64.4px" }}></span>
                          </span>
                        </span>
                        <span class="rateInfo">4.6</span>
                      </span>

                      <span class="price">
                        {" "}
                        <strike class="mr-1">$19.96</strike>
                        <span class="originalPrice">$4.99</span>
                      </span>
                      <span
                        class="collectionCartWish wishcartthmbcomm_11731 pt-0"
                        style={{ display: "inlineFlex" }}
                      >
                        <span class="addcart_div" style={{ width: "26px" }}>
                          <strong>
                            <a onclick="addtocart(this, '11731', '', 'courses', 'searchedcourses');">
                              <i
                                class="fas fa-shopping-cart"
                                style={{ color: "#ccc" }}
                              ></i>
                            </a>
                          </strong>
                        </span>

                        <span
                          class="wishlistIcon"
                          style={{ marginLeft: "10px" }}
                        >
                          <i
                            onclick='set_addtowish_para("11731","courses"); showPopUp("addtowish","loginPopUp","signUpPopUp");'
                            class="far fa-heart"
                          ></i>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                {" "}
                <div class="searchResultSection row">
                  <div class="searchLeftImg col-4 col-sm-3">
                    <a
                      style={{ color: "#293F4F" }}
                      href="https://www.eduonix.com/paths/html-and-css"
                    >
                      <amp-img
                        src="https://cdn.eduonix.com/assets/images/bundle_images/thumb_img/HTML_paths.png"
                        alt="Banner"
                        height="80"
                        width="125"
                        layout="responsive"
                        style={{ borderRadius: "6px" }}
                        class="i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-built i-amphtml-layout"
                        i-amphtml-layout="responsive"
                      >
                        <i-amphtml-sizer
                          slot="i-amphtml-svc"
                          style={{ paddingTop: "64%" }}
                        ></i-amphtml-sizer>
                        <img
                          decoding="async"
                          alt="Banner"
                          src="https://cdn.eduonix.com/assets/images/bundle_images/thumb_img/HTML_paths.png"
                          class="i-amphtml-fill-content i-amphtml-replaced-content"
                        />
                      </amp-img>
                    </a>
                  </div>
                  <div class="searchResultMiddle col-8 col-sm-9">
                    <div class="searchResultProjectName">
                      <a
                        style={{ color: "#293F4F" }}
                        href="https://www.eduonix.com/paths/html-and-css"
                      >
                        Master HTML &amp; CSS Codes{" "}
                      </a>
                      <span class="badge badge-pill badge-warning">Path</span>
                    </div>
                    <div class="Description">
                      Quick path to build your skills in HTML and CSS and be a
                      better front end developer.{" "}
                    </div>

                    <div class="searchResultProjectDate">
                      <i class="fas fa-clock"></i> 37.5 Hours
                      <i class="fas fa-play-circle lectureIcon"> </i> 4 Courses
                    </div>

                    <div id="4" class="clearfix">
                      <span class="rateWrap">
                        <span class="rating">
                          <span class="rating-stars">
                            <span style={{ width: "61.6px" }}></span>
                          </span>
                        </span>
                        <span class="rateInfo">4.4</span>
                      </span>

                      <span class="price">
                        {" "}
                        <strike class="mr-1">$200</strike>
                        <span class="originalPrice">$10</span>
                      </span>
                      <span
                        class="collectionCartWish wishcartthmbcomm_4 pt-0"
                        style={{ display: "inlineFlex" }}
                      >
                        <span class="addcart_div" style={{ width: "26px" }}>
                          <strong>
                            <a onclick="addtocart(this, '4', '', 'paths', 'searchedcourses');">
                              <i
                                class="fas fa-shopping-cart"
                                style={{ color: "#ccc" }}
                              ></i>
                            </a>
                          </strong>
                        </span>

                        <span
                          class="wishlistIcon"
                          style={{ marginLeft: "10px" }}
                        >
                          <i
                            onclick='set_addtowish_para("4","paths"); showPopUp("addtowish","loginPopUp","signUpPopUp");'
                            class="far fa-heart"
                          ></i>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                {" "}
                <div class="searchResultSection row">
                  <div class="searchLeftImg col-4 col-sm-3">
                    <a
                      style={{ color: "#293F4F" }}
                      href="https://www.eduonix.com/learn-python-3-from-scratch"
                    >
                      <amp-img
                        src="https://cdn.eduonix.com/assets/images/thumb_img/2019112207184411480.jpg"
                        alt="Banner"
                        height="80"
                        width="125"
                        layout="responsive"
                        style={{ borderRadius: "6px" }}
                        class="i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-built i-amphtml-layout"
                        i-amphtml-layout="responsive"
                      >
                        <i-amphtml-sizer
                          slot="i-amphtml-svc"
                          style={{ paddingTop: "64%" }}
                        ></i-amphtml-sizer>
                        <img
                          decoding="async"
                          alt="Banner"
                          src="https://cdn.eduonix.com/assets/images/thumb_img/2019112207184411480.jpg"
                          class="i-amphtml-fill-content i-amphtml-replaced-content"
                        />
                      </amp-img>
                    </a>
                  </div>
                  <div class="searchResultMiddle col-8 col-sm-9">
                    <div class="searchResultProjectName">
                      <a
                        style={{ color: "#293F4F" }}
                        href="https://www.eduonix.com/learn-python-3-from-scratch"
                      >
                        Learn Python 3 from scratch to become a developer in
                        demand{" "}
                      </a>
                      <span
                        class="spnThumbFtured"
                        style={{
                          backgroundColor: "#f98638",
                          position: "relative",
                          right: "0",
                          top: "0px",
                        }}
                      >
                        Highest Rated
                      </span>{" "}
                    </div>
                    <div class="Description">
                      A definitive guide to learn python 3.x with examples and
                      exercises, created with keeping beginners in mind{" "}
                    </div>

                    <div class="searchResultProjectDate">
                      <i class="fas fa-clock"></i> 11 Hours
                      <i class="fas fa-play-circle lectureIcon"> </i> 53
                      Lectures
                    </div>

                    <div id="11480" class="clearfix">
                      <span class="rateWrap">
                        <span class="rating">
                          <span class="rating-stars">
                            <span style={{ width: "63px" }}></span>
                          </span>
                        </span>
                        <span class="rateInfo">4.5</span>
                      </span>

                      <span class="price">
                        {" "}
                        <strike class="mr-1">$19.96</strike>
                        <span class="originalPrice">$4.99</span>
                      </span>
                      <span
                        class="collectionCartWish wishcartthmbcomm_11480 pt-0"
                        style={{ display: "inlineFlex" }}
                      >
                        <span class="addcart_div" style={{ width: "26px" }}>
                          <strong>
                            <a onclick="addtocart(this, '11480', '', 'courses', 'searchedcourses');">
                              <i
                                class="fas fa-shopping-cart"
                                style={{ color: "#ccc" }}
                              ></i>
                            </a>
                          </strong>
                        </span>

                        <span
                          class="wishlistIcon"
                          style={{ marginLeft: "10px" }}
                        >
                          <i
                            onclick='set_addtowish_para("11480","courses"); showPopUp("addtowish","loginPopUp","signUpPopUp");'
                            class="far fa-heart"
                          ></i>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                {" "}
                <div class="searchResultSection row">
                  <div class="searchLeftImg col-4 col-sm-3">
                    <a
                      style={{ color: "#293F4F" }}
                      href="https://www.eduonix.com/local-sqlite-database-with-node-for-beginners"
                    >
                      <amp-img
                        src="https://cdn.eduonix.com/assets/images/thumb_img/2020051406171011872.jpg"
                        alt="Banner"
                        height="80"
                        width="125"
                        layout="responsive"
                        style={{ borderRadius: "6px" }}
                        class="i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-built i-amphtml-layout"
                        i-amphtml-layout="responsive"
                      >
                        <i-amphtml-sizer
                          slot="i-amphtml-svc"
                          style={{ paddingTop: "64%" }}
                        ></i-amphtml-sizer>
                        <img
                          decoding="async"
                          alt="Banner"
                          src="https://cdn.eduonix.com/assets/images/thumb_img/2020051406171011872.jpg"
                          class="i-amphtml-fill-content i-amphtml-replaced-content"
                        />
                      </amp-img>
                    </a>
                  </div>
                  <div class="searchResultMiddle col-8 col-sm-9">
                    <div class="searchResultProjectName">
                      <a
                        style={{ color: "#293F4F" }}
                        href="https://www.eduonix.com/local-sqlite-database-with-node-for-beginners"
                      >
                        Local SQLite Database with Node for beginners{" "}
                      </a>
                    </div>
                    <div class="Description">
                      Explore how to apply NodeJS to make your web content come
                      to life - explore how to create a local database{" "}
                    </div>

                    <div class="searchResultProjectDate">
                      <i class="fas fa-clock"></i> 1 Hours
                      <i class="fas fa-play-circle lectureIcon"> </i> 18
                      Lectures
                    </div>

                    <div id="11872" class="clearfix">
                      <span class="rateWrap">
                        <span class="rating">
                          <span class="rating-stars">
                            <span style={{ width: "64.4px" }}></span>
                          </span>
                        </span>
                        <span class="rateInfo">4.6</span>
                      </span>

                      <span class="price">
                        {" "}
                        <strike class="mr-1">$19.96</strike>
                        <span class="originalPrice">$4.99</span>
                      </span>
                      <span
                        class="collectionCartWish wishcartthmbcomm_11872 pt-0"
                        style={{ display: "inlineFlex" }}
                      >
                        <span class="addcart_div" style={{ width: "26px" }}>
                          <strong>
                            <a onclick="addtocart(this, '11872', '', 'courses', 'searchedcourses');">
                              <i
                                class="fas fa-shopping-cart"
                                style={{ color: "#ccc" }}
                              ></i>
                            </a>
                          </strong>
                        </span>

                        <span
                          class="wishlistIcon"
                          style={{ marginLeft: "10px" }}
                        >
                          <i
                            onclick='set_addtowish_para("11872","courses"); showPopUp("addtowish","loginPopUp","signUpPopUp");'
                            class="far fa-heart"
                          ></i>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                {" "}
                <div class="searchResultSection row">
                  <div class="searchLeftImg col-4 col-sm-3">
                    <a
                      style={{ color: "#293F4F" }}
                      href="https://www.eduonix.com/nodejs-for-beginners"
                    >
                      <amp-img
                        src="https://cdn.eduonix.com/assets/images/thumb_img/2019052305350911172.jpg"
                        alt="Banner"
                        height="80"
                        width="125"
                        layout="responsive"
                        style={{ borderRadius: "6px" }}
                        class="i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-built i-amphtml-layout"
                        i-amphtml-layout="responsive"
                      >
                        <i-amphtml-sizer
                          slot="i-amphtml-svc"
                          style={{ paddingTop: "64%" }}
                        ></i-amphtml-sizer>
                        <img
                          decoding="async"
                          alt="Banner"
                          src="https://cdn.eduonix.com/assets/images/thumb_img/2019052305350911172.jpg"
                          class="i-amphtml-fill-content i-amphtml-replaced-content"
                        />
                      </amp-img>
                    </a>
                  </div>
                  <div class="searchResultMiddle col-8 col-sm-9">
                    <div class="searchResultProjectName">
                      <a
                        style={{ color: "#293F4F" }}
                        href="https://www.eduonix.com/nodejs-for-beginners"
                      >
                        NodeJS for Beginners{" "}
                      </a>
                    </div>
                    <div class="Description">
                      Learn web development using Node from scratch with this
                      beginners course for NodeJS{" "}
                    </div>

                    <div class="searchResultProjectDate">
                      <i class="fas fa-clock"></i> 2 Hours
                      <i class="fas fa-play-circle lectureIcon"> </i> 22
                      Lectures
                    </div>

                    <div id="11172" class="clearfix">
                      <span class="rateWrap">
                        <span class="rating">
                          <span class="rating-stars">
                            <span style={{ width: "60.2px" }}></span>
                          </span>
                        </span>
                        <span class="rateInfo">4.3</span>
                      </span>

                      <span class="price">
                        {" "}
                        <strike class="mr-1">$19.96</strike>
                        <span class="originalPrice">$4.99</span>
                      </span>
                      <span
                        class="collectionCartWish wishcartthmbcomm_11172 pt-0"
                        style={{ display: "inlineFlex" }}
                      >
                        <span class="addcart_div" style={{ width: "26px" }}>
                          <strong>
                            <a onclick="addtocart(this, '11172', '', 'courses', 'searchedcourses');">
                              <i
                                class="fas fa-shopping-cart"
                                style={{ color: "#ccc" }}
                              ></i>
                            </a>
                          </strong>
                        </span>

                        <span
                          class="wishlistIcon"
                          style={{ marginLeft: "10px" }}
                        >
                          <i
                            onclick='set_addtowish_para("11172","courses"); showPopUp("addtowish","loginPopUp","signUpPopUp");'
                            class="far fa-heart"
                          ></i>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                {" "}
                <div class="searchResultSection row">
                  <div class="searchLeftImg col-4 col-sm-3">
                    <a
                      style={{ color: "#293F4F" }}
                      href="https://www.eduonix.com/html5-and-css3-build-modern-responsive-websites"
                    >
                      <amp-img
                        src="https://cdn.eduonix.com/assets/images/thumb_img/2018100216431310550.jpg"
                        alt="Banner"
                        height="80"
                        width="125"
                        layout="responsive"
                        style={{ borderRadius: "6px" }}
                        class="i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-built i-amphtml-layout"
                        i-amphtml-layout="responsive"
                      >
                        <i-amphtml-sizer
                          slot="i-amphtml-svc"
                          style={{ paddingTop: "64%" }}
                        ></i-amphtml-sizer>
                        <img
                          decoding="async"
                          alt="Banner"
                          src="https://cdn.eduonix.com/assets/images/thumb_img/2018100216431310550.jpg"
                          class="i-amphtml-fill-content i-amphtml-replaced-content"
                        />
                      </amp-img>
                    </a>
                  </div>
                  <div class="searchResultMiddle col-8 col-sm-9">
                    <div class="searchResultProjectName">
                      <a
                        style={{ color: "#293F4F" }}
                        href="https://www.eduonix.com/html5-and-css3-build-modern-responsive-websites"
                      >
                        HTML5 And CSS3 Build Modern Responsive Websites{" "}
                      </a>
                      <span
                        class="spnThumbFtured"
                        style={{
                          backgroundColor: "#f98638",
                          position: "relative",
                          right: "0",
                          top: "0px",
                        }}
                      >
                        Highest Rated
                      </span>{" "}
                    </div>
                    <div class="Description">
                      Beginner course on HTML5 and CSS3 that helps in building
                      responsive website from scratch.{" "}
                    </div>

                    <div class="searchResultProjectDate">
                      <i class="fas fa-clock"></i> 9.5 Hours
                      <i class="fas fa-play-circle lectureIcon"> </i> 68
                      Lectures
                    </div>

                    <div id="10550" class="clearfix">
                      <span class="rateWrap">
                        <span class="rating">
                          <span class="rating-stars">
                            <span style={{ width: "63px" }}></span>
                          </span>
                        </span>
                        <span class="rateInfo">4.5</span>
                      </span>

                      <span class="price">
                        {" "}
                        <strike class="mr-1">$19.96</strike>
                        <span class="originalPrice">$4.99</span>
                      </span>
                      <span
                        class="collectionCartWish wishcartthmbcomm_10550 pt-0"
                        style={{ display: "inlineFlex" }}
                      >
                        <span class="addcart_div" style={{ width: "26px" }}>
                          <strong>
                            <a onclick="addtocart(this, '10550', '', 'courses', 'searchedcourses');">
                              <i
                                class="fas fa-shopping-cart"
                                style={{ color: "#ccc" }}
                              ></i>
                            </a>
                          </strong>
                        </span>

                        <span
                          class="wishlistIcon"
                          style={{ marginLeft: "10px" }}
                        >
                          <i
                            onclick='set_addtowish_para("10550","courses"); showPopUp("addtowish","loginPopUp","signUpPopUp");'
                            class="far fa-heart"
                          ></i>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                {" "}
                <div class="searchResultSection row">
                  <div class="searchLeftImg col-4 col-sm-3">
                    <a
                      style={{ color: "#293F4F" }}
                      href="https://www.eduonix.com/introduction-to-node-js-for-beginners-game-project"
                    >
                      <amp-img
                        src="https://cdn.eduonix.com/assets/images/thumb_img/2020051406153311874.jpg"
                        alt="Banner"
                        height="80"
                        width="125"
                        layout="responsive"
                        style={{ borderRadius: "6px" }}
                        class="i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-built i-amphtml-layout"
                        i-amphtml-layout="responsive"
                      >
                        <i-amphtml-sizer
                          slot="i-amphtml-svc"
                          style={{ paddingTop: "64%" }}
                        ></i-amphtml-sizer>
                        <img
                          decoding="async"
                          alt="Banner"
                          src="https://cdn.eduonix.com/assets/images/thumb_img/2020051406153311874.jpg"
                          class="i-amphtml-fill-content i-amphtml-replaced-content"
                        />
                      </amp-img>
                    </a>
                  </div>
                  <div class="searchResultMiddle col-8 col-sm-9">
                    <div class="searchResultProjectName">
                      <a
                        style={{ color: "#293F4F" }}
                        href="https://www.eduonix.com/introduction-to-node-js-for-beginners-game-project"
                      >
                        Introduction to Node js for beginners + game project{" "}
                      </a>
                    </div>
                    <div class="Description">
                      Explore how to apply NodeJS to make your web content come
                      to life - explore the core foundations of NodeJS{" "}
                    </div>

                    <div class="searchResultProjectDate">
                      <i class="fas fa-clock"></i> 2.5 Hours
                      <i class="fas fa-play-circle lectureIcon"> </i> 42
                      Lectures
                    </div>

                    <div id="11874" class="clearfix">
                      <span class="rateWrap">
                        <span class="rating">
                          <span class="rating-stars">
                            <span style={{ width: "58.8px" }}></span>
                          </span>
                        </span>
                        <span class="rateInfo">4.2</span>
                      </span>

                      <span class="price">
                        {" "}
                        <strike class="mr-1">$19.96</strike>
                        <span class="originalPrice">$4.99</span>
                      </span>
                      <span
                        class="collectionCartWish wishcartthmbcomm_11874 pt-0"
                        style={{ display: "inlineFlex" }}
                      >
                        <span class="addcart_div" style={{ width: "26px" }}>
                          <strong>
                            <a onclick="addtocart(this, '11874', '', 'courses', 'searchedcourses');">
                              <i
                                class="fas fa-shopping-cart"
                                style={{ color: "#ccc" }}
                              ></i>
                            </a>
                          </strong>
                        </span>

                        <span
                          class="wishlistIcon"
                          style={{ marginLeft: "10px" }}
                        >
                          <i
                            onclick='set_addtowish_para("11874","courses"); showPopUp("addtowish","loginPopUp","signUpPopUp");'
                            class="far fa-heart"
                          ></i>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                {" "}
                <div class="searchResultSection row">
                  <div class="searchLeftImg col-4 col-sm-3">
                    <a
                      style={{ color: "#293F4F" }}
                      href="https://www.eduonix.com/angular-2-and-nodejs-the-mean-stack-guide"
                    >
                      <amp-img
                        src="https://cdn.eduonix.com/assets/images/thumb_img/2018062511363610549.jpg"
                        alt="Banner"
                        height="80"
                        width="125"
                        layout="responsive"
                        style={{ borderRadius: "6px" }}
                        class="i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-built i-amphtml-layout"
                        i-amphtml-layout="responsive"
                      >
                        <i-amphtml-sizer
                          slot="i-amphtml-svc"
                          style={{ paddingTop: "64%" }}
                        ></i-amphtml-sizer>
                        <img
                          decoding="async"
                          alt="Banner"
                          src="https://cdn.eduonix.com/assets/images/thumb_img/2018062511363610549.jpg"
                          class="i-amphtml-fill-content i-amphtml-replaced-content"
                        />
                      </amp-img>
                    </a>
                  </div>
                  <div class="searchResultMiddle col-8 col-sm-9">
                    <div class="searchResultProjectName">
                      <a
                        style={{ color: "#293F4F" }}
                        href="https://www.eduonix.com/angular-2-and-nodejs-the-mean-stack-guide"
                      >
                        Angular &amp; NodeJS - The MEAN Stack Guide{" "}
                      </a>
                      <span
                        class="spnThumbFtured"
                        style={{
                          backgroundColor: "#f98638",
                          position: "relative",
                          right: "0",
                          top: "0px",
                        }}
                      >
                        Highest Rated
                      </span>{" "}
                    </div>
                    <div class="Description">
                      Learn how to connect your Angular Frontend to a NodeJS
                      &amp; Express &amp; MongoDB Backend by building a real
                      Application{" "}
                    </div>

                    <div class="searchResultProjectDate">
                      <i class="fas fa-clock"></i> 20.5 Hours
                      <i class="fas fa-play-circle lectureIcon"> </i> 246
                      Lectures
                    </div>

                    <div id="10549" class="clearfix">
                      <span class="rateWrap">
                        <span class="rating">
                          <span class="rating-stars">
                            <span style={{ width: "67.2px" }}></span>
                          </span>
                        </span>
                        <span class="rateInfo">4.8</span>
                      </span>

                      <span class="price">
                        {" "}
                        <strike class="mr-1">$19.96</strike>
                        <span class="originalPrice">$4.99</span>
                      </span>
                      <span
                        class="collectionCartWish wishcartthmbcomm_10549 pt-0"
                        style={{ display: "inlineFlex" }}
                      >
                        <span class="addcart_div" style={{ width: "26px" }}>
                          <strong>
                            <a onclick="addtocart(this, '10549', '', 'courses', 'searchedcourses');">
                              <i
                                class="fas fa-shopping-cart"
                                style={{ color: "#ccc" }}
                              ></i>
                            </a>
                          </strong>
                        </span>

                        <span
                          class="wishlistIcon"
                          style={{ marginLeft: "10px" }}
                        >
                          <i
                            onclick='set_addtowish_para("10549","courses"); showPopUp("addtowish","loginPopUp","signUpPopUp");'
                            class="far fa-heart"
                          ></i>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                {" "}
                <div class="searchResultSection row">
                  <div class="searchLeftImg col-4 col-sm-3">
                    <a
                      style={{ color: "#293F4F" }}
                      href="https://www.eduonix.com/quick-and-easy-guide-to-node-and-express"
                    >
                      <amp-img
                        src="https://cdn.eduonix.com/assets/images/thumb_img/2019020411552511030.jpg"
                        alt="Banner"
                        height="80"
                        width="125"
                        layout="responsive"
                        style={{ borderRadius: "6px" }}
                        class="i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-built i-amphtml-layout"
                        i-amphtml-layout="responsive"
                      >
                        <i-amphtml-sizer
                          slot="i-amphtml-svc"
                          style={{ paddingTop: "64%" }}
                        ></i-amphtml-sizer>
                        <img
                          decoding="async"
                          alt="Banner"
                          src="https://cdn.eduonix.com/assets/images/thumb_img/2019020411552511030.jpg"
                          class="i-amphtml-fill-content i-amphtml-replaced-content"
                        />
                      </amp-img>
                    </a>
                  </div>
                  <div class="searchResultMiddle col-8 col-sm-9">
                    <div class="searchResultProjectName">
                      <a
                        style={{ color: "#293F4F" }}
                        href="https://www.eduonix.com/quick-and-easy-guide-to-node-and-express"
                      >
                        Quick and Easy Guide to Node and Express{" "}
                      </a>
                    </div>
                    <div class="Description">
                      Quickly learn to make dynamic websites using Express and
                      Node{" "}
                    </div>

                    <div class="searchResultProjectDate">
                      <i class="fas fa-clock"></i> 2.5 Hours
                      <i class="fas fa-play-circle lectureIcon"> </i> 0 Lectures
                    </div>

                    <div id="11030" class="clearfix">
                      <span class="rateWrap">
                        <span class="rating">
                          <span class="rating-stars">
                            <span style={{ width: "57.4px" }}></span>
                          </span>
                        </span>
                        <span class="rateInfo">4.1</span>
                      </span>

                      <span class="price">
                        {" "}
                        <strike class="mr-1">$19.96</strike>
                        <span class="originalPrice">$4.99</span>
                      </span>
                      <span
                        class="collectionCartWish wishcartthmbcomm_11030 pt-0"
                        style={{ display: "inlineFlex" }}
                      >
                        <span class="addcart_div" style={{ width: "26px" }}>
                          <strong>
                            <a onclick="addtocart(this, '11030', '', 'courses', 'searchedcourses');">
                              <i
                                class="fas fa-shopping-cart"
                                style={{ color: "#ccc" }}
                              ></i>
                            </a>
                          </strong>
                        </span>

                        <span
                          class="wishlistIcon"
                          style={{ marginLeft: "10px" }}
                        >
                          <i
                            onclick='set_addtowish_para("11030","courses"); showPopUp("addtowish","loginPopUp","signUpPopUp");'
                            class="far fa-heart"
                          ></i>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                {" "}
                <div class="searchResultSection row">
                  <div class="searchLeftImg col-4 col-sm-3">
                    <a
                      style={{ color: "#293F4F" }}
                      href="https://www.eduonix.com/localhost-easy-setup-node-and-express"
                    >
                      <amp-img
                        src="https://cdn.eduonix.com/assets/images/thumb_img/2020072114071312037.jpg"
                        alt="Banner"
                        height="80"
                        width="125"
                        layout="responsive"
                        style={{ borderRadius: "6px" }}
                        class="i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-built i-amphtml-layout"
                        i-amphtml-layout="responsive"
                      >
                        <i-amphtml-sizer
                          slot="i-amphtml-svc"
                          style={{ paddingTop: "64%" }}
                        ></i-amphtml-sizer>
                        <img
                          decoding="async"
                          alt="Banner"
                          src="https://cdn.eduonix.com/assets/images/thumb_img/2020072114071312037.jpg"
                          class="i-amphtml-fill-content i-amphtml-replaced-content"
                        />
                      </amp-img>
                    </a>
                  </div>
                  <div class="searchResultMiddle col-8 col-sm-9">
                    <div class="searchResultProjectName">
                      <a
                        style={{ color: "#293F4F" }}
                        href="https://www.eduonix.com/localhost-easy-setup-node-and-express"
                      >
                        LocalHost easy setup Node and Express{" "}
                      </a>
                    </div>
                    <div class="Description">
                      Do you need to setup Localhost - Want a quick easy way to
                      setup your developer environment using the http protocol?{" "}
                    </div>

                    <div class="searchResultProjectDate">
                      <i class="fas fa-clock"></i> 1 Hours
                      <i class="fas fa-play-circle lectureIcon"> </i> 13
                      Lectures
                    </div>

                    <div id="12037" class="clearfix">
                      <span class="rateWrap">
                        <span class="rating">
                          <span class="rating-stars">
                            <span style={{ width: "0px" }}></span>
                          </span>
                        </span>
                        <span class="rateInfo">0</span>
                      </span>

                      <span class="price">
                        {" "}
                        <strike class="mr-1">$19.96</strike>
                        <span class="originalPrice">$4.99</span>
                      </span>
                      <span
                        class="collectionCartWish wishcartthmbcomm_12037 pt-0"
                        style={{ display: "inlineFlex" }}
                      >
                        <span class="addcart_div" style={{ width: "26px" }}>
                          <strong>
                            <a onclick="addtocart(this, '12037', '', 'courses', 'searchedcourses');">
                              <i
                                class="fas fa-shopping-cart"
                                style={{ color: "#ccc" }}
                              ></i>
                            </a>
                          </strong>
                        </span>

                        <span
                          class="wishlistIcon"
                          style={{ marginLeft: "10px" }}
                        >
                          <i
                            onclick='set_addtowish_para("12037","courses"); showPopUp("addtowish","loginPopUp","signUpPopUp");'
                            class="far fa-heart"
                          ></i>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>{" "}
            </ul>

            {/* <div class="divCatHover dn">
              <div>
                <img src="https://cdn.eduonix.com/assets/images/arrow_rolling_lg.svg" />
              </div>
            </div> */}
          </div>
        </div>

        <div class="col-xl-10 serach_pgn">
          {this.state.hotels.length == 0 ? (
            <p>Loading...</p>
          ) : (
            <ul
              class="col-md-12 searchcatLogthumb clearfix"
              style={{
                marginTop: "20px",
                paddingLeft: "27px",
                listStyleType: "none",
              }}
            >
              {this.state.hotels.map(
                (hotel, index) => (
                  (hotel.Image =
                    "data:image/jpeg;base64," +
                    this.arrayBufferToBase64(hotel.Image.data.data)),
                  (
                    <li>
                      <div class="searchResultSection row">
                        <div class="searchLeftImg col-4 col-sm-3">
                          <a
                            style={{ color: "#293F4F" }}
                            href="https://www.eduonix.com/master-nodejs-a-practical-approach-to-node-js"
                          >
                            <amp-img
                              src={hotel.Image}
                              alt="Banner"
                              height="80"
                              width="125"
                              layout="responsive"
                              style={{ borderRadius: "6px" }}
                              class="i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-built i-amphtml-layout"
                              i-amphtml-layout="responsive"
                            >
                              <i-amphtml-sizer
                                slot="i-amphtml-svc"
                                style={{
                                  paddingTop: "64%",
                                  width: "100px",
                                  height: "100px",
                                }}
                              ></i-amphtml-sizer>
                              <img
                                decoding="async"
                                alt="Banner"
                                src={hotel.Image}
                                style={{
                                  width: "200px",
                                  height: "200px",
                                }}
                                class="i-amphtml-fill-content i-amphtml-replaced-content"
                              />
                            </amp-img>
                          </a>
                        </div>
                        <div class="searchResultMiddle col-8 col-sm-9">
                          <div class="searchResultProjectName">
                            <a
                              style={{ color: "#293F4F" }}
                              href="https://www.eduonix.com/master-nodejs-a-practical-approach-to-node-js"
                            >
                              Master NodeJs : A Practical Approach To Node JS{" "}
                            </a>
                          </div>
                          <div class="Description">
                            From No Node to Know Node{" "}
                          </div>

                          <div class="searchResultProjectDate">
                            <i class="fas fa-clock"></i> 6.31 Hours
                            <i class="fas fa-play-circle lectureIcon"> </i> 98
                            Lectures
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                )
              )}
            </ul>
          )}
        </div>
        {/* {this.state.hotels.length == 0 ? (
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
        )} */}
      </div>
    );
  }
}
export default withStyles(useStyles)(Hotels);
