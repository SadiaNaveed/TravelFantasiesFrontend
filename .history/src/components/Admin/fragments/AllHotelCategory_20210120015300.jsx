import {
  Button,
  Grid,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import hotelService from "../../../services/HotelService";
import Paper from "@material-ui/core/Paper";
import { Delete, Edit, Update, Visibility } from "@material-ui/icons";
import hotelCategoryService from "../../../services/HotelCategoryService";

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

const classes = (theme) => ({
  heading: {
    color: "#33ba59",
    // marginTop: "40px",
    //paddingRight: "100px",
    // fontSize: "21",
    fontStyle: "italic",
    fontSize: 25,
    textAlign: "center",
  },
  table: {
    minWidth: 100,
  },
});

class AllHotelCategory extends Component {
  constructor() {
    super();
    this.state = {
      render: "",
      open: false,
      home: true,
      hotels: [],
    };
    // this.handleHotelClick = this.handleHotelClick.bind(this);
  }
  arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }
  componentDidMount() {
    hotelCategoryService
      .getHotelCategory(this.props.page, this.props.perPage)
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
    // const classes = useStyles;

    return (
      <div style={{ marginLeft: "250px", marginTop: "120px" }}>
        <h1>Hotel Categories</h1>
        {this.state.hotels.length == 0 ? (
          <p>Loading...</p>
        ) : (
          <div class="card">
            <header class="card-header">
              All <small class="text-muted"> Categories</small>
            </header>
            <div class="card-body">
              <div></div>
              <div class="position-relative table-responsive">
                <table class="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th
                        class="font-weight-bold"
                        style={{
                          verticalAlign: "middle",
                          overflow: "hidden",
                        }}
                      >
                        <div class="d-inline">Category</div>
                      </th>

                      <th
                        class=""
                        style={{
                          verticalAlign: "middle",
                          overflow: "hidden",
                        }}
                      >
                        <div class="d-inline"> Action</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody style={{ cursor: "pointer" }}>
                    {this.state.hotels.map((hotel, index) => (
                      <tr class="" tabIndex="0">
                        <td class="">{hotel.CategoryName}</td>
                        {/* <td class="">{hotel.Description}</td> */}

                        <td
                          class=""
                          style={{
                            verticalAlign: "middle",
                            overflow: "hidden",
                          }}
                        >
                          <Button
                            onClick={() => this.onViewButtonClick(hotel._id)}
                          >
                            <Visibility />
                          </Button>

                          <Button
                            onClick={() => this.onDeleteButtonClick(hotel._id)}
                          >
                            <Delete />{" "}
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
// export default withStyles(useStyles)(HomeFragment)
export default withStyles(classes)(AllHotelCategory);
