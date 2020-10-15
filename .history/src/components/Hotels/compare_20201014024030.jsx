import React from "react";
import Badshahi from "../../unnamed.jpg";
import { makeStyles, ButtonBase, Grid, Table } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Map from "../Map";
//import logo from "../2020-09-03 (2).png";

// const images = [
//   {
//     url: Badshahi,
//     width: "100%",
//   },
// ];
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
}));

const Compare = () => {
 const classes = useStyles();
    return (
        <div style={{marginTop: "112px"}}> 
            <h1>Add And Compare Hotels</h1>
        <Table>
          <tbody>
            <tr>
              <th>
                Hotels no.
              </th>
              <td>
                Hotel 1
              </td>
              <td>
                Hotel 2
              </td>
              <td>
                Hotel 3
              </td>
            </tr>
            <tr>
              <th>
                Hotel Name
              </th>
            </tr>
            <tr>
              <th>
                Location
              </th>
            </tr>
            <tr>
              <th>
                Cost per day
              </th>
            </tr>
            <tr>
              <th>
                Book Now
              </th>
              <td>
                <button> Book Now</button>
              </td>
              <td>
                <button> Book Now</button>
              </td>
              <td>
                <button> Book Now</button>
              </td>
            </tr>
          </tbody>
            </Table>
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
