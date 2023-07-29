// DEPENDENCIES
import React, { useState } from "react";
import axios from "axios";
import "./Login.scss";

export default function Login() {
  const [error, setError] = useState("");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const LOGIN_URL = "http://localhost:8080/api/users/login";

  // http://localhost:8080/api/users/login
  const handleLogin = async (event) => {
    event.preventDefault();
    
    // POST REQUEST TO LOGIN WITH EMAIL AND PASSWORD
    try {
      const response = await axios.post(LOGIN_URL, {
        email: event.target.email.value,
        password: event.target.password.value,
      });

         // STORE TOKEN FROM SERVER
      console.log(response);

      sessionStorage.authToken = response.data.accessToken;
      setError("");
      setIsUserLoggedIn(true);

       // SAVE PROGRESS
      // saveUserProgress();
    } catch (error) {
      setError(`Login failed: ${error}`);
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
