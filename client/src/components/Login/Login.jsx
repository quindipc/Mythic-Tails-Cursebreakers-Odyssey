import React, {useState} from "react";
import axios from "axios";
import "./Login.scss";
import { useState } from "react";

export default function Login() {
    const [error, setError] = useState();
    const LOGIN_URL = "   // http://localhost:8080/api/users/login"


    // http://localhost:8080/api/users/register
    // http://localhost:8080/api/users/login
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // POST REQUEST TO LOGIN WITH EMAIL AND PASSWORD
      axios
        .post({LOGIN_URL}, {
          username: event.target.email.value,
          password: event.target.password.value,
        })
        .then((response) => {
          console.log(response);
  
          // store the token from the server
          sessionStorage.authToken = response.data.token;
          setError(undefined);
          setIsUserLoggedIn(true);
        })
        .catch((error) => {
          setError(`Login failed: ${error}`);
        });
    };
  

    // AFTER LOGIN -- PLAYER WILL CONTINUE WHERE THEY LEFT OFF
 
    return (
    <section className="login-page">
      <form className="login" onSubmit={handleSubmit}>
        <h1 className="login__title">Log in</h1>

        <label>Email:</label>
        <input type="text" name="Email" />

        <label>Password:</label>
        <input type="password" name="password" />

        {error && <div className="login__message">{error}</div>}

        <button className="login__button">Log in</button>
      </form>
    </section>
  );
}
