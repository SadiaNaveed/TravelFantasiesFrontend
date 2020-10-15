import React from "react";
import Badshahi from "../../unnamed.jpg";
import { makeStyles, ButtonBase, Grid, Table, withStyles } from "@material-ui/core";

import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//import logo from "../2020-09-03 (2).png";

// const images = [
//   {
//     url: Badshahi,
//     width: "100%",
//   },
// ];
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
    '&:nth-of-type(odd)': {
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
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Hotel 1', 159, 6.0, 24, 4.0),
  createData('Hotel 2', 237, 9.0, 37, 4.3),
  createData('Hotel 3', 262, 16.0, 24, 6.0),
  
];
const Compare = () => {
 const classes = useStyles();
    return (
        <div style={{marginTop: "112px"}}> 
        <h1>Add And Compare Hotels</h1>
         <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Hotels</StyledTableCell>
            <StyledTableCell align="right">Hotel 1</StyledTableCell>
            <StyledTableCell align="right">Hotel 2</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
             </div>
)
};

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
