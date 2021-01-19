import { Button, Grid, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { useHistory, withRouter } from "react-router";
import guideService from '../../../services/GuideService';
import Paper from '@material-ui/core/Paper';
import { Delete, Edit, Update, Visibility } from '@material-ui/icons';
import Axios from "axios"
        
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const classes = makeStyles((theme) => ({
  heading: {
    color: "black",
    fontStyle: "italic",
    fontSize: 25,
    textAlign: "center",
    
  },
  table: {
  minWidth: 500,
  },
}));

// const rows = [
//     createData('Title', "Lahore", "Hunza", "Kashmir"),
//     createData('Link', "https://youtu.be/R_t0qhgpB5I","https://youtu.be/R_t0qhgpB5I","https://youtu.be/R_t0qhgpB5I"),
//     createData('Description', "1 day tour","5 days tour","3 days tour"),
//   ];

class AllRelatedGuide extends Component {
    constructor(props) {
        super(props);
        this.state = {
        render: '',
        open: false,
        home: true,
        guides: [],
        history: useHistory,
      }
      this.onViewButtonClick = this.onViewButtonClick.bind(this);    
      this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
    }
    arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };
     componentDidMount() {
      Axios.get(`http://localhost:4000/api/RequestGuide/approved`)
        .then((res) => {
          this.setState({ guides: res.data });
        })
        .catch((err) => {
          console.log(err);
        });
  };

  onViewButtonClick = (id) => {
   this.props.history.push({
       pathname: '/GuideView',
       search: '?Guide=' + id,
       
    }) 
  }
  onDeleteButtonClick = (id) => {
     guideService
      .deleteGuide(id)
      .then((response) => {
        alert(response);
      })
      .catch((err) => {
        console.log(err);
      
      });
  }
  
    render() {
        return (
            <div style={{marginLeft:"250px", marginTop:"120px"}}>
                <h1>
                  Welcome to  All Guides !
                </h1>
                {this.state.guides.length == 0 ? (
          <p>There are no Guide</p>
        ) : (
            <Grid container spacing={0}>
                   <TableContainer component={Paper} style={{marginBottom:"10px", marginTop: "40px"}}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Guide Name</StyledTableCell>
            <StyledTableCell align="center">Cost</StyledTableCell>
            <StyledTableCell align="center">Experience</StyledTableCell>
            <StyledTableCell align="center">ContactNo</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
                      <TableBody>
                        {this.state.guides.map((Guide, index) => (         
            <StyledTableRow key={Guide._id}>
              <StyledTableCell component="th" scope="row">{Guide.GuideName}</StyledTableCell>
              <StyledTableCell align="center">{Guide.Cost}</StyledTableCell>
              <StyledTableCell align="center">{Guide.Experience}</StyledTableCell>
              <StyledTableCell align="center">{Guide.ContactNo}</StyledTableCell>
              <StyledTableCell align="center">
              <Button onClick={() => this.onViewButtonClick(Guide._id)} ><Visibility /></Button>
              <Button ><Edit /> </Button>
              <Button onClick={() => this.onDeleteButtonClick(Guide._id)}><Delete /> </Button>             
            </StyledTableCell>  
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
        </TableContainer>
            
            </Grid>
          )}
            </div>

        );
      
    }
   
}
export default withRouter(AllRelatedGuide);