import React from "react";
import Badshahi from "../../unnamed.jpg";
import {
  makeStyles,
  ButtonBase,
  Grid,
  Table,
  withStyles,
  Button,
} from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import update from "immutability-helper";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import queryString from "query-string";
import hotelService from "../../services/HotelService";
import { useState } from "react";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  heading: {
    color: "black",
    // marginTop: "40px",
    //paddingRight: "100px",
    // fontSize: "21",
    fontStyle: "italic",
    fontSize: 25,
    textAlign: "center",
  },
  table: {
    minWidth: 700,
  },
}));


class Compare extends Component {
  const [compare, setCompare] = useState([]);
  const copy = compare;
  React.useEffect(() => {
    {
      props.location.state.detail.map((one, index) =>
        hotelService
          .getSingleHotel(one.value)
          .then((data) => {
            // copy.push(data);
            // if (compare.length === 0) {
            //   setCompare([data]);
            // } else setCompare([...compare, data]);
          })
          .catch((err) => {
            console.log(err);
          })
      );
    }
  }, []);
  setCompare(copy);
  // console.log(compare);
  console.log(copy);
  const classes = useStyles();
  // const hotelId = queryString.parse(props.location.state.detail);
  const hotels = props.location.state.detail;

  // console.log(hotels);
  return (
    <div style={{ marginTop: "112px" }}>
      <h1 style={{ textAlign: "center" }}>Compare Hotels</h1>
      <TableContainer
        component={Paper}
        style={{ marginBottom: "10px", marginTop: "40px" }}
      >
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              {copy.map((hotel) => (
                <StyledTableCell align="center">
                  {hotel.HotelName} 3
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {compare.map((hotel) => (
                <StyledTableCell align="center">
                  {hotel.Location} 3
                </StyledTableCell>
              ))}
            </TableRow>
            <TableRow>
              {compare.map((hotel, index) => (
                <StyledTableCell align="center">
                  {hotel.HotelName}
                </StyledTableCell>
              ))}
            </TableRow>
            <TableRow>
              {hotels.map((hotel, index) => (
                <StyledTableCell align="center">{hotel.Name} 3</StyledTableCell>
              ))}
            </TableRow>
            <TableRow>
              {hotels.map((hotel, index) => (
                <StyledTableCell align="center">{hotel.Name} 3</StyledTableCell>
              ))}
            </TableRow>
            <TableRow>
              {hotels.map((hotel, index) => (
                <StyledTableCell align="center">{hotel.Name} 3</StyledTableCell>
              ))}
            </TableRow>
            <TableRow>
              {hotels.map((hotel, index) => (
                <StyledTableCell align="center">{hotel.Name} 3</StyledTableCell>
              ))}
            </TableRow>
            <TableRow>
              {hotels.map((hotel, index) => (
                <StyledTableCell align="center">View Details</StyledTableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Button
        style={{ align: "right" }}
        onClick={() => {
          // props.history.replace("/Compare", [props.location.state.detail]);
          props.history.goBack();
        }}
      >
        Add More
      </Button>
    </div>
  );
};


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
    hotelService
      .getHotels(this.props.page, this.props.perPage)
      .then((data) => {
        this.setState({ hotels: data });
        this.setState({ results: data });
       
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
      console.log(c.value);
      return c.value == [event.target.value];
    });
    console.log(commentIndex);
    if (commentIndex === -1) {
      newData = { value: event.target.value, Checked: event.target.checked };
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
  onButtonClick = () => {
    this.props.history.push({
      pathname: "/Compare",
      state: { detail: data },
    });
 
  };
 
 
  render() {
 
    const { hotels, searchField, searchTerm } = this.state;
 
    
    
    const classes = useStyles();

    
    return (
      <div>      
        <div class="row" style={{ marginTop: "80px" }}>
         
        
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

}

export default Compare;
//onSubmit={this.handleSubmit.bind(this)}

/* <img
            src={logo}
            style={{ width: "70%", height: "500px" }}
            alt="cover"
          />{" "} 
          <img
            src={logo}
            style={{ width: "100%", height: "500px" }}
            alt="cover"
          />*/
