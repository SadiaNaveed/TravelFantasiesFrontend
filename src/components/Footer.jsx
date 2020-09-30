import React from "react";
//import { Link } from "react-router-dom";
//import Button from "@material-ui/core/Button";
//import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   link: {
//     color: "white",
//     paddingRight: "1rem",
//   },
// }));

const Footer = () => {
  // const classes = useStyles();
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
          </Button>
        </li>
      </ul> */}
      <Grid
        container
        style={{
          backgroundColor: "#3f51b5",
          // position: "absolute",
        }}
      >
        <Grid item xs={4}>
          <span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              quas, quaerat, harum autem officiis odio reiciendis recusandae
              possimus impedit nobis totam tempore unde quisquam molestias
              debitis qui minus ut! Ratione. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quia quas, quaerat, harum autem
              officiis odio reiciendis recusandae possimus impedit nobis totam
              tempore unde quisquam molestias debitis qui minus ut!
              Ratione.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quia quas, quaerat, harum autem officiis odio reiciendis
              recusandae possimus impedit nobis totam tempore unde quisquam
              molestias debitis qui minus ut! Ratione.Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quia quas, quaerat, harum autem
              officiis odio reiciendis recusandae possimus impedit nobis totam
              tempore unde quisquam molestias debitis qui minus ut! Ratione.
            </p>
          </span>
        </Grid>
        <Grid item xs={4}>
          <span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              quas, quaerat, harum autem officiis odio reiciendis recusandae
              possimus impedit nobis totam tempore unde quisquam molestias
              debitis qui minus ut! Ratione.
            </p>
          </span>
        </Grid>
        <Grid item xs={4}>
          <span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              quas, quaerat, harum autem officiis odio reiciendis recusandae
              possimus impedit nobis totam tempore unde quisquam molestias
              debitis qui minus ut! Ratione.
            </p>
          </span>
        </Grid>

        <Grid
          item
          xs={12}
          style={{ backgroundColor: "#1a237e", color: "white" }}
        >
          <p style={{ textAlign: "center" }}>Copyrights @Travel Fantasies</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
