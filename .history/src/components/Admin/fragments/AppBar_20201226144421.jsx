import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../2020-09-09 (2).png";
import userService from "../../../services/UserService";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },

  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  icon: {
    color: "blue",
  },
}));

const AppBarComponenet = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <img
            src={logo}
            style={{
              height: "70px",
              paddingRight: "3rem",
              paddingLeft: "2rem",
            }}
            alt="cover"
          />
          <Typography variant="h4" display="inline">
            Traval Fantasies Admin
          </Typography>
          <Link
            to={"/"}
            style={{ textDecoration: "none", marginLeft: "500px" }}
          >
            <Button
              style={{ marginTop: 50 }}
              outline
              color="info"
              onClick={(e) => {
                userService.logout();
              }}
            >
              Logout
            </Button>
          </Link>
        </Toolbar>
        {/* <AccountCircleIcon style={{ position: "absolute", marginLeft: "1700px" }} /> */}
      </AppBar>
    </div>
  );
};
export default AppBarComponenet;
