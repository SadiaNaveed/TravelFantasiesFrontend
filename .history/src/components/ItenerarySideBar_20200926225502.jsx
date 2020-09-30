import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, createStyles } from "@material-ui/core/styles";

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }

export default class ItinerarySidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: "",
    };
  }

  drawerWidth = 340;

  useStyles = makeStyles((theme) =>
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

  classes = useStyles();

  drawer = (
    <div>
      <div className={classes.toolbar} />
      <h1>Search By</h1>
      <Divider />

      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  onTextChange = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = countries.sort().filter((v) => regex.test(v));
    }

    this.setState(() => ({
      suggestions,
      text: value,
    }));
  };

  selectedText(value) {
    this.setState(() => ({
      text: value,
      suggestions: [],
    }));
  }

  renderSuggestions = () => {
    let { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((item, index) => (
          <li key={index} onClick={() => this.selectedText(item)}>
            {item}
          </li>
        ))}
      </ul>
    );
  };
  render() {
    const { text, suggestions } = this.state;
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
        <h2>Auto Completed</h2>
        <input
          id="query"
          type="text"
          onChange={this.onTextChange}
          value={text}
        />
        {this.renderSuggestions()}
        <span>Suggestions: {suggestions.length}</span>
      </div>
    );
  }
}
