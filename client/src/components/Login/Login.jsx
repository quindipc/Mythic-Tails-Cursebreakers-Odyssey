// DEPENDENCIES
import React, { useState } from "react";
import axios from "axios";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [error, setError] = useState("");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const BASE_URL = "http://localhost:8080/api/";

  const navigate = useNavigate()
  const handleLogin = async (event) => {
    event.preventDefault();
    
    // POST REQUEST TO LOGIN WITH EMAIL AND PASSWORD
    try {
      const response = await axios.post(BASE_URL + "users/login", {
        email: event.target.email.value,
        password: event.target.password.value,
      });

      // HANDLE SUCCESSFUL LOGIN
      console.log(response);
      
      // STORE TOKEN FROM SERVER
      sessionStorage.authToken = response.data.accessToken;
      setError("");
      setIsUserLoggedIn(true);

      // RESET
      event.target.reset();

      // REDIRECT TO PROFILE or PLAY GAME (?)
      navigate("/play-game")

       // SAVE PROGRESS
      // saveUserProgress(); -- need to add to save progress
    } catch (error) {
      setError(`Invalid email or password. Please try again.`);
    }
  };


  return (
    <section className="login-page">
      <form className="login" onSubmit={handleLogin}>
        <h1 className="login__title">Log in</h1>

        <label>Email:</label>
        <input type="text" name="email" />

        <label>Password:</label>
        <input type="password" name="password" />

        {error && <div className="login__message">{error}</div>}

        <button className="login__button">Log in</button>
      </form>
    </section>
  );
}
