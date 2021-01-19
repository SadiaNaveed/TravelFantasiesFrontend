import React from "react";
// import Link from "@material-ui/core/Link";
import "./Banner.css";
import { Link } from "react-router-dom";
import { Button, Col } from "reactstrap";
import { Animate } from "react-simple-animate";

function Banner() {
  return (
    <header id="showcase">
      <div class="showcase-content">
        <Animate
          play={true} // set play true to start the animation
          duration={1} // how long is the animation duration
          delay={0.3} // how many delay seconds will apply before the animation start
          start={{ transform: "translate(0, -500px)" }}
          end={{ transform: "translate(0px, 0px)" }}
          // complete={{ display: "none" }}
          easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
          // onComplete={onCompleteCallBack} // call back function when animation is completed
        >
          <h1 style={{ fontSize: "75px" }} class="l-heading">
            <span style={{ color: "#2E6E7B", fontFamily: "revert" }}>
              Find Your{" "}
            </span>
            <span style={{ color: "#56DDF8", fontFamily: "revert" }}>
              Guide Here
            </span>
          </h1>
        </Animate>
        <Animate
          play={true} // set play true to start the animation
          duration={1} // how long is the animation duration
          delay={0.3} // how many delay seconds will apply before the animation start
          start={{ transform: "translate(-500px, 0px)" }}
          end={{ transform: "translate(0px, 0px)" }}
          // complete={{ display: "none" }}
          easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
          // onComplete={onCompleteCallBack} // call back function when animation is completed
        >
          <p style={{ fontSize: "20px" }}>Now easy To Travel</p>
        </Animate>
        <Animate
          play={true} // set play true to start the animation
          duration={1} // how long is the animation duration
          delay={0.5} // how many delay seconds will apply before the animation start
          start={{ transform: "translate(0px, 500px)" }}
          end={{ transform: "translate(0px, 0px)" }}
          // complete={{ display: "none" }}
          easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
          // onComplete={onCompleteCallBack} // call back function when animation is completed
        >
          <Link to={"/BecomeGuide"} style={{ textDecoration: "none" }}>
            <Col col="3" md="12">
              <Button style={{ marginTop: 50 }} outline color="info">
                Become a Guide
              </Button>
            </Col>
          </Link>
        </Animate>
      </div>
    </header>
  );
}

export default Banner;
