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

        })
        .catch((err) => {
          console.log(err);
        });
}
     
    render() {

        return (
          <div style={{ marginLeft: "250px", marginTop: "120px" }}>
          <h1>Blog Categories</h1>
          {this.state.Blogs.length == 0 ? (
            <p>Loading...</p>
          ) : (
            <div class="card">
              <header class="card-header">
              <small class="text-muted">All Categories</small>
              </header>
              <div class="card-body">
                <div></div>
                <div class="position-relative table-responsive">
                  <table class="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th
                          class="font-weight-bold"
                          style={{
                            verticalAlign: "middle",
                            overflow: "hidden",
                          }}
                        >
                          <div class="d-inline">Category</div>
                        </th>
  
                        <th
                          class=""
                          style={{
                            verticalAlign: "middle",
                            overflow: "hidden",
                          }}
                        >
                          <div class="d-inline"> Action</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody style={{ cursor: "pointer" }}>
                      {this.state.Blogs.map((Blog, index) => (
                        <tr class="" tabIndex="0">
                          <td class="">{Blog.CategoryName}</td>
  
                          <td
                            class=""
                            style={{
                              verticalAlign: "middle",
                              overflow: "hidden",
                            }}
                          >
                            <Button
                              onClick={() => this.onViewButtonClick(Blog._id)}
                            >
                              <Visibility />
                            </Button>
                            <Button>
                              <Edit />{" "}
                            </Button>
                            <Button
                              onClick={() => this.onDeleteButtonClick(Blog._id)}
                            >
                              <Delete />{" "}
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
        );    
    }
   
}
export default withStyles(classes)(AllBlogCategory);