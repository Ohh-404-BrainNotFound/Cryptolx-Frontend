import React from "react";
import "./Register.scss"

const RegisterComponent = () => {
  return (
    <div>
        
      <div className="left"
      style={{ backgroundImage: `url('/images/signup.jpg')` }}
      ></div>
      <div className="right">
        <div className="empty">
          <form>
            <h3 className="t">Sign Up</h3>
            <p className="f">
              Enter your credentials to get started in the world of
              cryptocurrency
            </p>

            <div className="form-group">
              <label className="lab">Your e-mail</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label className="lab">User Type</label>
              <input
                type="text"
                className="form-control"
                placeholder="User Type"
              />
            </div>

            <div className="form-group">
              <label className="lab">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <br></br>
            <button type="submit" className="btn btn-primary btn-block">
              Sign Up
            </button>

            <p className="forgot-password text-right">
              <br></br>
              Already registered?
              <a className="underline" href="/sign-in">
                sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
