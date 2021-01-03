import { Button, Grid, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { useHistory, withRouter } from "react-router";
import placeService from '../../../services/PlaceService';
import Paper from '@material-ui/core/Paper';
import { Delete, Edit, Update, Visibility } from '@material-ui/icons';

        
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
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Name', 'Lahore fort', 'Ushu Forest', 'Hawks bay beach'),
  createData('Location', "Lahore",  "Kalam",  "Karachi"),
  
];

class AllPlaces extends Component {
    constructor(props) {
        super(props);
        this.state = {
            render: '',
            open: false,
            home: true,
          places: [],
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
     placeService
        .getPlace(this.props.page, this.props.perPage)
        .then((data) => {
          this.setState({ places: data });

          // setTotal(data.total);
          // setPerPage(10);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  onViewButtonClick = (id) => {
    // let history = useHistory();
   this.props.history.push({
       pathname: '/PlaceView',
       search: '?place=' + id,
       
    }) 
  }
  onDeleteButtonClick = (id) => {
     placeService
      .deletePlace(id)
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
                <h1 align="center">
                    All Places
                </h1>
                {this.state.places.length == 0 ? (
          <p>There are no places</p>
        ) : (
            <Grid container spacing={0}>
              
                {/* //  <SingleHotel key={index} hotel={hotel} /> */}
                   <TableContainer component={Paper} style={{marginBottom:"10px", marginTop: "40px"}}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Place Name</StyledTableCell>
            <StyledTableCell align="center">City</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
                      <TableBody>
                        {this.state.places.map((place, index) => (
            <StyledTableRow key={place._id}>
              
              <StyledTableCell align="center">{place.place_name}</StyledTableCell>
              <StyledTableCell align="center">{place.City}</StyledTableCell>
              <StyledTableCell align="center">{place.Description}</StyledTableCell>
                            <StyledTableCell align="center">
              <Button onClick={() => this.onViewButtonClick(place._id)} ><Visibility /></Button>
              <Button ><Edit /> </Button>
              <Button onClick={() => this.onDeleteButtonClick(place._id)}><Delete /> </Button>
                             
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
// export default withStyles(useStyles)(HomeFragment)
export default withRouter(AllPlaces);