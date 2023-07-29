// DEPENDENCIES
import React, { useState } from "react";
import axios from "axios";
import "./Register.scss";

export default function Register() {
  const [error, setError] = useState("");
  const REGISTER_URL = "http://localhost:8080/api/users/register";


// // http://localhost:8080/api/users/register
  const handleRegister = async (event) => {
    event.preventDefault();

     // POST REQUEST TO LOGIN WITH EMAIL AND PASSWORD
     try {
      const response = await axios.post(REGISTER_URL, {
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value,
      });

      // HANDLE SUCCESSFUL REGISTRATION
      console.log(response);
      setError("");
    } catch (error) {
      setError(`Login failed: ${error}`);
    }
  }

  return (
    <section className="register-page">
      <form className="register" onSubmit={handleRegister}>
        <h1 className="register__title">Register</h1>

        <label>Name:</label>
        <input type="text" name="name" />

        <label>Email:</label>
        <input type="text" name="email" />

        <label>Password:</label>
        <input type="password" name="password" />

        {error && <div className="register__message">{error}</div>}

        <button className="register__button">Register</button>
      </form>
    </section>
  );
}
