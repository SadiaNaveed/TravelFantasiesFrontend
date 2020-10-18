import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { AccountCircleRounded, Assignment, BeachAccess, ConfirmationNumber, Event, ExitToApp, ExploreSharp, Home, Hotel, HotelRounded, LocalOffer, Place, Settings } from '@material-ui/icons';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import logo from "../../2020-09-09 (2).png";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
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
              </Toolbar>
              <AccountCircleIcon style={{position:"absolute", marginLeft:"1700px"}}/>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            
              <ListItem button >
                <ListItemIcon> <Home style={{ color: "blue" }} /></ListItemIcon>
                <ListItemText primary="Home" />
                      </ListItem>
                      <Divider />
                      <ListItem button >
                <ListItemIcon> <Hotel style={{ color: "blue" }}/></ListItemIcon>
                <ListItemText primary="Hotels" />
                      </ListItem>
                      <Divider />

              <ListItem button >
                <ListItemIcon> <Home style={{ color: "blue" }}/></ListItemIcon>
                <ListItemText primary="Posts" />
                      </ListItem>
                      <Divider />
              <ListItem button >
                <ListItemIcon> <BeachAccess style={{ color: "blue" }}/></ListItemIcon>
                <ListItemText primary="Tours" />
                      </ListItem>
                      <Divider />
            <ListItem button >
                <ListItemIcon> <LocalOffer style={{ color: "blue" }} /></ListItemIcon>
                <ListItemText primary="Packages" />
                      </ListItem>
                      <Divider />
                      <ListItem button >
                <ListItemIcon> <Event style={{ color: "blue" }}/></ListItemIcon>
                <ListItemText primary="Events" />
                      </ListItem>
                      <Divider />
                      <ListItem button >
                <ListItemIcon> <ConfirmationNumber style={{ color: "blue" }}/></ListItemIcon>
                <ListItemText primary="Bookings" />
                      </ListItem>
                      <Divider />
              <ListItem button >
                <ListItemIcon> <Place style={{ color: "blue" }} /></ListItemIcon>
                <ListItemText primary="Places" />
                      </ListItem>
                      <Divider />
              <ListItem button >
                <ListItemIcon> <AccountCircleRounded style={{ color: "blue" }} /></ListItemIcon>
                <ListItemText primary="Users" />
                      </ListItem>
                      <Divider />
                      <ListItem button >
                <ListItemIcon> <Assignment style={{ color: "blue" }} /></ListItemIcon>
                <ListItemText primary="Blog" />
                      </ListItem>
                      <Divider />
              <ListItem button >
                <ListItemIcon> <Settings style={{ color: "blue" }}/></ListItemIcon>
                <ListItemText primary="Settings" />
                      </ListItem>
                      <Divider />
              <ListItem button >
                <ListItemIcon> <ExitToApp style={{ color: "blue" }}/></ListItemIcon>
                          <ListItemText primary="Logout" />
                           <Divider />
              </ListItem>
        
          </List>
          <Divider />
         
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        
      </main>
    </div>
  );
}
