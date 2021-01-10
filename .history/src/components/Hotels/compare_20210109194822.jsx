import React, { Component, useCallback, useEffect } from "react";
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
let data = [];
let res = [];
// const useStyles = (theme) => ({
//   root: {
//     display: "flex",
//     marginTop: "50px",
//   },
//   card: {
//     display: "flex",
//   },
//   details: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   content: {
//     flex: "1 0 auto",
//   },
//   media: {
//     display: "flex",
//     height: "10px",
//     //  objectFit: "contain",
//     alignItems: "left",
//     width: "2500px",
//   },
// });

class Compare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      compare: [],
    };
  }
  arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }
  componentDidMount() {
    this.props.location.state.detail.map((one, index) =>
      hotelService
        .getSingleHotel(one.value)
        .then((data) => {
          // copy.push(data);
          // if (compare.length === 0) {
          //   setCompare([data]);
          // } else setCompare([...compare, data]);
          setCompare(data);
        })
        .catch((err) => {
          console.log(err);
        })
    );
  }

  render() {
    const { hotels, searchField, searchTerm } = this.state;

    const classes = useStyles();

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
                {this.state.compare.map((hotel) => (
                  <StyledTableCell align="center">
                    {hotel.HotelName} 3
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                {this.state.compare.map((hotel) => (
                  <StyledTableCell align="center">
                    {hotel.Location} 3
                  </StyledTableCell>
                ))}
              </TableRow>
              <TableRow>
                {this.state.compare.map((hotel, index) => (
                  <StyledTableCell align="center">
                    {hotel.HotelName}
                  </StyledTableCell>
                ))}
              </TableRow>
              <TableRow>
                {this.state.compare.map((hotel, index) => (
                  <StyledTableCell align="center">
                    {hotel.Name} 3
                  </StyledTableCell>
                ))}
              </TableRow>
              <TableRow>
                {this.state.compare.map((hotel, index) => (
                  <StyledTableCell align="center">
                    {hotel.Name} 3
                  </StyledTableCell>
                ))}
              </TableRow>
              <TableRow>
                {this.state.compare.map((hotel, index) => (
                  <StyledTableCell align="center">
                    {hotel.Name} 3
                  </StyledTableCell>
                ))}
              </TableRow>
              <TableRow>
                {this.state.compare.map((hotel, index) => (
                  <StyledTableCell align="center">
                    {hotel.Name} 3
                  </StyledTableCell>
                ))}
              </TableRow>
              <TableRow>
                {this.state.compare.map((hotel, index) => (
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
            this.props.history.goBack();
          }}
        >
          Add More
        </Button>
      </div>
    );
  }
}
export default Compare;
