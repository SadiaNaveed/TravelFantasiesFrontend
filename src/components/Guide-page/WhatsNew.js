import React from "react";
import { Component } from "react";
import Grid from "@material-ui/core/Grid";
// import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

import { Link } from "react-router-dom";
import {
  Card,
  Button,
  CardText,
  Row,
  Col,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import axios from 'axios'

class WhatsNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guides: [],
    }
  }
  GuideDetail(guide){
    console.log(guide)
    this.props.setcurrentGuide(guide)
  }
 
  componentDidMount() {

    axios.get("http://localhost:4000/api/guide")
    .then(res=>{

      console.log('RES-----', res.data)
      this.setState({ guides: res.data })
    
    }).catch((err)=>{
     console.log('--error--',err)
    })
  
  }

  render() {

  return (

    
    <div>


      <ScrollAnimation animateIn="animate__lightSpeedInRight">
        <div
          style={{
            fontSize: "50px",
            marginTop: 20,
            fontWeight: "bold",
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          Guides
        </div>
      </ScrollAnimation>

      

      <Row
        style={{
          alignSelf: "center",
          justifyContent: "space-around",
          marginRight: 30,
          marginLeft: 30,
        }}
      >
            {
              this.state.guides.map((guide, index)=>
              
                {
                  return  <Col sm="4">
                  <ScrollAnimation
                    animateIn="animate__fadeInLeft"
                    animateOut="animate__fadeOutLeft"
                  >
                <Card>
                <CardBody>
                  <CardTitle tag="h5"> </CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    Explore places with the help of guide
                  </CardSubtitle>
                </CardBody>
                <img
                  width="50%"
                  src={require("../../pic/user_male2-512.png")}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardText>
                    {guide.GuideName}
                  </CardText>
                  <CardText>
                    {guide.Description}
                  </CardText>
                  {/* <CardLink>
                    <Link to={"/book-tour"} style={{ textDecoration: "none" }}>
                      Book Now
                    </Link>
                  </CardLink> */}
                  <CardLink>
                  
                  <Link to={"/GuideDetail"} style={{ textDecoration: "none" }}>
                  <Button
                      onClick={()=>this.GuideDetail(guide)}
                       style={{ marginTop: 50 }} outline color="info">
                        Learn More
                </Button>
                  
                      
                    </Link>
                  </CardLink>
                </CardBody>
              </Card>
              </ScrollAnimation>
            
                 </Col>
                })
             }
        
      </Row>   
      
    </div>
  );
 }
  }


export default WhatsNew;
