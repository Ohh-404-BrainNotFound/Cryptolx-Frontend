import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <div>
                
                <div className="leftbackground"></div>
                <div className="rightdivision">
                    <div className="forborder">
                <form>
                <h3 className="signup">Sign Up</h3>
                <p className="paragraph">Enter your credentials to get started in the world of cryptocurrency</p>
                

                <div className="form-group">
                    <label className="lab">Your e-mail</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label className="lab">User Type</label>
                    <input type="text" className="form-control" placeholder="User Type" />
                </div>

                <div className="form-group">
                    <label className="lab">Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                    <br></br>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                
                <p className="forgot-password text-right">
                <br></br>
                    Already registered?  <a  className="underline" href="/sign-in" >sign in</a>
                </p>
            </form>
            </div>
                </div>
            </div>
        );
    }
}