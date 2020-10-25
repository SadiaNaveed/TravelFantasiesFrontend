import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { AccountCircleRounded, Add, AddIcCallOutlined, Assignment, BeachAccess, Category, ConfirmationNumber, Dashboard, Delete, Event, ExitToApp, ExploreSharp, Home, Hotel, HotelRounded, LocalOffer, Place, Settings } from '@material-ui/icons';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import HomeFragment from ""
import { createStyles, Icon, makeStyles, withStyles } from '@material-ui/core';
import AppBarComponenet from '../fragments/AppBar';
import AddHotel from './AddHotel';
import HomeFragment from './AllHotelsFragment';
import Hotels from '../../Hotels/Hotels';
const drawerWidth = 240;
const useStyles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});
        

class Home extends Component {
     constructor(){
        super();
         this.state = {
             render: '',
             open: false,
             home: true,
         }
    this.handleHotelClick = this.handleHotelClick.bind(this);    
    }
     
    TabPanel(props) {
        const { children, value, index, ...other } = props;

    }
    handleChange = (event, newValue) => {
    setValue(newValue);
  };

    render() {
        const { classes } = this.props;
       const [value, setValue] = React.useState(0);
        return (
            <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
          <Tab label="Item Five" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>

        );
    }
    }
   

export default withStyles(useStyles)(SideBarComponent)
