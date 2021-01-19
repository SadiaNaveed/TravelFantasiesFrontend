import Axios from "axios";
import React, { Component } from "react";
import {
  Grid,
  Button,
  Typography,
  Box,
  makeStyles,
  CssBaseline,
} from "@material-ui/core";
import { TextField } from "@material-ui/core";
import userService from "../../services/UserService";
import guide from "../../Asserts/backgroundLogin.jpeg";
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
  link: {
    color: "#339ba5",
    paddingRight: "2rem",
    fontFamily: "Times New Roman",
    //   fontDisplay: "swap",
    fontStyle: "italic",
    fontSize: 24,
    fontWeight: 700,
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [guide, setGuide] = React.useState(false);
  return (
    // <div className={classes.container}>
    //   <div className={classes.child}>
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
    //           .login(email, password)
    //           .then((data) => {
    //             console.log(data);
    //             window.location.href = "/";
    //           })
    //           .catch((err) => {
    //             console.log(err);
    //           });
    //       }}
    //     >
    //       Login
    //     </Button>
    //   </div>
    <div>
      <div
        style={{
          width: "40%",
          margin: "30px auto",

          borderRadius: "20px",
          padding: "20px",
          //   marginLeft: "700px",
        }}
      >
        <div>
          <h3 style={{ marginLeft: "200px" }}>Sign In</h3>

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

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

 <div className="form-group">
            <label>
              <input type="checkbox"
                checked={guide}
                
                onChange={() => setGuide(!guide)}
              />
                Login as Guide
            </label>
          </div>
<Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              if(guide)
              {
                userService
                  .loginGuide(email, password)
                  .then((data) => {
                    console.log(data);
                    window.location.href = "/";
                  })
                  .catch((err) => {
                    console.log(err);
                  }); 
              }
              else
              {
                userService
                  .login(email, password)
                  .then((data) => {
                    console.log(data);
                    window.location.href = "/";
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            }}
          >



//           <Button
//             variant="contained"
//             color="primary"
//             onClick={(e) => {
//               userService
//                 .login(email, password)
//                 .then((data) => {
//                   console.log(data);
//                   window.location.href = "/";
//                 })
//                 .catch((err) => {
//                   console.log(err);
//                   toast.error(err.response.data, {
//                     position: toast.POSITION.TOP_LEFT,
//                   });
//                 });
//             }}
//           >
            Login
          </Button>
          <p style={{ marginTop: "20px" }}>
            Doesn't have an account?
            <a href="/sign-up">Register Yourself Here</a>
          </p>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </div>
    </div>
    /* </div> */
  );
};

export default Login;

// const useStyles = makeStyles((theme) => ({

// export default class Login extends Component {
//   state = {
//     email: "",
//     password: "",
//   };

//   submit = () => {
//     Axios.post("http://localhost:4000/api/users/login", {
//       email: this.state.email,
//       password: this.state.password,
//       role: "user",
//     })
//       .then((res) => {
//         console.log(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   render() {
//     return (
//       <div
//         style={{
//           width: "40%",
//           margin: "30px auto",
//           backgroundColor: "white",
//           borderRadius: "20px",
//           padding: "20px",
//         }}
//       >
//         <div>
//           <h3>Sign In</h3>

//           <div className="form-group">
//             <label>Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Enter email"
//               value={this.state.email}
//               onChange={(event) => this.setState({ email: event.target.value })}
//             />
//           </div>

//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Enter password"
//               value={this.state.password}
//               onChange={(event) =>
//                 this.setState({ password: event.target.value })
//               }
//             />
//           </div>

//           <div className="form-group">
//             <div className="custom-control custom-checkbox">
//               <input
//                 type="checkbox"
//                 className="custom-control-input"
//                 id="customCheck1"
//               />
//               <label className="custom-control-label" htmlFor="customCheck1">
//                 Remember me
//               </label>
//             </div>
//           </div>

//           <button className="btn btn-primary btn-block" onClick={this.submit}>
//             Submit
//           </button>
//           <p className="forgot-password text-right">
//             Forgot <a href="#">password?</a>
//           </p>
//         </div>
//       </div>
//     );
//   }
// }
