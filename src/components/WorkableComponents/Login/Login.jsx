import React from "react";
import "./Login.scss"

const LoginComponent = () => {
  return (
    <div>
      <div className="an1" 
        style={{ backgroundImage: `url('/images/login.jpg')` }}
      ></div>
      <div className="an">
        <div className="empty">
          <h3 className="tt">log in.</h3>
          <form>
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
              <label className="lab">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <br></br>
            <button type="submit" className="btn btn-primary btn-block">
              Log in
            </button>
            <p className="forgot-password text-right">
              Don't have an Account?
              <a className="underline" href="/sign-up">
                sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
