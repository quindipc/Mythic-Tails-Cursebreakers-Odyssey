// DEPENDENCIES
import React, { useState } from "react";
import axios from "axios";
import "./Login.scss";

export default function Login() {
  const [error, setError] = useState("");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const LOGIN_URL = "http://localhost:8080/api/users/login";

  // http://localhost:8080/api/users/register
  // http://localhost:8080/api/users/login

  const handleSubmit = (event) => {
    event.preventDefault();

    // POST REQUEST TO LOGIN WITH EMAIL AND PASSWORD
    axios
      .post(LOGIN_URL, {
        email: event.target.email.value,
        password: event.target.password.value,
      })
      .then((response) => {
        console.log(response);

        // STORE TOKEN FROM SERVER
        sessionStorage.authToken = response.data.accessToken;
        setError(undefined);
        setIsUserLoggedIn(true);

        // SAVE PROGRESS
        saveUserProgress();
      })
      .catch((error) => {
        setError(`Login failed: ${error}`);
      });
  };

  // TODO -- NEED TO EDIT BACKEND AGAIN....
// SAVE USER PROGRESS 
  const saveUserProgress = () => {
    axios.post()
    // save scenario stopped at

    // headers

    // catch error 

  }

  return (
    <section className="login-page">
      <form className="login" onSubmit={handleSubmit}>
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
