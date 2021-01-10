import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Badshahi from "../f480089fafa42cc53b36765ea425599d.jpg";
import Girl from "../smiling-girl-avatar_102172-32.jpg";
const useStyles = makeStyles((theme) => ({
  bigCircle: {
    height: "140px",
    width: "140px",
    borderRadius: "70px",
    //  backgroundColor: "blue",
    //  position: "relative",
    marginLeft: "70px",
    backgroundColor: "#33abb8",
    position: "absolute",
  },
  smallCircle: {
    height: "100px",
    width: "100px",
    borderRadius: "50px",
    //  backgroundColor: "blue",
    // position: "relative",
    marginLeft: "50px",
    backgroundColor: "#33abb8",
    position: "absolute",
  },
}));

const Aboutus = () => {
  const classes = useStyles();

  return (
    <div style={{ marginTop: "101px", backgroundColor: "white" }}>
      <Grid container>
        <Grid
          item
          xs={12}
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 50,
            height: "400px",
            //backgroundColor: "#339ba5",
            backgroundImage: "linear-gradient(#339ba5, white)",

            borderBottomRightRadius: "500px",
            // borderTopLeftRadius: "700px",
            borderBottomLeftRadius: "500px",
            // borderTopRightRadius: "300px",
          }}
        >
          <h1 style={{ marginTop: "100px" }}> About Us</h1>
        </Grid>

        <Grid
          item
          xs={12}
          style={{
            backgroundColor: "white",
            textAlign: "center",
            height: "400px",
            color: "#339ba5",
            marginTop: "30px",
          }}
        >
          <div
            className={classes.bigCircle}
            style={{ marginLeft: "10px" }}
          ></div>

          <div
            className={classes.smallCircle}
            style={{ marginLeft: "140px", marginTop: "80px" }}
          ></div>

          <h1 style={{ fontSize: 50 }}>Our History</h1>
          <p
            style={{
              fontSize: 30,
              position: "absolute",
              left: "14%",
              right: "10%",
            }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            ea omnis consequuntur ipsam! Quam dolorum ullam, sed saepe
            voluptatibus ut earum quod assumenda reprehenderit beatae adipisci
            porro, in asperiores quaerat! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Voluptatem quam numquam nulla quaerat
            voluptates voluptatibus excepturi similique molestias itaque
            nesciunt temporibus vitae deserunt, optio, minima reiciendis,
            dolores hic qui magni. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Officiis exercitationem soluta laboriosam et,
            laudantium rem id eos! Dolores blanditiis nobis molestias voluptatum
            laborum aliquam minus, alias sint ut illo. Sed?
          </p>
        </Grid>
      </Grid>
      <Grid container>
        <div
          className={classes.bigCircle}
          style={{ right: "0px", top: "1000px" }}
        ></div>
        <div className={classes.smallCircle} style={{ right: "120px" }}></div>
        <Grid
          item
          xs={12}
          style={{
            backgroundColor: "white",
            textAlign: "center",
            height: "200px",
            color: "#339ba5",
            marginTop: "30px",
          }}
        >
          <h1 style={{ fontSize: 50 }}>Our Mission</h1>
        </Grid>
        <Grid item xs={6} style={{ paddingLeft: "7%" }}>
          <img
            src={Badshahi}
            width="500px"
            height="500px"
            alt="cover"
            style={{ borderRadius: "300px" }}
          />
        </Grid>
        <Grid
          item
          xs={6}
          style={{ marginLeft: "-10px", fontSize: 30, color: "#339ba5" }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            perspiciatis numquam minus aliquid! Repellat quod voluptatem eos
            harum eligendi illo at repudiandae! Vero ipsa dolore, laborum
            consequatur et id ad? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsum cumque eius, similique neque quo,
            perspiciatis repudiandae exercitationem minus reprehenderit quis
            fugit itaque officiis corrupti consectetur optio et, animi est
            praesentium. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Vitae harum maiores consequuntur eum dolor nihil saepe
            voluptate ab fuga modi dolore molestias animi sequi et quaerat
            voluptatibus, quasi soluta sunt?
          </p>
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          backgroundColor: "#339ba5",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <Grid
          item
          xs={12}
          style={{
            textAlign: "center",
            //   height: "200px",
            color: "white",
            marginTop: "30px",
          }}
        >
          <h1 style={{ fontSize: 50 }}>Meet Our Team</h1>
        </Grid>
        <Grid
          item
          xs={3}
          style={{
            backgroundColor: "#339ba5",
            marginLeft: "200px",
            padding: "2px",
          }}
        >
          <img
            src={Girl}
            width="150px"
            height="150px"
            alt="cover"
            style={{ borderRadius: "300px", marginLeft: "30%" }}
          />
          <p style={{ color: "white", textAlign: "center" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut unde
            maxime, vero sint ducimus ipsa ab minus quia optio incidunt! Debitis
            aliquid minima veniam, vero assumenda est neque culpa quis. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Ullam sit
            officiis eius expedita libero natus laudantium pariatur sint ut id,
            fugit atque. Animi aut aliquid natus assumenda atque necessitatibus?
            Doloremque.
          </p>
        </Grid>
        <Grid
          item
          xs={3}
          style={{
            backgroundColor: "#339ba5",
            marginLeft: "4px",
            padding: "2px",
          }}
        >
          <img
            src={Girl}
            width="150px"
            height="150px"
            alt="cover"
            style={{ borderRadius: "300px", marginLeft: "30%" }}
          />

          <p style={{ color: "white", textAlign: "center" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut unde
            maxime, vero sint ducimus ipsa ab minus quia optio incidunt! Debitis
            aliquid minima veniam, vero assumenda est neque culpa quis. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            molestiae? Sapiente in ullam architecto officiis accusamus, eos est
            nobis impedit commodi expedita animi quia quos incidunt, eum,
            explicabo laboriosam voluptates.
          </p>
        </Grid>
        <Grid
          item
          xs={3}
          style={{
            backgroundColor: "#339ba5",
            marginLeft: "4px",
            padding: "2px",
          }}
        >
          <img
            src={Girl}
            width="150px"
            height="150px"
            alt="cover"
            style={{ borderRadius: "300px", marginLeft: "30%" }}
          />
          <p style={{ color: "white", textAlign: "center" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut unde
            maxime, vero sint ducimus ipsa ab minus quia optio incidunt! Debitis
            aliquid minima veniam, vero assumenda est neque culpa quis. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            nostrum. Earum, consectetur voluptatem doloremque dolorem veniam
            temporibus repudiandae, a itaque non deleniti eaque maxime aliquam.
            Temporibus mollitia iste facilis veritatis.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};
export default Aboutus;
