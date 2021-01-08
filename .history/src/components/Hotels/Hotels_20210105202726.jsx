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
import ReactDOM from "react-dom";
import axios from "axios";
import sortBy from "lodash/sortBy";
import AllHotels from "./AllHotels";

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
import HotelReviewService from "../../services/HotelReviewService";
let data = [];
let res = [];
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
  _isMounted = false;
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
      searchTerm: "",
      results: [],
      val: "acsending_order",
      hotel: [],
      loading: false,
      searchClicked: false,
      res: [],
    };
    this.handleCommentEdit = this.handleCommentEdit.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onCompareClick = this.onCompareClick.bind(this);
    this.change = this.change.bind(this);
    // this.onInputChange = this.onInputChange.bind(this);
    //    this.onSearchChange = this.onSearchChange.bind(this);
    // this.keyPress = this.keyPress.bind(this);
    // this.onSearch = this.onSearch.bind(this);
    // this.updateHotels = this.updateHotels.bind(this);
    // this.renderMovieTitle = this.renderMovieTitle.bind(this);
  }
  // handleChange = (event) => {
  //   this.setState({ searchTerm: event.target.value });
  // };
  change = (e) => {
    this.setState({ value: e.target.value });
  };
  arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }
  componentDidMount() {
    //   this._isMounted = true;
    hotelService
      .getHotels(this.props.page, this.props.perPage)
      .then((data) => {
        //     if (this._isMounted) {
        this.setState({ hotels: data });
        this.setState({ results: data });
        //   }
        // setTotal(data.total);
        // setPerPage(10);
      })
      .catch((err) => {
        console.log(err);
      });
    // {
    //   this.state.hotels.map((hotel, index) =>
    //     HotelReviewService.getHotelRatings(hotel)
    //       .then((data) => {
    //         hotel.push({ Ratings: data });
    //         console.log(hotel);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       })
    //   );
    // }
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
      console.log(c.value);
      return c.value == [event.target.value];
    });
    console.log(commentIndex);
    if (commentIndex === -1) {
      newData = { Name: event.target.value, Checked: event.target.checked };
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
  // onInputChange(event) {
  //   this.setState({ searchField: event.target.value });
  //   console.log(this.state.searchField);
  // }
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
  // onSearchChange = (e) => {
  //   console.log(e.target.value);
  //   // this.search(e.target.value);
  //   // this.setState({ value: e.target.value });
  //   //   this.setState({ searchField: search });
  //   // console.log(search);
  //   const res = !e.target.value
  //     ? this.state.hotels
  //     : this.state.hotels.filter((hotel) =>
  //         hotel.HotelName.toLowerCase().includes(
  //           e.target.value.toLocaleLowerCase()
  //         )
  //       );
  //   console.log(res);
  //   this.setState({ results: res });
  // };
  // componentWillUnmount() {
  //   this._isMounted = false;
  // }
  // componentDidUpdate(prevState) {
  //   //this._isMounted = true;
  //   if ("ss" !== prevState.searchField) {
  //     this.setState({ searchField: "ss" });
  //     console.log(this.state.searchField);
  //   }
  // }
  // async onSearchChange=(e)=> {
  //   // this._isMounted = true;
  //   // console.log(search);
  //   await this.setState({ searchField: e.target.value }, () => {
  //     console.log(this.state.searchField, "dealersOverallTotal1");
  //   });
  // this.setState((state) => {
  //   return { state.searchField: search };
  // });
  // if (this._isMounted) {
  //   this.setState({ searchField: search });
  // }
  //this.setState({ searchField: search });
  //this.forceUpdate();

  //this.setState({ searchField: search });
  // }
  // search = async (val) => {
  //   this.setState({ loading: true });
  //   const res = await axios(`http://localhost:4000/api/hotels/find?hotelname=${val}`);
  //   const hotel = await res.data.results;

  //   this.setState({ hotel, loading: false });
  // };
  // get renderMovies() {
  //   let hotels = <h1>There's no Hotels</h1>;
  //   if (this.state.hotel) {
  //     hotels = <Hotels list={this.state.hotel} />;
  //   }

  //   return hotels;
  // }
  // updateHotels = () => {
  //   this.setState({
  //     results: this.state.hotels.filter((hotel) =>
  //       hotel.HotelName.toLowerCase().includes(
  //         this.state.searchField.toLocaleLowerCase()
  //       )
  //     ),
  //   });
  // };
  // onSearch = (e) => {
  //   this.setState(
  //     {
  //       searchField: e.target.value,
  //     },
  //     () => {
  //       if (this.state.searchField && this.state.searchField.length > 1) {
  //         {
  //           this.updateHotels();
  //         }
  //       }
  //     }
  //   );
  // };

  // keyPress(e, search) {
  //   if (e.keyCode == 13) {
  //     console.log(search);
  //     // this.setState({ searchField: search });
  //     // console.log(this.state.searchField);
  //     // put the login here

  //     // console.log(this.state.results);
  //   }
  // }

  render() {
    //   const handleData = async () => {
    // React.useEffect(getData, [1, 10]);
    //   }
    const { hotels, searchField, searchTerm } = this.state;
    // const filteredHotels = hotels.filter((hotel) =>
    //   hotel.HotelName.toLowerCase().includes(searchField.toLowerCase())
    // );

    // const res = !this.state.searchField
    //   ? hotels
    //   : hotels.filter((hotel) =>
    //       hotel.HotelName.toLowerCase().includes(
    //         this.state.searchField.toLocaleLowerCase()
    //       )
    //     );
    res = hotels.filter((hotel) =>
      hotel.HotelName.toLowerCase().includes(searchField.toLowerCase())
    );
    {
      this.state.value === "acsending_order" &&
        (res = hotels.sort((a, b) => {
          if (a.HotelName.toLowerCase() < b.HotelName.toLowerCase()) return -1;
          // if (a.HotelName > b.HotelName) return 1;
          //  return 0;
        }));
    }
    {
      this.state.value === "descending_order" &&
        (res = hotels.sort((a, b) => {
          if (a.HotelName.toLowerCase() > b.HotelName.toLowerCase()) return -1;
          // if (a.HotelName > b.HotelName) return 1;
          //  return 0;
        }));
    }
    {
      this.state.value === "lowest_rated" &&
        (res = hotels.sort((a, b) => {
          if (a.AvgRatings < b.AvgRatings) return -1;
          // if (a.HotelName > b.HotelName) return 1;
          //  return 0;
        }));
    }
    {
      this.state.value === "highest_rated" &&
        (res = hotels.sort((a, b) => {
          if (a.AvgRatings > b.AvgRatings) return -1;
          // if (a.HotelName > b.HotelName) return 1;
          //  return 0;
        }));
    }
    // console.log(this.state.results);
    // console.log(res);
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
    const h = this.state.results;
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
        <SearchBox
          placeholder="Enter Hotel Name"
          // onChange={(e) => {
          //   this.setState({ searchField: e.target.value });
          // }}
          onSearchClicked={(e) =>
            this.setState({ searchField: e.target.value })
          }
        />

        {/* async (e) =>
            //this.setState({ searchField: e.target.value })
            await this.setState({ searchField: e.target.value }, () => {
              console.log(this.state.searchField, "dealersOverallTotal1"); */}
        {/* <input
          type="search"
          className="search"
          placeholder="Enter Hotel Name"
          value={this.state.value}
          onChange={(e) => this.onSearchChange(e)}
            this.setState({
              res: (this.state.res = !"Marriott"
                ? this.state.hotels
                : this.state.hotels.filter((hotel) =>
                    hotel.HotelName.toLowerCase().includes(
                      "Marriott".toLocaleLowerCase()
                    )
                  )),
            })
        /> */}
        {/* {this.renderMovies} */}
        {/* <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          width="20%"
          //  value={this.state.value}

          //  disableClearable
          options={this.state.hotels.map((option) => option.HotelName)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search input"
              margin="normal"
              variant="outlined"
              InputProps={{ ...params.InputProps, type: "search" }}
              onChange={this.onInputChange}
              // onChange={this.handleC}
            />
          )}
        /> */}
        {/* <Autocomplete
          value={this.state.val}
          //items={MoviesData()}
          items={this.state.hotels.map((option) => option.HotelName)}
          getItemValue={(item) => item.HotelName}
          shouldItemRender={this.renderMovieTitle}
          renderMenu={(item) => <div className="dropdown">{item}</div>}
          renderItem={(item, isHighlighted) => (
            <div className={`item ${isHighlighted ? "selected-item" : ""}`}>
              {item.title}
            </div>
          )}
          onChange={(event, val) => this.setState({ val })}
          onSelect={(val) => this.setState({ val })}
        /> */}
        {/* <input
          type="search"
          placeholder="Search name"
          value={this.state.searchField}
          onChange={(e) => {
            this.setState({ searchField: e.target.value });
          }}
        /> */}

        {/* <Button
          variant="contained"
          color="default"
          style={{
            float: "right",
          }}
          startIcon={<SearchIcon />}
          onClick={this.onSearch}
        >
          Search
        </Button> */}
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
            {/* <span class="heading">
              Filters <i class="fas fa-sliders-h CatFilter"></i>
            </span> */}
            <span id="div_sort" class="float-right mr-4 searchSort">
              Sort By
              <select
                id="cata_sort"
                onChange={this.change}
                value={this.state.value}
              >
                <option
                  name="cata_sort"
                  data-filter-key="sort"
                  data-filter-value="acsending_order"
                  //  selected="selected"
                  value="acsending_order"
                >
                  Acsending Order
                </option>
                <option
                  name="cata_sort"
                  data-filter-key="sort"
                  data-filter-value="descending_order"
                  value="descending_order"
                >
                  Descending Order
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
                  data-filter-value="lowest_rated"
                  value="lowest_rated"
                >
                  Lowest Rated
                </option>
              </select>
            </span>
          </div>
        </div>
        <div class="row position-relative" id="divCatLogLeft">
          {/* <div class="d-lg-none text-left mb-2 pt-2 border-top">
              <button class="btn btn-outLine" onClick="filterToggle();">
                Cancel
              </button>
              <button onClick="filter('mob_apply')" class="btn btn-main">
                Apply
              </button>
            </div> */}
          <div class="col-xl-10 serach_pgn">
            {/* {this.state.results.length == 0 ? (
              <p>Loading...</p>
            ) : ( */}
            {/* // <Grid container spacing={3}> */}
            {/* {this.state.results.map(
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
            )} */}
            {/* //   </Grid>
            //)} */}
            {/* {res.map((hotel, index) => (
              <li>{hotel.HotelName}</li>
            ))} */}
            {res.length == 0 ? (
              <p>Loading...</p>
            ) : (
              <Grid container spacing={3}>
                {res.map(
                  (hotel, index) => (
                    // (hotel.Image =
                    //   "data:image/jpeg;base64," +
                    //   this.arrayBufferToBase64(hotel.Image.data.data)),
                    console.log(hotel),
                    (
                      <SingleHotel
                        key={index}
                        hotel={hotel}
                        handle={this.handleCommentEdit}
                      />
                    )
                    // <li>{hotel.HotelName}</li>
                  )
                )}
              </Grid>
            )}
            {/* {res.length > 1 && <AllHotels results={res} />} */}
          </div>
        </div>
      </div>
    );
  }
}
export default Hotels;
