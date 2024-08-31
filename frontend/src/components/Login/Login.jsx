import React, { useState } from "react";
import "./Login.css";
import { assets } from "../../assets/assets";

const Login = ({ setLogin }) => {
  const [current, setCurrent] = useState("Sign Up");
  return (
    <div className="login">
      <form action="" className="login-container">
        <div className="login-title">
          <h2>{current}</h2>
          <img onClick={() => setLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-inputs">
          {current === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}

          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Your password" required />
        </div>
        <button>{current === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-condition">
          <input type="checkbox" required />
          <p>By continugin i agree to the terms and conditions</p>
        </div>
        {current === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrent("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an accoutn?
            <span onClick={() => setCurrent("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
