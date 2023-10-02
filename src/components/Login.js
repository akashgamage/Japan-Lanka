import React from "react";
import "./Login.css"; 
import loginImage from "./images/Login.png";

function Login() {
  return (
    <div className="login-container">
      
        <img className="img" src={loginImage} alt="Login" />
      
      <div className="login-right">
        <h1>Login</h1>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="studentId">Student ID</label>
            <input type="text" id="studentId" name="studentId" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="forgot-password">
            {/* eslint-disable jsx-a11y/anchor-is-valid */}
          <a href="#">Forgot password?</a>
        </div>
        <div className="signup-link">
          <p>Don't have an account? <a href="#">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
