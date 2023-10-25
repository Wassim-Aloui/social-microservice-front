import "./login.css";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authContext from "../../context/authContext";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const apiUrl = "http://localhost:8086/api/v1/users/login";
  const navigate = useNavigate(); // Access the navigate function
  const { auth, setAuth, logged, setLogged } = useContext(authContext);

  const login = (e) => {
    e.preventDefault();
    const requestData = {
      email: email, // Replace with the actual email
      password: password, // Replace with the actual password
    };

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers if needed, e.g., authorization headers
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (!response.ok) {
          window.alert("Email Or Password is incorrect");
        }
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.verified) {
          setAuth(data);
          setLogged(true);
          navigate("/");
        } else {
          window.alert("Email not verified");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              value={email}
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button className="btn btn-primary" onClick={(e) => login(e)}>
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
};
