import React from "react";
import Badshahi from "../../unnamed.jpg";
import { makeStyles, ButtonBase, Grid } from "@material-ui/core";
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
        textAlign: "center",
    
  },
}));

const Compare = () => {
 const classes = useStyles();
    return (
        <div style={{marginTop: "112px"}}> 
            <h1>Add And Compare Hotels</h1>
            <Grid container style={{border:"bold",borderColor:"black"}}>
                <Grid item xs={3}>
<p className= {classes.heading}> Hotel Name</p>
                </Grid>
                <Grid item xs={3}>
                   <p className= {classes.heading}>Location</p> 
                </Grid><Grid item xs={3}>
                    <p className= {classes.heading}> Cost per day</p>
                </Grid><Grid item xs={3}>
                    <p className= {classes.heading}> Facilities To Be Provided</p>
                </Grid>
            </Grid>
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
