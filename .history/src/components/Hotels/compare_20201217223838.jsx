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
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Name", "Nishat", "PC", "Serena"),
  createData("Location", "Lahore", "Lahore", "Lahore"),
  createData("Cost per Day", 262, 16.0, 24),
  createData(
    "Book Now",
    <button>Book Now</button>,
    <button>Book Now</button>,
    <button>Book Now</button>
  ),
];
const Compare = (props) => {
  const classes = useStyles();
  console.log(this.props.history);
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
              <StyledTableCell>Hotels</StyledTableCell>
              <StyledTableCell align="center">Hotel 1</StyledTableCell>
              <StyledTableCell align="center">Hotel 2</StyledTableCell>
              <StyledTableCell align="center">Hotel 3</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.calories}</StyledTableCell>
                <StyledTableCell align="center">{row.fat}</StyledTableCell>
                <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                <StyledTableCell align="center">{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button style={{ align: "right" }}>Back</Button>
    </div>
  );
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
