import React from "react"


import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
const useStyles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});
        

class HomeFragment extends Component {
    constructor() {
        super();
        this.state = {
            render: '',
            open: false,
            home: true,
        }
        // this.handleHotelClick = this.handleHotelClick.bind(this);    
    }
     
    render() {
        
       
       
        return (
            <div style={{marginLeft:"300px", marginTop:"120px"}}>
                <h1>
                    Hello All Hotel
                </h1>
            </div>

        );
      
        
    
    }
   
}
// export default withStyles(useStyles)(HomeFragment)
export default HomeFragment;