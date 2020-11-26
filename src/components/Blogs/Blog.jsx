import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Login from "../Login";
import ReactPlayer from "react-player";
import { Container, Row, Col, Button } from 'reactstrap';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    hero: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1521838931000/photosp/579d7959-4d78-4208-9eac-c2fe3fe8a0ac/stock-photo-travel-words-background-traveling-traveler-wander-wanderlust-blog-blogging-579d7959-4d78-4208-9eac-c2fe3fe8a0ac.jpg')`,
      height: "350px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      fontSize: "4rem",
      [theme.breakpoints.down("sm")]: {
        height: 200,
        fontSize: "3em"
      }
    }
  })
);

function Blog() {
  const classes = useStyles();
  return (

<Container>
  

    <div className="App">
      <AppBar className={classes.appBar} position="static">
      </AppBar>
        <Box className={classes.hero}>
          <Box>
            Top Traveling Blogs
          </Box>
        </Box>
    </div>
   <Row>
     <Col xs="6">
     <h2  className="mt-4">Related Blogs</h2>
     </Col>
     <Col xs="6">
       <Button className="mt-4 ml-5" style={{float:"right", background:"green" }}> Upload</Button>
       <Button className="mt-4 ml-8" style={{float:"right", background:"green" }}> Delete</Button>
   
     </Col>
   </Row>
    <Row className="mt-4">
            <Col xs="4">
              
            <div className="video">
            <ReactPlayer
        url="https://youtu.be/0fvoaoDXNVw"
        width="345px"
        height="300px"
      />
      <h3 align="center"> Kashmir </h3>
      
      </div>
            </Col>
            <Col xs="4">
            <div className="video">
            <ReactPlayer
        url="https://youtu.be/CJnXQM8lwa0"
        width="345px"
        height="300px"
      />
       <h3 align="center"> Peshawar </h3>
      </div>
            </Col>

            <Col xs="4">
            <div className="video">
            <ReactPlayer
        url="https://youtu.be/HHzqut3AMZI"
        width="345px"
        height="300px"
      />
       <h3 align="center"> Astola Island </h3>
      </div>
            </Col>

          </Row>
          <Row className="mt-3">
          <Col xs="4">
            <div className="video">
            <ReactPlayer
        url="https://youtu.be/z59kQ0tnXPs"
        width="345px"
        height="300px"
      />
        <h3 align="center"> Choukandi Tomb </h3>
      </div>
            </Col>

            <Col xs="4">
            <div className="video">
            <ReactPlayer
        url="https://youtu.be/VAHs7_Zd0LY"
        width="345px"
        height="300px"
      />
       <h3 align="center"> Hunza </h3>
      </div>
            </Col>

            <Col xs="4">
            <div className="video">
            <ReactPlayer
        url="https://youtu.be/R_t0qhgpB5I"
        width="345px"
        height="300px"
      />
       <h3 align="center"> Kashmir </h3>
      </div>
            </Col>

          </Row>
       


  </Container>

  );
}
  export default Blog;
