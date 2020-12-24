import React from "react";
//import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { AppBar, Grid, Button, Icon } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { purple } from "@material-ui/core/colors";
//import Hotels from "./Hotels";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    //flexWrap: "wrap",
  },
  button: {
    margin: theme.spacing(1),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    textColor: "white",
    width: 200,
  },
  root: {
    color: "white",
    paddingLeft: "2rem",
    fontSize: "1.8rem",
    paddingTop: "1rem",
    "& p": {
      margin: 0,
      color: "green",
      "& span": {
        color: "blue",
      },
      // style rule
      //   foo: (props) => ({
      //     backgroundColor: props.backgroundColor,
      //   }),
      //   bar: {
      //     // CSS property
      //     color: (props) => props.color,
      //   },
      // },
    },
  },
}));
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  },
}))(Button);

const SearchBar = (props) => {
  // const handleHotels = () => {
  //   this.props.history.replace("/hotels");
  // };
  const classes = useStyles();
  return (
    <div>
      {/* <ul>
        <li style={{ display: "inline", padding: "5px" }}>
          <Link to="/"> Home </Link>
        </li>
        <li style={{ display: "inline", padding: "5px" }}>
          <Link to="/products"> Products </Link>
        </li>
        <li style={{ display: "inline", padding: "5px" }}>
          <Link to="/contactus"> Contact Us </Link>
        </li>
        <li style={{ display: "inline", padding: "5px" }}>
          <Link to="/login"> Login </Link>
        </li>
        <li style={{ display: "inline", padding: "5px" }}>
          <Button varient="containd" color="secondary">
            SignUp

            <div className={`${classes.foo} ${classes.bar}`}>
            </Button>
        </li>

      </ul> */}

      <AppBar position="static" style={{ background: "#33abb8" }}>
        <Grid container>
          <Grid item xs={3} className={classes.root}>
            Search Hotels
          </Grid>
          <Grid item xs={2}>
            <form className={classes.container} noValidate>
              <TextField
                id="filled-basic"
                label="Enter Location"
                variant="filled"
                backgroundColor="white"
                color="orange"
              />
            </form>
          </Grid>
          <Grid item xs={2}>
            <form className={classes.container} noValidate>
              <TextField
                id="date"
                label="Start Date"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </Grid>
          <Grid item xs={2}>
            <form className={classes.container} noValidate>
              <TextField
                id="date"
                label="End Date"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </Grid>

          <Grid item xs={3}>
            <ColorButton
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<Icon>send</Icon>}
              //  onClick={this.handleHotels}
            >
              Find Hotel
            </ColorButton>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
};

export default SearchBar;
