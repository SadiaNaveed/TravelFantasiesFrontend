// import React, { Component } from "react";
// import Axios from 'axios'

// export default class SignUp extends Component {

//     state = {
//         name:'',
//         email:'',
//         password: '',
//         role: ''
//     }

//     submit = () =>{

//         console.log("submit")

//         Axios.post("http://localhost:4000/api/users/signup-user", {
//             email: this.state.email,
//             name: this.state.name,
//             password: this.state.password

//         }).then(res => {

//             console.log(res.data)

//         }).
//         catch(err => {console.log(err)})

//     }

//     render() {
//         return (

//         );
//     }
// }
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import userService from "../../services/UserService";
import { toast } from "react-toastify";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
  },
  child: {
    width: "60%",
  },
}));
const Signup = (props) => {
  const classes = useStyles();
  const [email, setEmail] = React.useState("usman.akram@gmail.com");
  const [password, setPassword] = React.useState("usman");
  const [name, setName] = React.useState("usman");
  return (
    // <div className={classes.container}>
    //   <div className={classes.child}>
    //     <TextField
    //       label="Name"
    //       fullWidth
    //       value={name}
    //       onChange={(e) => {
    //         setName(e.target.value);
    //       }}
    //     />{" "}
    //     <br />
    //     <TextField
    //       label="email"
    //       fullWidth
    //       value={email}
    //       onChange={(e) => {
    //         setEmail(e.target.value);
    //       }}
    //     />{" "}
    //     <br />
    //     <TextField
    //       label="password"
    //       type="password"
    //       fullWidth
    //       value={password}
    //       onChange={(e) => {
    //         setPassword(e.target.value);
    //       }}
    //     />{" "}
    //     <br />
    //     <Button
    //       variant="contained"
    //       color="primary"
    //       onClick={(e) => {
    //         userService
    //           .register(name, email, password)
    //           .then((data) => {
    //             console.log(data);
    //             props.history.push("/login");
    //           })
    //           .catch((err) => {
    //             console.log(err);
    //             toast.error(err.response.data, {
    //               position: toast.POSITION.TOP_LEFT,
    //             });
    //           });
    //       }}
    //     >
    //       Register
    //     </Button>
    //   </div>
    // </div>
    <div
      style={{
        width: "40%",
        margin: "30px auto",
        backgroundColor: "white",
        borderRadius: "20px",
        padding: "20px",
      }}
    >
      <div>
        <h3 style={{ marginLeft: "200px" }}>Sign Up</h3>

        <div className="form-group">
          <label>Your Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Your name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            userService
              .register(name, email, password)
              .then((data) => {
                console.log(data);
                props.history.push("/login");
              })
              .catch((err) => {
                console.log(err);
                toast.error(err.response.data, {
                  position: toast.POSITION.TOP_LEFT,
                });
              });
          }}
        >
          Register
        </Button>

        <p className="forgot-password text-right">
          Already registered <a href="/login">sign in?</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
