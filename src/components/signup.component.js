import React, { Component } from "react";
import Axios from 'axios'

export default class SignUp extends Component {

    state = {
        name:'',
        email:'',
        password: '',
        role: ''
    }

    submit = () =>{

        console.log("submit")

        Axios.post("http://localhost:4000/api/users/signup-user", {
            email: this.state.email,
            name: this.state.name,
            password: this.state.password

        }).then(res => {

            console.log(res.data)

        }).
        catch(err => {console.log(err)})
      
    }

    render() {
        return (
            <div style={{width:"40%", margin:"30px auto", backgroundColor:'white',borderRadius:'20px', padding:'20px'}}>
            
            <div>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" className="form-control" 
                    placeholder="Your name" 
                    value={this.state.name}
                    onChange={(event)=>this.setState({name: event.target.value})}
                    />
                </div>

        
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" 
                    placeholder="Enter email" 
                    value={this.state.email}
                    onChange={(event)=>this.setState({email: event.target.value})}
                   
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" 
                    placeholder="Enter password" 
                    value={this.state.password}
                    onChange={(event)=>this.setState({password: event.target.value})}
                   
                    />
                </div>

                <button  className="btn btn-primary btn-block"
                    onClick={this.submit}
                >Sign Up</button>

                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </div>
            </div>
        );
    }
}