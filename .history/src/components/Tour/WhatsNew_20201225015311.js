// import React from "react";
// import Grid from "@material-ui/core/Grid";
// // import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// // import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import ScrollAnimation from "react-animate-on-scroll";
// import "animate.css/animate.min.css";
// import SingleTour from "./SingleTour";
// import tourService from "../../services/TourService";
// import { Link } from "react-router-dom";
// import {
//   Card,
//   Button,
//   CardText,
//   Row,
//   Col,
//   CardBody,
//   CardLink,
//   CardTitle,
//   CardSubtitle,
// } from "reactstrap";

// import axios from "axios";
// class WhatsNew extends React.Component {
//   state = {
//     Img: "",
//     tours: [],
//   };

//   arrayBufferToBase64(buffer) {
//     var binary = "";
//     var bytes = [].slice.call(new Uint8Array(buffer));
//     bytes.forEach((b) => (binary += String.fromCharCode(b)));
//     return window.btoa(binary);
//   }

//   componentDidMount() {
//     tourService
//       .gettours(this.props.page, this.props.perPage)
//       .then((data) => {
//         this.setState({ tours: data });

//         // setTotal(data.total);
//         // setPerPage(10);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   componentDidMount() {
//     axios
//       .get("http://localhost:4000/api/tours")
//       .then((response) => {
//         this.setState({ tours: response.data });
//         console.log(this.state.tours);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   render() {
//     var recent = [];
//     var onway = [];
//     var toprated = [];

//     for (var i = 0; i < this.state.tours.length; i++) {
//       if (i < 3) {
//         var r = (
//           <Col sm="4">
//             <ScrollAnimation
//               animateIn="animate__fadeInLeft"
//               animateOut="animate__fadeOutLeft"
//             >
//               <Card>
//                 <CardBody>
//                   <CardTitle tag="h5">{this.state.tours[i].Title}</CardTitle>
//                   <CardSubtitle tag="h6" className="mb-2 text-muted">
//                     Explore the City of Lights
//                   </CardSubtitle>
//                 </CardBody>
//                 <img
//                   width="100%"
//                   src={
//                     "data:image/jpeg;base64," +
//                     this.arrayBufferToBase64(this.state.tours[i].Images)
//                   }
//                   alt="Card image cap"
//                 />
//                 <CardBody>
//                   <CardText>{this.state.tours[i].Description}</CardText>
//                   <CardLink>
//                     <Link to={"/book-tour"} style={{ textDecoration: "none" }}>
//                       Book Now
//                     </Link>
//                   </CardLink>
//                   <CardLink>
//                     <Link
//                       to={"/TourDetailPage"}
//                       style={{ textDecoration: "none" }}
//                     >
//                       Learn More
//                     </Link>
//                   </CardLink>
//                 </CardBody>
//               </Card>
//             </ScrollAnimation>
//           </Col>
//         );

//         recent.push(r);
//       } else if (i > 2 && i < 6) {
//         var r = (
//           <Col sm="4">
//             <ScrollAnimation
//               animateIn="animate__fadeInLeft"
//               animateOut="animate__fadeOutLeft"
//             >
//               <Card>
//                 <CardBody>
//                   <CardTitle tag="h5">{this.state.tours[i].Title}</CardTitle>
//                   <CardSubtitle tag="h6" className="mb-2 text-muted">
//                     Explore the City of Lights
//                   </CardSubtitle>
//                 </CardBody>
//                 <img
//                   width="100%"
//                   // src={require(this.state.tours[i].Images)}
//                   alt="Card image cap"
//                 />
//                 <CardBody>
//                   <CardText>{this.state.tours[i].Description}</CardText>
//                   <CardLink>
//                     <Link to={"/book-tour"} style={{ textDecoration: "none" }}>
//                       Book Now
//                     </Link>
//                   </CardLink>
//                   <CardLink href="#">Learn More</CardLink>
//                 </CardBody>
//               </Card>
//             </ScrollAnimation>
//           </Col>
//         );

//         onway.push(r);
//       } else if (i > 5) {
//         var r = (
//           <Col sm="4">
//             <ScrollAnimation
//               animateIn="animate__fadeInLeft"
//               animateOut="animate__fadeOutLeft"
//             >
//               <Card>
//                 <CardBody>
//                   <CardTitle tag="h5">{this.state.tours[i].Title}</CardTitle>
//                   <CardSubtitle tag="h6" className="mb-2 text-muted">
//                     Explore the City of Lights
//                   </CardSubtitle>
//                 </CardBody>
//                 <img
//                   width="100%"
//                   // src={require(this.state.tours[i].Images)}
//                   alt="Card image cap"
//                 />
//                 <CardBody>
//                   <CardText>{this.state.tours[i].Description}</CardText>
//                   <CardLink>
//                     <Link to={"/book-tour"} style={{ textDecoration: "none" }}>
//                       Book Now
//                     </Link>
//                   </CardLink>
//                   <CardLink href="#">Learn More</CardLink>
//                 </CardBody>
//               </Card>
//             </ScrollAnimation>
//           </Col>
//         );

//         toprated.push(r);
//       }
//     }

//     return (
//       <div>
//         <ScrollAnimation animateIn="animate__lightSpeedInRight">
//           <div
//             style={{
//               fontSize: "50px",
//               marginTop: 20,
//               fontWeight: "bold",
//               alignSelf: "center",
//               textAlign: "center",
//             }}
//           >
//             Recent Tours
//           </div>
//         </ScrollAnimation>

//         <Row
//           style={{
//             alignSelf: "center",
//             justifyContent: "space-around",
//             marginRight: 30,
//             marginLeft: 30,
//           }}
//         >
//           {recent}
//         </Row>

//         <ScrollAnimation animateIn="bounceInRight">
//           <div
//             class="animate__animated animate__bounce"
//             style={{
//               fontSize: "50px",
//               padding: "30px",
//               fontWeight: "bold",
//               alignSelf: "center",
//               textAlign: "center",
//             }}
//           >
//             Tours on The Way
//           </div>
//         </ScrollAnimation>

//         <Row
//           style={{
//             alignSelf: "center",
//             justifyContent: "space-around",
//             marginRight: 30,
//             marginLeft: 30,
//           }}
//         >
//           {onway}
//         </Row>
//         <ScrollAnimation animateIn="bounceInRight">
//           <div
//             class="animate__animated animate__bounce"
//             style={{
//               fontSize: "50px",
//               padding: "30px",
//               fontWeight: "bold",
//               alignSelf: "center",
//               textAlign: "center",
//             }}
//           >
//             Top Rated Tours
//           </div>
//         </ScrollAnimation>

//         <Row
//           style={{
//             alignSelf: "center",
//             justifyContent: "space-around",
//             marginRight: 30,
//             marginLeft: 30,
//           }}
//         >
//           {toprated}
//         </Row>
//       </div>
//     );
//   }
// }

// export default WhatsNew;
