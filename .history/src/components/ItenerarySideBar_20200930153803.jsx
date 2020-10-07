import React from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const drawerWidth = 310;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        //height: "30px",
        flexShrink: 0,
      },
    },

    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      marginTop: "101px",
      borderColor: "#339ba5",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

const ItinerarySidebar = ({ handleClick }) => {
  const classes = useStyles();

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <h1>Search By</h1>
      <Divider />
      <button
        style={{ marginLeft: "50%", marginTop: "400px" }}
        onClick={handleClick}
      >
        Activate Lasers
      </button>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};
export default ItinerarySidebar;
