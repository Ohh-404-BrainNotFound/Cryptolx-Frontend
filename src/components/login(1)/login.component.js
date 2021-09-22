import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <div>
               <div className="forleftbackground">
               </div>
               <div className="forrightdiv">
                   <div className="forborder">
                       <h3 className="login">log in.</h3>
                       <form>
                       <p className="paragraph">Enter your credentials to get started in the world of cryptocurrency</p>
                

                <div className="form-group">
                    <label className="lab">Your e-mail</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label className="lab">Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                    <br></br>
                <button type="submit" className="btn btn-primary btn-block">Log in</button>
                <p className="forgot-password text-right">
                    Don't have an Account? <a  className="underline" href="/sign-up" >sign up</a>
                </p>
                       </form>
                       </div>
               </div>

            </div>
        );
    }
}