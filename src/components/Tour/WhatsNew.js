import React, { Component, useCallback, useEffect } from "react";
import tourService from "../../services/TourService";
import {Grid,} from "@material-ui/core";
import SingleTour from "./SingleTour";
import update from "immutability-helper";
import SearchBox from "./SearchBox";
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

class WhatsNew extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      Img: "",
      address: " ",
      tours: [],
      floors: [],
      value: "",
      inputValue: "",
      searchField: "",
      searchTerm: "",
      results: [],
      val: "acsending_order",
      tour: [],
      loading: false,
      searchClicked: false,
      res: [],
    };
    this.handleCommentEdit = this.handleCommentEdit.bind(this);
    //this.onButtonClick = this.onButtonClick.bind(this);
    //this.onCompareClick = this.onCompareClick.bind(this);
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
    
    tourService
      .getTours(this.props.page, this.props.perPage)
      .then((data) => {
        this.setState({ tours: data });
        this.setState({ results: data });  
      })
      .catch((err) => {
        console.log(err);
      });
    
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

  }
  
  handleCommentChange(event) {
    this.setState({ comment: event.target.value });
  }
 

  render() {
    
    const { tours, searchField, searchTerm } = this.state;

    res = tours.filter((tour) =>
      tour.TourName.toLowerCase().includes(searchField.toLowerCase())
    );
    {
      this.state.value === "acsending_order" &&
        (res = tours.sort((a, b) => {
          if (a.TourName.toLowerCase() < b.TourName.toLowerCase()) return -1;
          // if (a.HotelName > b.HotelName) return 1;
          //  return 0;
        }));
    }
    {
      this.state.value === "descending_order" &&
        (res = tours.sort((a, b) => {
          if (a.TourName.toLowerCase() > b.TourName.toLowerCase()) return -1;
          // if (a.HotelName > b.HotelName) return 1;
          //  return 0;
        }));
    }
    
    {
      this.state.value === "lowest_rated" &&
        (res = tours.sort((a, b) => {
          if (a.AvgRatings < b.AvgRatings) return -1;
          
        }));
    }
    {
      this.state.value === "highest_rated" &&
        (res = tours.sort((a, b) => {
          if (a.AvgRatings > b.AvgRatings) return -1;
          
        }));
    }
    // console.log(this.state.results);
    // console.log(res);
    const classes = useStyles();

    
    let floors = [];
    let unique;
    const h = this.state.results;
    return (
      
      <div>
        <SearchBox
          placeholder="Enter Tour Name"
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
                  data-filter-value="acsending_order"
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
          <div class="col-xl-10 serach_pgn">
            {res.length == 0 ? (
              <p>loading...</p>
            ) : (
              <Grid container spacing={3}>
                {res.map(
                  (tour, index) => (
                    console.log(tour),
                    (
                      <SingleTour
                        key={index}
                        tour={tour}
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
export default WhatsNew;