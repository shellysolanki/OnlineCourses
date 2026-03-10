
import React, { useState } from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name==="admin" && email==="admin@gmail.com" && password==="admin@123"){
      alert("Admin Login successful")
      navigate("/admin")
    }
    else{
       const userData = { name, email, password };
       localStorage.setItem("user", JSON.stringify(userData));
       alert("Login successful! Data saved in localStorage.");
       navigate("/user")
    }

  };

  return (
    <div className="login-container">
        <br/>
      <h2 className="login-title">Login to Courses</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;