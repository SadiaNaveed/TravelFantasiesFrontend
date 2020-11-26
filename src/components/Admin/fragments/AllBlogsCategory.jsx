import { Button, Grid, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import BlogService from '../../../services/BlogService';
import Paper from '@material-ui/core/Paper';
import { Delete, Edit, Update, Visibility } from '@material-ui/icons';
import BlogCategoryService from '../../../services/BlogCategoryService';

        
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

const classes = theme => ({
  heading: {
    color: "#33ba59",
        fontStyle: "italic",
    fontSize: 25,
        textAlign: "center",
    
  },
  table: {
    minWidth: 100,
  },
});

class AllBlogCategory extends Component {
    constructor() {
        super();
        this.state = {
            render: '',
            open: false,
            home: true,
            Blogs: [],
        }
        // this.handleBlogClick = this.handleBlogClick.bind(this);    
    }
    arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };
     componentDidMount() {
     BlogCategoryService
        .getBlogCategory(this.props.page, this.props.perPage)
        .then((data) => {
          this.setState({ Blogs: data });

          // setTotal(data.total);
          // setPerPage(10);
        })
        .catch((err) => {
          console.log(err);
        });
}
     
    render() {
      // const classes = useStyles;

        return (
            <div style={{marginLeft:"250px", marginTop:"120px"}}>
                <h1>
                    All Blogs
                </h1>
                {this.state.Blogs.length == 0 ? (
          <p>There are no Blogs</p>
        ) : (
            <Grid container spacing={0}>
              
                {/* //  <SingleBlog key={index} Blog={Blog} /> */}
                   <TableContainer component={Paper} style={{marginBottom:"10px", marginTop: "40px"}}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell> Category </StyledTableCell>
           <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
                      <TableBody>
                        {this.state.Blogs.map((Blog, index) => (
         
            <StyledTableRow key={Blog._id}>
              <StyledTableCell component="th" scope="row">
                {Blog.CategoryName}
              </StyledTableCell>
                            <StyledTableCell align="center">
                              <Button><Visibility /></Button>
                              <Button><Edit /> </Button>
                              <Button><Delete /> </Button>
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
export default withStyles(classes)(AllBlogCategory);