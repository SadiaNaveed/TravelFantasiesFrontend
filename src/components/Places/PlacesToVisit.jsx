import React, { Component, useCallback, useEffect } from "react";
import placeService from "../../services/PlaceService";
import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchPlace from "./SearchPlace";
import { Button, Card, CardContent, CardMedia, Grid } from "@material-ui/core";
import SinglePlace from "./SinglePlace";
import { UncontrolledCarousel } from "reactstrap";

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
    alignItems: "left",
    width: "270px",
  },
});

class Place extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Img: "",
      city: " ",
      places: [],
      floors:[],
      value: "",
      inputValue: "",
      searchField: "",
      searchTerm: "",
      results: [],
      val: "ascending_order",
      place: [],
      loading: false,
      searchClicked: false,
      res: [],
    };
    this.change = this.change.bind(this);
  }
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
    placeService
      .getPlace(this.props.page, this.props.perPage)
      .then((data) => {
        this.setState({ places: data });
        this.setState({ results: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { places, searchField, searchTerm } = this.state;
    res = places.filter((place) =>
      place.place_name.toLowerCase().includes(searchField.toLowerCase())
    );
    {
      this.state.value === "ascending_order" &&
        (res = places.sort((a, b) => {
          if (a.place_name.toLowerCase() < b.place_name.toLowerCase()) return -1;
        }));
    }
    {
      this.state.value === "descending_order" &&
        (res = places.sort((a, b) => {
          if (a.place_name.toLowerCase() > b.place_name.toLowerCase()) return -1;
        }));
    }

    const classes = useStyles();
    const items = [
      {
        src: require("../../Karachi laguna.jpg"),
        height: "30 px",
        altText: "Slide 1",
        caption: "Starting from 200$",
        header: "Spend Great Time With Family With Our Family Package",
        key: "1",
      },

      {
        src: require("../../Faisal_Masjid.jpg"),
        height: "30 px",
        altText: "Slide 3",
        caption: "Starting From 100$",
        header: "Hit The Road of Adventure With Friends ",
        key: "3",
      },
      {
        src: require("../../Tourism (1).jpg"),
        height: "30 px",
        altText: "Slide 2",
        caption: "Honeymoon Starting From 500$",
        header: "Spend Pleasure Time With Your Better Half",
        key: "2",
      },
    ];

    let floors = [];
    let unique;
    const p = this.state.results;
    return (
      <div>
       <UncontrolledCarousel className="danger" items={items} />
       <SearchPlace
          placeholder="Enter Place Name"
          onSearchClicked={(e) =>
            this.setState({ searchField: e.target.value })
          }
          />

          <div class="row" style={{ marginTop: "80px" }}>
          <div class="col-md-12">
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
                  data-filter-value="ascending_order"
                  value="ascending_order"
                >
                  Ascending Order
                </option>

                <option
                  name="cata_sort"
                  data-filter-key="sort"
                  data-filter-value="descending_order"
                  value="descending_order"
                >
                  Descending Order
                </option>
                </select>
            </span>
          </div>
        </div>
        <div class="row position-relative" id="divCatLogLeft">
          <div class="col-xl-10 serach_pgn">
          {res.length == 0 ? (
              <p>Loading...</p>
            ) : 
            (
              <Grid container spacing={3}>
                {res.map(
                  (place, index) => (
                    console.log(place),
                    (
                      <SinglePlace
                        key={index}
                        Place={place}
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
export default Place;