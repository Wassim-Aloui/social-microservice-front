import "../Login/login.css";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authContext from "../../context/authContext";

export const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const apiUrl = "http://localhost:8086/api/v1/users/register";
  const navigate = useNavigate(); // Access the navigate function
  const { auth, setAuth, logged, setLogged } = useContext(authContext);

  const login = (e) => {
    e.preventDefault();
    const requestData = {
      email: email, // Replace with the actual email
      password: password, // Replace with the actual password
      name: name,
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
        console.log(response);
        if (!response.ok) {
          console.log(response);
          throw new Error("Network response was not ok");
        }
        // if (response.status === 201) navigate("/login");

        return response.json();
      })
      .then((data) => {
        console.log("Newly created user:", data);
        navigate("/login");
      });
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Register Now</h3>
          <div className="form-group mt-3">
            <label>Name</label>
            <input
              value={name}
              className="form-control mt-1"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
